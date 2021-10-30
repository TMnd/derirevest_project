<template>
    <li :class="classStyle" :v-show="inputData.status" v-if="context === 'delivery'">
        <div class="deliverInfo">
            {{ inputData.ref_id_clients.nome }} <br> {{ inputData.ref_id_products.name }}
        </div>
        <span v-if="showInfo">
            <tooltip :tooltipMsg="tooltipMsg"></tooltip>
        </span>
    </li>
<!--    <li :class="classStyle" :v-show="inputData.status" v-if="context === 'delivery'">-->
<!--        <div class="deliverInfo">-->
<!--            {{ inputData.ref_id_clients }} <br> {{ inputData.ref_id_products }}-->
<!--        </div>-->
<!--        <span v-if="showInfo">-->
<!--            <tooltip :tooltipMsg="tooltipMsg"></tooltip>-->
<!--        </span>-->
<!--    </li>-->

<!--    <li :class="classStyle" :v-show="inputData.estado" v-else-if="contexto === 'searchResult'">-->
<!--        <div class="text-center" style="margin-top: 1.3%">-->
<!--          <table class="table" style="width: 100%;">-->
<!--            <tr>-->
<!--              <td class="icon">-->
<!--                -->
<!--              </td>-->
<!--              <td class="searchID">-->
<!--                {{ inputData.codigo }}<br>{{ inputData.nomeProduto }}-->
<!--              </td>-->
<!--              <td>{{ inputData.material }}</td>-->
<!--              <td>{{ inputData.quantidade }}</td>-->
<!--              <td>{{ inputData.preco }}</td>-->
<!--            </tr>-->
<!--          </table>-->
<!--          &lt;!&ndash; <div class="icon">-->
<!--            <iconTemplate iconClass="menuIcon" :iconType="inputData.icon"></iconTemplate>-->
<!--          </div>-->
<!--          <div class="search">-->
<!--              {{ inputData.codigo }}<br>{{ inputData.nomeProduto }}-->
<!--          </div>-->
<!--          <div class="searchSecundary">-->
<!--            &emsp;|&emsp;{{ inputData.material }}&emsp;|&emsp;{{ inputData.quantidade }}&emsp;|&emsp;{{ inputData.preco }}-->
<!--          </div>&ndash;&gt;-->
<!--        </div>-->
<!--    </li>-->
</template>

<script src="./informationDataArea.view.js"></script>
<style src="./informationDataArea.css"></style>