<template>
  <div class="lat-long">
    <div class="lat-long-data">
      <v-text-field label="Latitude" v-model="latitude" @keyup="onLatitudeEdit" />
      <v-text-field label="Longitude" v-model="longitude" @keyup="onLongitudeEdit" />
    </div>
    <v-btn
      text
      class="btn-action red"
      @click="onRemoveCoordinate"
    >
      <i class="fas fa-solid fa-minus"></i>
    </v-btn>
  </div>
</template>

<script>
export default {
  name: "Coordinate",
  props: {
    index: {
      type: Number,
      default: null
    }
  },
  data() {
    return {
      latitude: null,
      longitude: null
    }
  },
  methods: {
    onLatitudeEdit() {
      this.$emit('onLatitudeEdit', this.index, this.latitude)
    },
    onLongitudeEdit() {
      this.$emit('onLongitudeEdit', this.index, this.longitude)
    },
    onRemoveCoordinate() {
      this.$emit('removeCoordinate', this.index)
    }
  }
};
</script>

<style scoped>
.lat-long {
  display: flex;
}
.lat-long-data {
  width: 100%
}
.list {
  background-color: #ebecf0;
}
</style>
