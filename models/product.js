"use strict";

const FS = require("fs");
const Path = require("path");

const JSONFilePath = Path.join(Path.dirname(require.main.filename), "data", "products.json");

const GetProductsFromFile = (callback) => {
    FS.readFile(JSONFilePath, (error, content) => {
        if (error || !content || !content.length) {
            return callback([]);
        } else {
            try {
                return callback(JSON.parse(content));
            } catch (e) {
                console.error("Failed to return the data. Error log: ", e);
                return callback([]);
            }
        }
    });
}

module.exports = class Product {
    constructor(title) {
        this.title = title;
    }

    save() {
        GetProductsFromFile((products) => {
            products.push(this);

            FS.writeFile(JSONFilePath, JSON.stringify(products, null, 2),
                (error) => {
                    if (error) {
                        console.error(error);
                    }
                });
        });
    }

    static fetchAll(callback) {
        GetProductsFromFile(callback);
    }
}
