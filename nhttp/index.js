const http = require("http");
const fs = require("fs");
const url = require("url");
const port = 8080;

const json = {
  allah: {
    songs: [null, null, null],
  },
  jesus: {
    songs: [undefined, undefined, undefined],
  },
};
const slug = "allah";

const server = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "application/json" });
  if (url.parse(req.url).pathname === "/") {
    res.write(JSON.stringify({ c: 5, b: 4 }, null, 3));
    res.end();
  }
  if (url.parse(req.url).pathname === `/playlist/users`) {
    res.write(JSON.stringify(json, null, 3));
    res.end();
  }
});
server.listen(port, () => {
  console.log(`server running at http://localhost:${port}/`);
});
