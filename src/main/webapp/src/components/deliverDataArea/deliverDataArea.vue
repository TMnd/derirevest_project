<template>
  <li :class="classStyle" :v-show="deliver.estado">
    <div class="deliverInfo">
      {{ deliver.ref_id_clients.nome }} <br> {{ deliver.ref_id_products.nome }}
    </div>
    <span v-if="showInfo">
      <tooltip :tooltipMsg="tooltipMsg"></tooltip>
    </span>
  </li>
</template>

<script src="./deliverDataArea.view.js"></script>
<style src="./deliverDataArea.css"></style>