<template>
  <v-card class="d-flex list">
    <v-card-text class="list-cards d-flex justify-space-between">
      <h3 class="text--primary">
        {{ street.zone }}
      </h3>
      <v-card-actions class="d-flex flex-column p-0">
        <v-btn text class="btn-action first" @click="onEdit">
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
    <AddStreetModal
      class="cardModal"
      v-if="showAddStreetModal"
      :show="showAddStreetModal"
      :street="street"
      @addStreet="addStreet"
      @onClose="showAddStreetModal = false"
    />
    <DeleteStreetModal
      class="cardModal"
      v-if="showDeleteStreetModal"
      :show="showDeleteStreetModal"
      @onConfirm="onDeleteStreet"
      @onClose="showDeleteStreetModal = false"
    />
  </v-card>
</template>

<script>
import AddStreetModal from "./AddStreetModal";
import DeleteStreetModal from "./DeleteStreetModal";

export default {
  name: "Street",
  components: {
    AddStreetModal,
    DeleteStreetModal,
  },
  props: {
    street: {
      type: Object,
      default: () => {},
    },
  },
  data() {
    return {
      showAddStreetModal: false,
      showDeleteStreetModal: false,
    };
  },
  created() {},
  methods: {
    onEdit() {
      this.showAddStreetModal = true;
    },
    onDeleteStreet(id) {
      console.log(id);
      this.showDeleteStreetModal = false;
      // const payload = {
      //     street: this.street
      // }
      // await StreetService.updateStreet(this.street.id, payload)
      // this.$emit('reloadList')
    },
    addStreet(updatedStreet) {
      console.log(updatedStreet);
      console.log("On Add ");
      // const payload = {
      //     name: title,
      //     desc: description,
      //     idList: this.list.id
      // }
      // this.showAddStreetModal = false
      // await BoardsService.createCard(payload)
      // this.loadCards()
    },
    updateAddStreetModal(value) {
      this.showAddStreetModal = value;
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
