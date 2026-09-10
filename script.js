        function gerarQRCode() {

            const link = document.getElementById("link").value;

            if (link === "") {
                alert("Digite um link!");
                return;
            }

            // Limpa o QR Code anterior
            document.getElementById("qrcode").innerHTML = "";

            // Cria o QR Code
            new QRCode(document.getElementById("qrcode"), {

                text: link,

                width: 180,
                height: 180,

                colorDark: "#000000",
                colorLight: "#FFFFFF",

                correctLevel: QRCode.CorrectLevel.H

            });
        }