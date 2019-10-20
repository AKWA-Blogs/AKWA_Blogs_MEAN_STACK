var articles = require("../controllers/articles.js");


module.exports = function (app) {

    app.get("/articles", articles.index)

    app.get("/articles/:id", articles.getArticle)

    app.post("/article", articles.addArticle)

    // app.put("/articles/:id", articles.editArticle)

    app.delete("/articles/:id", articles.deleteArticle)
}