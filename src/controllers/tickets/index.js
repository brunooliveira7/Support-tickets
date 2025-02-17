//para listar os tickets
export function index({ request, response, database }) {
  //recuperar o query params
  const { status } = request.query;

  const filters = status ? { status } : null;

  //selecionar todos os tickets
  const tickets = database.select("tickets", filters);

  return response.writeHead(200).end(JSON.stringify(tickets));
}
