<template>
<div>
    
    <button v-bind:type="type" :class='{"btn" : true ,"btn--second" : true }' >
        <slot>

        </slot>
    </button>
    </div>
</template>

<script>
    export default {
        name: 'ButtonMain',
        props: {
            type:String
        },

    }
</script>

<style lang='scss' scoped>
.btn {
    cursor: pointer;
    background: #FF662D;
    border: transparent;
    width: 349px;
    height: 48.56px;
    color: azure;
&--second{
    background: none;
    border: 1px solid #FF662D;
    color: #FF662D;

}

}
</style>