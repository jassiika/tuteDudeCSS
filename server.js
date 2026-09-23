const http = require("http");
const fs = require("fs");
const path = require("path");

const server = http.createServer((req, res) => {

    let filePath;
    let contentType = "text/html";

    if (req.url === "/" || req.url === "/home") {
        filePath = "./index.html";
    }
    else if (req.url === "/about") {
        filePath = "./about.html";
    }
    else if (req.url === "/contact") {
        filePath = "./contact.html";
    }
    else if (req.url === "/style.css") {
        filePath = "./style.css";
        contentType = "text/css";
    }
    else if (req.url === "/script.js") {
        filePath = "./script.js";
        contentType = "application/javascript";
    }
    else if (req.url === "/washing.png") {
        filePath = "./washing.png";
        contentType = "image/png";
    }
    else {
        filePath = "./404.html";
    }

    fs.readFile(filePath, (err, data) => {

        if (err) {
            console.log(err);
            res.writeHead(500, {
                "Content-Type": "text/plain"
            });
            return res.end("Server Error");
        }

        if (filePath === "./404.html") {
            res.writeHead(404, {
                "Content-Type": "text/html"
            });
        } else {
            res.writeHead(200, {
                "Content-Type": contentType
            });
        }

        res.end(data);
    });
});

server.listen(3001, () => {
    console.log("Server running on port 3001");
});
