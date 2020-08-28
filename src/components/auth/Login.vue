<template>
    <article class="login login--size login--background">
        <form class="login__form login__form--size" @submit.prevent>
            <input type="text" placeholder="Email" class="login__name login__name--size">
            <input type="text" placeholder="Password" class="login__password login__password--size">
            <login-button name="LOGIN" class="login__button"></login-button>
        </form>
    </article>
</template>

<script>

import Button from './Buttons/Button';

export default {
    components: {
        'login-button': Button
    }
}
</script>

<style lang="scss" scoped>

.login{
    margin-top: 40px;
    display: flex;
    padding: 50px;

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