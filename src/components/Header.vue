<template>
        <div class="header-wrapper">
            <div class="header-top__wrap">
                <div class="logo-wrapper">
                    <img style="height: 35px; width: 35px" class="logo-img" src="../assets/logo.svg" alt="logo">
                    <span>Free4Talk</span>
                </div>
                <div class="sign-wrapper">
                    <div style="display: flex">
                        <img style="height: 30px; width: 30px;" src="../assets/logo.svg">
                        <span class="sign-text">Account Name</span>
                    </div>
                </div>
            </div>
            <div>
                <p class="header-title">Language Practice Community</p>
            </div>
        </div>
</template>

<script>
export default {
    name:'header',
}
</script>

<style scoped>
    .header-wrapper{
        width: 100%;
        height: 140px;
    }
    .header-top__wrap{
        display: flex;
        justify-content: space-between;
        height: 50px;
        padding-top: 25px;
    }
    .logo-wrapper{
        width: 100px;
        height: 35px;
        display: flex;
    }
    .logo-wrapper span{
        color:#FFFFFF;
        font-size: 18px;
        margin: auto;
        padding-left: 4px;
    }
    .sign-wrapper{
        width: 170px;
        height: 30px;
        border-radius:20px ;
        border: 2px solid blueviolet;
    }
    .sign-text{
        margin: auto;
        font-size: 1.25em;
        color:#1890FF;
    }
    .header-title{
        margin: 0;
        padding-top: 10px;
        color: #FFFFFF;
        text-align: center;
        font-size: 1.9em;
    }
</style>