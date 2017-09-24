export default {
  url: 'http://localhost:3000',
  getAll: function(endpoint) {
    return fetch(`${this.url}/${endpoint}`).then(response => response.json());
  },
  getObject: function(endpoint, id) {
    return fetch(`${this.url}/${endpoint}/${id}`).then(response => response.json());
  },
  post: function(endpoint, data) {
    const headers = new Headers();
    headers.set('Content-Type', 'application/json');
    return fetch(`${this.url}/${endpoint}`, {
      method: 'POST',
      body: data,
      headers: headers
    }).then(response => response.json());
  },
  put: function(endpoint, id, data) {
    const headers = new Headers();
    headers.set('Content-Type', 'application/json');
    return fetch(`${this.url}/${endpoint}/${id}`, {
      method: 'PUT',
      body: data,
      headers: headers
    }).then(response => response.json());
  },
  delete: function(endpoint, id) {
    return fetch(`${this.url}/${endpoint}/${id}`, {
      method: 'DELETE',
    }).then(response => response.json());
  }
}
