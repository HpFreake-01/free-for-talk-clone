<template>
    <div id="app">
        <div class="wrapper-app">
            <router-view/>
        </div>
    </div>
</template>

<script>

export default {
  name: 'App',
  components: {
  }
}
</script>

<style scoped>
#app{
    background-color: rgb(17, 25, 32);
}
.wrapper-app{
    width: 100%;
    height: auto;
    min-height: 100vh;
    font-family: -apple-system,
    BlinkMacSystemFont,
    "Segoe UI",
    Roboto,
    Oxygen,
    Ubuntu,
    Cantarell,
    "Fira Sans",
    "Droid Sans",
    "Helvetica Neue",
    sans-serif;
}
</style>
