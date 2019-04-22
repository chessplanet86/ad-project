<template>
 <v-app>
  <v-navigation-drawer app temporary v-model="drawer">

     <v-list>
          <v-list-tile  v-for="link of links" :key="link.title" :to="link.url">
            
            <v-list-tile-action> <!--Место для иконки-->
              <v-icon>{{link.icon}}</v-icon> <!--Вставляем иконку звезду -->
            </v-list-tile-action>

            <v-list-tile-content> <!--компонент листа отвечающий за контент-->
              <v-list-tile-title v-text="link.title"></v-list-tile-title>
            </v-list-tile-content>

          </v-list-tile>
        </v-list>
    
    <!--Тестовый комментарий для коммита-->
    
  </v-navigation-drawer> <!--temporary скрывает элемент -->
  <v-toolbar app dark color="primary">
    <!-- Подключаем тулбар -->
    <v-toolbar-side-icon @click="drawer = !drawer" class="hidden-md-and-up"></v-toolbar-side-icon>
    <v-toolbar-title>
      <router-link to="/" tag="span" class="pointer">Ad application</router-link>
    </v-toolbar-title>
    <v-spacer></v-spacer> <!--Растягивает на другую сторону иконки, которые идут ниже -->
    <v-toolbar-items class="hidden-sm-and-down">
      <!-- Внутрь кнопки вставляем иконку -->
      <v-btn v-for="link in links" :key="link.title" :to="link.url" flat>
        <v-icon left>{{link.icon}}</v-icon> <!-- left - иконка не пристает к тексту -->
        {{link.title}}
      </v-btn>

      <!-- <v-btn flat>Link Two</v-btn>
      <v-btn flat>Link Three</v-btn> -->
    </v-toolbar-items>
  </v-toolbar>
  <v-content>
      <router-view></router-view>
  </v-content>
</v-app>
</template>

<script>
export default {
  data (){
    return {
      drawer: false,
      links: [
        {title: 'Login', icon: 'lock', url: '/login'},
        {title: 'Registration', icon: 'face', url: '/registration'},
        {title: 'Orders', icon: 'bookmark_border', url: '/orders'},
        {title: 'New_ad', icon: 'note_add', url: '/new'},
        {title: 'My ads', icon: 'list', url: '/list'},
      ]
      }
    
  }
}
</script>

<style  scoped>
  .pointer{
    cursor: pointer;
  }
</style>
