import config from 'dotenv';
import express from 'express';
import bodyParser from 'body-parser';
import swaggerUi from 'swagger-ui-express';
import swaggerDocument from './swagger.json';
import bookRoutes from './server/routes/BookRoutes';

config.config();

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

const port = process.env.PORT || 8000;

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
app.use('/api/v1/books', bookRoutes);

// when a random route is inputed
app.get('*', (req, res) => res.status(200).send({
  message: 'Welcome to this API.',
}));

app.listen(port, () => {
  console.log(`Server is running on PORT ${port}`);
});

export default app;
