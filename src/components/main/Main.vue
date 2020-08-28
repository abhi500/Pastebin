<template>
    <div class="container container--theme container--size">
        <h4 class="container__title">Create paste</h4>
        <form action="post" class="container__form container__form--size">
            <textarea name="code" 
                id="code" 
                class="container__code-area container__code-area--size"
                placeholder="Paste code ..."></textarea>
                <submit-btn class="container__submit-btn">asdfsadf</submit-btn>
        </form>
        
    </div>
</template>

<script>

import SubmitBtn from './buttons/Submit';

export default {
    components: {
        'submit-btn' : SubmitBtn
    }
}
</script>

<style lang="scss" scoped>

.container{
    
    &--size{
        width: 1200px;
        height: 100vh;
    }

    &--theme{
        background-color: white;
    }

    &__title{
        position: relative;
        top: 10px;
        text-align: start;
        padding: 0 0 0 30px;
        font-size: 20px;
    }

    &__form{
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        position: relative;
        top: 30px;
        margin: auto;

        &--size{    
            width: 95%;
            height: auto;
        }
    }

    &__code-area{
        resize: none;
        border: none;
        font-family: sans-serif;
        font-size: 14px;
        padding: 10px;
        border: 2px solid lightgrey;

        &--size{
            width: 100%;
            height: 400px;
            
        }
    }

    &__submit-btn{
        margin-top: 20px;
    }
}


</style>