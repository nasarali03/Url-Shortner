import User from "../models/user.model.js";
import { v4 as uuidv4 } from "uuid";
import { setUser } from "../service/auth.js";

async function userSignup(req, res) {
  const { name, email, password } = req.body;
  await User.create({
    name,
    email,
    password,
  });
  res.redirect("/");
}

async function userLogin(req, res) {
  const { email, password } = req.body;
  const user = await User.findOne({ email, password });

  if (!user) {
    return res.render("login", { error: "Invalid Username or password" });
  }

  const token = setUser(user);

  return res.status(200).cookie("token", token).redirect("/");
  // res.json({ token });
}
export { userSignup, userLogin };
