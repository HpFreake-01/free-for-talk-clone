<template>
    <div class="groups-wrapper">
        <div class="group-wrap">
            <div style="display: flex">
                <span>
                    <img style="height: 30px; width: 30px;" src="../assets/logo.svg">
                </span>
                <div class="group-text">
                    <span style="font-weight:600;">{{group.language}}</span>
                    <i style="font-weight:100; padding-left: 5px">{{group.levelOfLanguage}}</i><br>
                    <span style="display: inline-block; font-size: 12px;">{{group.topic}}</span>
                </div>
            </div>
            <div class="group-user__icon">
                <span>
                    <img style="height: 50px; width: 50px;" src="../assets/logo.svg">
                    <img style="height: 50px; width: 50px;" src="../assets/logo.svg">
                    <img style="height: 50px; width: 50px;" src="../assets/logo.svg">
                </span>
                <div style="float:right;">
                    <router-link :to="`/group/${group.id}`" >
                        <button class="join-group__btn">Join and talk now!</button>
                    </router-link>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name:'GroupItem',
    props:{
        group:{
            type:Object,
            required:true
        }
    },
    components:{

    },
    methods:{
        length(){
                console.log(this.group.length());
        }
    }
}
</script>

<style scoped>
    .groups-wrapper{
        background-color: #1e272d;
        border-radius: 5px;
    }
    .group-text{
        padding: 2px;
        width:190px;
        color: #D3D3D3;
    }
    .group-wrap{
    }
    .group-user__icon{
    }
    .join-group__btn{
        outline: none;
        background-color:initial ;
        color: #1890ff;
        border-radius: 5px;
        border: 1px rgb(81, 99, 105) dashed;
        padding: 0 15px;
        height: 32px;
        width: 160px;
    }
</style>