//juntar todas as rotas
import { tickets } from "./tickets.js";
import { parseRoutePath } from "../utils/parseRoutePath.js";

//despeja todas as rotas em um array
export const routes = [...tickets].map((route) => ({
  ...route,
  path: parseRoutePath(route.path),
}));
