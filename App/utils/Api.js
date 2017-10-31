// General api to acces data from web
import URL from './Constants';

export default function api(path, params, method) {
  const options = Object.assign(
    {
      headers: {
        Accept: 'application/json, text/plain, */*',
        'Content-Type': 'application/json',
      },
    },
    { method },
    params ? { body: JSON.stringify(params) } : null,
  );
  console.log('OPT', JSON.stringify(options));
  return fetch(URL + path, options)
    .then((resp) => {
      const json = resp.json();
      if (resp.ok) {
        return json;
      }
      return json.then((err) => {
        throw err;
      });
    })
    .then(json => json);
}
