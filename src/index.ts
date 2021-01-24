import { ApolloServer } from "apollo-server-express";
import express from "express";
import http from "http";
import "reflect-metadata";
import { buildSchema } from "type-graphql";
import { Container } from "typedi";
import { createTypeormConnection } from "./createTypeormConnection";

const startServer = async (): Promise<void> => {
  const connection = await createTypeormConnection();
  if (connection) {
    await connection.runMigrations();
  }

  const app = express();

  const server = new ApolloServer({
    schema: await buildSchema({
      resolvers: [__dirname + "/modules/**/resolver.{ts,js}"],
      container: Container,
    }),
  });

  server.applyMiddleware({ app });

  const httpServer = http.createServer(app);

  httpServer.listen({ port: 4000 });
};

startServer();
