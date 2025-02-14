//impota da biblioteca do node um gerador de id aleatórios
import { randomUUID } from "node:crypto";

export function create({ request, response, database }) {
  //recuperar o corpo da requisição
  const { equipment, description, user_name } = request.body;

  ///criar um objeto com os dados da requisição
  const ticket = {
    id: randomUUID(),
    equipment,
    description,
    user_name,
    status: "open",
    created_at: new Date(),
    updated_at: new Date(),
  };

  //inserir os dados no banco de dados
  database.insert("tickets", ticket);

  return response.writeHead(201).end(JSON.stringify(ticket));
}
