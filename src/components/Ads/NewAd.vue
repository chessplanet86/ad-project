<template>
  <v-container>
    <v-layout row>
      <v-flex xs12 sm6 offset-sm3>
        <h1 class="text--secondary mb-3">Create new ad</h1>
        <v-form ref="form" v-model="valid" lazy-validation>
          <v-text-field
            class="mb-3"
            name="title"
            label="Ad title"
            type="text"
            v-model="title"
            required
            :rules="[v=>!!v || 'title is required']"
          ></v-text-field>
          <v-textarea
            name="description"
            label="Ad description"
            type="text"
            :rules="[v=>!!v || 'Description is required']"
            v-model="description"
          ></v-textarea>
        </v-form>
      </v-flex>
    </v-layout>
    <v-layout row class="mb-3">
      <v-flex xs12 sm6 offset-sm3>
        <v-spacer></v-spacer>
        <v-btn class="warning">
          Upload
          <v-icon right dark>cloud_upload</v-icon>
        </v-btn>
      </v-flex>
    </v-layout>
    <v-layout row>
      <v-flex xs12 sm6 offset-sm3>
        <img src height="200">
      </v-flex>
    </v-layout>
    <v-layout row>
      <v-flex xs12 sm6 offset-sm3>
        <v-switch v-model="promo" label="Add to promo?" color="green"></v-switch>
        <v-spacer></v-spacer>
        <v-btn class="success" @click="createAd" :disabled="!valid">Create ad</v-btn>
      </v-flex>
    </v-layout>
    <v-layout row>
      <v-flex xs12 sm6 offset-sm3>
        
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      title: "",
      description: "",
      promo: false,
      valid: false
    };
  },
  methods: {
    createAd() {
      if (this.$refs.form.validate()) {
        const ad = {
          title: this.title,
          description: this.description,
          promo: this.promo
        };
        console.log(ad);
      }
    }
  }
};
</script>