<template>
  <div class="lat-long">
    <div class="lat-long-data">
      <v-text-field label="Latitude" v-model="localLatitude" @keyup="onLatitudeEdit" />
      <v-text-field label="Longitude" v-model="localLongitude" @keyup="onLongitudeEdit" />
      <hr />
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
  name: "EditCoordinate",
  props: {
    index: {
      type: Number,
      default: null
    },
    latitude: {
      type: Number,
      default: null,
    },
    longitude: {
      type: Number,
      default: null,
    }
  },
  data() {
    return {
      localLatitude: this.latitude,
      localLongitude: this.longitude
    }
  },
  methods: {
    onLatitudeEdit() {
      this.$emit('onLatitudeEdit', this.index, this.localLatitude)
    },
    onLongitudeEdit() {
      this.$emit('onLongitudeEdit', this.index, this.localLongitude)
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
