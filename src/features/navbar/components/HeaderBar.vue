<template>
  <v-toolbar dense class="toolbar">
    <v-toolbar-title class="title">Parking assistant</v-toolbar-title>
    <v-spacer />
    <v-toolbar-items v-if="$route.path === '/dashboard'" class="hidden-xs-only">
      <v-btn
        text
        class="btn-action teal accent-4"
        @click="showAddStreetModal = true"
        ><span class="btn-text">Add zone</span>
        <i class="fas fa-solid fa-plus"></i>
      </v-btn>
      <v-btn class="btn-action" text @click="signOutUser">
        <span class="btn-text">Log Out</span>
        <i class="fas fa-sign-out-alt" />
      </v-btn>
    </v-toolbar-items>
    <AddStreetModal
      class="cardModal"
      v-if="showAddStreetModal"
      :show="showAddStreetModal"
      @addStreet="addStreet"
      @onClose="showAddStreetModal = false"
    />
  </v-toolbar>
</template>

<script>
import AddStreetModal from "../../dashboard/components/AddStreetModal";
import { mapActions, mapState } from "vuex";
import StreetsBackend from "../../dashboard/backend/StreetsBackend"

export default {
  name: "HeaderBar",
  components: {
    AddStreetModal
  },
  data() {
    return {
      showAddStreetModal: false,
      drawer: false,
      regularUserLinks: [
        {
          icon: "fas fa-th-list",
          text: "Board",
          route: "/dashboad",
        },
      ],
    };
  },
  computed: {
    ...mapState("Login", ["isUserLoggedIn"]),
  },
  methods: {
    ...mapActions("Login", ["setIsUserLoggedIn"]),
    signOutUser() {
      this.setIsUserLoggedIn(false);
      this.$router.push("/login");
    },
    async addStreet(newStreet) {
      this.showAddStreetModal = false;
      await StreetsBackend.createStreet(newStreet);
    }
  },
};
</script>
<style>
.toolbar {
  background-color: #1976d2 !important;
}

.title {
  color: white;
  font-size: 30px !important;
}

.btn-action {
  background-color: #1976d2 !important;
  color: white !important;
}

.btn-text {
  margin-right: 6px;
}

.toolbar .btn-action {
  padding: 0 !important;
  margin-left: 16px;
}
</style>
