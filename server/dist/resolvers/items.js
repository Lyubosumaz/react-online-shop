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
let ItemsResolver = class ItemsResolver {
    items({ em }) {
        return em.find(Items_1.Items, {});
    }
    item(id, { em }) {
        return em.findOne(Items_1.Items, { id });
    }
    createItem(title, { em }) {
        return __awaiter(this, void 0, void 0, function* () {
            const post = em.create(Items_1.Items, { title });
            yield em.persistAndFlush(post);
            return post;
        });
    }
    updateItem(id, title, { em }) {
        return __awaiter(this, void 0, void 0, function* () {
            const post = yield em.findOne(Items_1.Items, { id });
            if (!post) {
                return null;
            }
            if (typeof title !== 'undefined') {
                post.title = title;
                yield em.persistAndFlush(post);
            }
            return post;
        });
    }
    deleteItem(id, { em }) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield em.nativeDelete(Items_1.Items, { id });
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
    __param(0, type_graphql_1.Ctx()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], ItemsResolver.prototype, "items", null);
__decorate([
    type_graphql_1.Query(() => Items_1.Items, { nullable: true }),
    __param(0, type_graphql_1.Arg('id', () => type_graphql_1.Int)),
    __param(1, type_graphql_1.Ctx()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Object]),
    __metadata("design:returntype", Promise)
], ItemsResolver.prototype, "item", null);
__decorate([
    type_graphql_1.Mutation(() => Items_1.Items),
    __param(0, type_graphql_1.Arg('title', () => String)),
    __param(1, type_graphql_1.Ctx()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], ItemsResolver.prototype, "createItem", null);
__decorate([
    type_graphql_1.Mutation(() => Items_1.Items, { nullable: true }),
    __param(0, type_graphql_1.Arg('id', () => type_graphql_1.Int)),
    __param(1, type_graphql_1.Arg('title', () => String, { nullable: true })),
    __param(2, type_graphql_1.Ctx()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, String, Object]),
    __metadata("design:returntype", Promise)
], ItemsResolver.prototype, "updateItem", null);
__decorate([
    type_graphql_1.Mutation(() => Boolean),
    __param(0, type_graphql_1.Arg('id', () => type_graphql_1.Int)),
    __param(1, type_graphql_1.Ctx()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Object]),
    __metadata("design:returntype", Promise)
], ItemsResolver.prototype, "deleteItem", null);
ItemsResolver = __decorate([
    type_graphql_1.Resolver()
], ItemsResolver);
exports.ItemsResolver = ItemsResolver;
//# sourceMappingURL=items.js.map