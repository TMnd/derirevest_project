<template>
  <footer class="text-lg-start bg-light text-muted customFooter">
    <div class="text-left p-4" style="background-color: rgba(0, 0, 0, 0.05);">
      ©{{ currentDate }} Copyright: {{ autor }}

      <b-button v-b-modal.modal-1 class="aboutButton btn-sm">sobre</b-button>
    </div>
    <b-modal id="modal-1" :title=appName hide-footer>
      <p class="my-4">{{appName}}@{{appVersion}}</p>
    </b-modal>
  </footer>
</template>

<script src="./footer.view.js"></script>
<style src="./footer.css"></style>