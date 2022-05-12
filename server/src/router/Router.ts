import { Router } from "express";
import { FeedBacks } from "../controllers/FeedBacks";
export const router = Router();

const newfeedback = new FeedBacks();

router.get('/', newfeedback.listfeedback);
router.post('/report', newfeedback.newfeedback)
router.delete('/delete/:id', newfeedback.deletefeedback)