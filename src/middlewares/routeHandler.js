import { routes } from "../routes/index.js";
import { Database } from "../database/database.js";
import { extractQueryParams } from "../utils/extractQueryParams.js";

//criar uma instância do banco de dados
const database = new Database();

export function routeHandler(request, response) {
  //procura a rota
  const route = routes.find((route) => {
    //se a rota tem método, path e requisição iguais retorna rota
    return route.method === request.method && route.path.test(request.url);
  });

  if (route) {
    const routeParams = request.url.match(route.path);

    const { query } = routeParams.groups;
    //se a rota existe, adiciona os parâmetros da query
    request.query = query ? extractQueryParams(query) : {};

    //se a rota existe, executa o controller
    return route.controller({ request, response, database });
  } else {
    //se não existe, retorna 404
    return response.writeHead(404).end();
  }
}
