<template>
  <div>
    <b-navbar toggleable="lg" type="dark" variant="dark">
      <b-navbar-brand href="/">{{ applicationName }}</b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav v-for="(item, index) in optionsList.options.routes.slice(1)" v-if="item.routeGroup===5" v-bind:key="index" >
          <b-nav-item :href="item.path">{{item.title}}</b-nav-item>
        </b-navbar-nav>

        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto">
          <b-nav-item-dropdown>
            <!-- Using 'button-content' slot -->
            <template #button-content>
              <em>{{ username }}</em>
            </template>
            <b-dropdown-item href="#">Profile</b-dropdown-item>
            <b-dropdown-item href="logout">Sign Out</b-dropdown-item>
          </b-nav-item-dropdown>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
    <div id="navigation">
      <ol>
        <a href="/">
          <Icon icon="mdi-light:home" />
          <span> Início</span>
        </a>
      </ol>
    </div>
  </div>
</template>

<script src="./header.view.js"></script>
<style src="./header.css"></style>