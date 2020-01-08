// Este es un demo muy simple, pero aplicado a un sistema de gran escala,
// donde existan sistemas de permisos dinamicos, etc, podemos simplificar el comportamiento de los middlewares.

export default userType => {
  return (req, res, next) => {
    const { type } = req.params;

    if (userType === undefined) {
      next();
      return;
    }

    if (userType !== type) {
      res.send("Sin permisos.");
      return;
    }

    next();
  };
};
