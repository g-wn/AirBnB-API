import Cookies from 'js-cookie';

export const csrfFetch = async (url, options = {}) => {
  options.method = options.method || 'GET';
  options.headers = options.headers || {};

  if (options.method.toUpperCase() !== 'GET') {
    options.headers['Content-Type'] = options.headers['Content-Type'] || 'application/json';
    options.headers['CSRF-Token'] = Cookies.get('XSRF-Token');
  }

  const res = await window.fetch(url, options);

  if (res.status >= 400) throw res;

  return res;
};

// Call to restore the XSRF-TOKEN cookie, only use in dev.
export const restoreCSRF = () => {
  return csrfFetch('/api/csrf/restore');
};
