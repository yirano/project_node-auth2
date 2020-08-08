const router = require("express").Router();
const Users = require("../models/users-model.js");
const restrict = require("../middlewares/restrict");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

router.get("/", restrict("dean"), async (req, res, next) => {
  try {
    res.json(await Users.getAll());
  } catch (error) {
    next(error);
  }
});

router.get("/students", restrict("teacher"), async (req, res, next) => {
  try {
    res.json(await Users.getStudents());
  } catch (error) {
    next(error);
  }
});

router.get("/department", restrict("student"), async (req, res, next) => {
  // console.log(jwt.decode(req.cookies.token));
  try {
    const decode = jwt.decode(req.cookies.token);
    res.json(await Users.getDepartment(decode.department));
  } catch (error) {
    next(error);
  }
});

router.post("/register", async (req, res, next) => {
  try {
    const { username, password, department, role } = req.body;

    const user = await Users.findBy(username).first();

    if (user) {
      return res.status(409).json({ message: "Username is already taken" });
    }

    const newUser = await Users.add({
      username,
      password: await bcrypt.hash(password, 14),
      department,
      role,
    });

    res.status(201).json(newUser);
  } catch (error) {
    next(error);
  }
});

router.post("/login", async (req, res, next) => {
  try {
    const { username, password } = req.body;
    const user = await Users.findBy(username).first();

    if (!user) {
      return res.status(401).json({
        message: "Invalid Credentials 1",
      });
    }

    // hash the password again and see if it matches what we have in the database
    const passwordValid = await bcrypt.compare(password, user.password);

    if (!passwordValid) {
      return res.status(401).json({
        message: "Invalid Credentials 2",
      });
    }

    const payload = {
      id: user.id,
      username: user.username,
      department: user.department,
      role: user.role, // this value would usually come from the database
    };

    res.cookie("token", jwt.sign(payload, process.env.SECRET));
    res.json({
      message: `Welcome ${user.username}!`,
      id: user.id,
    });
  } catch (err) {
    next(err);
  }
});

router.get("/logout", async (req, res, next) => {
  // console.log('LOG OUT -----> ',req.session)
  try {
    // this will delete the session in the database and try to expire the cookie,
    // though it's ultimately up to the client if they delete the cookie or not.
    // but it becomes useless to them once the session is deleted server-side.
    // req.session.destroy((err) => {
    //   if (err) {
    //     next(err)
    //   } else {
    //     res.status(204).end()
    //   }
    // })

    res.clearCookie("token").end();
  } catch (err) {
    next(err);
  }
});

module.exports = router;
