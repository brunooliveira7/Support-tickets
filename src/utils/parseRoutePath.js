export function parseRoutePath(path) {
  //criar uma regex para capturar os parâmetros da rota
  const routeParamsRegex = /:([a-zA-Z]+)/g;

  //substituir os parâmetros da rota por um regex
  const params = path.replaceAll(routeParamsRegex, "(?<$1>[a-z0-9\-_]+)");

  //criar uma regex para capturar os parâmetros da query
  const pathRegex = new RegExp(`^${params}(?<query>\\?(.*))?$`);

  return pathRegex;
}
