//para listar os tickets
export function index({ request, response, database }) {
  //recuperar o query params
  const { status } = request.query;
  console.log(status);

  //selecionar todos os tickets
  const tickets = database.select("tickets");

  return response.writeHead(200).end(JSON.stringify(tickets));
}
