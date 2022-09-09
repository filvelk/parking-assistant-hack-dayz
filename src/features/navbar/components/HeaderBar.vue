<template>
  <v-toolbar dense class="toolbar">
    <v-toolbar-title class="title">Parking assistant</v-toolbar-title>
    <v-spacer />
    <v-toolbar-items class="hidden-xs-only">
      <v-btn
        text
        class="btn-action teal accent-4"
        @click="showAddStreetModal = true"
        ><span>Add zone</span>
        <i class="fas fa-solid fa-plus"></i>
      </v-btn>
      <v-btn
        v-if="$route.path === '/dashboard'"
        class="btn-action"
        text
        @click="signOutUser"
      >
        <span>Log Out</span>
        <i class="fas fa-sign-out-alt" />
      </v-btn>
    </v-toolbar-items>
  </v-toolbar>
</template>

<script>
import { mapActions, mapState } from "vuex";

export default {
  name: "HeaderBar",
  data() {
    return {
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

span {
  margin-right: 6px;
}

.toolbar .btn-action {
  padding: 0 !important;
  margin-left: 16px;
}
</style>
