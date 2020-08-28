<template>
    <button class="button button--theme">
        {{ name }}
    </button>
</template>

<script>
export default {
    props: ['name']
}
</script>

<style lang="scss" scoped>

.button{
    padding: 10px 20px;
    font-weight: 600;
    border: none;
    cursor: pointer;
    color: white;

    &--theme{
        background-color: #023859;
    }
}

</style>