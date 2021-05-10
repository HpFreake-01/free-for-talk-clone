<template>
    <form>
        <div class="modal" aria-describedby="modalDescription">
            <section>
                <slot class="body-modal" name="body">
                    <div class="modal-wrap">
                        <div class="modal-content">
                            <div class="modal-content__title"><span>Free4Talk Rules and Penalties</span></div>
                            <div class="content-title__rules"><span>* Admins ban a user only when his/her behavior affects many people on Free4Talk.</span></div>
                            <div class="content-title__rules"><span>* Admins DO NOT solve personal conflicts on Free4Talk.</span></div>
                            <div class="content-title__rules"><span>* You are free to use the KICKING and BLOCKING features in your room.</span></div>
                            <div class="modal-rules">
                                <ul>
                                    1. DO NOT ABUSE the TOPIC <span>(Between 3-15 days ban)</span>
                                    <li>NO sensitive topics.</li>
                                    <li>NO bad words...</li>
                                    <li>NO insulting anyone.</li>
                                    <li>...</li>
                                </ul>
                                <ul>
                                    2. DO NOT troll on Free4Talk <span>(365 days ban)</span>
                                    <li>NO impersonating or creating identical profiles of other users on Free4Talk.</li>
                                    <li>NO screaming, annoying, or bothering other participants in the rooms.</li>
                                    <li>NO watching or sharing inappropriate/sensitive content.</li>
                                    <li>...</li>
                                </ul>
                            </div>
                            <div class="under-rules__text"><span>Be nice and polite. Thanks!</span></div>
                            <div style="height: 52px;">
                                <button class="rules-btn" type="button" @click="close">
                                    <img src="../assets/icons8-checkmark-yes-16.png">
                                    I have read and agree to these rules.
                                </button>
                            </div>
                        </div>
                    </div>
                </slot>
            </section>
        </div>
    </form>
</template>

<script>


export default {
    name:'RPwindow',
    methods:{
        close()
        {
            this.$emit('close');
        }
    }

    }
</script>

<style scoped>
    .modal {
        margin-top: 17%;
        margin-left: auto;
        margin-right: auto;
        border-radius: 4px;
        box-shadow: 0 4px 12px rgb(0 0 0 / 15%);
        background-color: #1e272d;
        width: 1000px;
        height: 380px;
    }
    .modal-wrap{
        height: 335px;

        margin: 25px 15px 15px 15px;
    }
    .modal-content{
        width: 100%;
    }
    .modal-content__title{
        color: #FFFFFF;
        font-size: 20px;
        margin: 0 0 10px 0;
        text-align: center;
        font-weight: bold;
    }
    .content-title__rules{
        text-align: center;
        color: #D3D3D3;
        font-size: 14px;

    }
    .modal-rules{
        display: flex;
        margin: 15px 8px 0 8px;
        padding: 8px;
        color: #faad14;
        font-size: 14px;
    }
    .modal-rules ul span{
        color: #f5222d;
    }
    .modal-rules ul li {
        list-style-type: circle;
    }
    .under-rules__text{
        text-align: right;
        color: #FFFFFF;
        font-size: 20px;
        font-weight: 500;
        margin: 0 0 10px 0;
    }
    .rules-btn{
        background-color: #1890ff;
        color: #FFFFFF;
        border-radius: 5px;
        border: none;
        height: 32px;
        width: 278px;
        outline: none;
        margin-top: 10px;
        margin-left: 36%;
        margin-right: 36%;
    }
</style>