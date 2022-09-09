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
              <div class="coordinates" v-for="(coordinate, index) in localCoordinates" :key="index + 10000">
                <EditCoordinate
                  :index="index"
                  :latitude="coordinate.latitude"
                  :longitude="coordinate.longitude"
                  @onLatitudeEdit="onLatitudeEdit"
                  @onLongitudeEdit="onLongitudeEdit"
                  @removeCoordinate="removeCoordinate"
                />
                <hr />
              </div>
              <div>
                <v-btn
                  text
                  class="btn-action teal accent-4"
                  @click="addCoordinate"
                >
                  <i class="fas fa-solid fa-plus"></i>
                </v-btn>
              </div>
              <v-select
                v-model="localStreet.type"
                :items="['HOURLY', 'START_STOP', 'UNKNOWN']"
                label="Type"
              ></v-select>
              <div v-for="(availability, index) in localStreet.availabilities" :key="index">
                <EditTimePickerByDayModal
                  :day="availability.day"
                  :closing-hour="availability.closingHour"
                  :opening-hour="availability.closingHour"
                  @onOpeningTime="onOpeningTime"
                  @onClosingTime="onClosingTime"
                />
              </div>
            </v-row>
          </v-container>
        </v-card-text>
        <v-card-actions>
          <v-spacer />
          <v-btn color="blue darken-1" text @click="onClose"> Close </v-btn>
          <v-btn color="blue darken-1" text @click="updateStreet"> Confirm </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-row>
</template>

<script>
import EditTimePickerByDayModal from "./EditTimePickerByDayModal";
import EditCoordinate from "./EditCoordinate";

export default {
  name: "UpdateStreetModal",
  components: {
    EditCoordinate,
    EditTimePickerByDayModal
  },
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
      localCoordinates: this.street.coordinates,
    };
  },
  methods: {
    onLatitudeEdit(index, value) {
      this.localCoordinates = this.localCoordinates.map(
        (coordinate, i) => {
          if (i === index) {
            coordinate.latitude = parseFloat(value)
          }
          return coordinate
        }
      )
    },
    onLongitudeEdit(index, value) {
      this.localCoordinates = this.localCoordinates.map(
        (coordinate, i) => {
          if (i === index) {
            coordinate.longitude = parseFloat(value)
          }
          return coordinate
        }
      )
    },
    removeCoordinate(id) {
      this.localCoordinates.splice(id, 1)
    },
    addCoordinate() {
      this.localCoordinates.push({
        latitude: "",
        longitude: "",
      })
    },
    onClose() {
      this.$emit("onClose", false);
    },
    updateStreet() {
      this.localStreet.coordinates = this.localCoordinates
      this.localStreet.availabilities = this.localStreet.availabilities.filter(a =>
        a.openingHour && a.closingHour
      )
      this.$emit("updateStreet", this.localStreet);
    },
    onClosingTime(time, day) {
      this.localStreet.availabilities = this.localStreet.availabilities.map(
        (availability) => {
          if (availability.day === day) {
            availability.closingHour = time;
          }
          return availability;
        }
      )
    },
    onOpeningTime(time, day) {
      this.localStreet.availabilities = this.localStreet.availabilities.map(
        (availability) => {
          if (availability.day === day) {
            availability.openingHour = time;
          }
          return availability;
        }
      )
    }
  },
};
</script>

<style scoped>
.list {
  background-color: #ebecf0;
}
.coordinates {
  width: 100%
}
</style>
