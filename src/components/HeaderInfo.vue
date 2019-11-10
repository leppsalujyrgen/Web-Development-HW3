<template>
    <header>
        <strong>{{titleText}}</strong>
    </header>
</template>

<script>
    export default {
        name: "HeaderInfo",
        props: ['titleText']
    }
</script>

<style scoped>
    header {
        padding: 20px;
        background-color: #2196F3;
        color: #ffffff;
        text-align: center;
        margin-bottom: 10px;
        height: 60px;
    }
</style>