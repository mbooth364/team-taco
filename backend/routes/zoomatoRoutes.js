var express = require("express");
var zomatoRoutes = express.Router();
var request = require("request");
var config = require("../../config");

zomatoRoutes.route("/")
    .get(function (req, res) {
        if (req.query) {
            var query = "?";
            for (var key in req.query) {
                if (query.length > 1) query += "&";
                query += key + "=" + req.query[key]
            }
        } else {
            var query = "";
        }
        var options = {
            url: "https://developers.zomato.com/api/v2.1/search" + query,
            headers: {
               'user-key': config.key
            }
        };
        request(options, function (err, response, body) {
            if (err) return res.status(500).send(err);
            res.send(body);
        })
    });

zomatoRoutes.route("/city")
    .get(function (req, res) {
        var query = "?query=" + req.query.city;
        var options = {
            url: "https://developers.zomato.com/api/v2.1/locations" + query,
            headers: {
                'user-key': config.key
            }
        };
        request(options, function (err, response, body) {
            if (err) return res.status(500).send(err);
            res.send(body);
        })
    });

module.exports = zomatoRoutes;
