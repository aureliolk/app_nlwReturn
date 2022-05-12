import express from "express";
import { router } from "./router/Router"
import cors from 'cors'

const app = express();
const port = process.env.PORT || 3300;

app.use(express.json());
app.use(cors());
app.use(router)


app.listen(port, () => {
    console.log('listening on port ' + port);
});
