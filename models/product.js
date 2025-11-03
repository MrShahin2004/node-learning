"use strict";

const FS = require("fs");
const Path = require("path");

module.exports = class Product {
    constructor(title) {
        this.title = title;
    }

    save() {
        ProductsArray.push(this);
    }

    static fetchAll() {
        return ProductsArray;
    }
}
