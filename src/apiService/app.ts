import * as bodyParser from "body-parser";
import * as express from "express";
import "reflect-metadata";
import { createConnection } from "typeorm";
import { SnakeNamingStrategy } from "typeorm-naming-strategies";
import { Country } from "./classes/country";
const https = require('https');


createConnection().then(async connection => {
    namingStrategy: new SnakeNamingStrategy()
    console.log("Express application is up and running on port 3000");
}).catch(error => console.log("TypeORM connection error: ", error));

// create express app
const app = express();

app.use(bodyParser.json());

app.use(function (req, res, next) {
    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:4200');
    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    next();
});

app.get('/apiService/api/nepal', function (req, res) {
    https.get('https://covid19-stats-api.herokuapp.com/api/v1/cases?country=Nepal', (resp) => {
        let data: string ='';
        resp.on('data', (chunk) => {
            data += chunk;
            if (data) {
                let country: Country = JSON.parse(data);
                country.country="Nepal";
                res.status(200).json({ message: "Success", data: country });
            } else {
                res.status(201).json({ message: "failure", status: "No Data" });
            }
        });
    }).on("error", (err) => {
        console.log("Error: " + err.message);
    });
});


app.get('/apiService/api/india', function (req, res) {
    https.get('https://covid19-stats-api.herokuapp.com/api/v1/cases?country=India', (resp) => {
        let data: string ='';
        resp.on('data', (chunk) => {
            data += chunk;
            if (data) {
                let country: Country = JSON.parse(data);
                country.country="India";
                res.status(200).json({ message: "Success", data: country });
            } else {
                res.status(201).json({ message: "failure", status: "No Data" });
            }
        });
    }).on("error", (err) => {
        console.log("Error: " + err.message);
    });
});

app.get('/apiService/api/bangladesh', function (req, res) {
    https.get('https://covid19-stats-api.herokuapp.com/api/v1/cases?country=Bangladesh', (resp) => {
        let data: string ='';
        resp.on('data', (chunk) => {
            data += chunk;
            if (data) {
                let country: Country = JSON.parse(data);
                country.country="Bangladesh";
                res.status(200).json({ message: "Success", data: country });
            } else {
                res.status(201).json({ message: "failure", status: "No Data" });
            }
        });
    }).on("error", (err) => {
        console.log("Error: " + err.message);
    });
});

app.get('/apiService/api/pakistan', function (req, res) {
    https.get('https://covid19-stats-api.herokuapp.com/api/v1/cases?country=Pakistan', (resp) => {
        let data: string ='';
        resp.on('data', (chunk) => {
            data += chunk;
            if (data) {
                let country: Country = JSON.parse(data);
                country.country="Pakistan";
                res.status(200).json({ message: "Success", data: country });
            } else {
                res.status(201).json({ message: "failure", status: "No Data" });
            }
        });
    }).on("error", (err) => {
        console.log("Error: " + err.message);
    });
});


app.get('/apiService/api/bhutan', function (req, res) {
    https.get('https://covid19-stats-api.herokuapp.com/api/v1/cases?country=Bhutan', (resp) => {
        let data: string ='';
        resp.on('data', (chunk) => {
            data += chunk;
            if (data) {
                let country: Country = JSON.parse(data);
                country.country="Bhutan";
                res.status(200).json({ message: "Success", data: country });
            } else {
                res.status(201).json({ message: "failure", status: "No Data" });
            }
        });
    }).on("error", (err) => {
        console.log("Error: " + err.message);
    });
});


app.get('/apiService/api/sriLanka', function (req, res) {
    https.get('https://covid19-stats-api.herokuapp.com/api/v1/cases?country=Sri Lanka', (resp) => {
        let data: string ='';
        resp.on('data', (chunk) => {
            data += chunk;
            if (data) {
                let country: Country = JSON.parse(data);
                country.country="Sri Lanka";
                res.status(200).json({ message: "Success", data: country });
            } else {
                res.status(201).json({ message: "failure", status: "No Data" });
            }
        });
    }).on("error", (err) => {
        console.log("Error: " + err.message);
    });
});


app.get('/apiService/api/maldives', function (req, res) {
    https.get('https://covid19-stats-api.herokuapp.com/api/v1/cases?country=Maldives', (resp) => {
        let data: string ='';
        resp.on('data', (chunk) => {
            data += chunk;
            if (data) {
                let country: Country = JSON.parse(data);
                country.country="Maldives";
                res.status(200).json({ message: "Success", data: country });
            } else {
                res.status(201).json({ message: "failure", status: "No Data" });
            }
        });
    }).on("error", (err) => {
        console.log("Error: " + err.message);
    });
});

module.exports = app;


