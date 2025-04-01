import chalk from "chalk";
import qr from "qrcode-terminal";
async function handle(error, result) {
  if (error) {
    console.log("err on aplication");
    return;
  }

  const isSamll = result.type == 2;
  qr.generate(result.link, { small: isSamll }, (qrcode) => {
    console.log(chalk.green.bgWhite("QR Code gerado com sucesso!\n"));
    console.log(qrcode);
  });
}

export default handle;
