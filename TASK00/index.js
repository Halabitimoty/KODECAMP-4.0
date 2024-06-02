const http = require("http");
const fileSystem = require("fs");
const dataJson = require("./data.json");
const port = 3000;

/**
 *
 * @param {string} body
 * @returns
 */
const parseBody = (body) => {
  const obj = {};
  const splitAnd = body.split("&");
  splitAnd.forEach((keyValue) => {
    const [key, value] = keyValue.split("=");
    obj[key] = value;
  });
  return obj;
};

/**
 *
 * @param {string} path
 * @param {object} newdata
 * @param {function} callback
 */

const readWriteFile = (path, newdata, callback) => {
  fileSystem.readFile(path, (err, data) => {
    if (err) {
      return callback(err);
    }
    let prevData = "";

    if (data.length) {
      try {
        prevData += data.toString();
      } catch (jsonErr) {
        return callback(jsonErr);
      }
    }

    const parsePrev = data.length ? JSON.parse(prevData) : [newdata];
    parsePrev.push(newdata);

    const updatedData = JSON.stringify(parsePrev, null, 2);

    fileSystem.writeFile(path, updatedData, (err) => {
      if (err) {
        return callback(err);
      }
      callback(null, "Data written successfully");
    });
  });
};

/**
 * -----Pages------
 */

const homePage = `
            <div style='background-color: green; text-align: center;padding: 10rem;height:100vh;color:white'>
                <h1>Welcome to the home page</h1>
                <form action="/login" method="POST">
                    <div style="padding: 2rem"><input type="text" name="username" placeholder="username" /></div>
                    <div style="padding: 2rem">
                    <input type="password" name="password" placeholder="password" />
                    </div>
                <div style="padding: 2rem">
                <button type="submit">Login</button>
                </div>
                </form>
            </div>
    `;
const adminPage = (username, data) => `
                    <div style='background-color: blue;text-align: center;padding: 10rem;height:100vh;color:white'>
                        <h1>Welcome ${username}</h1>
                        <p>You have successfully logged in.</p>
                        back to <a href="/addmemorypages" style='color: yellow;'>Add Memories</a>
                        <div style='color: white;'>
                          <h1 style='color: red;'>Memories</h1>
                          ${data.map(
                            (data, id) =>
                              `<h3 key='${id}' style='color: green;'>${data.content}</h3>`
                          )}
                        </div>
                    </div>
                `;
const addmemoriesPage = `<div style='background-color: green; text-align: center;padding: 10rem;height:100vh;color:white'>
                <h1>Kindly add Memories</h1>
                <form action="/addmemory" method="POST">
                    <div style="padding: 2rem"><input type="text" name="content" placeholder="memory" /></div>
                <div style="padding: 2rem">
                  <button type="submit">Add Memory</button>
                </div>
                </form>
            </div>`;
const unauthorisedPage = `
                    <div style='background-color: red;text-align: center;padding: 10rem;height:100vh;color:white'>
                        <h1>UnAuthorized</h1>
                        <p>Incorrect username or password.</p>
                        back to <a href="/">Login</a>
                    </div>
                `;
const error404Page = `
            <div style='background-color: red;text-align: center;padding: 10rem;height:100vh;color:white'>
                <h1>404 Not Found</h1>
                <p>The page you are looking for does not exist.</p>
            </div>
        `;

/**
 * -----Server------
 */
const server = http.createServer((req, res) => {
  const url = req.url;
  const method = req.method;

  if (url === "/" && method === "GET") {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.end(homePage);
  } else if (url === "/addmemorypages" && method === "GET") {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.end(addmemoriesPage);
  } else if (url === "/addmemory" && method === "POST") {
    let body = "";

    req.on("data", (chunk) => {
      body += chunk.toString();
    });

    req.on("end", () => {
      const data = parseBody(body);

      readWriteFile("data.json", data, (err, data) =>
        err ? console.error(err) : console.log(data)
      );

      res.writeHead(200);
      res.end(adminPage(data.username, dataJson));
    });
  } else if (url === "/login" && method === "POST") {
    let body = "";

    req.on("data", (chunk) => {
      body += chunk.toString();
    });

    req.on("end", () => {
      const data = parseBody(body);
      if (data.username === "admin" && data.password === "password") {
        res.writeHead(200);
        res.end(adminPage(data.username, dataJson));
        return;
      } else {
        res.writeHead(401);
        res.end(unauthorisedPage);
        return;
      }
    });
  } else {
    res.writeHead(404);
    res.end(error404Page);
  }
});

server.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
