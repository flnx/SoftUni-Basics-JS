// guess the password

function guessThePassword(input) {
  let addPass = input[0];
  let password = 's3cr3t!P@ssw0rd';

  if (addPass == password) {
    console.log('Welcome');
  } else {
    console.log('Wrong password!');
  }
}
guessThePassword(['s3cr3t!P@ssw0rd']);
