﻿function parseCount(number) {
    let result = Number.parseFloat(number);
    if (result) {
        return result;
    } else {
        throw new Error('Невалидное значение');
    }
};

function validateCount(count) {
    try {
        return parseCount(count);
    } catch (error) {
        return error;
    }
};

class Triangle {
    constructor(a, b, c) {
        if ((a + b > c) && (a + c > b) && (c + b > a)) {
            this.a = a;
            this.b = b;
            this.c = c;
            this._perimeter;
            this._area;
        } else {
            throw new Error('Треугольник с такими сторонами не существует');
        }
    }
    get perimeter() {
        return this._perimeter = this.a + this.b + this.c;
    }

    get area() {
        let halfPerimeter = this.perimeter / 2;
        this._area = Math.sqrt(halfPerimeter * (halfPerimeter - this.a) * (halfPerimeter - this.b) * (halfPerimeter - this.c));
        return Number(this._area.toFixed(3));
    }
};

function getTriangle(a, b, c) {
    try {
        return new Triangle(a, b, c);
    } catch (error) {
        return {
            get perimeter() {
                return 'Ошибка! Треугольник не существует'
            },
            get area() {
                return 'Ошибка! Треугольник не существует'
            }
        }
    }
}