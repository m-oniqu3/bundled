import cors from 'cors';
import 'dotenv/config';
import express from 'express';
import 'module-alias/register';
import routes from "./routes";

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const PORT = process.env.PORT || 3001;

app.use('/api', routes);


app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});