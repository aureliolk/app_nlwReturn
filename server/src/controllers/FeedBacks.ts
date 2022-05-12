import { Request, Response } from 'express';
import { Prisma } from '../database/PrismaClient';
import { transport, style } from '../adapters/nodemail/NodeEmail';

export class FeedBacks {

  async listfeedback(req: Request, res: Response) {
    const result = await Prisma.feedback.findMany()
    return res.status(200).json(result)
  };


  async newfeedback(req: Request, res: Response) {
    const { type, comment, screenshot } = req.body;
    const body =
      screenshot ? `
  ${style}
    <h1> Report Site Acos Server</h1>
    <div class="row"><h4> Type of Report : </h4> ${type}</div>
    <div class="row"><h4> Commet : </h4> ${comment}</div>
    <div class="row col"><h4> Screenshot : </h4><a href="${screenshot}" target="_blank"><img src="${screenshot}"</a></div>
  ` : `
  ${style}
    <h1> Report Site Acos Server</h1>
    <div class="row"><h4> Type of Report : </h4> ${type}</div>
    <div class="row"><h4> Commet : </h4> ${comment}</div>`

    await transport.sendMail({
      from: "Suport Acos Services <aurelio@acos-services.com>",
      to: "Aurélio Castro <aurelio.cos@outlook.com>",
      subject: "New Report for Acos Services",
      html: body
    })

    const result = await Prisma.feedback.create({
      data: {
        type,
        comment,
        screenshot
      }
    })
    return res.status(201).json(result)
  }

  async deletefeedback(req: Request, res: Response) {
    const id = req.params.id;
    console.log(req.params);
    const checkid = await Prisma.feedback.findFirst({
      where: {
        id
      }
    })
    if (checkid) {
      const result = await Prisma.feedback.delete({
        where: {
          id
        }
      })
      return res.status(200).json({
        msg: `Feedback ID ${id} deleted successfully`
      })
    }
    return res.status(200).json({
      msg: "Feedback Not Found"
    })
  }
}

