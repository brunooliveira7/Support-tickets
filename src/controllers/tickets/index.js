//para listar os tickets
export function index({ request, response, database }) {
  //selecionar todos os tickets
  const tickets = database.select("tickets");
  
  return response.writeHead(200).end(JSON.stringify(tickets));
}
