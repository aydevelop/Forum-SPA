<template>
    <v-container>
        <v-form>

            <v-text-field
            label="Title"
            v-model="form.title"
            type="text"
            required
            ></v-text-field>

            <vue-simplemde v-model="form.body" ref="markdownEditor" />

            <v-btn icon small @click="update">
                <v-icon>mdi-content-save</v-icon>
            </v-btn>

            <v-btn icon small class="cancel-btn" @click="cancel" >
                <v-icon>mdi-cancel</v-icon>
            </v-btn>

        </v-form>
    </v-container>
</template>

<script>
    import VueSimplemde from 'vue-simplemde'
    export default {
        props:['data'],
        data: () => ({
            form: {
                title: "",
                body: "",
                slug: ""
            }
        }),
        components: {
            VueSimplemde
        },
        mounted(){
            this.form = {...this.data};
        },
        methods:{
            cancel(){
                EventBus.$emit('cancelEditing')
            },
            async update(){
                await this.$axios.$patch(`question/${this.form.slug}`, this.form)
                this.$emit('update:question', this.form)
                this.cancel()
            }
        }
    }
</script>

<style>
  @import '~/node_modules/simplemde/dist/simplemde.min.css';

  .editor-toolbar{
    background-color: white;
  }

  .cancel-btn{
      margin-left: 10px;
  }
</style>