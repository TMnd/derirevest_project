<template>
  <span>
    <span v-if="iconType === 'circle'">
      <b-icon-circle-fill v-bind:class="iconClass"></b-icon-circle-fill>
    </span>
    <span v-else-if="iconType === 'door'">
      <b-icon-door-open v-bind:class="iconClass"></b-icon-door-open>
    </span>
    <span v-else-if="iconType === 'brick'">
      <b-icon-bricks v-bind:class="iconClass"></b-icon-bricks>
    </span>
    <span v-else-if="iconType === 'basket'">
      <b-icon-basket v-bind:class="iconClass"></b-icon-basket>
    </span>
    <span v-else-if="iconType === 'briefcase'">
      <b-icon-briefcase v-bind:class="iconClass"></b-icon-briefcase>
    </span>
    <span v-else-if="iconType === 'truck'">
      <b-icon-truck v-bind:class="iconClass"></b-icon-truck>
    </span>
    <span v-else-if="iconType === 'ticket'">
      <b-icon-receipt v-bind:class="iconClass"></b-icon-receipt>
    </span>
    <span v-else-if="iconType === 'people'">
      <b-icon-person-lines-fill v-bind:class="iconClass"></b-icon-person-lines-fill>
    </span>
    <span v-else-if="iconType === 'web'">
      <b-icon-bookmark v-bind:class="iconClass"></b-icon-bookmark>
    </span>
  </span>
</template>s

<script src="./iconTemplate.view.js"></script>
<style src="./iconTemplate.css"></style>