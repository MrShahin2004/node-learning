"use strict";

exports.NotFoundPage = (req, res) => {
    res.status(404).render("not-found", {pageTitle: "404 Not Found", path: req.path});
}
