<template>
    <v-card  class="mr-5">
        <v-toolbar color="cyan" dark dense>
              <v-toolbar-title>Categories</v-toolbar-title>
              <div v-if="categorySelect" class="ml-2" >(selected: {{ categorySelect }} )</div>
              <v-spacer></v-spacer>
              <div v-if="categorySelect" class="custom black--text"  @click="updateName('')">reset select</div>
        </v-toolbar>

        <v-list>
            <v-list-item class="custom" @click="updateName(category.name)" v-for="category in categories" :key="category.id">
                {{ category.name }}
            </v-list-item>
        </v-list>

    </v-card>
</template>

<script>
    export default {
        data: ()=>({
            categorySelect:"",
            categories:[]
        }),
        async created(){
            let {data} = await this.$axios.$get('category')
            this.categories = data
        },
        methods:{
            updateName(category){
                this.categorySelect = category
                this.$emit('update:category', category)
            }
        }
    }
</script>

<style scoped>
    .custom{
        cursor: pointer;
    }

</style>