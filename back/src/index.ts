import server from "./server";
import { PORT } from "./config/envs";
import "reflect-metadata";
import { AppDataSource } from "./config/data-souce";

AppDataSource.initialize()
.then(res=>{
  console.log("Conexion a la base de datos con exito");
  server.listen(PORT, () => {
    console.log(`SERVIDOR LEVANTADO EN EL PUERTO ${PORT}`);
  });

})


