import http from "node:http";

import { jsonHandler } from "./middlewares/jsonHandler.js";
import { routeHandler } from "./middlewares/routeHandler.js";

async function listener(request, response) {
  //adiciona o middleware jsonHandler - obtém o corpo da requisição
  await jsonHandler(request, response);
  
  //adiciona o middleware routeHandler - executa a rota
  routeHandler(request, response);
}

http.createServer(listener).listen(3333);
