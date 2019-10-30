<template>
    <v-card  class="mr-5">
        <v-toolbar color="cyan" dark dense>
              <v-toolbar-title>Categories</v-toolbar-title>
        </v-toolbar>

        <v-list>
            <v-list-item v-for="category in categories" :key="category.id">
                {{ category.name }}
            </v-list-item>
        </v-list>

    </v-card>
</template>

<script>
    export default {
        data: ()=>({
            categories:[]
        }),
        async created(){
            let {data} = await this.$axios.$get('category')
            this.categories = data
        }
    }
</script>

<style scoped>
</style>