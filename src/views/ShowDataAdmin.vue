<template>
  <v-card class="overflow-hidden">
    <v-app-bar
      absolute
      color="#43a047"
      dark
      shrink-on-scroll
      prominent
      src="../assets/images/tot-top-banner-admin.jpg"
      fade-img-on-scroll
      scroll-target="#scrolling-techniques-5"
      scroll-threshold="500"
    >
      <template v-slot:img="{ props }">
        <v-img
          v-bind="props"
          gradient="to top right, rgba(55,236,186,.7), rgba(25,32,72,.7)"
        ></v-img>
      </template>

      <!-- <v-app-bar-nav-icon></v-app-bar-nav-icon> -->

      <v-app-bar-title>{{ appTitle }}</v-app-bar-title>
      <v-spacer></v-spacer>
      <div>
        <v-btn
          depressed
          color="primary"
          @click="$router.push('/Administrator/login')"
        >
          สำหรับผู้ดูแลระบบ
        </v-btn>
      </div>
    </v-app-bar>
    <v-sheet>
      <v-container style="margin-top: 150px; font-family: 'Kanit', sans-serif">
        <v-card class="mt-20">
          <h4 class="pl-3 pt-3">รายการข้อมูลทั้งหมด</h4>
          <v-card-title>
            <br />
            <br />
            <v-text-field
              v-model="search"
              append-icon="mdi-magnify"
              label="ค้นหา"
              single-line
              hide-details
            ></v-text-field>
          </v-card-title>
          <div>
            <v-data-table
              :headers="headers"
              :items="desserts"
              class="elevation-1"
            >
              <template v-slot:item.actions="{ item }">
                <div v-if="isAdmin">
                  <v-icon small class="mr-2" @click="editItem(item.cid)">
                    mdi-pencil
                  </v-icon>
                  <v-icon small @click="deleteItem(item.cid)">
                    mdi-delete
                  </v-icon>
                </div>
                <div v-else>
                <v-icon small @click="viewData(item.cid)">
                    mdi-eye
                  </v-icon>
                </div>
              </template>
            </v-data-table>
          </div>
          <!-- <v-data-table :headers="headers" :items="desserts" :search="search">
            <template v-slot:top> </template>
          </v-data-table> -->
        </v-card>
      </v-container>
    </v-sheet>
  </v-card>
</template>

<script>
//import HelloWorld from "./components/HelloWorld";
import axios from "axios";
export default {
  name: "MainAdmin",
  data() {
    return {
      appTitle: "ระบบการจัดเก็บข้อมูลการทำงานของนักศึกษา",
      sidebar: false,
      isAdmin: false,
      search: "",
      desserts: [],
      headers: [
        {
          text: "ชื่อ - สกุล",
          align: "start",
          filterable: false,
          value: "fullname",
        },
        { text: "ชื่อบริษัท", value: "company_name" },
        { text: "เวลาที่บันทึก", value: "createdDate" },
        { text: "จัดการ", value: "actions", sortable: false },
      ],
    };
  },
  mounted() {
    let isLogin = localStorage.getItem("isLogin");
    if (isLogin) {
      this.isAdmin = true
    }
    this.loadData();
  },
  methods: {
    loadData() {
      let baseUrl = process.env.VUE_APP_DATA;
      axios
        .get(`${baseUrl}/getGraduateDataAll`)
        .then((resp) => {
          let data = resp.data.data;
          this.desserts = data;
        })
        .catch((error) => {
          this.$swal("เกิดข้อผิดพลาด", "Error" + error, "error");
        });
    },
    editItem(id) {
      localStorage.setItem("isAdminUpdate", id);
      window.location = "/shot-form";
    },
    viewData(id){
      localStorage.setItem("isAdminUpdate", id);
      localStorage.setItem("isViewer", true);
      window.location = "/shot-form";
    },
    deleteItem(id) {
      this.$swal({
        title: "แจ้งเตือน",
        text: "ต้องการลบข้อมูลใช่หรือไม่",
        type: "warning",
        showCancelButton: true,
        confirmButtonText: "ยืนยัน",
        showCloseButton: true,
      }).then((result) => {
        if (result.value) {
          let baseUrl = process.env.VUE_APP_DATA;
          axios
            .get(`${baseUrl}/delete/${id}`)
            .then((resp) => {
              let data = resp.data;
              if (data.status_code === 200) {
                this.$swal("แจ้งเตือน", data.msg, data.type);
                this.loadData();
              } else {
                this.$swal("เกิดข้อผิดพลาด", data.msg, data.type);
              }
            })
            .catch((error) => {
              this.$swal("เกิดข้อผิดพลาด", "Error" + error, "error");
            });
        }
      });
    },
    logout() {
      localStorage.removeItem("isLogin");
      localStorage.removeItem("isAdminUpdate");
      window.location = "/Administrator/login";
    },
  },
};
</script>
<style>
</style>
