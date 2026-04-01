import { config } from 'dotenv' // ler o arquivo env e joga tudo no process.env
import { z } from 'zod'

if (process.env.NODE_ENV === 'test') {
  config({ path: '.env.test' })
} else {
  config()
}

const envSchema = z.object({
  NODE_ENV: z.enum(['development', 'test', 'production']).default('production'),
  DATABASE_URL: z.string().nonempty(),
  PORT: z.number().default(3333),
})

// estou passando o schema e verificando a variavel process.env  satisfaz o schema
const _env = envSchema.safeParse(process.env)

if (_env.success === false) {
  console.error('⚠️ Invalid enviroment variables!', z.treeifyError(_env.error))

  throw new Error('Invalid enviroment variables.')
}

export const env = _env.data
