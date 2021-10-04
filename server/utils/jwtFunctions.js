const promiseJWT = (jwtFunc, payload) => {
  const promise = new Promise((resolve, reject) => {
    jwtFunc(payload, process.env.JWT_SECRET_KEY, (err, result) => {
      if (err) {
        reject(err);
      } else {
        resolve(result);
      }
    });
  });
  return promise;
};

module.exports = promiseJWT;
