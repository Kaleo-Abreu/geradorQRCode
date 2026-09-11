Claro! Aqui está o **README completo**, já com a estrutura corrigida para `index.html`, `style.css` e `script.js`:

# 📱 Gerador de QR Code

Um gerador de QR Code simples e intuitivo desenvolvido com **HTML, CSS e JavaScript**.

A aplicação permite que o usuário informe um link e gere automaticamente um QR Code correspondente diretamente no navegador.

> ⏱️ **Atenção:** após gerar o QR Code, é necessário **aguardar aproximadamente 3 segundos** para que a interface de impressão seja exibida.

## 🚀 Funcionalidades

* 🔗 Inserção de qualquer link ou URL
* 📱 Geração instantânea do QR Code
* 🎨 QR Code com cor personalizada
* 📐 Tamanho ajustável do QR Code
* 🖨️ Interface de impressão do QR Code
* 💻 Interface simples e responsiva
* 🌐 Funciona diretamente no navegador

## 🛠️ Tecnologias utilizadas

* HTML5
* CSS3
* JavaScript
* QRCode.js

## 📂 Estrutura do projeto

```text
gerador-qrcode/
│
├── index.html
├── style.css
└── script.js
```

## ▶️ Como executar

Não é necessário instalar nenhuma dependência.

**1. Clone este repositório:**

```bash
git clone https://github.com/Kaleo-Abreu/geradorQRCode.git
```

**2. Entre na pasta do projeto:**

```bash
cd gerador-qrcode
```

**3. Abra o arquivo `index.html` no navegador.**

> ⏱️ **Importante:** ao utilizar a opção de impressão, aguarde cerca de **3 segundos** para que a interface de impressão seja carregada.

## 🎨 Personalização

É possível alterar a cor e o tamanho do QR Code diretamente no código JavaScript.

**Exemplo:**

```javascript
new QRCode(document.getElementById("qrcode"), {
    text: link,
    width: 180,
    height: 180,
    colorDark: "#6A0DAD",
    colorLight: "#FFFFFF",
    correctLevel: QRCode.CorrectLevel.H
});
```

## 📸 Como funciona

O usuário informa um link no campo de texto e clica em **"Gerar QR Code"**. O JavaScript utiliza a biblioteca **QRCode.js** para transformar o link em um código QR, que é exibido diretamente na página.

Após gerar o QR Code, o usuário pode acessar a opção de impressão. **A interface de impressão é exibida após aproximadamente 3 segundos**, permitindo que o QR Code seja carregado corretamente antes da impressão.
