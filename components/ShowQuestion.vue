<template>
        <v-card>
            
            <v-container>
            <v-card-title>
                <div>
                    <div class="headline">
                        {{ data.title }}
                    </div>
                    <div class="grey--text subtitle">
                        {{ data.user }} said {{data.created_at}}
                    </div>
                </div>   
            
                

                <v-spacer></v-spacer>
                <v-btn color="teal">
                    5 Replies
                </v-btn>
            
            </v-card-title>
            
            </v-container>
        </v-card>
</template>

<script>

export default {
  props:['data'],
  mounted(){
  }
}

</script>

<style scoped>
    .subtitle{
         font-size: 1rem;
         font-weight: normal;
    }
</style>