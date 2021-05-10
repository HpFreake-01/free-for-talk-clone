<template>
    <transition>
        <div class="navbar-panel">
            <div></div>
            <div class="navabar-header">
                <div class="navbar-btn_wrap">
                    <button @click="showQAModal" style="display: block" type="button">Questions and Answers</button>
                    <button @click="showRPModal" style="display: inline-block" type="button">Rules and Penalties</button>
                </div>
            </div>
            <div class="navabar-main">
                <div class="navbar-wrapper">
                    <div class="messages-wrapper" v-for="message in messages" :key="message.id">
                        <span class="user-img">{{message.userImg}}</span>
                        <div class="message-wrap" >
                            <span class="user-name">User name</span>
                            <span class="message">{{message.title}}</span>
                        </div>
                        <span class="message-time">time 10:45 AM</span>
                    </div>
                </div>
            </div>
            <div class="navabar-footer">
                <div class="navabar-footer-wrap">
                    <textarea v-on:keyup.enter="sendMessage" v-model="textMessage" class="navbar-textarea" placeholder="Enter chat message or link here.
Type @ to mention"></textarea>
                </div>
            </div>
        </div>
    </transition>
</template>

<script>

export default {
    name:'sidebar',
    data(){
        return{
            textMessage:''
        }
    },
    props:[
        'messages'
    ],
    methods:{
        showQAModal(){
            this.$emit('showQAModal')
        },
        showRPModal() {
            this.$emit('showRPModal')
        },
        sendMessage(){
            if(this.textMessage.trim()){
                const sendNewMessage = {
                    id:2,
                    title: this.textMessage
                }
                this.$emit('send-new-message', sendNewMessage)
                this.textMessage =''
            }
        },

    }
}
</script>

<style scoped>
    .navbar-panel{
        height: auto;
        grid-area: navbar-panel;
        background-color: #1e272d;
        box-shadow: 2px 2px 10px 0;
        display: grid;
        grid-template-columns: 1fr;
        grid-template-rows:30px 83px 1fr 110px;
    }
    .navabar-header{
        width: 100%;
    }
    .navabar-header:hover{
        background-color:#181f24;
    }

    .navbar-collapse{
        width: 100%;
    }
    .navabar-main{
        margin-bottom: 10px;
        width: 100%;
    }
    .navbar-wrapper{
        height: 100%;
    }
    .messages-wrapper{
        display: flex;
        width: 300px;
        padding: 10px;
    }
    .messages-wrapper:hover{
        background-color:#181f24;
    }
    .message-wrap{
        display:block;
        color: #FFFFFF;
        padding: 0 0 0 10px;
    }
    .message{
        display: inline-block;
        width: 238px;
        padding: 5px 0 0 0;
        text-align: left;
        overflow: hidden;
        font-size: 14px;
    }
    .message-time{
        color: #D3D3D3;
        position: absolute;
        right: 10px;
        margin-top: 2px;
        font-size: 10px;
        opacity: 0.5;
    }
    .user-name{
        font-size: 14px;
        color: #2F94E9;
        display: flex;
        width: 100%;
    }
    .user-img{
        width: 32px;
        height: 32px;
        background-color: #1890FF;
        border-radius: 5px;
    }
    .navabar-footer{
        background-color: #161d22;
        width: 100%;
        height: 110px;
        position: sticky;
        bottom: 0;
        right: 0;
        left: 0;
    }
    .navabar-footer-wrap{
        padding-top: 20px;
        margin-left:10px;
        margin-right: 10px;
    }
    .navbar-textarea {
        background-color: #1e272d;
        resize: none;
        outline: none;
        padding:8px 0 8px 4px;
        color: #FFFFFF;
        border-radius: 5px;
        border: 1px solid #1890ff;
        width: 290px;
        height: 60px;
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