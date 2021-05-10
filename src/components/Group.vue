<template>
    <div class="wrap">
        <div class="header">
            <div class="header-buttons">
                <button class="color-btn__1">
                    <img src="../assets/icons8-mute-unmute-20.png"/>
                </button>
                <button class="color-btn__1">
                    <img src="../assets/icons8-video-call-20.png"/>
                </button>
                <button class="color-btn__2">
                    <img src="../assets/icons8-signal-20.png"/>
                </button>
                <button class="color-btn__2">
                    <img src="../assets/icons8-settings-20.png"/>
                </button>
                <router-link to="/">
                    <button class="color-btn__2">
                        <img src="../assets/icons8-phone-20.png"/>
                    </button>
                </router-link>
            </div>
        </div>
        <div class="main">
            <QAwindow @close="closeQAModal" v-show="isQaVisible"/>
            <RPwindow @close="closeRPModal" v-show="isRpVisible"/>
        </div>
        <div>
            <img @click="sidebarShow = !sidebarShow" class="arrow" src="../assets/icons8-back-24.png">
        </div>
        <transition name="slide" v-show="sidebarShow">
            <sidebar
                    @showRPModal="showRPModal"
                    @showQAModal="showQAModal"
                    v-bind:messages="messages"
                    @send-new-message="sendNewMessage"
            />
        </transition>
        <div class="footer">
            <div class="user-icon"></div>
        </div>
    </div>
</template>

<script>
import QAwindow from '../components/QAwindow'
import RPwindow from "./RPwindow";
import sidebar from './sidebar'
export default {
    name:'Group',
    components:{
        RPwindow,
        QAwindow,
        sidebar
    },
    data(){
        return{
            id: this.$route.params['id'],
            messages:[
                {id:1, title:"hello im here"}
            ],
            isRpVisible: false,
            isQaVisible: false,
            sidebarShow:true

        }
    },
    methods:{
        sendNewMessage(message){
            this.messages.push(message)
        },
        showRPModal() {
            this.isRpVisible = true
        },
        closeRPModal() {
            this.isRpVisible = false
        },
        showQAModal() {
            this.isQaVisible = true
        },
        closeQAModal() {
            this.isQaVisible = false
        }
    }
}
</script>

<style scoped>


    .arrow{
        transform: rotate(180deg);
        position: absolute;
        right: 15px;
        top: 15px;
    }
    .wrap{
        overflow: hidden;
        min-height: 100vh;
        display: grid;
        grid-template-columns: 1fr 1fr 320px;
        grid-template-rows:100px 1fr 130px;
        grid-template-areas:
                "header header navbar-panel"
                "main main  navbar-panel"
                "footer footer navbar-panel";
    }
    .header{
        grid-area: header;
    }
    .main{
        grid-area: main;
        z-index:1;
    }
    .footer{
        grid-area: footer;
    }
    .header-buttons{
        width: 250px;
        height: 50px;
        background-color: #000000;
        margin-top: 10px;
        margin-left:auto;
        margin-right:auto;
        border-radius: 5px;
    }
    .header-buttons button{
        outline: none;
        padding-top: 6px;
        border: none;
        margin:5px 0 5px 4px;
        border-radius: 5px;
        width: 45px;
        height: 40px;
    }
    .color-btn__2:hover{
        border:1px solid #1890ff;
    }
    .color-btn__1{
        background-color: #1890ff;
    }
    .color-btn__2{
        background-color: #1e272d;
    }
    .user-icon{
        width: 100px;
        height: 100px;
        margin-left: auto;
        margin-right: auto;
        margin-bottom: 30px;
        background-color: #1890ff;
    }

    .navbar-btn_wrap button{
        margin-top: 12px;
        margin-left: 10px;
        height: 24px;
        display: inline-block;
        border-radius: 5px;
        border: none;
        color: #FFFFFF;
        background-color: #1890FF;
        outline: none;

    }
</style>
