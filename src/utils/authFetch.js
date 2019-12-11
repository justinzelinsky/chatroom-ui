const headers = {
  'Content-Type': 'application/json'
};

const request = (url, options) => {
  return new Promise((resolve, reject) => {
    fetch(url, options).then(async response => {
      try {
        const body = await response.json();
        if (response.status >= 200 && response.status < 300) {
          resolve(body);
        } else {
          reject(body);
        }
      } catch (err) {
        reject();
      }
    });
  });
};

export const get = async url => request(url, { headers, method: 'GET' });

export const post = async (url, body) =>
  request(url, { body: JSON.stringify(body), headers, method: 'POST' });

export const setAuthToken = token => {
  if (token) {
    headers['Authorization'] = token;
  } else {
    delete headers['Authorization'];
  }
};
