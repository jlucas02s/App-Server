import express from 'express';
import { router } from './routes';
import { CreateAtividadeController, DeleteAtividadeController, FindAtividadeController } from './controllers/CreateAtividadeController';
import cors from 'cors'
const app = express();

app.use(cors())
app.use(express.json());
app.use(router);


const createAtividade = new CreateAtividadeController()
const findAtividade = new FindAtividadeController();
const deleteAtividade= new DeleteAtividadeController();

router.get("/findAtividade", findAtividade.handle)
router.post("/createAtividade", createAtividade.handle)
router.delete("/deleteAtividade", deleteAtividade.handle )

app.listen(4003, () => console.log("server is running on PORT 4003"));










