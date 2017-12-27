
<template>
  <div class="left-column-container">
    <div class="image-container">
      <div class="image-left-col">
        <img src="/static/images/self.png" class="img-circle">
      </div>
    </div>

    <p class="name">
      <a class="no-link-style" href="/">Daniel Jamrozik</a>
    </p>

    <p class="name-info">Full-stack Developer</p>

    <ul class="column-links">
      <li v-if="!isHomeMode()">
        <a href="/">HOME</a>
      </li>
      <li>
        <a href="/blog">BLOG</a>
      </li>
      <li v-if="isHomeMode()" v-on:click="scrollToId('projects')">
        <span>PROJECTS</span>
      </li>
      <li v-if="isHomeMode()" v-on:click="scrollToId('contact')">
        <span>CONTACT</span>
      </li>
      <li v-if="!isHomeMode()">
        <a href="/#/contact">CONTACT</a>
      </li>
    </ul>

    <div class="icons-container">
      <a href="https://www.linkedin.com/in/djamrozik"><i class="fa fa-linkedin-square fa-2x"></i></a>
      <a href="https://github.com/djamrozik"><i class="fa fa-github fa-2x"></i></a>
      <a href="http://stackoverflow.com/users/4077191/daniel-jamrozik"><i class="fa fa-stack-overflow fa-2x"></i></a>
      <a href="mailto:danjamrozik@gmail.com"><i class="fa fa-envelope-square fa-2x"></i></a>
    </div>
  </div>
</template>

<script>
  import { scrollToId } from "./../util/transitions";

  export default {
    name: "left-column",

    data () {
      return {}
    },

    props: {
      mode: {
        default: "home"
      }
    },

    methods: {
      scrollToId,
      isHomeMode() {
        return this.mode === "home"
      }
    }
  }
</script>

<style lang="scss" scoped>
	.column-links {
		text-align: left;
    margin-top: 40px;
  }

  .column-links li {
    list-style-type: none;
    margin-left: -1.5rem;
    letter-spacing: 1.1px;
    display: flex;
    height: 40px;
    align-items: center;

    &:hover {
      background-color: black;
      cursor: pointer;
    }

    a {
      text-decoration: none;
      color: white;
      width: 100%;
      height: 100%;
      display: flex;
      align-items: center;
      padding-left: .5rem;
    }

    span {
      padding-left: .5rem;
    } 
  }

  .left-column-container {
    height: 100vh;
    background-color: #444;
    color: white;
    text-align: center;
    position: fixed;
    padding-right: 0!important;
    padding-left: 0!important;
    width: 220px;
    left: -220px; /* hide at first */

    .name {
      margin-top: 20px;
      font-size: 1.7em;
      letter-spacing: .85px;
    }

    .name-info {
      color: lightblue;
    }

    .icons-container {
      max-height: 50px;
      position: absolute;
      bottom: 0;
      width: 100%;
      display: flex;
      justify-content: space-around;
      padding: 0 12px;

      i {
        margin: 1rem;
        color: white;

        &:hover {
          cursor: pointer;
        }
      }
    }

    /*make height the same dynamically*/
    .image-container {
        display: inline-block;
        position: relative;
        width: 50%; //set the width of the image
        margin-top: 2rem;

        &:after {
          content: '';
          display: block;
          margin-top: 100%;
        }

        .image-left-col {
          position: absolute;
          top: 0;
          bottom: 0;
          left: 0;
          right: 0;

        .img-circle {
          position: relative;
          width: 100%;
          height: 100%; //width and height are the same here
        }
      }
    }
  }

</style>
