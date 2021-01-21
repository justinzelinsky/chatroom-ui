const headers = {
  'Content-Type': 'application/json'
};

async function doFetch (url, options) {
  try {
    const response = await fetch(url, options);
    const body = await response.json();
    if (response.ok) {
      return body;
    }
    throw new Error(body);
  } catch (error) {
    throw new Error(error);
  }
}

async function get (url) {
  return doFetch(url, {
    headers,
    method: 'GET'
  });
}

async function post (url, body) {
  return doFetch(url, {
    body: JSON.stringify(body),
    headers,
    method: 'POST'
  });
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
