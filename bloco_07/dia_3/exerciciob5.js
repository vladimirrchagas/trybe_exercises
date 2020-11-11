const assert = require('assert');

const verify = (password) => {
  if (password == null) {
    return false;
  }

  const length = password.length;

  if (length< 8) {
    return false;
  }

  let contUpperCase = 0;
  let contLowerCase = 0;
  let contNumber = 0;

  for (let index = 0; index < length; index += 1) {
    switch (true) {
      case (password[index] >= 0):
        contNumber += 1;
        break
      case (password[index] == password[index].toUpperCase()):
        contUpperCase += 1;
        break;
      case (password[index] == password[index].toLowerCase()):
        contLowerCase += 1;
        break;
    }
  }

  if (contUpperCase === 0 || contLowerCase === 0 || contNumber === 0) {
    return false;
  } else {
    return true;
  }
}


assert.strictEqual(typeof verify, 'function');

// 1.1 password should be larger than 8 chars - OK!
assert.strictEqual(verify('Vlad123'), false);

// 1.2 password should not be null - OK!
assert.strictEqual(verify(), false);

// 1.3 password should have one uppercase letter at least - OK
assert.strictEqual(verify('vlad1234'), false);

// 1.4 password should have one lowercase letter at least - OK
assert.strictEqual(verify('VLAD1234'), false);

// 1.5 password should have one number at least
assert.strictEqual (verify('Vladimir'), false);
