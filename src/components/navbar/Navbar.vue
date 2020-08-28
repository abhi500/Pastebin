<template>
    <nav class="navbar navbar--theme navbar--size">
        <div class="navbar__container navbar__container--size">
            <div class="navbar__right">
                <sign-in></sign-in>
                <sign-up></sign-up>
            </div>       
        </div>
    </nav>
</template>

<script>

import SignIn from '../navbar/Buttons/SignIn';
import SignUp from '../navbar/Buttons/SignUp';

export default {
    components: {
        'sign-in' :SignIn,
        'sign-up' :SignUp
    }
}
</script>

<style lang="scss" scoped>

.navbar{

    &--theme{
        background: #023859 linear-gradient(#023859,#02456c);
    }

    &--size{
        height: 50px;
        width: 100%;
    }

    &__container{
        margin: auto;
        display: flex;

        &--size{
            width: 60%;
            height: 100%;
        }
    }

    &__right{
        margin-left: auto;
        display: flex;
        align-items: center;
    }
}


</style>