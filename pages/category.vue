<template>
<v-container>
    <v-form>
        <v-text-field
        label="Category Name"
        v-model="form.name"
        required
        ></v-text-field>

        <v-btn @click="createCategory" color="blue">Create</v-btn>
    </v-form>

    <v-card class="mt-10">
        <v-toolbar color="cyan" dark dense>
            <v-toolbar-title>
                Categories
            </v-toolbar-title>
        </v-toolbar>

        <v-list>
            <div v-for="category in categories" 
                :key="category.name">
                <v-list-item>
                    <v-list-item-action>
                        <v-btn icon small>
                            <v-icon>mdi-pencil</v-icon>
                        </v-btn>
                    </v-list-item-action>

                    <v-list-item-content>
                        <v-list-item-content>
                            {{ category.name }}
                        </v-list-item-content>
                    </v-list-item-content>
                    
                    <v-list-item-action>
                        <v-btn icon small>
                            <v-icon>mdi-delete</v-icon>
                        </v-btn>
                    </v-list-item-action>
                </v-list-item>
                <v-divider></v-divider>
            </div>
        </v-list>

    </v-card>
</v-container>
</template>

<script>
    export default {
        data: ()=>({
            form:{
                name:""
            },
            categories: {}
        }),
        methods:{
            async createCategory(){
                let {data} = await this.$axios.$post('category', this.form)
                console.log(JSON.stringify())
            }
        },
        async mounted(){
            let {data} = await this.$axios.$get('category')
            this.categories = data
        }
    }
</script>

<style scoped>
</style>