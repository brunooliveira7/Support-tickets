import fs from "node:fs/promises";

//criar uma constante com o caminho do banco de dados - com nome e endereço
const DATABASE_PATH = new URL("db.json", import.meta.url);

export class Database {
  //criar db privada - #
  #database = {};

  constructor() {
    //chamar o método de leitura do banco de dados
    fs.readFile(DATABASE_PATH, "utf8")
      .then((data) => {
        this.#database = JSON.parse(data);
      })
      //se der erro ou não existir, cria o arquivo db.json
      .catch(() => {
        this.#persist();
      });
  }

  //método que cria o arquivo db.json
  #persist() {
    fs.writeFile(DATABASE_PATH, JSON.stringify(this.#database));
  }

  //método para inserir dados no banco de dados
  insert(table, data) {
    ///verificar se a tabela existe
    if (Array.isArray(this.#database[table])) {
      //se existir, adicionar os dados
      this.#database[table].push(data);
    } else {
      this.#database[table] = [data];
    }

    //salvar no arquivo db.json
    this.#persist();
  }

  //método para selecionar/listar dados do banco de dados e filtrar
  select(table, filters) {
    //selecionar todos os dados da tabela
    let data = this.#database[table] ?? [];

    //se existir filtro, filtrar os dados
    if (filters) {
      data = data.filter((row) => {
        //verificar se a linha atual tem todos os filtros
        return Object.entries(filters).some(([key, value]) => {
          //se a linha atual tem o filtro, retorna true
          return row[key].toLowerCase().includes(value.toLowerCase());
        });
      });
    }

    return data;
  }
}
