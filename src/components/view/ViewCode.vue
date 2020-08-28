<template>
    <div class="container container--size container--theme">
        <p class="container__code container__code--background">{{ code }}</p>
    </div>
</template>

<script>

import getCode from '../../../apis/getCode';

export default {
    data() {
        return {
            code: getCode(null)
        }
    },


}
</script>

<style lang="scss" scoped>

.container{

    &--size{
        width: 70%;
        height: 100vh;
    }

    &--theme{
        background-color: white;
    }

    &__code{
        color: #24292e;  
        word-wrap: normal;
        padding: 20px;

        &--background{
            background-color: #f6f8fa;
        }
    }
}

</style>