<template>
  <div id="app">

    <!-- New Tab Button (Using tabs slot) -->
    <a slot="tabs" @click.prevent="newTab('HelloWorld')" href="#">
      Add Helloworld
    </a>

    <a slot="tabs" @click.prevent="newTab('HelloWorld2')" href="#">
      Add Helloworld 2
    </a>

    <b-tabs small card v-model="tabIndex">
      <!-- Render Tabs -->
      <b-tab :title="`Tab Numero: ${i}`" v-for="i in tabs" :key="i">

        <component :is="comp[i]"></component>

        <b-btn size="sm" variant="danger" class="float-right" @click="()=>closeTab(i)">
          Fechar
        </b-btn>
      </b-tab>



      <!-- Render this if no tabs -->
      <div slot="empty" class="text-center text-muted">
        There are no open tabs
        <br> Open a new tab using + button.
      </div>
    </b-tabs>

    <!-- Control buttons-->
    <div class="text-center">
      <b-button-group class="mt-2">
        <b-btn @click="tabIndex--">Previous</b-btn>
        <b-btn @click="tabIndex++">Next</b-btn>
      </b-button-group>
      <br>
      <span class="text-muted">Current Tab: {{tabIndex}}</span>
    </div>

  </div>
</template>

<script>
  import HelloWorld from './components/HelloWorld'
  import HelloWorld2 from './components/HelloWorld2'


  export default {
    name: 'app',
    components: {
      HelloWorld,HelloWorld2
    },
    data: function () {
      return {
        tabIndex: 0,
        tabs: [],
        comp: [],
        tabCounter: 0
      }
    },
    methods: {
      closeTab(x) {
        for (let i = 0; i < this.tabs.length; i++) {
          if (this.tabs[i] === x) {
            this.tabs.splice(i,1);
          }
        }
      },
      newTab(comp) {
        this.tabs.push(this.tabCounter++);
        this.comp.push(comp)

        setTimeout(() => {
          this.tabIndex = this.tabs.length - 1
        },200)
      }
    }
  }
</script>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }

</style>
