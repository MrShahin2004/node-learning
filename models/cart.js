const { writeFile } = require("fs");
const FSE = require("fs-extra");
const Path = require("path");

const JSONFilePathForCart = Path.join(Path.dirname(require.main.filename), "data", "cart.json");

module.exports = class Cart {
    static addProduct(id, productPrice) {
        // Fetch the previous cart
        FSE.readFile(JSONFilePathForCart, (error, content) => {
            let CartProperties = { products: [], totalPrice: 0 };

            if (!error) {
                CartProperties = JSON.parse(content);
            }

            // Analyze the cart --> Find the existing product
            let ExistingProductIndex = CartProperties.products.findIndex(product => product.id === id);
            let ExistingProduct = CartProperties.products[ExistingProductIndex];
            let UpdatedProduct;

            // Add new product / Increase quantity
            if (ExistingProduct) {
                UpdatedProduct = { ...ExistingProduct };
                UpdatedProduct.quantity = UpdatedProduct.quantity + 1;
                CartProperties.products = [...CartProperties.products];
                CartProperties.products[ExistingProductIndex] = UpdatedProduct;
            } else {
                UpdatedProduct = { id: id, quantity: 1 };
                CartProperties.products = [...CartProperties.products, UpdatedProduct];
            }
            CartProperties.totalPrice += +productPrice;

            FSE.writeFile(JSONFilePathForCart, JSON.stringify(CartProperties), "utf-8");
        });
    }
}
