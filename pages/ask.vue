<template>
  <v-container>
    <h2>Sign up</h2>
    <v-form @submit.prevent="create">

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

        <v-btn color="blue" type="submit" nuxt>
            Create
        </v-btn>
    </v-form>
  </v-container>
</template>>

<script>
export default {
    data:()=>({
        form:{
            title: 123,
            category_id: null
        },
        categories: {}
    }),
    mathods: {
        create(){
            
        }
    },
    async asyncData({$axios, params}){
      let {data} = await $axios.$get('category');
      return {categories:data}
    },
}
</script>

<style scoped>
</style>