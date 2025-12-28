const { writeFile } = require("fs");
const FSE = require("fs-extra");
const Path = require("path");

const JSONFilePathForCart = Path.join(Path.dirname(require.main.filename), "data", "cart.json");

module.exports = class Cart {
    static addProduct(id, productPrice) {
        // Fetch the previous cart
        FSE.readFile(JSONFilePathForCart, (error, content) => {
            let Cart = { products: [], totalPrice: 0 };

            if (!error) {
                Cart = JSON.parse(content);
            }
        });

        // Analyze the cart --> Find the existing product
        let ExistingProductIndex = Cart.products.findIndex((product) => {
            return product.id === id;
        });
        let ExistingProduct = Cart.products[ExistingProductIndex];
        let UpdatedProduct;

        // Add new product / Increase quantity
        if (ExistingProduct) {
            UpdatedProduct = { ...ExistingProduct };
            UpdatedProduct.quantity = UpdatedProduct.quantity + 1;
            Cart.products = [...Cart.products];
            Cart.products[ExistingProductIndex] = UpdatedProduct;
        } else {
            UpdatedProduct = { id: id, quantity: 1 };
            Cart.products = [...Cart.products, UpdatedProduct];
        }
        Cart.totalPrice += productPrice;

        FSE.writeFile(JSONFilePathForCart, JSON.stringify(Cart), "utf-8");
    }
}
