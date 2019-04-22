<template>
  <v-container>
    <v-layout row>
      <v-flex xs12 sm6 offset-sm3>
        <h1 class="text--secondary mb-3">My ads</h1>
        <v-card class="elavation-10 mb-5" v-for="ad in ads" :key="ad.id">
          <v-layout row>
            <v-flex xs4>
              <v-img :src="ad.imageSrc" height="175px"></v-img>
            </v-flex>
            <v-flex xs8>
              <v-card-text>
                <h2 class="text--primary">{{ad.title}}</h2>
                <p>{{ad.description}}</p>
              </v-card-text>
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn class="info" :to="'/ad/'+ad.id">Open</v-btn>
              </v-card-actions>
            </v-flex>
          </v-layout>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      ads: [
        {
          title: "First ad",
          description: "Hello i am description",
          promo: false,
          imageSrc:
            "http://about-chess.ru/wp-content/uploads/2013/01/kak-vyigrat-v-shakhmaty1.jpg",
          id: "1"
        },
        {
          title: "Second ad",
          description: "Hello i am description second",
          promo: true,
          imageSrc:
            "https://cdn.mosigra.ru/mosigra.other/534/291/chess_turnirnye.jpg",
          id: "2"
        },
        {
          title: "Third ad",
          description: "Hello i am description third",
          promo: true,
          imageSrc:
            "https://images.ua.prom.st/973661817_w640_h640_shahmaty--na.jpg",
          id: "3"
        }
      ]
    };
  }
};
</script>