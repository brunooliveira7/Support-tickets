<h1 align="center"> Support-tickets </h1>

<p align="center">
APINodejs para gerenciar ticket de suporte técnico, permitindo criar um ticket solicitando suporte, atualizar as informações do ticket, listar os tickets podendo filtrar pelo status e atualizar o status de um ticket para fechado.
</p>
### Rotas

- **Criar Ticket**
    
    Cria um novo ticket de suporte.
    
    **Método:** POST
    
    **URL:** `/tickets`
    
    **Dados:**
    
    - `equipment` (string, obrigatório): Nome do equipamento (exemplo: computador)
    - `description` (string, obrigatório): Descrição do problema.
    - `user_name` (string, obrigatório): nome do usuário que está criando o ticket.
- **Obter Tickets**
    
    **Método:** GET
    
    **URL:** `/tickets`
    
    **Descrição:** Obtém uma lista de todos os tickets de suporte.
    
    **Parâmetros de Consulta (Query Parameters)**:
    
    - `status` (string, opcional): Filtra os tickets pelo status ("open" ou "closed").
- **Atualizar Ticket**
    
    **Método:** PUT
    
    **URL:** `/tickets/:id`
    
    **Descrição:** Atualiza as informações de um ticket específico.
    
    **Parâmetros de Rota:**
    
    - `id` (UUID, obrigatório): ID do ticket.
    
    **Parâmetros no Corpo (JSON):**
    
    - `equipment` (string, obrigatório): Nome do equipamento (exemplo: computador)
    - `description` (string, obrigatório): Descrição do problema.
    - `user_name` não altera.
- **Fechar Ticket**
    
    **Método:** PATCH
    
    **URL:** `/tickets/:id/status`
    
    **Descrição:** Atualiza as informações de um ticket específico.
    
    **Parâmetros de Rota:**
    
    - `id` (UUID, obrigatório): ID do ticket.
- **Excluir Ticket**
    
    **Método:** DELETE
    
    **URL:** `/tickets/:id`
    
    **Descrição:** Exclui um ticket específico pelo seu ID.
    
    **Parâmetros de Rota:**
    
    - `id` (UUID, obrigatório): ID do ticket.


<p align="center">
  <img alt="License" src="https://github.com/brunooliveira7/Support-tickets/blob/main/assets/API%20de%20tickets.png">
</p>
