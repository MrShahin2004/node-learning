"use strict";

exports.Get404 = (req, res) => {
    res.status(404).render("not-found", {
        pageTitle: "404 Not Found",
        path: req.path
    });
}
