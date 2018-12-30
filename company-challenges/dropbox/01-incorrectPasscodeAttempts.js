const incorrectPasscodeAttempts = (passcode, attempts) => {
  let failedAttempts = 0;

  for (let attempt of attempts) {
    if (attempt !== passcode) {
      failedAttempts++;

      if (failedAttempts === LOCKOUT_ATTEMPTS) {
        return true;
      }
    } else {
      failedAttempts = 0;
    }
  }

  return false;
};

const LOCKOUT_ATTEMPTS = 10;
