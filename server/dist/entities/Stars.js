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
Object.defineProperty(exports, "__esModule", { value: true });
exports.Stars = void 0;
const type_graphql_1 = require("type-graphql");
const typeorm_1 = require("typeorm");
const Item_1 = require("./Item");
const User_1 = require("./User");
let Stars = class Stars extends typeorm_1.BaseEntity {
};
__decorate([
    type_graphql_1.Field(),
    typeorm_1.Column({ type: 'int' }),
    __metadata("design:type", Number)
], Stars.prototype, "value", void 0);
__decorate([
    type_graphql_1.Field(),
    typeorm_1.PrimaryColumn(),
    __metadata("design:type", Number)
], Stars.prototype, "userId", void 0);
__decorate([
    type_graphql_1.Field(() => User_1.User),
    typeorm_1.ManyToOne(() => User_1.User, (user) => user.stars),
    __metadata("design:type", User_1.User)
], Stars.prototype, "user", void 0);
__decorate([
    type_graphql_1.Field(),
    typeorm_1.Column(),
    __metadata("design:type", Number)
], Stars.prototype, "postId", void 0);
__decorate([
    type_graphql_1.Field(() => Item_1.Item),
    typeorm_1.ManyToOne(() => Item_1.Item, (item) => item.stars),
    __metadata("design:type", Item_1.Item)
], Stars.prototype, "item", void 0);
Stars = __decorate([
    type_graphql_1.ObjectType(),
    typeorm_1.Entity()
], Stars);
exports.Stars = Stars;
//# sourceMappingURL=Stars.js.map