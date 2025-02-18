export function updateStatus({ request, response, database }) {
  const { id } = request.params;

  //atualiza o status do ticket para "closed"
  database.update("tickets", id, {
    status: "closed",
  });

  return response.writeHead(200).end();
}
