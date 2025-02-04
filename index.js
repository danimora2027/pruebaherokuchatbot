"use strict";

const express = require("express");
const bodyParser = require("body-parser");

const restService = express();

restService.use(
    bodyParser.urlencoded({
        extended: true
    })
);

restService.use(bodyParser.json());

restService.post("/echo", function(req, res) {
    var speech =
        req.body.queryResult &&
        req.body.queryResult.parameters &&
        req.body.queryResult.parameters.echoText ?
        req.body.queryResult.parameters.echoText :
        "Seems like some problem. Speak again." + req.body;


    return res.json({

        "fulfillmentText": speech,
        "fulfillmentMessages": [{
            "text": {
                "text": ["🤖Hola! Bienvenido al chatbot de los portales interactivos de Ciudad Bolívar"]
            }
        }],
        "source": "<webhookpn1>"


    });

});


restService.listen(process.env.PORT || 8000, function() {
    console.log("Server up and listening");
});