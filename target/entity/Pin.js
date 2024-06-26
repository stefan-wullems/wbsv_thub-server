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
var User_1 = require("./User");
var Location_1 = require("./Location");
var Pin = /** @class */ (function (_super) {
    __extends(Pin, _super);
    function Pin() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        typeorm_1.PrimaryGeneratedColumn(),
        __metadata("design:type", String)
    ], Pin.prototype, "id");
    __decorate([
        typeorm_1.OneToOne(function () { return Location_1["default"]; }),
        typeorm_1.JoinColumn(),
        __metadata("design:type", Location_1["default"])
    ], Pin.prototype, "location");
    __decorate([
        typeorm_1.Column("boolean", { "default": false }),
        __metadata("design:type", Boolean)
    ], Pin.prototype, "approved");
    __decorate([
        typeorm_1.ManyToOne(function () { return User_1["default"]; }, function (user) { return user.postedPins; }),
        __metadata("design:type", User_1["default"])
    ], Pin.prototype, "user");
    Pin = __decorate([
        typeorm_1.Entity()
    ], Pin);
    return Pin;
}(typeorm_1.BaseEntity));
exports["default"] = Pin;
//# sourceMappingURL=Pin.js.map