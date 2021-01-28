"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ItemResolver = void 0;
const type_graphql_1 = require("type-graphql");
const typeorm_1 = require("typeorm");
const Item_1 = require("../entities/Item");
const isAuth_1 = require("../middleware/isAuth");
let ItemsInput = class ItemsInput {
};
__decorate([
    type_graphql_1.Field(),
    __metadata("design:type", String)
], ItemsInput.prototype, "title", void 0);
__decorate([
    type_graphql_1.Field(),
    __metadata("design:type", String)
], ItemsInput.prototype, "description", void 0);
ItemsInput = __decorate([
    type_graphql_1.InputType()
], ItemsInput);
let PaginationItems = class PaginationItems {
};
__decorate([
    type_graphql_1.Field(() => [Item_1.Item]),
    __metadata("design:type", Array)
], PaginationItems.prototype, "item", void 0);
__decorate([
    type_graphql_1.Field(),
    __metadata("design:type", Boolean)
], PaginationItems.prototype, "hasMore", void 0);
PaginationItems = __decorate([
    type_graphql_1.ObjectType()
], PaginationItems);
let ItemResolver = class ItemResolver {
    textSnippet(root) {
        let newDescription = root.description;
        const breakNum = 47;
        if (newDescription.length > breakNum) {
            let cutDescription = newDescription.slice(0, breakNum).trim();
            cutDescription = cutDescription.substr(0, cutDescription.length - 1) + cutDescription[cutDescription.length - 1].replace(/[,.\s]/gm, '');
            newDescription = cutDescription;
        }
        return newDescription.concat('...');
    }
    rate(itemId, value, { req }) {
        return __awaiter(this, void 0, void 0, function* () {
            const isUpVote = value !== -1;
            const realValue = isUpVote ? 1 : -1;
            const { userId } = req.session;
            try {
                yield typeorm_1.getConnection().query(`
                START TRANSACTION;
                
                insert into stars ("userId", "itemId", value)
                values (${userId},${itemId},${realValue});
                
                update item
                set rating = rating + ${realValue}
                where id = ${itemId};
                
                COMMIT;
                `);
            }
            catch (err) {
                console.error('Transaction failed');
            }
            return true;
        });
    }
    items(limit, cursor) {
        return __awaiter(this, void 0, void 0, function* () {
            const realLimit = Math.min(50, limit);
            const realLimitPlusOne = realLimit + 1;
            const replacements = [realLimitPlusOne];
            if (cursor) {
                replacements.push(new Date(parseInt(cursor)));
            }
            const items = yield typeorm_1.getConnection().query(`
            select i.*,
            json_build_object(
                'id', u.id,
                'username', u.username,
                'email', u.email,
                'createdAt', u."createdAt",
                'updatedAt', u."updatedAt"
                ) creator
            from item i
            inner join public.user u on u.id = i."creatorId"
            ${cursor ? `where i."createdAt" < $2` : ''}
            order by i."createdAt" DESC
            limit $1

            `, replacements);
            return {
                item: items.slice(0, realLimit),
                hasMore: items.length === realLimitPlusOne,
            };
        });
    }
    item(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return Item_1.Item.findOne(id);
        });
    }
    createItem(input, { req }) {
        return __awaiter(this, void 0, void 0, function* () {
            return Item_1.Item.create(Object.assign(Object.assign({}, input), { creatorId: req.session.userId })).save();
        });
    }
    updateItem(id, title) {
        return __awaiter(this, void 0, void 0, function* () {
            const item = yield Item_1.Item.findOne(id);
            if (!item) {
                return null;
            }
            if (typeof title !== 'undefined') {
                yield Item_1.Item.update({ id }, { title });
            }
            return item;
        });
    }
    deleteItem(id) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield Item_1.Item.delete(id);
                return true;
            }
            catch (_a) {
                return false;
            }
        });
    }
};
__decorate([
    type_graphql_1.FieldResolver(() => String),
    __param(0, type_graphql_1.Root()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Item_1.Item]),
    __metadata("design:returntype", void 0)
], ItemResolver.prototype, "textSnippet", null);
__decorate([
    type_graphql_1.Mutation(() => Boolean),
    type_graphql_1.UseMiddleware(isAuth_1.isAuth),
    __param(0, type_graphql_1.Arg('itemId', () => type_graphql_1.Int)),
    __param(1, type_graphql_1.Arg('value', () => type_graphql_1.Int)),
    __param(2, type_graphql_1.Ctx()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Number, Object]),
    __metadata("design:returntype", Promise)
], ItemResolver.prototype, "rate", null);
__decorate([
    type_graphql_1.Query(() => PaginationItems),
    __param(0, type_graphql_1.Arg('limit', () => type_graphql_1.Int)),
    __param(1, type_graphql_1.Arg('cursor', () => String, { nullable: true })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Object]),
    __metadata("design:returntype", Promise)
], ItemResolver.prototype, "items", null);
__decorate([
    type_graphql_1.Query(() => Item_1.Item, { nullable: true }),
    __param(0, type_graphql_1.Arg('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], ItemResolver.prototype, "item", null);
__decorate([
    type_graphql_1.Mutation(() => Item_1.Item),
    type_graphql_1.UseMiddleware(isAuth_1.isAuth),
    __param(0, type_graphql_1.Arg('input')),
    __param(1, type_graphql_1.Ctx()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [ItemsInput, Object]),
    __metadata("design:returntype", Promise)
], ItemResolver.prototype, "createItem", null);
__decorate([
    type_graphql_1.Mutation(() => Item_1.Item, { nullable: true }),
    __param(0, type_graphql_1.Arg('id')),
    __param(1, type_graphql_1.Arg('title', () => String, { nullable: true })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, String]),
    __metadata("design:returntype", Promise)
], ItemResolver.prototype, "updateItem", null);
__decorate([
    type_graphql_1.Mutation(() => Boolean),
    __param(0, type_graphql_1.Arg('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], ItemResolver.prototype, "deleteItem", null);
ItemResolver = __decorate([
    type_graphql_1.Resolver(Item_1.Item)
], ItemResolver);
exports.ItemResolver = ItemResolver;
//# sourceMappingURL=item.js.map