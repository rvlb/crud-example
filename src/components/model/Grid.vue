<template>
  <div class="column is-half is-hcentered">
    <div class="field is-grouped is-grouped-right">
      <p class="control">
        <router-link :to="{ name: 'home' }">
          Voltar
        </router-link>
      </p>
      <p class="control">
        <router-link :to="{ name: 'create' }" class="button is-success">
          Inserir
        </router-link>
      </p>
    </div>
    <div>
      <table class="table is-fullwidth">
        <thead>
          <tr>
            <th v-for="field in fields">{{ field }}</th>
            <th colspan="3">Ações</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in list">
            <td v-for="(field, key) in fields">{{ item[key] }}</td>
            <td>
              <router-link :to="{ name: 'detail', params: { objectId: item.id } }">
                <span class="icon has-text-info">
                  <i class="fa fa-fw fa-lg fa-search-plus"></i>
                </span>
              </router-link>
            </td>
            <td>
              <router-link :to="{ name: 'update', params: { objectId: item.id } }">
                <span class="icon has-text-warning">
                  <i class="fa fa-fw fa-lg fa-pencil"></i>
                </span>
              </router-link>
            </td>
            <td>
              <router-link :to="{ name: 'delete', params: { objectId: item.id } }">
                <span class="icon has-text-danger">
                  <i class="fa fa-fw fa-lg fa-trash"></i>
                </span>
              </router-link>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import HttpService from '@/service';
import Models from '@/models';

export default {
  name: 'grid',
  data: () => ({
    fields: {},
    list: []
  }),
  methods: {},
  created: function() {
    const endpoint = this.$route.params.endpoint;
    const model = Models.get(endpoint);
    this.fields = model.fields;
    HttpService.getAll(endpoint)
      .then(json => {
        this.list = json;
      });
  }
}
</script>

<style lang="scss" scoped>
.table {
  th, td {
    text-align: center;
    vertical-align: middle;
  }
}
</style>
