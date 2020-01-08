export default (req, res, next) => {
  req.session = {};
  req.session.permissions = [
    "see_profile",
    "update_profile",
    "see_other_users_profile",
    "can_manage"
  ];

  next();
};
