import { Migration, Migrator } from '@mikro-orm/migrations';
import { Options, MySqlDriver } from '@mikro-orm/mysql';
import { TsMorphMetadataProvider } from '@mikro-orm/reflection';

const config: Options = {
  driver: MySqlDriver,
  host: '127.0.0.1',
  port: 3306,
  user: 'root',
  password: 'mLbr%@.-G.890n^]albYUI3#',
  dbName: 'zooshop_new',
  entities: ['dist/**/*.entity.js'],
  entitiesTs: ['src/**/*.entity.ts'],
  metadataProvider: TsMorphMetadataProvider,
  debug: true,
  extensions: [Migrator]
};

export default config;