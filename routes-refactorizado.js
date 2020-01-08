import {
  seeProfile,
  updateProfile,
  usersList,
  adminPanel
} from "./controllers";

export default app => {
  const checkPermissions = permissions => (req, res, next) =>
    permissions.every(permission => req.session.permissions.includes(permission))
      ? next()
      : res.send('Acceso denegado');

  // Las rutas de nuestra aplicación
  app.get("/perfil", checkPermissions(["see_profile"]), seeProfile);
  app.get("/editar-perfil", checkPermissions(["update_profile"]), updateProfile);
  app.get("/usuario", checkPermissions(["see_other_users_profile"]), usersList);
  app.get("/admin", checkPermissions(["can_manage"]), adminPanel);
  app.get("/comprobacion-multiple", checkPermissions(["can_manages", "see_profile"]), seeProfile);
};
