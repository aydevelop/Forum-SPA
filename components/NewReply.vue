<template>
    <div>
        <div class="mt-10">
            <div class='name'>New reply</div>
            <vue-simplemde v-model="form.body" ref="markdownEditor" />
            <v-btn color="blue" nuxt @click="save">
                Add new reply
            </v-btn>
        </div>
    </div>
</template>

<script>
    import VueSimplemde from 'vue-simplemde'
    export default {
        props:['qSlug'],
        data:()=>({
            form:{
                body: ""
            }
        }),
        components: {
            VueSimplemde
        },
        methods:{
            async save(){
                let data = await this.$axios.$post(`question/${this.qSlug}/reply`,
                {body: this.form.body})
                
                console.log("test " + JSON.stringify(data));

                EventBus.$emit('newReply', data)
                this.form.body = ""
            }
        }
    }
</script>

<style scoped>
</style>