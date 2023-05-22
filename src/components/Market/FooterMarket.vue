<template>
    <footer class="footer">
        <div class="background-image"></div>
    </footer>
</template>

<script>
    export default {
        name:'FooterMarket'
    }
</script>

<style lang="scss" scoped>
    .footer{
        position: relative;
        margin-top: auto;
        height: 350px;
        background-color: red;
        opacity: 1;
        overflow: hidden;
    }
    .background-image {
        position: absolute;
        width: 100%;
        height: 100%;
        background-image: url("/public/img/footer1.png");
        background-position: 100%;
        background-repeat: no-repeat;
        background-size: contain;
        opacity: 1;
        bottom: -20px;
        transform-origin: bottom right;
        /* transform: scale(0.5); */
    }

</style>