import User from "../models/user.model.js";

async function userSignup(req, res) {
  const { name, email, password } = req.body;
  await User.create({
    name,
    email,
    password,
  });
  res.render("index");
}

export { userSignup };
