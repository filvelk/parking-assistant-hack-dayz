<template>
  <v-row justify="center">
    <v-dialog v-model="show" max-width="390" persistent>
      <v-card>
        <v-toolbar dark color="primary">
          <v-toolbar-title>
            Are you sure you want to delete {{ name }}
          </v-toolbar-title>
        </v-toolbar>
        <v-card-actions>
          <v-spacer />
          <v-btn color="blue darken-1" text @click="onClose"> Close </v-btn>
          <v-btn color="blue darken-1" text @click="onConfirm"> Confirm </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-row>
</template>

<script>
export default {
  name: "DeleteStreetModal",
  props: {
    show: {
      type: Boolean,
      default: false,
    },
    name: {
      type: String,
      default: "",
    },
    id: {
      type: Number,
      default: null,
    },
  },
  methods: {
    onClose() {
      this.$emit("onClose", false);
    },
    onConfirm() {
      this.$emit("onConfirm", this.id);
    },
  },
};
</script>

<style scoped></style>
