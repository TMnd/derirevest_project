<template>
  <tr>
    <td v-for="(i, index) in rowElements" v-bind:key="index">
      <span v-if="i.elementType === 'data'">{{i.element}}</span>
      <span v-else>
        <iconTemplate :iconClass="'iconAlertColor-'+i.productInventoryState" iconType="circle"></iconTemplate>
      </span>
    </td>
  </tr>
</template>

<script src="./tableTBodyLine.view.js"></script>
<style src="./tableTBodyLine.css"></style>