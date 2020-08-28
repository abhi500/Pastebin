<template>
    <nav class="navbar navbar--theme navbar--size">
        <div class="navbar__container navbar__container--size">
            <div class="navbar__left">
                <a href="/" class="navbar__title">Pastebin</a>
            </div>
            <div class="navbar__right">
                {{ currentRoute  }}
                <sign-in v-if="getCurrentRoute != `SignIn`"></sign-in>
                <sign-up v-if="getCurrentRoute != `SignUp`"></sign-up>
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
    },

    data() {
        return {
            currentRoute: ''
        }
    },

    computed: {
        //return current route name
        getCurrentRoute(){
            return this.$route.name;
        }
    },
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
        align-items: center;

        &--size{
            width: 60%;
            height: 100%;
        }
    }

    &__title{
        color: white;
        font-weight: 600;
        font-size: 20px;
        text-decoration: none;
    }

    &__right{
        margin-left: auto;
        display: flex;
        align-items: center;
    }
}


</style>