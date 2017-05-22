import express from 'express';
import bodyParser from 'body-parser';
import routes from './routes/routes';

const app = express();
const router = express.Router();

app.set('port', (process.env.PORT || 3001));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Express only serves static assets in production
if (process.env.NODE_ENV === 'production') {
  console.log("i am in the server");
  app.use(express.static('client/build'));
}

routes(router);

app.use('/api', router);

//error 404


app.listen(app.get('port'), () => {
  console.log(`Find the server at: http://localhost:${app.get('port')}/`); // eslint-disable-line no-console
});
