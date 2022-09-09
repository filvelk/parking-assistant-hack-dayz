<template>
  <v-card class="d-flex list">
    <v-card-text class="list-cards d-flex justify-space-between">
      <h3 class="text--primary">
        {{ street.zone }}
      </h3>
      <v-card-actions class="d-flex flex-column p-0">
        <v-btn text class="btn-action first" @click="showUpdateStreetModal = true">
          <i class="fas fa-edit"></i>
        </v-btn>
        <v-btn
          text
          class="btn-action red"
          @click="showDeleteStreetModal = true"
        >
          <i class="fas fa-trash-alt"></i>
        </v-btn>
      </v-card-actions>
    </v-card-text>
    <UpdateStreetModal
      class="cardModal"
      v-if="showUpdateStreetModal"
      :show="showUpdateStreetModal"
      :street="street"
      @updateStreet="updateStreet"
      @onClose="showUpdateStreetModal = false"
    />
    <DeleteStreetModal
      class="cardModal"
      v-if="showDeleteStreetModal"
      :show="showDeleteStreetModal"
      :id="street.id"
      :name="street.zone"
      @onConfirm="onDeleteStreet"
      @onClose="showDeleteStreetModal = false"
    />
  </v-card>
</template>

<script>
import DeleteStreetModal from "./DeleteStreetModal";
import UpdateStreetModal from "./UpdateStreetModal";
import StreetsBackend from "../backend/StreetsBackend";

export default {
  name: "Street",
  components: {
    DeleteStreetModal,
    UpdateStreetModal,
  },
  props: {
    street: {
      type: Object,
      default: () => {},
    },
  },
  data() {
    return {
      showUpdateStreetModal: false,
      showDeleteStreetModal: false,
    };
  },
  methods: {
    async onDeleteStreet(id) {
      await StreetsBackend.deleteStreet(id);
      this.showDeleteStreetModal = false;
      this.$emit("reload");
    },
    async updateStreet(updatedStreet) {
      this.showUpdateStreetModal = false;
      await StreetsBackend.updateStreet(updatedStreet.id, updatedStreet);
    },
  },
};
</script>

<style scoped>
.list,
.cardModal {
  background-color: #ebecf0;
}

.list .btn-action {
  margin-left: 0 !important;
}

.list-cards >>> .v-card__actions {
  padding: 0;
}

.list-cards >>> .btn-action.first {
  margin-bottom: 8px !important;
}

h3.text--primary {
  font-size: 34px;
  margin-top: auto;
  margin-bottom: auto;
}
</style>
