export const auth = (req, res, next) => {
  let body = "";

  req.on("data", (chunk) => {
    body += chunk.toString();
  });

  req.on("end", () => {
    if (body) {
      try {
        const incomingdata = JSON.parse(body);
        if (
          incomingdata.username !== "admin" ||
          incomingdata.password !== "password"
        ) {
          res
            .writeHead(401, { "Content-Type": "text/html" })
            .end("Authentication required");
        } else {
          req.body = incomingdata;
          next();
        }
      } catch (err) {
        res
          .writeHead(400, { "Content-Type": "application/json" })
          .end(JSON.stringify({ error: "Invalid JSON" }));
      }
    } else {
      res
        .writeHead(400, { "Content-Type": "application/json" })
        .end(JSON.stringify({ error: "No data provided" }));
    }
  });
};
