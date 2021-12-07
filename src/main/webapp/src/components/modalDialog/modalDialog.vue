<template>
  <v-dialog v-model="isModalShowing" persistent max-width="600">
    <v-card v-if="this.displayData['origin']==='home'">
      <v-card-title class="text-h5">
        Produto: {{this.displayData['data'].productCode}}
      </v-card-title>
      <v-card-text>
        <p>Nome: {{ this.displayData['data'].name }}</p>
        <p>Categoria: {{ this.displayData['data'].category }}</p>
        <p>Material: {{ this.displayData['data'].material }}</p>
        <p>Quantidade: {{ this.displayData['data'].quantity }}</p>
        <p>Preço: {{ this.displayData['data'].price }}</p>
      </v-card-text>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn color="green darken-1" text @click="isModalShowing = false">
          Fechar
        </v-btn>
      </v-card-actions>
    </v-card>
    <v-card v-else-if="this.displayData['origin']==='footer' && Object.keys(this.displayData).length>0">
      <v-card-title class="text-h5">
        {{this.displayData['data']['app_Name']}}
      </v-card-title>
      <v-card-text >
        {{this.displayData['data'].app_Name}}@{{this.displayData['data'].app_Version}}
      </v-card-text>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn color="green darken-1" text @click="isModalShowing = false">
          Fechar
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>


<script src="./modalDialog.view.js"></script>