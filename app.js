import express from "express";
import routes from "./routes";

const PORT = 1234;
const app = express();

routes(app);

app.listen(PORT, () =>
  console.log("Servidor iniciado: http://localhost:%d", PORT)
);
