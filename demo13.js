"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var PersonC = /** @class */ (function () {
    function PersonC(name, age, skill) {
        this.name = name;
        this.age = age;
        this.skill = skill;
    }
    PersonC.prototype.interest = function () {
        console.log('找小姐姐');
    };
    return PersonC;
}());
var Bob = new PersonC('大宝', 18, 'coding');
Bob.interest();
var PersonD = /** @class */ (function (_super) {
    __extends(PersonD, _super);
    function PersonD() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.figure = '帅气';
        return _this;
    }
    PersonD.prototype.interest = function () {
        _super.prototype.interest.call(this);
        console.log('建立电商平台');
    };
    PersonD.prototype.earn = function () {
        console.log('一天赚了一个亿');
    };
    return PersonD;
}(PersonC));
var perD = new PersonD('小宝', 5, '演讲');
perD.interest();
perD.earn();
