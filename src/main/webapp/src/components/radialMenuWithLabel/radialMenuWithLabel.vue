<template>
  <span class="deliveryOptions" v-on:click="menuOptionClickFunction">
    <b-icon-circle-fill v-bind:style="[styleObject]"></b-icon-circle-fill>
    <label>{{labelMsg}}</label>
  </span>
</template>

<script src="./radialMenuWithLabel.view.js"></script>
<style src="./radialMenuWithLabel.css"></style>