<template>
    <button class="signup signup--theme" 
        @click="loadRegisterPage">SIGN UP</button>
</template>

<script>
export default {
    data() {
        return {
            
        }
    },

    methods: {
        loadRegisterPage(){
            var currentPage = this.$route.name;

            if(currentPage != 'SignUp')
                this.$router.push({ name: 'SignUp' })
        }
    },
}
</script>

.<style lang="scss" scoped>

.signup{
    border: none;
    padding: 7px 20px;
    border-radius: 2px;
    margin-left: 10px;
    color: #02456c;
    cursor: pointer;

    &--theme{
        background-color: white
    }

    &:hover{
        background:linear-gradient(white,white);
    }
}


</style>