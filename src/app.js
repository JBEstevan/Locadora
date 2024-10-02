import e from "express";
import "dotenv/config";
import user_router from "./routes/user-route.js";
import movie_router from "./routes/movie-route.js";
import rented_router from "./routes/rented-route.js";
import scheduling_router from "./routes/scheduling-route.js";

const app = e();

app.use(e.json());

app.use("/user", user_router);
app.use("/movie", movie_router);
app.use("/rented", rented_router);
app.use("/scheduling", scheduling_router);

app.listen(process.env.API_PORT, () => console.log("Servidor locadora auth executando na porta " + process.env.API_PORT));