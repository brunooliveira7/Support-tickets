export function updateStatus({ request, response, database }) {
  const { id } = request.params;
  const { solution } = request.body;

  //atualiza o status do ticket para "closed"
  database.update("tickets", id, {
    status: "closed", solution
  });

  return response.writeHead(200).end();
}
