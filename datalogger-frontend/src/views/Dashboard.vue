<template>
  <div class="dashboard">
    <MglMap
      :accessToken="accessToken"
      :mapStyle="mapStyle"
      :center="center"
      trackResize
    >
    /></MglMap>
  </div>
</template>

<script>
import Mapbox from "mapbox-gl";
import { MglMap } from "vue-mapbox";
export default {
  name: "Dashboard",
  data() {
    return {
      accessToken:
        "pk.eyJ1IjoiamF5cmV5bm8iLCJhIjoiY2sxeHdrejg2MDgwMTNjcGgzcnM2YTU5dyJ9.QnKAon8cixzaqDGloGcF2Q", // your access token. Needed if you using Mapbox maps
      mapStyle: "mapbox://styles/mapbox/satellite-streets-v11", // your map style
    //   center:  {lon:105.847130, lat: 21.030653},
    // center: [90,90]
    };
  },
  components: {
    MglMap,
  },
  created() {
    // We need to set mapbox-gl library here in order to use it in template
    this.mapbox = Mapbox;
  },
};
</script>

<style>
.dashboard {
  margin: 5px;
  height: 80vh;
}
</style>
