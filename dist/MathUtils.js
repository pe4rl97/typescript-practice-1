"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Circle = exports.PI = void 0;
exports.calculateArea = calculateArea;
exports.PI = 3.14159;
function calculateArea(radius) {
    return exports.PI * radius * radius;
}
class Circle {
    constructor(radius) {
        this.radius = radius;
    }
    getArea() {
        return calculateArea(this.radius);
    }
}
exports.Circle = Circle;
//# sourceMappingURL=MathUtils.js.map