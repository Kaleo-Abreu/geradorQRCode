function gerarQRCode() {
    const link = document.getElementById("link").value;

    if (link === "") {
        alert("Digite um link!");
        return;
    }


    document.getElementById("qrcode").innerHTML = "";

    new QRCode(document.getElementById("qrcode"), {
        text: link,
        width: 180,
        height: 180,
        colorDark: "#000000",
        colorLight: "#FFFFFF",
        correctLevel: QRCode.CorrectLevel.H
    });

    setTimeout(() => {
        window.print();
    }, 3000);
}