const jwt = require("jsonwebtoken");
const { json } = require("express");

const roles = ["student", "teacher", "dean"];

function restrict(role) {
  return async (req, res, next) => {
    const authError = { message: "Invalid Credentials" };
    try {
      const token = req.cookies.token;
      if (!token) {
        return res.status(401).json(authError);
      }
      jwt.verify(token, "keep it safe", (err, decoded) => {
        if (err) {
          return res.status(401).json(authError);
        }

        if (role && roles.indexOf(decoded.role) < roles.indexOf(role)) {
          return res
            .status(401)
            .json({ message: "You don't have access to this feature." });
        }

        next();
      });
    } catch (error) {
      next(error);
    }
  };
}

module.exports = restrict;
