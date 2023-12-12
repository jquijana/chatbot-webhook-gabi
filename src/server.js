
import config from './config/config.js';
import express from 'express';
import bodyParser from 'body-parser';
import webhookRoutes from './routes/webhookRoutes.js';

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(express.static('views'));
app.use('/webhook', webhookRoutes);

const PORT = config.PORT;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
