import * as express from "express";
import DB from "./db";

const router = express.Router();

router.get("/api/hello", (req, res, next) => {
  res.json("World");
  next();
});

router.get("/api/users", async (req, res) => {
  try {
    let users = await DB.Users.all();
    res.json(users);
  } catch (e) {
    console.log(e);
    res.sendStatus(500);
  }
});

export default router;
