var articles = require("../controllers/articles.js");
var users = require("../controllers/users")

module.exports = function (app) {

    app.get("/articles", articles.index)

    app.get("/articles/:id", articles.getArticle)

    app.post("/article", articles.addArticle)

    // app.put("/articles/:id", articles.editArticle)

    app.delete("/articles/:id", articles.deleteArticle)


    // app.get("/users", users.index)

    // app.get("/users/:id", users.getUser)

    app.post("/user", users.addUser)

    // app.put("/users/:id", users.editUser)

    // app.delete("/users/:id", users.deleteUser)
}