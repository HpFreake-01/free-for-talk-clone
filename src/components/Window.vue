<template>
    <transition name="modal-fade">
        <form @submit.prevent="onSubmit">
            <div class="modal-backdrop">
                <div class="modal" aria-describedby="modalDescription">
                    <span class="modal-title">
                        <span style="color: #f5222d">NOTE</span>: You will get banned if you abuse the Topic (<a href="/" style="color: #faad14">click here for more detail)</a>
                    </span>
                    <section>
                        <slot class="body-modal" name="body">
                            <div style="display: flex">
                                <div class="body-modal__items">
                                    <span class="body-modal__title">Topic</span>
                                    <input placeholder="Any topic" class="body-modal__input" type="text" v-model="topic">
                                </div>
                                <div class="body-modal__items">
                                    <span class="body-modal__title">Peoples</span>
                                    <select style="width: 125px;" class="body-modal__select" v-model="quantity">
                                        <option v-for="quantity in quantityOfMembers" :key="quantity.id">{{quantity.quantity}}</option>
                                    </select>
                                </div>
                            </div>
                            <div style="display: flex; margin-top: 20px">
                                <div class="body-modal__items">
                                    <span class="body-modal__title">Language</span>
                                    <select style="width: 235px" class="body-modal__select" v-model="language">
                                        <option v-for="lan in selectLanguage" :key="lan.id">{{lan.language}}</option>
                                    </select>
                                </div>
                                <div class="body-modal__items">
                                    <span class="body-modal__title">Level</span>
                                    <select style="width: 205px" class="body-modal__select" v-model="levelOfLanguage">
                                        <option v-for="level in selectLevelOftLanguage" :key="level.id">{{level.level}}</option>
                                    </select>
                                </div>
                            </div>
                        </slot>
                    </section>
                </div>
                <div class="modal-buttons">
                    <button class="modal-btn modal-btn__close" type="button" @click="close">
                        Cancel
                    </button>
                    <button class="modal-btn modal-btn__create" type="submit" @click="close">
                        Create
                    </button>
                </div>
            </div>
        </form>
    </transition>
</template>
<script>
    export default {
        name: 'modal',
        props:['quantityOfMembers', 'selectLanguage','selectLevelOftLanguage'],
        data(){
            return{
                topic:'',
                quantity: 'Unlimited',
                language: 'All',
                levelOfLanguage: 'Any level',
            }
        },
        methods: {
            close() {
                this.$emit('close');
            },
            onSubmit(){
                if(this.topic.trim()){
                    const createNewGroup ={
                        id:Date.now(),
                        topic:this.topic,
                        quantity:this.quantity,
                        language:this.language,
                        levelOfLanguage:this.levelOfLanguage
                    }
                    this.$emit('create-new-group', createNewGroup),
                    this.topic = ''
                }
            }
        },
    };
</script>

<style>
    .modal-backdrop {
        left: 35%;
        top:35%;
        position: fixed;
        border: 0;

        }
    .modal {
        padding-top: 10px;
        border-radius: 4px;
        box-shadow: 0 4px 12px rgb(0 0 0 / 15%);
        flex-direction: column;
        background-color: #1e272d;
        display: block;
        width: 500px;
        height: 235px;
    }
    .modal-buttons{
        display: inline-block;
        width: 500px;
        height: 32px;
    }
    .modal-btn{
        outline: none;
        width: 248px;
        margin-top: 3px;
        height: 30px;
        font-weight: 300;
        font-size: 16px;
        border-radius: 5px;
        color: #FFFFFF;
        text-shadow: 0 -1px 0 rgb(0 0 0 / 12%);
        box-shadow: 0 2px 0 rgb(0 0 0 / 5%)
    }
    .modal-btn__close{
        background-color: #1e272d;
        border: 1px solid#1890FF;
    }
    .modal-btn__create{
        margin-left: 4px;
        background-color: #1890FF;
        border: none;
    }
    .modal-fade-enter,
    .modal-fade-leave-active {
        opacity: 0;
    }
    .modal-fade-leave-active {
        transition: opacity .5s ease
    }

    .modal-title{
        padding:15px;
        color: #FFFFFF;
        font-size:12px;
    }

    .body-modal__items {
        margin: 15px 15px 0 15px;
    }
    .body-modal__title{

        font-size: 16px;
        color: #FFFFFF;
        width: 20px;
        display: block
    }
    .body-modal__input{
        outline: none;
        margin-top: 6px;
        padding:  0 0 0 8px;
        width: 300px;
        height: 30px;
        background-color: #1e272d;
        color: #FFFFFF;
        border-radius: 5px;
        border: 1px solid rgb(28, 97, 175);
    }
    .body-modal__select{
        height: 32px;
        color: #FFFFFF;
        background-color: #1e272d;
        border-radius: 5px;
        border: 1px solid rgb(28, 97, 175);
        outline: none;
        margin-top: 6px;
        padding:  0 0 0 8px;
    }
    .body-modal__select option{
        border-radius: 5px;
    }
</style>