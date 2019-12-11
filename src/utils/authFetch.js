const headers = {
  'Content-Type': 'application/json'
};

const doFetch = (url, options) => {
  return new Promise((resolve, reject) => {
    fetch(url, options).then(async response => {
      const body = await response.json();
      if (response.ok) {
        resolve(body);
      } else {
        reject(body);
      }
    });
  });
};

export const get = async url => doFetch(url, { headers, method: 'GET' });

export const post = async (url, body) =>
  doFetch(url, { body: JSON.stringify(body), headers, method: 'POST' });

export const setAuthToken = token => {
  if (token) {
    headers['Authorization'] = token;
  } else {
    delete headers['Authorization'];
  }
};
