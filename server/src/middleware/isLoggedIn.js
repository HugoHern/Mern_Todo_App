const jwt = require("jsonwebtoken");

module.exports = (req, res, next) => {
  const authHeader = req.headers.authorization;
  if (!authHeader) {
    res.status(401).send("invalid authorization header");
  } else {
    const token = authHeader.split(" ")[01];
    console.log(token);
    jwt.verify(token, process.env.SECRET, (err, decoded) => {
      if (err) {
        res.send(403).send("invalid  credentials");
      } else {
        next();
      }
    });
  }
};
