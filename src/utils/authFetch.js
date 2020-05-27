const headers = {
  'Content-Type': 'application/json'
};

function doFetch (url, options) {
  return new Promise((resolve, reject) => {
    fetch(url, options)
      .then(async function(response) {
        const body = await response.json();
        if (response.ok) {
          resolve(body);
        } else {
          reject(body);
        }
      });
  });
}

export async function get(url) {
  return doFetch(url, { headers, method: 'GET' });
}

export async function post(url, body) {
  return doFetch(url, {
    body: JSON.stringify(body),
    headers,
    method: 'POST'
  }
  );
}

export function setAuthToken(token) {
  if (token) {
    headers['Authorization'] = token;
  } else {
    delete headers['Authorization'];
  }
}
