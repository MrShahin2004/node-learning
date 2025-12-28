const FSE = require("fs-extra");
const Path = require("path");

const JSONFilePathForCart = Path.join(Path.dirname(require.main.filename), "data", "cart.json");

module.exports = class Cart {
    static addProduct() {
        // Fetch the previous cart
        // Analyze the cart --> Find the existing product
        // Add new product / Increase quantity
    }
}
