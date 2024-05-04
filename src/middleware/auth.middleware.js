import { getUser } from "../service/auth.js";

async function retrictToLoggedinUserOnly(req, res, next) {
  console.log(req);
  const userId = req.cookies?.uid;

  if (!userId) return res.redirect("/login");
  const user = getUser(userId);

  if (!user) return res.redirect("/login");

  res.user = user;
  next();
}

export default retrictToLoggedinUserOnly;
