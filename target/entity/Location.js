"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
exports.__esModule = true;
var typeorm_1 = require("typeorm");
var Location = /** @class */ (function (_super) {
    __extends(Location, _super);
    function Location() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        typeorm_1.PrimaryGeneratedColumn(),
        __metadata("design:type", String)
    ], Location.prototype, "id");
    __decorate([
        typeorm_1.Column("float"),
        __metadata("design:type", Number)
    ], Location.prototype, "latitude");
    __decorate([
        typeorm_1.Column("float"),
        __metadata("design:type", Number)
    ], Location.prototype, "longitude");
    __decorate([
        typeorm_1.Column("text", { nullable: true }),
        __metadata("design:type", String)
    ], Location.prototype, "streetName");
    __decorate([
        typeorm_1.Column("text", { nullable: true }),
        __metadata("design:type", String)
    ], Location.prototype, "city");
    __decorate([
        typeorm_1.Column("text", { nullable: true }),
        __metadata("design:type", String)
    ], Location.prototype, "country");
    __decorate([
        typeorm_1.Column("text", { nullable: true }),
        __metadata("design:type", String)
    ], Location.prototype, "houseNumber");
    __decorate([
        typeorm_1.Column("text", { nullable: true }),
        __metadata("design:type", String)
    ], Location.prototype, "postalCode");
    Location = __decorate([
        typeorm_1.Entity()
    ], Location);
    return Location;
}(typeorm_1.BaseEntity));
exports["default"] = Location;
//# sourceMappingURL=Location.js.map