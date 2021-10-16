<template>
  <tr v-if="contexto === 'productInventory'">
    <td v-for="(i, index) in rowElements" v-bind:key="index">
      <span v-if="i.elementType === 'data'">{{i.element}}</span>
      <span v-else>
        <iconTemplate :iconClass="'iconAlertColor-'+i.productInventoryState" iconType="circle"></iconTemplate>
      </span>
    </td>
  </tr>
  <tr v-else-if="contexto === 'searchResult'" class="rowSearchResult">
    <td class="icon">
      <iconTemplate iconClass="menuIcon" :iconType="rowElements.icon"></iconTemplate>
    </td>
    <td>{{rowElements.codigo}}<br>{{rowElements.nomeProduto}}</td>
    <td>{{rowElements.material}}</td>
    <td>{{rowElements.quantidade}}</td>
    <td>{{rowElements.preco}}</td>
  </tr>
</template>

<script src="./tableTBodyLine.view.js"></script>
<style src="./tableTBodyLine.css"></style>