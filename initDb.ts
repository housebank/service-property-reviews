import { FastifyInstance, FastifyPluginCallback, FastifyPluginOptions } from 'fastify';

const fp = require('fastify-plugin');

function initializeDatabaseTableWithBaseSettingsPlugin(fastify: FastifyInstance, opts: FastifyPluginOptions,
                                            done: FastifyPluginCallback) {
  fastify.decorate('initializeDatabaseTableWithBaseSettings', async () => {
    const { serviceName } = opts;
    try{
      // @ts-ignore
      const exists = await fastify.knex.schema.hasTable(serviceName);
      if (!exists) {
        // @ts-ignore
        const createTable = await fastify.knex.schema.createTable(serviceName, (table: any) => {
          table.increments('id').primary();
          table.integer('property_id').unsigned();
          table.integer('rating');
          table.specificType('comment', 'text[]');
          table.timestamp('created_at', { useTz: true });
          table.timestamp('updated_at', { useTz: true });
          table.integer('user_id').unsigned();
          table.foreign("property_id").references("id").inTable("property").onDelete("CASCADE");
          table.foreign("user_id").references("id").inTable("user").onDelete("CASCADE");
        });
        fastify.log.info('Database Table with name ' + serviceName + ' was created ==> ' + exists);
        return createTable;
      }
      fastify.log.info('Database Table with name ' + serviceName + ' exists ==> ' + exists);
      return exists;
    }catch (error : any) {
      fastify.log.error('Error in database ' + serviceName,  error.message);
      throw new Error(error.message);
    }
  });
  // @ts-ignore
  done();
}

module.exports = fp(initializeDatabaseTableWithBaseSettingsPlugin,
  { fastify: '>=1.0.0', name: 'database-plugin' });