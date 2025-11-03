"use strict";

const FS = require("fs");
const Path = require("path");

const JSONFilePath = Path.join(Path.dirname(require.main.filename), "data", "products.json");

module.exports = class Product {
    constructor(title) {
        this.title = title;
    }

    save() {
        FS.readFile(JSONFilePath, (error, content) => {
            let products = [];
            if (!error && content && content.length) {
                try {
                    products = JSON.parse(content);
                } catch (error) {
                    console.error("Failed to parse the JSON value. Error log: ", error);
                }
            }
            products.push(this);

            FS.writeFile(JSONFilePath, JSON.stringify(products, null, 2), (error) => {
                if (error) {
                    console.error(error);
                }
            });
        });
    }

    static fetchAll(callback) {
        FS.readFile(JSONFilePath, (error, content) => {
            if (error || !content || !content.length) {
                return callback([]);
            } else {
                try {
                    callback(JSON.parse(content));
                } catch (e) {
                    console.error("Failed to return the data. Error log: ", e);
                    callback([]);
                }
            }
        });
    }
}
