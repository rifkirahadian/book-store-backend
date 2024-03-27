import { Sequelize } from 'sequelize-typescript';

export const databaseProviders = [
  {
    provide: 'SEQUELIZE',
    useFactory: async () => {
      const sequelize = new Sequelize({
        dialect: 'postgres',
        host: 'localhost',
        port: 5432,
        username: 'postgres',
        password: 'rayyan',
        database: 'book_store',
      });
      sequelize.addModels([]);
      await sequelize.sync();
      return sequelize;
    },
  },
];
