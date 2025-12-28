const FSE = require("fs-extra");
const Path = require("path");

const JSONFilePathForCart = Path.join(Path.dirname(require.main.filename), "data", "cart.json");

module.exports = class Cart {
    static addProduct() {
        // Fetch the previous cart
        FSE.readFile(JSONFilePathForCart, (error, content) => {
            let Cart = { products: [], totalPrice: 0 };

            if (!error) {
                Cart = JSON.parse(content);
            }
        });
        // Analyze the cart --> Find the existing product
        // Add new product / Increase quantity
    }
}
