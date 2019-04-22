<template>
  <div>
    <v-container fluid>
      <v-layout row>
        <v-flex xs12>
          <v-carousel>
            <v-carousel-item v-for="ad in ads" :key="ad.id" :src="ad.imageSrc">
              <v-btn color="green" :to="'/ad/'+ad.id">{{ad.title}}</v-btn>
            </v-carousel-item>
          </v-carousel>
        </v-flex>
      </v-layout>
    </v-container>

    <v-container grid-list-lg>
      <v-layout row wrap>
        <v-flex xs12 sm6 md4 v-for="ad in ads" :key="ad.id">
          <v-card>
            <v-img :src="ad.imageSrc" aspect-ratio="2.75"></v-img>

            <v-card-title primary-title>
              <div>
                <h3 class="headline mb-0">{{ad.title}}</h3>
                <div>{{ad.description}}</div>
              </div>
            </v-card-title>

            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn flat :to="'/ad/'+ad.id">Open</v-btn>
              <v-btn raised class="primary">Buy</v-btn>
            </v-card-actions>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
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
