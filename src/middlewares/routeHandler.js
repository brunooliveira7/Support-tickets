import { routes } from "../routes/index.js";

export function routeHandler(request, response) {
  //procura a rota
  const route = routes.find((route) => {
    //se a rota tem método, path e requisição iguais retorna rota
    return route.method === request.method && route.path === request.url;
  });

  if (route) {
    //se a rota existe, executa o controller
    return route.controller({ request, response });
  } else {
    //se não existe, retorna 404
    return response.writeHead(404).end();
  }
}
