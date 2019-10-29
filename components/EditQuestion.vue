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

            <v-btn color="blue" type="submit" nuxt>
                Edit
            </v-btn>

        </v-form>
    </v-container>
</template>

<script>
    import VueSimplemde from 'vue-simplemde'
    export default {
        data: () => ({
            form: {
                title: null,
                body: null
            }
        }),
        components: {
            VueSimplemde
        },
    }
</script>

<style>
  @import '~/node_modules/simplemde/dist/simplemde.min.css';

  .editor-toolbar{
    background-color: white;
  }
</style>