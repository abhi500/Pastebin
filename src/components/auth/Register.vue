<template>
    <article class="register register--size register--background">
        <form class="register__form register__form--size" @submit.prevent>
            <input type="text" placeholder="Name" class="register__name register__name--size">
            <input type="text" placeholder="Email" class="register__email register__email--size">
            <input type="text" placeholder="Password" class="register__password register__password--size">
            <register-button name="REGISTER" class="register__button"></register-button>
        </form>
    </article>
</template>

<script>

import Button from './Buttons/Button';

export default {
    components: {
        'register-button': Button
    }
}
</script>

<style lang="scss" scoped>

.register{
    display: flex;
    padding: 50px;
    margin-top: 40px;

    &--background{
        background-color: white;
    }

    &--size{
        width: 500px;
        height: auto;
    }

    &__form{
        display: flex;
        flex-direction: column;
        align-items: flex-start;
    }

    &__name{

        &--size{
            height: 50px;
            width: 400px;
        }   
    }

    &__email{
        margin-top: 10px;

        &--size{
            height: 50px;
            width: 400px;
        }   
    }

    &__password{
        margin-top: 10px;


        &--size{
            height: 50px;
            width: 400px;
        }   
    }

    &__button{
        margin-top: 50px;
    }
}

</style>