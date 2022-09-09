<template>
  <v-row justify="center">
    <v-dialog v-model="show" max-width="390" persistent>
      <v-card>
        <v-toolbar dark color="primary">
          <v-toolbar-title> Enter information for the street </v-toolbar-title>
        </v-toolbar>
        <v-card-text>
          <v-container>
            <v-row>
              <v-text-field label="Zone" v-model="localStreet.zone" />
              <v-text-field label="Price" v-model="localStreet.price" />
              <v-text-field label="Company" v-model="localStreet.company" />
              <v-text-field
                label="Company phone number"
                v-model="localStreet.companyPhoneNumber"
              />
              <v-select
                v-model="localStreet.type"
                :items="['HOURLY', 'START_STOP', 'UNKNOWN']"
                label="Type"
              ></v-select>
              <v-text-field
                label="Opening hour"
                v-model="localStreet.openingHour"
              />
              <v-text-field
                label="Closing Hour"
                v-model="localStreet.closingHour"
              />
            </v-row>
          </v-container>
        </v-card-text>
        <v-card-actions>
          <v-spacer />
          <v-btn color="blue darken-1" text @click="onClose"> Close </v-btn>
          <v-btn color="blue darken-1" text @click="addStreet"> Confirm </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-row>
</template>

<script>
export default {
  name: "UpdateStreetModal",
  props: {
    show: {
      type: Boolean,
      default: false,
    },
    street: {
      type: Object,
      default: () => ({}),
    },
  },
  data() {
    return {
      title: "",
      description: "",
      localStreet: this.street,
    };
  },
  methods: {
    onClose() {
      this.$emit("onClose", false);
    },
    updateStreet() {
      this.$emit("updateStreet", this.localStreet);
    },
  },
};
</script>

<style scoped>
.list {
  background-color: #ebecf0;
}
</style>
