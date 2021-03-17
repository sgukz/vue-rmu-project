<template>
  <v-card class="overflow-hidden" style="font-family: 'Kanit', sans-serif">
    <v-app-bar
      absolute
      color="#EF9A9A"
      dark
      shrink-on-scroll
      prominent
      src="../../assets/images/formshort.jpg"
      fade-img-on-scroll
      scroll-target="#scrolling-techniques-3"
    >
      <template v-slot:img="{ props }">
        <v-img
          v-bind="props"
          gradient="to top right, rgba(213, 209, 209,.1), rgba(213, 209, 209,.4)"
        ></v-img>
      </template>
      <v-app-bar-title style="cursor: pointer;" @click="$router.push('/')">COE. Management</v-app-bar-title>

      <v-spacer></v-spacer>

      <v-btn class="mr-2" depressed @click="$router.push('/')">
        <v-icon color="light" dark>mdi-home</v-icon>
      </v-btn>
      <v-btn class="mr-2" color="primary" depressed @click="$router.push('/COE/main')">
        ดูข้อมูลทั้งหมด
      </v-btn>
      <!-- <div>
        <v-btn depressed color="primary" > ดูข้อมูลทั้งหมด </v-btn>
      </div> -->
    </v-app-bar>
    <v-sheet id="scrolling-techniques-3" class="overflow-y-auto">
      <v-container style="height: 1000px">
        <div style="margin-top: 150px">
          <formshot :data="data" :rules="formshot_rules" />
        </div>
      </v-container>
    </v-sheet>
  </v-card>
</template>

<script>
import formshot from "@/components/forms/form-shot.vue";

export default {
  name: "shortform",
  components: {
    formshot,
  },
  data() {
    return {
      data: {},
      formshot_rules: {
        req: [(v) => !!v || "Item is required"],
        name: [
          (v) => !!v || "Item is required",
          (v) => (v && v.length >= 2) || "Must be more than 2 characters",
          (v) => (v || "").indexOf(" ") < 0 || "No spaces are allowed",
        ],
        email: [
          (v) => !!v || "Item is required",
          (v) =>
            /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
              v
            ) || "E-mail must be valid",
        ],
        reqm2: [
          (v) => !!v || "Item is required",
          (v) => (v && v.length >= 2) || "Must be more than 2 characters",
        ],
        reqeq5: [
          (v) => !!v || "Item is required",
          (v) => (v && v.length == 5) || "Must be 5 Digit",
        ],
        cid: [
          (v) => !!v || "Item is required",
          (v) => (v && v.length == 13) || "Must be 13 Digit",
        ],
      },
    };
  },
};
</script>
<style>
@import "../../assets/style.css";
</style>