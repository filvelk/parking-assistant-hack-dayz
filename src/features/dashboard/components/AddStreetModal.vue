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
              <v-text-field label="Zone" v-model="street.zone" />
              <v-text-field label="Price" v-model="street.price" />
              <v-text-field label="Company" v-model="street.company" />
              <v-text-field
                label="Company phone number"
                v-model="street.companyPhoneNumber"
              />
              <v-select
                v-model="street.type"
                :items="['HOURLY', 'START_STOP', 'UNKNOWN']"
                label="Type"
              ></v-select>
              <div v-for="(day, index) in days" :key="index">
                <TimePickerByDayModal
                  :day="day"
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
          <v-btn color="blue darken-1" text @click="addStreet"> Confirm </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-row>
</template>

<script>
import TimePickerByDayModal from "./TimePickerByDayModal";

export default {
  name: "AddStreetModal",
  components: {
    TimePickerByDayModal,
  },
  props: {
    show: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      menu: false,
      time: null,
      days: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday",
      ],
      street: {
        price: 10.0,
        zone: "",
        company: "",
        companyPhoneNumber: "",
        type: "HOURLY",
        availabilities: [
          {
            day: "MONDAY",
          },
          {
            day: "TUESDAY",
          },
          {
            day: "WEDNESDAY",
          },
          {
            day: "THURSDAY",
          },
          {
            day: "FRIDAY",
          },
          {
            day: "SATURDAY",
          },
          {
            day: "SUNDAY",
          },
        ],
        coordinates: [
          {
            latitude: "",
            longitude: "",
          },
          {
            latitude: "",
            longitude: "",
          },
        ],
      },
    };
  },
  methods: {
    onClose() {
      this.$emit("onClose", false);
    },
    addStreet() {
      this.street.availabilities = this.street.availabilities.filter(a =>
        a.openingHour && a.closingHour
      )
      this.$emit("addStreet", this.street);
    },
    onClosingTime(time, day) {
      this.street.availabilities = this.street.availabilities.map(
        (availability) => {
          if (availability.day === day) {
            availability.closingHour = time;
          }
          return availability;
        }
      );
    },
    onOpeningTime(time, day) {
      this.street.availabilities = this.street.availabilities.map(
        (availability) => {
          if (availability.day === day) {
            availability.openingHour = time;
          }
          return availability;
        }
      );
    }
  },
};
</script>

<style scoped>
.list {
  background-color: #ebecf0;
}
</style>
