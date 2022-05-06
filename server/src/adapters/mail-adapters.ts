export interface SendMailData {
  subject: string;
  body: string;
}

export interface MailAdapter {
  sendemail: (data: SendMailData) => Promise<void>;
}