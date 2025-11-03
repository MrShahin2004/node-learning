"use strict";

const FS = require("fs");
const Path = require("path");

module.exports = class Product {
    constructor(title) {
        this.title = title;
    }

    save() {
        const p = Path.join(Path.dirname(process.mainModule.filename), "data", "products.json");
    }

    static fetchAll() {
        return ProductsArray;
    }
}
