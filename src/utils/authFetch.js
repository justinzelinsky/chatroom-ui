const headers = {
  'Content-Type': 'application/json'
};

function doFetch (url, options) {
  return new Promise(function (resolve, reject) {
    fetch(url, options)
      .then(async function (response) {
        const body = await response.json();
        if (response.ok) {
          resolve(body);
        } else {
          reject(body);
        }
      }).catch(function (error) {
        reject(error);
      });
  });
}

async function get (url) {
  return doFetch(url, { headers, method: 'GET' });
}

async function post (url, body) {
  return doFetch(url, {
    body: JSON.stringify(body),
    headers,
    method: 'POST'
  }
  );
}

function setAuthToken (token) {
  if (token) {
    headers['Authorization'] = token;
  } else {
    delete headers['Authorization'];
  }
}

export {
  get,
  post,
  setAuthToken
};
