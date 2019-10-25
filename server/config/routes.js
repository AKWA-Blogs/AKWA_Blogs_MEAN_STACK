var articles = require("../controllers/articles");
var comments = require("../controllers/comments");
var channels = require("../controllers/channels");
var users = require("../controllers/users")

module.exports = function (app) {

    app.get("/articles", articles.index);

    app.get("/articles/:id", articles.getArticle);

    app.post("/article", articles.addArticle);

    app.put("/articles/:id", articles.editArticle);

    app.delete("/articles/:id", articles.deleteArticle);

    app.post("/comment", comments.addComment);

    app.delete("/comments/:id", comments.deleteComment);

    app.get("/users", users.index);

    app.get("/users/:id", users.getUser);

    app.post("/user/signup", users.addUser);

    app.post("/user/login", users.login);

    app.put("/users/:id", users.editUser);

    app.delete("/users/:id", users.deleteUser);

    app.get("/channels", channels.index);

    app.get("/channels/:id", channels.getChannel);

    app.post("/channel", channels.addChannel);

    app.put("/channels/:id", channels.editChannel);

    app.delete("/channels/:id", channels.deleteChannel);

    app.post("/channel/subscribe", channels.subscribeToChannel);

    app.get("/channels/subscribed/:id", channels.getSubChannels);

    app.get("/explore/articles/:id", articles.expArticle);
    
    app.get("/explore/channels/:id", channels.expChannel);
    
    app.get("/users/channels/:id", users.getUsersChannels);


}