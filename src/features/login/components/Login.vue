<template>
  <v-app class="app">
    <v-main class="main">
      <v-card class="loginWrapper" elevation="4">
        <div>
          <v-toolbar dark color="primary">
            <v-toolbar-title>Enter login details</v-toolbar-title>
          </v-toolbar>
          <v-card-text>
            <v-form>
              <v-text-field
                id="username"
                v-model="username"
                class="my-5"
                name="input-10-1"
                label="Username"
              />
              <v-text-field
                id="passowrd"
                v-model="passowrd"
                class="my-5"
                name="input-10-1"
                label="Password"
              />
            </v-form>
          </v-card-text>
          <v-card-actions>
            <v-spacer />
            <v-btn
              id="login"
              color="primary"
              dark
              class="mb-5"
              :width="100"
              @click="onLogin"
            >
              Log in
            </v-btn>
          </v-card-actions>
        </div>
      </v-card>
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: "Login",
  data() {
    return {
      username: "",
      passowrd: "",
    };
  },
  methods: {
    onLogin() {
      this.$router.push("/dashboard");
    },
  },
};
</script>

<style scoped>
.app >>> .v-application--wrap {
  min-height: calc(100vh - 48px) !important;
}

.main >>> .v-main__wrap {
  display: flex;
  align-items: center;
  justify-content: center;
}

.loginWrapper {
  width: 40%;
  margin: auto;
}
</style>
