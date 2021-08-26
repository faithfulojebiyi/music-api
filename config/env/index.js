import rootPath from 'app-root-path'
import production from './production'
import development from './development'
import test from './test'

const {
  MYMUSIC_PORT: PORT,
  MYMUSIC_SECRET: SECRET,
  MYMUSIC_NODE_ENV: NODE_ENV,
  MYMUSIC_AWS_ACCESS_KEY: AWS_ACCESS_KEY,
  MYMUSIC_AWS_SECRET_KEY: AWS_SECRET_KEY,
  MYMUSIC_BUCKET: AWS_BUCKET_NAME
} = process.env

const currentEnv = {
  production,
  development,
  test
}[NODE_ENV || 'development']

export default {
  ...process.env,
  ...currentEnv,
  rootPath,
  PORT,
  SECRET,
  NODE_ENV,
  AWS_ACCESS_KEY,
  AWS_SECRET_KEY,
  AWS_BUCKET_NAME
}
