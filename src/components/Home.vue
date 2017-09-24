<template>
  <div class="column is-half is-hcentered">
    <p class="is-size-1">Tabelas</p>
    <ol>
      <li v-for="model in list" class="is-size-4">
        <router-link :to="{ name: 'list', params: { endpoint: model.endpoint } }">
          {{ model.title }}
        </router-link>
      </li>
    </ol>
  </div>
</template>

<script>
import Models from '@/models';

export default {
  name: 'home',
  data: () => ({
    list: []
  }),
  created: function() {
    this.list = Models.all();
  }
}
</script>

<style lang="scss" scoped></style>
