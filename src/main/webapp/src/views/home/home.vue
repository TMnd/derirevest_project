<template>
  <b-container fluid>
    <b-row class="homeFirstRow">
      <div class="col-lg-3 order-2 order-lg-1">
        <div class="homeFirstRow_section">
          <div class="titleArea">
            <div style="width: 92%">
              <p class="h5 title">Entregas para hoje</p>
            </div>
            <div v-show="this.checkAuthorization('DELIVERY_REFRESH')">
              <actionButton inputIconShow="refresh" @buttonFunction="refreshDelivery"></actionButton>
            </div>
          </div>
          <div style="width: 100%; margin-bottom: 2%;" v-show="this.checkAuthorization('DELIVERY_FILTER')">
            <radialMenuWithLabel labelMsg="Entregue" radial-color="#d1e7dd" @menuOptionFunction="addDeliveryFilter(1)"></radialMenuWithLabel>
            <radialMenuWithLabel labelMsg="Por entregar" radial-color="#e2e3e5" @menuOptionFunction="addDeliveryFilter(2)"></radialMenuWithLabel>
            <br>
            <radialMenuWithLabel labelMsg="Não entregue" radial-color="#f8d7da" @menuOptionFunction="addDeliveryFilter(0)"></radialMenuWithLabel>
          </div>
          <ul class="list-group areaWidth"  v-show="this.checkAuthorization('DELIVERY_SEE_LIST')">
            <informationDataArea v-for="(i, index) in deliversData" v-show="selectedDeliveryFilter.includes(parseInt(i.estado))"
                                 v-bind:key="index" :inputData="i" :tooltipMsg="i.mensagem"
                                 :contexto="'delivery'">
            </informationDataArea>
          </ul>
        </div>
      </div>
      <div class="col-lg-6 order-1 order-lg-2">
        <div class="homeFirstRow_section">
          <div class="input-group" style="margin-bottom: 10px;">
            <input class="form-control py-2" type="search" placeholder="Insira o codigo do produto..." id="example-search-input">
            <span class="input-group-append">
              <actionButton style="line-height: 1.8;" inputIconShow="search" @buttonFunction="searchProduct"></actionButton>
            </span>
          </div>
          <div class="mainPart2" v-show="showSearchResult">
            <span>
              <ul class="list-group"  v-show="this.checkAuthorization('DELIVERY_SEE_LIST')">
                <informationDataArea v-for="(i, index) in searchResult" v-bind:key="index" :inputData="i" :contexto="'searchResult'"></informationDataArea>
              </ul>
            </span>
          </div>
        </div>
      </div>
      <div class="col-lg-3 order-3 order-lg-3">
        <div class="homeFirstRow_section">
          <div class="titleArea">
            <div style="width: 92%">
              <p class="h5 title">Alertas</p>
            </div>
            <div v-show="this.checkAuthorization('PRODUCT_ALARM_REFRESH')">
              <actionButton inputIconShow="refresh" @buttonFunction="refreshAlert"></actionButton>
            </div>
          </div>
          <div style="width: 100%; margin-bottom: 2%;" v-show="this.checkAuthorization('PRODUCT_ALARM_FILTER')">
            <radialMenuWithLabel labelMsg="Poucas unidades" radial-color="orange" @menuOptionFunction="addAlertFilter(1)"></radialMenuWithLabel>
            <radialMenuWithLabel labelMsg="Esgotado" radial-color="red" @menuOptionFunction="addAlertFilter(0)"></radialMenuWithLabel>
          </div>
          <table class="table table-striped areaWidth" v-show="this.checkAuthorization('PRODUCT_ALARM_SEE_LIST')">
            <thead>
            <tr>
              <th scope="col">Produto</th>
              <th scope="col">Quantidade</th>
              <th scope="col">Estado</th>
            </tr>
            </thead>
            <tbody>
              <tableTBodyLine v-for="(i, index)  in productAlerts" :rowElements="i"  v-show="selectedAlertsFilter.includes(parseInt(i[productAlerts.length-1].productInventoryState))" v-bind:key="index"></tableTBodyLine>
            </tbody>
          </table>
        </div>
      </div>
    </b-row>
    <hr class="home_brakLine">
    <b-row id="menu">
      <b-col cols="12">
        <div class="homeSecondRow">
          <div class="homeSecondRow-singlearea disabledRoute" v-for="(item, index) in optionsList.options.routes.slice(1)"
               v-bind:key="index" v-if="checkRoutePermission(item.routeGroup) && item.routeGroup!==5">
            <div class="homeSecondRow-singlearea-circle">
              <div class="homeSecondRow-singlearea-circle-info">
                <iconTemplate iconClass="menuIcon" :iconType="item.icon"></iconTemplate>
                <span>{{ item.title }}</span>
              </div>
            </div>
          </div>
        </div>
      </b-col>
    </b-row>
  </b-container>
</template>

<script src="./home.view.js"></script>
<style src="./home.css"></style>