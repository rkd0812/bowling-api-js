const swaggerUi = require('swagger-ui-express');
const swaggereJsdoc = require('swagger-jsdoc');

const options = {
    swaggerDefinition: {
        openapi: "3.0.0",
        info: {
            title: "Bowling User Api",
            version: "1.0.0",
            description: "a Rest api using swagger and express.",
        },
        servers: [
            {
                url: "http://localhost:3000",
            },
        ],
    },
    apis: ["./models/*.js", "./routes/*.js"],
};

const specs = swaggereJsdoc(options);

module.exports = {
    swaggerUi,
    specs
};
