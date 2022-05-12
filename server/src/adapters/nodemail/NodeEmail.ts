import nodemailer from 'nodemailer';

const { comment, screenshot, type } = {
  type: null,
  comment: null,
  screenshot: null,
}

export const transport = nodemailer.createTransport({
  host: "smtp.mailtrap.io",
  port: 2525,
  auth: {
    user: "f5f445521e2825",
    pass: "b64e07fff75016"
  }
});

export const style = `
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
export const body =
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