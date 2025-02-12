import http from "node:http";

import { jsonHandler } from "./middlewares/jsonHandler.js";

async function listener(request, response) {
  //adiciona o middleware jsonHandler - obtém o corpo da requisição
  await jsonHandler(request, response);
  console.log(request.body);
}

http.createServer(listener).listen(3333);
