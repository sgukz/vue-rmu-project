<template>
  <v-app id="inspire">
    <v-content>
      <v-container fluid fill-height>
        <v-layout align-center justify-center>
          <v-flex xs12 sm8 md4>
            <v-card class="elevation-12">
              <v-toolbar dark color="primary">
                <v-toolbar-title> Login Administrator </v-toolbar-title>
              </v-toolbar>
              <v-card-text>
                <v-form ref="form" v-model="valid">
                  <v-text-field
                    name="login"
                    label="Login Name"
                    type="text"
                    v-model="loginName"
                    :rules="loginNameRule"
                  ></v-text-field>
                  <v-text-field
                    id="password"
                    name="password"
                    label="Password"
                    type="password"
                    v-model="loginPassword"
                    :rules="loginNameRule"
                  ></v-text-field>
                </v-form>
              </v-card-text>
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="primary" @click="login">Login</v-btn>
              </v-card-actions>
            </v-card>
          </v-flex>
        </v-layout>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
import axios from "axios";
export default {
  name: "login",
  data: () => ({
    dialog: true,
    tab: 0,
    tabs: [{ name: "Login", icon: "mdi-account" }],
    valid: true,
    loginPassword: "",
    loginName: "",
    loginNameRule: [(v) => !!v || "Item is required"],
    show1: false,
  }),
  methods: {
    login() {
      let baseUrl = process.env.VUE_APP_DATA;
      let formLogin = {
        username: this.loginName,
        pwd: this.loginPassword,
      };
      axios
        .post(`${baseUrl}/login`, {
          formLogin: formLogin,
        })
        .then((res) => {
          let data = res.data;
          if (data.status_code === 200) {
            this.$swal("แจ้งเตือน", data.msg, data.type);
            localStorage.setItem("isLogin", true);
            setTimeout(() => {
              window.location = "/Administrator/main"
            }, 1500);
          } else {
            this.$swal("แจ้งเตือน", data.msg, data.type);
            this.loginPassword = "";
          }
        })
        .catch((error) => {
          this.$swal("เกิดข้อผิดพลาด", "Error" + error, "error");
        });
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
