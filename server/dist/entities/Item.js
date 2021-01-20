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
exports.Item = void 0;
const type_graphql_1 = require("type-graphql");
const typeorm_1 = require("typeorm");
const Stars_1 = require("./Stars");
const User_1 = require("./User");
let Item = class Item extends typeorm_1.BaseEntity {
};
__decorate([
    type_graphql_1.Field(() => type_graphql_1.Int),
    typeorm_1.PrimaryGeneratedColumn(),
    __metadata("design:type", Number)
], Item.prototype, "id", void 0);
__decorate([
    type_graphql_1.Field(),
    typeorm_1.Column(),
    __metadata("design:type", String)
], Item.prototype, "title", void 0);
__decorate([
    type_graphql_1.Field(),
    typeorm_1.Column(),
    __metadata("design:type", String)
], Item.prototype, "description", void 0);
__decorate([
    type_graphql_1.Field(),
    typeorm_1.Column({ type: 'int', default: 1 }),
    __metadata("design:type", Number)
], Item.prototype, "price", void 0);
__decorate([
    type_graphql_1.Field(),
    typeorm_1.Column(),
    __metadata("design:type", Number)
], Item.prototype, "customerId", void 0);
__decorate([
    type_graphql_1.Field(),
    typeorm_1.ManyToOne(() => User_1.User, (user) => user.items),
    __metadata("design:type", Item)
], Item.prototype, "creator", void 0);
__decorate([
    typeorm_1.OneToMany(() => Stars_1.Stars, (star) => star.item),
    __metadata("design:type", Array)
], Item.prototype, "stars", void 0);
__decorate([
    type_graphql_1.Field(() => String),
    typeorm_1.CreateDateColumn(),
    __metadata("design:type", Date)
], Item.prototype, "createdAt", void 0);
__decorate([
    type_graphql_1.Field(() => String),
    typeorm_1.UpdateDateColumn(),
    __metadata("design:type", Date)
], Item.prototype, "updatedAt", void 0);
Item = __decorate([
    type_graphql_1.ObjectType(),
    typeorm_1.Entity()
], Item);
exports.Item = Item;
//# sourceMappingURL=Item.js.map