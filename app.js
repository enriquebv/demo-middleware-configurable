import express from "express";
import routes from "./routes";
import routesRefactorizado from "./routes-refactorizado";
import session from "./session";

const PORT = 1234;
const app = express();

process.env.REFACTORIZADO === "true"
  ? routesRefactorizado(app)
  : routes(app);

app.use(session);
routes(app);

app.listen(PORT, () => console.log("http://localhost:%d", PORT));
