import path from 'node:path';
import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import { router } from './router';

mongoose
  .connect('mongodb://localhost:27017')
  .then(() => {
    const app = express();
    const PORT = 3001;

    app.use(cors({
      origin: '*', // ou ['http://localhost:3000'] se quiser restringir
      methods: ['GET', 'POST', 'PUT', 'DELETE'],
      allowedHeaders: ['Content-Type', 'Authorization'],
    }));

    app.use(
      '/uploads',
      express.static(path.resolve(__dirname, '..', 'uploads'))
    );
    app.use(express.json());
    app.use(router);

    app.listen(PORT, () => {
      console.log(`Server is running on port http://localhost:${PORT}`);
    });
  })
  .catch(() => {
    console.log('Failed to connect to MongoDB');
  });


