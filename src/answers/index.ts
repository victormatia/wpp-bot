export const greeting = "E ai! Tranquilo?\nEu sou Victor Matias e sou dev. Se você recebeu essa mensagem significa que o bot que estou criando está funcionando! \o/ \nPara começar o atendimento digite: *'Começar'*.";

export const personalizedGreeting = (name?: string) => {
  if (!name) {
    return greeting;
  }
  return `E ai, ${name}! Tranquilo?\nEu sou Victor Matias e sou dev. Se você recebeu essa mensagem significa que o bot que estou criando está funcionando! \o/ \nPara começar o atendimento digite: *'Começar'*.`;
}

export const services = 'Agora, digite o número do serviço para o qual serviço você deseja ser atendimento:\n 1. Fazer orçamento\n 2. Ver portifólio\n 3. Encerrar atendimento';

export const redirectToPortfolio = 'Para saber um pouco mais sobre minha trajetoria e trabalhos clique abaixo:\nhttps://vitu-portfolio.vercel.app/';

export const unavailableService = 'Serviço temporariamente suspenso';

export const farewell = 'Agradeço o contato, tenha um ótimo dia! 👋🏼';
