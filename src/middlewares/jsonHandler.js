export async function jsonHandler(request, response) {
  //contém os pedaços do corpo da requisição
  const buffers = [];
  for await (const chunk of request) {
    //adiciona os pedaços do corpo da requisição no array
    buffers.push(chunk);
  }

  try {
    //add propriedade de body no request - converte o buffer em string
    //e depois em json
    request.body = JSON.parse(Buffer.concat(buffers).toString());
  } catch (error) {
    //não tem conteúdo no body da requisição
    request.body = null;
  }
  
  //formato do conteúdo da resposta
  response.setHeader("Content-type", "application/json");
}
