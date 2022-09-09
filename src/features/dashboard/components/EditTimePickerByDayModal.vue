<template>
  <div>
    <h3>{{ day }}</h3>
    <v-menu
      ref="openingMenu"
      v-model="openingMenu"
      :close-on-content-click="false"
      :nudge-right="40"
      :return-value.sync="localOpeningHour"
      transition="scale-transition"
      offset-y
      max-width="290px"
      min-width="290px"
    >
      <template v-slot:activator="{ on, attrs }">
        <v-text-field
          v-model="localOpeningHour"
          label="Opening hour"
          prepend-icon="mdi-clock-time-four-outline"
          readonly
          v-bind="attrs"
          v-on="on"
        ></v-text-field>
      </template>
      <v-time-picker
        v-if="openingMenu"
        v-model="localOpeningHour"
        full-width
        @click:minute="$refs.openingMenu.save(localOpeningHour), onOpeningTimeSave()"
      ></v-time-picker>
    </v-menu>
    <v-menu
      ref="closingMenu"
      v-model="closingMenu"
      :close-on-content-click="false"
      :nudge-right="40"
      :return-value.sync="localClosingHour"
      transition="scale-transition"
      offset-y
      max-width="290px"
      min-width="290px"
    >
      <template v-slot:activator="{ on, attrs }">
        <v-text-field
          v-model="localClosingHour"
          label="Closing hour"
          prepend-icon="mdi-clock-time-four-outline"
          readonly
          v-bind="attrs"
          v-on="on"
        ></v-text-field>
      </template>
      <v-time-picker
        v-if="closingMenu"
        v-model="localClosingHour"
        full-width
        @click:minute="$refs.closingMenu.save(localClosingHour), onClosingTimeSave()"
      ></v-time-picker>
    </v-menu>
  </div>
</template>

<script>
export default {
  name: "EditTimePickerByDayModal",
  props: {
    day: {
      type: String,
      default: "",
    },
    closingHour: {
      type: String,
      default: "",
    },
    openingHour: {
      type: String,
      default: "",
    },
  },
  data() {
    return {
      openingMenu: false,
      closingMenu: false,
      localOpeningHour: this.openingHour,
      localClosingHour: this.closingHour,
    };
  },
  methods: {
    onOpeningTimeSave() {
      this.$emit("onOpeningTime", this.localOpeningHour, this.day);
    },
    onClosingTimeSave() {
      this.$emit("onClosingTime", this.localClosingHour, this.day);
    },
  },
};
</script>

<style scoped>
.list {
  background-color: #ebecf0;
}
</style>
