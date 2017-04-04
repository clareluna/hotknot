(function() {
    "use strict";

    var restify = require("restify");
    var URL = require("url");
    var extend = require("extend");

    var Server = function() {
        this.restify = null;

    };

    Server.prototype.startServer = function () {
        var server = restify.createServer({
            "name": "hotknot"
        });
        this.router = server;

        //add accepted headers

        //add routes

        //initialize any telemetry or listeners
        server.pre(function(req, res, callback) {
            console.log("req headers:", req.headers);
        });

        server.on("after", function(req, res, callback) {
            console.log("route ended");
        });

        //establish ports

    };

    Server.prototype.router = function () {
        return this.restify;
    };


    exports.Server = Server;

    var server = new Server();

    server.startServer(function(err) {
        if(err) {
            console.log("Error starting server");
            return err;
        }
    });

})();
