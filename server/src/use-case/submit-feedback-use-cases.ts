import { MailAdapter } from "../adapters/mail-adapters";
import { Feedbackrepositories } from "../repositories/feedbacks-repositories";

interface SubmitFeedbackUseCaseRequest {
  type: string;
  comment: string;
  screenshot?: string;
}

export class SubmitFeedbackUseCase {
  constructor(
    private feedbackRepository: Feedbackrepositories,
    private mailAdapter: MailAdapter
  ) { }

  async execute(resquest: SubmitFeedbackUseCaseRequest) {
    const { type, comment, screenshot } = resquest;
    const fb = await this.feedbackRepository.create({
      type,
      comment,
      screenshot
    })

    await this.mailAdapter.sendemail({
      subject: "New Feedback",
      body: [
        `<p>Comentario: ${comment}</p>`,
        `<p>Typo: ${type}</p>`,
      ].join("\n")
    })

    return fb
  }


}