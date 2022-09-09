<template>
  <v-app>
    <v-container fluid grid-list-md class="pa-5">
      <v-layout>
        <v-row>
          <v-flex class="xs2" v-for="street in getStreets" :key="street.id">
            <Street :street="street" @reload="loadStreets" />
          </v-flex>
        </v-row>
      </v-layout>
    </v-container>
  </v-app>
</template>

<script>
import Street from "./Street";
import StreetsBackend from "../backend/StreetsBackend";

export default {
  name: "Dashboard",
  components: {
    Street
  },
  data() {
    return {
      streets: []
    }
  },
  computed: {
    getStreets() {
      return this.streets.data;
    },
  },
  created() {
    this.loadStreets();
  },
  methods: {
    async loadStreets() {
      this.streets = await StreetsBackend.getStreets();
    }
  }
};
</script>

<style scoped></style>
