<template>
    <button class="signin signin--theme" 
        @click="loadLoginPage">SIGN IN</button>
</template>

<script>
export default {
    methods: {
        loadLoginPage(){
            var currentPage = this.$route.name;

            if(currentPage != 'SignIn')
                this.$router.push({ name: 'SignIn' })
        }
    },
}
</script>

<style lang="scss" scoped>

.signin{
    border: none;
    padding: 7px 20px;
    border-radius: 2px;
    margin-left: 10px;
    color: white;
    border: 1px solid white;
    cursor: pointer;

    &--theme{
        background-color: #023859
    }

    &:hover{
        background-color: #02456c;
    }
}

</style>