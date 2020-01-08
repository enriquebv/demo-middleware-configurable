import {
  seeProfile,
  updateProfile,
  usersList,
  adminPanel
} from "./controllers";

export default app => {
  // Para ver usuarios
  const canSeeProfile = (req, res, next) =>
    req.session.permissions.includes("see_profile")
      ? next()
      : res.send('Acceso denegado');

  // Para editar usuarios
  const canUpdateProfile = (req, res, next) =>
    req.session.permissions.includes("update_profile")
      ? next()
      : res.send('Acceso denegado');

  // Para ver otros perfiles de usuario
  const canSeeOtherUsersProfiles = (req, res, next) =>
    req.session.permissions.includes("see_other_users_profile")
      ? next()
      : res.send('Acceso denegado');

  // Acceder al panel de adminsitrador
  const canManage = (req, res, next) =>
    req.session.permissions.includes("can_manage")
      ? next()
      : res.send('Acceso denegado');

  // Las rutas de nuestra aplicación
  app.get("/perfil", canSeeProfile, seeProfile);
  app.get("/editar-perfil", canUpdateProfile, updateProfile);
  app.get("/usuario", canSeeOtherUsersProfiles, usersList);
  app.get("/admin", canManage, adminPanel);
  app.get("/comprobacion-multiple", canManage, canSeeProfile, seeProfile);
};
