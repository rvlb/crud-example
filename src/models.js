export default {
  models: [
    {
      title: 'Itens',
      endpoint: 'items',
      fields: {
        name: 'Nome',
        description: 'Descrição',
      }
    },
    {
      title: 'Jogos',
      endpoint: 'games',
      fields: {
        title: 'Título',
        publisher: 'Desenvolvedora',
        platform: 'Plataforma',
      }
    }
  ],
  get: function(endpoint) {
    return this.models.find(obj => obj.endpoint === endpoint);
  },
  all: function() {
    return this.models;
  }
}
