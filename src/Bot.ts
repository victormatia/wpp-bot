import { create, Message, Whatsapp } from 'venom-bot';
import { farewell, personalizedGreeting, redirectToPortfolio, services, unavailableService } from './answers';

class Bot {
  private _client: Whatsapp;
  public status: string

  public init() {
    const qr = (base64Qrimg: string) => {}; // retorna o qrcode em string

    const status = (statusSession: string) => {
      this.status = statusSession;
    };

    create('Assistant Jarvis', qr, status)
      .then((client) => this.start(client))
      .catch((e) => console.error(e));
  }

  private start(client: Whatsapp) {
    this._client = client;

      this._client.onMessage((message) => {
        if (!message.isGroupMsg) {
          this.replyMessagens(message);
        }
      });
  }

  private async replyMessagens(message: Message) {
    const convertedMessage = message.body.toLowerCase();
    const recipient = message.from;

    switch(convertedMessage) {
      case 'começar': this.sendMessage(recipient, services);
      case '1': this.sendMessage(recipient, unavailableService);
      case '2': this.sendMessage(recipient, redirectToPortfolio);
      case '3': this.sendMessage(recipient, farewell);
      default: this.sendMessage(
        recipient,
        personalizedGreeting(message.sender?.name || message.sender?.pushname),
      );
    }
  }

  private async sendMessage(from: string, body: string) {
    this._client.sendText(from, body)
      .then((result) => {
        console.log({
          status: 'Message sent',
          // result,
        });
      })
      .catch((erro) => {
        console.error('Error when sending: ', erro);
      });
  }
}

export default Bot;
