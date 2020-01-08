import { default as onlyIf } from "./middleware";

const routePrefix = "^/:type(invitado|usuario|admin)";
const controller = (req, res) => res.send("Permiso concedido.");

export default app => {
  // Aqui aplicamos el middleware que hemos llamado onlyIf a las rutas.

  app.get(`${routePrefix}/perfil`, onlyIf("invitado"), controller);
  app.get(`${routePrefix}/usuarios`, onlyIf("usuario"), controller);
  app.get(`${routePrefix}/administracion`, onlyIf("admin"), controller);

  // Por si las moscas
  app.get("*", (req, res) =>
    res.send(
      "No existe ese tipo de usuario. Prueba con /invitado, /usuario, /admin."
    )
  );
};
