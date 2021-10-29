<template>
  <v-app>
    <v-app-bar app color="#173D6A" height="60vh">
      <v-app-bar-nav-icon
        id="navbarText"
        @click.stop="drawer = !drawer"
      ></v-app-bar-nav-icon>
      <v-toolbar-title class="col-md-4" id="navbarText"
        >Lê Việt Hoàng</v-toolbar-title
      >
    </v-app-bar>
    <v-navigation-drawer app v-model="drawer" fixed color="#173D6A" width="280px" >
      <v-list-item class="px-2">
        <v-list-item-avatar>
          <v-img src="https://randomuser.me/api/portraits/men/85.jpg"></v-img>
        </v-list-item-avatar>

        <v-list-item-title>Lê Việt Hoàng</v-list-item-title>
      </v-list-item>

      <v-divider></v-divider>

      <v-list dense>
        <v-list-item :to="item.url" v-for="item in items" :key="item.title" link>
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-content>
     <router-view :key="componentKey"></router-view>
    </v-content>
  </v-app>
</template>

<script>
export default {
  name: "App",

  components: {
  },

  data() {
    return {
      drawer: true,
      items: [
        { title: "Tổng quan", icon: "mdi-home-city",url: "/" },
        { title: "Thiết bị", icon: "mdi-account",url: "/about" },
        // { title: "Users", icon: "mdi-account-group-outline" },
      ],
      mini: true,
    };
  },
};
</script>
