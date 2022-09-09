<template>
  <v-app>
    <v-main>
      <v-card class="loginWrapper" elevation="4">
        <div>
          <v-toolbar dark color="primary">
            <v-toolbar-title> Parking asstant </v-toolbar-title>
          </v-toolbar>
          <v-card-text>
            <v-form>
              <v-text-field
                id="username"
                v-model="username"
                class="my-5"
                name="input-10-1"
                label="Enter username"
                hint="Enter your username"
              />
              <v-text-field
                id="passowrd"
                v-model="passowrd"
                class="my-5"
                name="input-10-1"
                label="Enter password"
                hint="Enter your password"
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
              Login
            </v-btn>
          </v-card-actions>
        </div>
      </v-card>
      <div class="loginWrapper">
        <v-banner single-line>
          <b>This is a test</b>
          <p>
            <small>If we don't need it, we can delete it</small>
          </p>
        </v-banner>
      </div>
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
.loginWrapper {
  width: 40%;
  margin: auto;
}
</style>
