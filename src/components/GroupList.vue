<template>
    <div :class="{ groupItemWrap1: isActive1, groupItemWrap2: isActive2, groupItemWrap3: isActive3  }">
        <GroupItem v-for="group of groups"
                   v-bind:group="group"
                   :key="group.id"
        />
    </div>
</template>

<script>
import GroupItem from "./GroupItem";

export default {

    name:'GroupList',
    props:['groups'],
    components:{
        GroupItem
    },
    data(){
        return{
            isActive1: false,
            isActive2: true
        }
    },
    methods:{
        activeFirst(){
            this.$emit('activeFirst')
        },
        activeSecond(){
            this.$emit('activeSecond')
        },
        activeThird(){
            this.$emit('activeSecond')
        }
    }

}
</script>

<style scoped>
    .groupItemWrap1{
        display: grid;
        grid-template-columns: 1fr;
        grid-gap: 30px;
    }
    .groupItemWrap2{
        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-gap: 30px;
    }
    .groupItemWrap3{
        border-radius: 5px;
        display: grid;
        grid-template-columns: 373px 373px 373px;
        grid-auto-rows: 250px;
        height: 100%;
        grid-gap: 20px;
    }
    div{
        margin: 0;
        padding: 0;
    }
</style>