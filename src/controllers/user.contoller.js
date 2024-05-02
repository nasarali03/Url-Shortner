import User from "../models/user.model.js";

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
  const user = User.findOne({ email, password });
  if (!user) {
    return res.render("login", { error: "Invalid Username or password" });
  }
  return res.redirect("/");
}
export { userSignup, userLogin };
