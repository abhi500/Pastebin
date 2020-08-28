<template>
    <article class="login login--size login--background">
        <form action="post" class="login__form login__form--size">
            <p>
                <!-- <label for="name" aria-placeholder="Username">Name</label> -->
                <input type="text" placeholder="Email">
            </p>
            <p>
                <!-- <label for="password" aria-placeholder="Password">Password</label> -->
                <input type="text" placeholder="Password">
            </p>
        </form>
    </article>
</template>

<style lang="scss" scoped>

.login{

    &--background{
        background-color: lightgrey;
    }

    &--size{
        width: 400px;
        height: 400px;
    }

    &__form{
        display: flex;
        flex-direction: column;
        align-items: flex-end;
    }
}

</style>