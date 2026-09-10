📱 Gerador de QR Code

Um gerador de QR Code simples e intuitivo desenvolvido com HTML, CSS e JavaScript.

A aplicação permite que o usuário informe um link e gere automaticamente um QR Code correspondente diretamente no navegador.

🚀 Funcionalidades
🔗 Inserção de qualquer link ou URL
📱 Geração instantânea do QR Code
🎨 QR Code com cor personalizada
📐 Tamanho ajustável do QR Code
💻 Interface simples e responsiva
🌐 Funciona diretamente no navegador
🛠️ Tecnologias utilizadas
HTML5
CSS3
JavaScript
QRCode.js
📂 Estrutura do projeto
gerador-qrcode/
│
└── index.html

▶️ Como executar

Não é necessário instalar nenhuma dependência.

Clone este repositório:
git clone https://github.com/seu-usuario/seu-repositorio.git

Entre na pasta do projeto:
cd gerador-qrcode

Abra o arquivo index.html no navegador.
🎨 Personalização

É possível alterar a cor e o tamanho do QR Code diretamente no código JavaScript.

Exemplo:

new QRCode(document.getElementById("qrcode"), {
    text: link,
    width: 180,
    height: 180,
    colorDark: "#6A0DAD",
    colorLight: "#FFFFFF",
    correctLevel: QRCode.CorrectLevel.H
});

📸 Como funciona

O usuário informa um link no campo de texto e clica em "Gerar QR Code". O JavaScript utiliza a biblioteca QRCode.js para transformar o link em um código QR exibido na própria página.

📚 Objetivo

Este projeto foi desenvolvido como um exercício prático para aprender e aplicar conceitos de:

Manipulação do DOM
Eventos em JavaScript
HTML e CSS
Uso de bibliotecas externas
Geração dinâmica de conteúdo
📄 Licença

Este projeto está disponível para fins de estudo e aprendizado.
