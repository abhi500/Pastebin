<template>
  <div id="app">
    <nav class="app__navbar">
      <navbar></navbar>
    </nav>
    <main class="app__main">
      <router-view></router-view>
    </main>
  </div>
</template>

<script>

import Navbar from './components/navbar/Navbar';

export default {
  name: 'App',
  components: {
    navbar: Navbar
  }
}
</script>

<style>

*{
  padding: 0px;
  margin: 0px;
  box-sizing: border-box;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background-color: #f7f7f7;
  height: 100vh;
  display: flex;
  flex-direction: column;
  width: 100%;
}

.app__navbar{
  flex: auto;
  position: sticky;
  top: 0;
}

.app__main{
  flex: 100%;
  margin-left: 20%;
  overflow: scroll;
}

</style>
