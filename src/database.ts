// Knex é uma interface
import { knex as setupKnex, Knex } from 'knex'

// Se tornou um const pq quero importar as config no knexfile
export const config: Knex.Config = {
  client: 'sqlite',
  connection: {
    filename: './db/app.db',
  },
  useNullAsDefault: true, // por padrão todos os valores do banco são nulos.
  migrations: { // configuraçoes das migrations
    extension: 'ts',
    directory: './db/migrations',
  }
}

export const knex = setupKnex(config)
