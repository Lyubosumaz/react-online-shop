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
exports.ItemsResolver = void 0;
const Items_1 = require("../entities/Items");
const type_graphql_1 = require("type-graphql");
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
let ItemsResolver = class ItemsResolver {
    items() {
        return __awaiter(this, void 0, void 0, function* () {
            return Items_1.Items.find();
        });
    }
    item(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return Items_1.Items.findOne(id);
        });
    }
    createItem(input, { req }) {
        return __awaiter(this, void 0, void 0, function* () {
            if (!req.session.userId) {
                throw new Error('not authenticated');
            }
            return Items_1.Items.create(Object.assign(Object.assign({}, input), { customerId: req.session.userId })).save();
        });
    }
    updateItem(id, title) {
        return __awaiter(this, void 0, void 0, function* () {
            const item = yield Items_1.Items.findOne(id);
            if (!item) {
                return null;
            }
            if (typeof title !== 'undefined') {
                yield Items_1.Items.update({ id }, { title });
            }
            return item;
        });
    }
    deleteItem(id) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield Items_1.Items.delete(id);
                return true;
            }
            catch (_a) {
                return false;
            }
        });
    }
};
__decorate([
    type_graphql_1.Query(() => [Items_1.Items]),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], ItemsResolver.prototype, "items", null);
__decorate([
    type_graphql_1.Query(() => Items_1.Items, { nullable: true }),
    __param(0, type_graphql_1.Arg('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], ItemsResolver.prototype, "item", null);
__decorate([
    type_graphql_1.Mutation(() => Items_1.Items),
    __param(0, type_graphql_1.Arg('input')), __param(1, type_graphql_1.Ctx()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [ItemsInput, Object]),
    __metadata("design:returntype", Promise)
], ItemsResolver.prototype, "createItem", null);
__decorate([
    type_graphql_1.Mutation(() => Items_1.Items, { nullable: true }),
    __param(0, type_graphql_1.Arg('id')), __param(1, type_graphql_1.Arg('title', () => String, { nullable: true })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, String]),
    __metadata("design:returntype", Promise)
], ItemsResolver.prototype, "updateItem", null);
__decorate([
    type_graphql_1.Mutation(() => Boolean),
    __param(0, type_graphql_1.Arg('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], ItemsResolver.prototype, "deleteItem", null);
ItemsResolver = __decorate([
    type_graphql_1.Resolver()
], ItemsResolver);
exports.ItemsResolver = ItemsResolver;
//# sourceMappingURL=items.js.map