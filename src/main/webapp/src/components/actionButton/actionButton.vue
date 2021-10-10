<template>
  <button class="btn btn-outline-secondary" style="line-height: 1.5;" type="button" v-on:click="buttonClickFunction">
    <span v-if="inputIconShow === 'refresh'">
      <b-icon-arrow-repeat></b-icon-arrow-repeat>
    </span>
    <span v-if="inputIconShow === 'search'">
      <b-icon-search></b-icon-search>
    </span>
  </button>
</template>

<script src="./actionButton.view.js"></script>
<style src="./actionButton.css"></style>