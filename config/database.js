module.exports = ({ env }) => {
  const client = env('DATABASE_CLIENT', 'sqlite');

  const configs = {
    sqlite: {
      connection: {
        client: 'sqlite',
        connection: {
          filename: env('DATABASE_FILENAME', '.tmp/data.db'),
        },
        useNullAsDefault: true,
      },
    },
    postgres: {
      connection: {
        client: 'postgres',
        connection: {
          host: env('DATABASE_HOST', 'localhost'),
          port: env.int('DATABASE_PORT', 5432),
          database: env('DATABASE_NAME', 'railway'),
          user: env('DATABASE_USERNAME', 'postgres'),
          password: env('DATABASE_PASSWORD', 'postgres'),
          ssl: env.bool('DATABASE_SSL', false),
        },
        debug: false,
      },
    },
  };

  return configs[client];
};
