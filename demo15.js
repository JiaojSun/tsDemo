"use strict";
var man1;
(function (man1) {
    var Dehua = /** @class */ (function () {
        function Dehua() {
            this.name = "刘德华";
        }
        Dehua.prototype.talk = function () {
            console.log("我是帅哥刘德华");
        };
        return Dehua;
    }());
    man1.Dehua = Dehua;
})(man1 || (man1 = {}));
var man2;
(function (man2) {
    var Dehua = /** @class */ (function () {
        function Dehua() {
            this.name = "马德华";
        }
        Dehua.prototype.talk = function () {
            console.log("我是二师兄马德华");
        };
        return Dehua;
    }());
    man2.Dehua = Dehua;
})(man2 || (man2 = {}));
var dehua1 = new man1.Dehua();
var dehua2 = new man2.Dehua();
dehua1.talk();
dehua2.talk();
