<template>
  <div class="column is-half is-hcentered">
    <div class="page-title">
      <p class="is-size-1">{{ title }}</p>
    </div>
    <div>
      <form v-on:submit.prevent="onSubmit">
        <div class="field" v-for="(field, key) in fields">
          <label class="label">{{ field }}</label>
          <div class="control">
            <input class="input" type="text" :placeholder="field" v-model="formData[key]" :disabled="disabled" required>
          </div>
        </div>
        <div class="field is-grouped is-grouped-right">
          <p class="control">
            <router-link :to="{ name: 'list' }" class="button">Voltar</router-link>
          </p>
          <p v-if="showButton" class="control">
            <button class="button" :class="buttonClass">{{ title }}</button>
          </p>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import router from '@/router';
import HttpService from '@/service';
import Models from '@/models';

export default {
  name: 'form',
  data: () => ({
    title: '',
    showButton: true,
    buttonClass: '',
    disabled: false,
    submitFunction: undefined,
    fields: {},
    formData: {},
  }),
  methods: {
    onSubmit() {
      this.submitFunction(JSON.stringify(this.formData)).then(_ => {
        router.replace({ name: 'list' });
      });
    }
  },
  created: function() {
    const route = this.$route;
    const endpoint = route.params.endpoint;
    const model = Models.get(endpoint);

    this.fields = model.fields;

    // Has object to display
    if(route.params.hasOwnProperty('objectId')) {
      HttpService.getObject(endpoint, route.params.objectId)
        .then(json => {
          this.formData = json;
        });
    }

    if(route.name === 'create') {
      this.title = 'Inserir';
      this.buttonClass = 'is-success';
      this.submitFunction = (data => HttpService.post(endpoint, data));
    } else if(route.name === 'detail') {
      this.title = 'Visualizar';
      this.showButton = false;
      this.disabled = true;
    } else if(route.name === 'update') {
      this.title = 'Atualizar';
      this.buttonClass = 'is-warning';
      this.submitFunction = (data => HttpService.put(endpoint, route.params.objectId, data));
    } else if(route.name === 'delete') {
      this.title = 'Deletar';
      this.buttonClass = 'is-danger';
      this.disabled = true;
      this.submitFunction = (_ => HttpService.delete(endpoint, route.params.objectId));
    }
  }
}
</script>

<style lang="scss" scoped></style>
