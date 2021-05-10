<template>
    <form>
        <div class="modal" aria-describedby="modalDescription">
            <section>
                <slot class="body-modal" name="body">
                    <div class="wrap-btn">
                        <button class="close-btn" type="button" @click="close">x</button>
                    </div>
                    <div class="main-content">
                        <div class="title">
                            <span>Free4Talk Questions and Answers</span>
                        </div>
                        <div class="a-q__wrap">
                            <ul class="items-wrap">
                                <li class="item-wrap">
                                     <h1 tabindex="1" class="item-question">1. Someone knows my location or my IP address. Why?</h1>
                                    <ul class="items-list">
                                        <li>Free4talk uses P2P (Peer to Peer) Technology. It means your data (video/audio) go directly to your partners without using any servers.</li>
                                        <li>P2P works by exchanging your IP address with other participants. Therefore your partners know your IP address.</li>
                                        <li>From your IP address, they can find your location. But they CANNOT find your absolute location. They only know the city where you are living.</li>
                                        <li>Worries about hackers getting your IP? Honestly, hackers can hack you without using Free4Talk if they want.</li>
                                    </ul>
                                </li>

                                <li class="item-wrap">
                                    <h1 tabindex="-1" class="item-question">2. I get banned because of using VPN/Proxy for hiding my IP address. Why?</h1>
                                    <ul class="items-list">
                                        <li>Well, the Free4Talk system bans someone by blocking the IP address.</li>
                                        <li>When you change your IP address by using VPN/Proxy to the same banned IP address of the banned account, you get banned too.</li>
                                    </ul>
                                </li>
                                <li class="item-wrap">
                                    <h1 tabindex="-1" class="item-question">3. While I am talking/listening I get disconnected or interrupted on my Phone. Why?</h1>
                                    <ul class="items-list">
                                        <li>Your Phone tries to save the battery by stopping your internet/microphone/camera when you leave the Browser or turn off Screen.</li>
                                        <li>How to avoid that? Well! First, you should DISABLE Battery Saving Mode (Low Power Mode) on your Phone. Second, DO NOT leave the Browser<br/> for a long time or turn off Screen.</li>
                                    </ul>
                                </li>
                            </ul>
                        </div>
                    </div>
                </slot>
            </section>
        </div>
    </form>
</template>

<script>


    export default {
        name:'QAwindow',
        components:{
        },
        methods:{
            close() {
                this.$emit('close');
            }
        }
    }
</script>

<style scoped>

    .modal {
        margin-top: 20%;
        margin-left: auto;
        margin-right: auto;
        border-radius: 4px;
        box-shadow: 0 4px 12px rgb(0 0 0 / 15%);
        background-color: #1e272d;
        width: 1000px;
        height: auto;
    }
    .wrap-btn{
        height: 15px;
    }
    .close-btn{
        margin-top: -10px;
        padding:0;
        width: 15px;
        height: 15px;
        outline: none;
        border: none;
        float: right;
        color:#FFFFFF;
        background-color: #f5222d;
    }
    .main-content{
        margin-top: 10px;
    }
    .title{
        height: 30px;
        color: #FFFFFF;
        text-align: center;
        margin:0 0 10px 0;
        font-size: 20px;
        font-weight: 500;
    }
    .a-q__wrap{
        padding: 15px;
    }

    .items-wrap {
        list-style: none;
        border: 1px solid #1c61af;
        background-color:rgba(2, 68, 125, 0.2); ;
        border-radius: 5px;
        margin: 0;
        padding: 0;
    }

    .item-wrap {
        overflow: hidden;
        border-bottom: 1px solid #1c61af;
    }
    .items-list{
        background-color: #1e272d;
        padding: 20px 0 20px 40px;
        color: #faad14;
        font-size: 14px;
    }
    .items-list li {
        padding: 4px;
    }

    .item-question {
        position: relative;
        font-size: 14px;
        font-weight: normal;
        color: #FFFFFF;
        cursor: pointer;
        padding: 0 16px 0 40px;
    }
    .item-question:focus {
        outline: 0;
    }
    .item-question::before {
        content: '>';
        position: absolute;
        top: 0;
        left: 12px;
        width: 1em;
        text-align: center;

    }
    .item-question:focus::before {
        transform: rotate(90deg);
        transition-duration: .2s;
    }
    .item-wrap ul {
        transition-property: height;
        display: none;
    }
    .item-wrap h1:focus ~ ul {
        display: block;
    }


</style>