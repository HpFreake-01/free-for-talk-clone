<template>
    <div class="v-select">
            <span v-for="option in options"
                  :key="option.index"
                  @click="selectLanguage(option)"
            >{{option.language}}</span>
    </div>
</template>

<script>
export default {
    name: 'v-select',
    props: {
        options: {
            type: Array,
            default(){
                return
            }
        },
        length:{
            type: Array,
            default() {
                return;
            },
        }
    },
    methods: {
        selectLanguage(option){
            this.$emit('select', option)
        }
    }
}
</script>

<style scoped>
    .v-select{
        width: 100%;
        height: 70px;
        text-align: center;
        margin-top: 20px;
        margin-bottom: 30px;
    }
    .v-select span{
        display: inline-block;
        background-color: rgb(10,48,69);
        color: #FFFFFF;
        border: 1px #DD33DD solid;
        border-radius: 5px;
        font-size: 12px;
        line-height: 20px;
        padding: 0 7px;
        margin: 3px 2px;
    }
</style>