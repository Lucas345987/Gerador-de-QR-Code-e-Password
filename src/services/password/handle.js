async function handle() {
  let caracteris = [];
  let password = "";

  const passwordLength = process.env.PASSWORD_LENGTH;

  if (process.env.UPPERCASE_LETTERS == "true") {
    caracteris.push(..."ABCDEFGHIJKLMNOPQRSTUVWXYZ");
  }

  if (process.env.LOWERCASE_LETTERS == "true") {
    caracteris.push(..."abcdefghijklmnopqrstuvwxyz");
  }

  if (process.env.NUMBERS == "true") {
    caracteris.push(..."0123456789");
  }
  if (process.env.SPECIAL_CHARACTERS == "true") {
    caracteris.push(..."!?.:;-_+-*/=<>%@#$&*()[]{}|");
  }

  for (let i = 0; i < passwordLength; i++) {
    const index = Math.floor(Math.random() * caracteris.length);
    password += caracteris[index];
  }
  return password;
}

export default handle;
