import express from 'express';
import bodyParser from 'body-parser';

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// This is the default route that will display.
app.get('*', (req, res) => res.status(200).send({
  message: 'Welcome to this API.',
}));

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Server is running on PORT ${port}`);
});

export default app;
