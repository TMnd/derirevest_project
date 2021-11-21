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
            <radialMenuWithLabel labelMsg="Entregue" radial-color="#5ab072"
                                 @menuOptionFunction="addDeliveryFilter(1)"></radialMenuWithLabel>
            <radialMenuWithLabel labelMsg="Por entregar" radial-color="#e2e3e5"
                                 @menuOptionFunction="addDeliveryFilter(2)"></radialMenuWithLabel>
            <br>
            <radialMenuWithLabel labelMsg="Não entregue" radial-color="#fa5766"
                                 @menuOptionFunction="addDeliveryFilter(0)"></radialMenuWithLabel>
          </div>
          <ul class="list-group areaWidth" v-show="this.checkAuthorization('DELIVERY_SEE_LIST')">
            <informationDataArea v-for="(i, index) in deliversData"
                                 v-show="selectedDeliveryFilter.includes(parseInt(i.status))"
                                 v-bind:key="index" :inputData="i" :tooltipMsg="i.message"
                                 :context="'delivery'">
            </informationDataArea>
          </ul>
        </div>
      </div>
      <div class="col-lg-6 order-1 order-lg-2">
        <div class="homeFirstRow_section">
          <div class="input-group" style="margin-bottom: 10px;">
            <input class="form-control py-2" type="search" placeholder="Insira o codigo do produto..."
                   id="product-search-input" v-model="searchInputValue" v-on:keyup.enter="searchProduct">
            <span class="input-group-append">
                <actionButton style="line-height: 1.8;" inputIconShow="info" :tooltipMsg="inputToolTip"></actionButton>
            </span>
            <span class="input-group-append">
                <actionButton style="line-height: 1.8;" inputIconShow="search" @buttonFunction="searchProduct"></actionButton>
            </span>
          </div>
          <div class="mainPart2" v-show="showSearchResult">
            <div v-show="this.checkAuthorization('DELIVERY_SEE_LIST')">
              <v-data-table
                  :headers="searchHeader"
                  :items="searchResult"
                  :items-per-page="10"
                  item-key="productCode"
                  class="elevation-1"
                  :footer-props="{
                    'items-per-page-text':'',
                    'items-per-page-options':[]
                  }"
              >
                <template v-slot:item="props">
                  <tr>
                    <td class="icon">
                      <iconTemplate iconClass="menuIcon" :iconType="props.item.category"></iconTemplate>
                    </td>
                    <td>{{ props.item.productCode }}</td>
                    <td>{{ props.item.name }}</td>
                    <td>{{ props.item.material }}</td>
                    <td>
                      <span class="v-chip theme--dark v-size--default" v-bind:class = "(props.item.quantity<10)?(props.item.quantity===0)?'empty':'almostEmpty':'enoughQuantity'">{{props.item.quantity}}</span>
                    </td>
                    <td>{{ props.item.price }}</td>
                  </tr>
                </template>
                <template v-slot:no-data>
                  <v-alert :value="true" color="error">
                    Não se encontrou resultados.
                  </v-alert>
                </template>
              </v-data-table>
            </div>
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
          <div class="productAlarm" style="width: 100%; margin-bottom: 2%;"
               v-show="this.checkAuthorization('PRODUCT_ALARM_FILTER')">
            <radialMenuWithLabel labelMsg="Poucas unidades" radial-color="#fa9e57"
                                 @menuOptionFunction="addAlertFilter(1)"></radialMenuWithLabel>
            <radialMenuWithLabel labelMsg="Esgotado" radial-color="#fa5766"
                                 @menuOptionFunction="addAlertFilter(0)"></radialMenuWithLabel>
          </div>

          <div v-show="this.checkAuthorization('PRODUCT_ALARM_SEE_LIST')">
            <v-data-table
                :headers="alarmHeader"
                :items="productAlerts"
                item-key="productCode"
                class="elevation-1"
                :footer-props="{
                    'items-per-page-text':'',
                    'items-per-page-options': [5]
                }"
                :items-per-page="5"
            >
              <template v-slot:item="props">
                <tr v-show="selectedAlertsFilter.includes(props.item.productInventoryState)">
                  <td>{{ props.item.product.productCode }}</td>
                  <td>
                    <span class="v-chip theme--dark v-size--default" v-bind:class = "(props.item.product.quantity<10)?(props.item.product.quantity===0)?'empty':'almostEmpty':'enoughQuantity'">{{props.item.product.quantity}}</span>
                  </td>
                </tr>
              </template>
              <template v-slot:no-data>
                <v-alert :value="true" color="error">
                  Não se encontrou resultados.
                </v-alert>
              </template>
            </v-data-table>
          </div>
        </div>
      </div>
    </b-row>
    <hr class="home_brakLine">
    <b-row id="menu">
      <b-col cols="12">
        <div class="homeSecondRow">
          <div class="homeSecondRow-singlearea disabledRoute"
               v-for="(item, index) in optionsList.options.routes.slice(1)"
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