import { Migration, Migrator } from '@mikro-orm/migrations';
import { Options, MySqlDriver } from '@mikro-orm/mysql';
import { TsMorphMetadataProvider } from '@mikro-orm/reflection';

const config: Options = {
  driver: MySqlDriver,
  clientUrl: 'mysql://root:mLbr%@.-G.890n^]albYUI3#@localhost:3306/zooshop_new',
  dbName: 'zooshop_new',
  entities: ['dist/**/*.entity.js'],
  entitiesTs: ['src/**/*.entity.ts'],
  metadataProvider: TsMorphMetadataProvider,
  debug: true,
  extensions: [Migrator]
};

export default config;