// General api to acces data from web
const url = "http://www.mocky.io/v2/59d47711270000580507b335"
export default function api(path,params,method){  
  let options = Object.assign({headers: {
    'Accept': 'application/json, text/plain, */*',
    'Content-Type': 'application/json'
  }},{ method: method }, params ? { body: JSON.stringify(params) } : null );
  console.log("OPT",JSON.stringify(options))
  return fetch(url+path, options).then( resp => {
      let json = resp.json();
      if (resp.ok) {
        return json
      }
      return json.then(err => {throw err});
    }).then( json => json )
}
