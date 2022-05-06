import { prisma } from "../../prisma";
import { FeedbackCreateData, Feedbackrepositories } from "../feedbacks-repositories";

export class Prismafeedbackrespositories implements Feedbackrepositories {
    async create({ type, comment, screenshot }: FeedbackCreateData) {
        await prisma.feedback.create({
            data: {
                comment,
                type,
                screenshot
            }
        })
    }
}