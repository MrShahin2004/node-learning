let ProductsArray = [];

exports.GetAddProduct = (req, res, next) => {
    res.render('add-product', {
        pageTitle: 'Add Product',
        path: '/admin/add-product',
        formsCSS: true,
        productCSS: true,
        activeAddProduct: true
    });
}

exports.PostAddProduct = (req, res) => {
    ProductsArray.push({title: req.body.title});
    res.redirect("/");
}

exports.GetProducts = (req, res, next) => {
    res.render('shop', {
        prods: ProductsArray,
        pageTitle: 'Shop',
        path: '/',
        hasProducts: ProductsArray.length > 0,
        activeShop: true,
        productCSS: true
    });
};
