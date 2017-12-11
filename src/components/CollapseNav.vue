<template>
  <div class="collapse-navbar">
    <div class="collapse-navbar-top">
      <span class="navbar-my-name">
        <a href="/" class="no-link-style">
          Dan Jamrozik
        </a>
      </span>
      <span class="flex"></span>
      <span class="navbar-expand" id="navbar-expand">
        <i class="fa fa-bars fa-lg" aria-hidden="true"></i>
      </span>
    </div>

    <div class="collapse-navbar-more">
      <ul class="navbar-more-list">
        <a class="no-link-style" v-if="!isHomeMode()" href="/"><li>HOME</li></a>
        <a class="no-link-style" href="/blog"><li>BLOG</li></a>
        <li v-if="isHomeMode()" v-on:click="scrollToId('projects', true)">PROJECTS</li>
        <li v-if="isHomeMode()" v-on:click="scrollToId('contact', true)">CONTACT</li>
        <a class="no-link-style" href="/#/contact"><li v-if="!isHomeMode()">CONTACT</li></a>
      </ul>
    </div>
  </div>
</template>

<script>
  import { scrollToId } from "./../util/transitions";

  export default {
    name: "collapse-nav",

    data () {
      return {}
    },
    
    props: {
      mode: {
        default: "home"
      }
    },
    
    methods: {
      isHomeMode () {
        return this.mode === "home";
      },
      scrollToId
    }
  }
</script>

<style lang="scss" scoped>
  .collapse-navbar {
    width: 100%;
    background-color: #444;
    margin-top: -40px; /* hide at first */
    display: none;
    height: 0;
    line-height: 40px;
    position: fixed;
    z-index: 999;
    top: 0;
    left: 0;

    .collapse-navbar-top {
      display: flex;
      flex-direction: row;
      z-index: 2;

      .navbar-my-name {
        color: white;
        font-weight: 700;
        font-size: 1.7rem;
        margin-left: 2rem;
      }

      .navbar-expand {
        padding-right: 2rem;
        color: white;
        cursor: pointer;
      }
    }

    .collapse-navbar-more {
      background-color: #444;
      display: none;
      z-index: -1;

      .navbar-more-list {
        color: white;
        list-style-type: none;
        padding-bottom: 0.6rem;

        li {
          cursor: pointer;
        }
      }
    }
  }
</style>
