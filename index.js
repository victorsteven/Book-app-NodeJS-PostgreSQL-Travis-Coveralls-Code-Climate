import config from 'dotenv';
import express from 'express';
import bodyParser from 'body-parser';
import bookRoutes from './server/routes/BookRoutes';

config.config();

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// This is the default route that will display.

const port = process.env.PORT || 8000;

app.use('/api/v1/books', bookRoutes);

app.get('*', (req, res) => res.status(200).send({
  message: 'Welcome to this API.',
}));

app.listen(port, () => {
  console.log(`Server is running on PORT ${port}`);
});

export default app;
