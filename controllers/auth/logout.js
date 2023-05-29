const { User } = require("../models/users");

const { ctrlWrapper } = require("../helpers");

const logout = async (req, res) => {
  const { _id } = req.body;
  await User.findByIdAndUpdate(_id, { token: "" });
  res.status(204);
};

module.exports = { logout: ctrlWrapper(logout) };
