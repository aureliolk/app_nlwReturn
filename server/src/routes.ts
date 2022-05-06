import express from "express";
export const routes = express.Router();
import { PrismaClient } from '@prisma/client';
import nodemailer from 'nodemailer';

const prisma = new PrismaClient({})
const transport = nodemailer.createTransport({
  host: "smtp.mailtrap.io",
  port: 2525,
  auth: {
    user: "f5f445521e2825",
    pass: "b64e07fff75016"
  }
});

routes.get('/', (req, res) => {
  res.status(200).json({
    msg: "API is running"
  })
});

routes.post('/report', async (req, res) => {
  const { comment, type, screenshot } = req.body;
  const style = `
  <style>
      body {
        padding: 1rem;
        text-align: center;
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 2px;
    }
      .row{
        display: flex;
        align-items: center;
        gap: 2px;
        height: 20px;
      }
      .row.col {
        flex-direction: column;
    }
      img{
        max-width: 70%;
      }

    </style>
  `
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
    <div class="row"><h4> Commet : </h4> ${comment}</div>
  `
  await transport.sendMail({
    from: "Suport Acos Services <aurelio@acos-services.com>",
    to: "Aurélio Castro <aurelio.cos@outlook.com>",
    subject: "New Report for Acos Services",
    html: body
  })

  const data = await prisma.feedback.create({
    data: {
      type,
      comment,
      screenshot
    }
  })

  res.status(201).json({ data })
})