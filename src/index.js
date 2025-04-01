import prompt from "prompt";
import mainPrompt from "./prompts/prompt-main.js";
import createQRcode from "./services/qr-code/create.js";
import createPassword from "./services/password/create.js";

async function main() {
  prompt.get(mainPrompt, async (error, result) => {
    if (result.select == 1) await createQRcode();
    if (result.select == 2) await createPassword();
  });

  prompt.start();
}

main();
