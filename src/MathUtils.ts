export const PI = 3.14159;

export function calculateArea(radius: number): number {
    return PI * radius * radius;
}

export class Circle {
    constructor(public radius: number) {}

    getArea(): number {
        return calculateArea(this.radius);
    }
}
