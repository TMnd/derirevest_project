<template>
  <tr v-if="contexto === 'productInventory'">
     <td v-for="(i, index) in rowElements.slice(0, 2)" v-bind:key="index">
        <span v-if="index===0">
          <span v-if="i.elementType === 'data'">{{i.element}}</span>
        </span>
        <span v-else>
          <span v-if="i.elementType === 'data'" class="v-chip theme--dark v-size--default" v-bind:class = "(i.element<10)?(i.element===0)?'empty':'almostEmpty':''">{{i.element}}</span>
        </span>
    </td>
  </tr>
  <tr v-else-if="contexto === 'searchResult'" class="rowSearchResult">
    <td class="icon">
      <iconTemplate iconClass="menuIcon" :iconType="rowElements.icon"></iconTemplate>
    </td>
    <td>{{rowElements.codigo}}<br>{{rowElements.nomeProduto}}</td>
    <td>{{rowElements.categoria}}</td>
    <td>{{rowElements.material}}</td>
    <td>
      <span class="v-chip theme--dark v-size--default" v-bind:class = "(rowElements.quantidade<10)?(rowElements.quantidade===0)?'empty':'almostEmpty':'enoughQuantity'">{{rowElements.quantidade}}</span>
    </td>
    <td>{{rowElements.preco}}</td>
  </tr>
</template>

<script src="./tableTBodyLine.view.js"></script>
<style src="./tableTBodyLine.css"></style>