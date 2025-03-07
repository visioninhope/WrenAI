/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.alterTable('project', (table) => {
    table
      .jsonb('questions')
      .nullable()
      .comment('The recommended questions generated by AI');
    table
      .string('query_id')
      .nullable()
      .comment('The query id of the recommended question pipeline');
    table
      .string('questions_status')
      .nullable()
      .comment('The status of the recommended question pipeline');
    table
      .jsonb('questions_error')
      .nullable()
      .comment('The error of the recommended question pipeline');
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.alterTable('project', (table) => {
    table.dropColumn('questions');
    table.dropColumn('query_id');
    table.dropColumn('questions_status');
    table.dropColumn('questions_error');
  });
};
