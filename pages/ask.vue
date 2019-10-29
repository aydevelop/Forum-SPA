<template>
  <v-container>
    <v-form @submit.prevent="askCreate">

        <v-text-field
        label="Title"
        v-model="form.title"
        type="text"
        required
        ></v-text-field>
        
        <v-select
          :items="categories"
          item-value="id"
          v-model="form.category_id"
          item-text="name"
          label="Category"
          autocomplete
        ></v-select>

        <vue-simplemde v-model="form.body" ref="markdownEditor" />

        <v-btn color="blue" type="submit" nuxt>
            Create
        </v-btn>
    </v-form>
  </v-container>
</template>>

<script>
import VueSimplemde from 'vue-simplemde'
export default {
    data:()=>({
        form:{
            title: "",
            category_id: "",
            body: ""
        },
        categories: {},
        content:"123",
        errors:{}
    }),
    methods: {
      async askCreate() {

        try{
            let data = await this.$axios.$post('question', this.form)
            console.log(data.path);
            this.$router.push(data.path)
        }catch (error) {
          console.log(error.response.data.errors)
        }
      }
    },
    components: {
      VueSimplemde
    },
    async asyncData({$axios, params}){
      let {data} = await $axios.$get('category');
      return {categories:data}
    },
}
</script>

<style>
  @import '~/node_modules/simplemde/dist/simplemde.min.css';

  .editor-toolbar{
    background-color: white;
  }
</style>