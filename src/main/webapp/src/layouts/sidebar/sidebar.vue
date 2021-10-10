<template>
  <div id="sidebarArea" class="ui-layout-west fullHeight">
    <div class="content">
      <div v-for="(item, i) in items"
           @click="openSideBarGroup(i)"
           :key="i"
           :title="item.description">
        <div class="bottomArea">
          <div class="bottomAreaRight">
            <span v-if="!item.open">
              <Icon :icon="item.iconOpen" />
            </span>
            <span v-if="item.open">
              <Icon :icon="item.iconClose" />
            </span>
          </div>
          <div class="bottomAreaLeft"><span> {{ item.title }}</span></div>
        </div>
        <b-collapse v-model="item.open" class="mt-0">
          <span v-for="(subitem, j) in item.sub_links" :key="j">
<!--             <router-link to="/foo">Go to Foo</router-link>-->
            <b-card @click="updateTopNav(subitem.title)">
              <router-link :to=subitem.path>{{ subitem.description }}</router-link>
            </b-card>
<!--            <b-card @click="updateTopNav(subitem.title)">{{ subitem.title }}</b-card>-->
          </span>
        </b-collapse>
      </div>
    </div>

    <div class="d-flex bg-dark text-light align-items-center px-3 footer">
      <div class="footer_right header"></div>
      <div id="close" class="ui-layout-toggle-close" title="Fechar menu"></div>
    </div>
  </div>
</template>

<script src="./sidebar.view.js"></script>
<style src="./sidebar.css"></style>