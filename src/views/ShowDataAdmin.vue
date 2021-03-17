<template>
  <v-card class="overflow-hidden" style="font-family: 'Kanit', sans-serif">
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

      <div v-if="userName !== ''">
        <v-btn color="success" class="mr-2" @click="showMapAll">
          <span v-if="!showMap">
            <v-icon>mdi-google-maps</v-icon> แสดง location ทั้งหมด
          </span>
          <span v-else> รายการข้อมูลทั้งหมด </span>
        </v-btn>
        <v-btn color="secondary" class="mr-2">
          {{ this.userName }}
        </v-btn>
        <v-btn depressed color="error" @click="logout">
          <v-icon>mdi-power-settings</v-icon> ออกจากระบบ
        </v-btn>
      </div>
      <div v-else>
        <v-btn depressed color="primary" @click="$router.push('/COE/login')">
          สำหรับผู้ดูแลระบบ
        </v-btn>
      </div>
    </v-app-bar>
    <v-sheet>
      <v-container style="margin-top: 150px">
        <v-card class="mt-20" v-if="!showMap">
          <h4 class="pl-3 pt-3">รายการข้อมูลทั้งหมด</h4>
          <div class="pl-3 pt-3">
            <v-btn color="primary" @click="$router.push('/shot-form')">
              บันทึกข้อมูล
            </v-btn>
          </div>
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
              :search="search"
            >
              <template v-slot:item.actions="{ item }">
                <div v-if="isLogin && isRight === 1">
                  <v-icon small class="mr-2" @click="editItem(item.cid)">
                    mdi-pencil
                  </v-icon>
                  <v-icon small @click="deleteItem(item.cid)">
                    mdi-delete
                  </v-icon>
                </div>
                <div v-else-if="isLogin && isRight === 2">
                  <v-icon small @click="viewData(item.cid)"> mdi-eye </v-icon>
                </div>
              </template>
            </v-data-table>
          </div>
        </v-card>
        <v-card class="mt-20" v-else>
          <h4 class="pl-3 pt-3">
            <v-icon color="dark">mdi-google-maps</v-icon> location ทั้งหมด
          </h4>
          <!-- <v-card-title>
            <br />
            <br />
            <v-text-field
              v-model="search"
              append-icon="mdi-magnify"
              label="ค้นหา"
              single-line
              hide-details
            ></v-text-field>
          </v-card-title> -->
          <div>
            <gmap-map
              :center="center"
              :zoom="12"
              style="width: 100%; height: 600px"
            >
              <gmap-marker
                :key="index"
                v-for="(m, index) in markers"
                :position="m.position"
                :label="m.label"
                @click="goToMap(m.url)"
              ></gmap-marker>
            </gmap-map>
          </div>
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
      userName: "",
      isRight: "",
      isLogin: false,
      showMap: false,
      center: { lat: 16.2004057, lng: 103.2693694 },
      markers: [],
      places: [],
    };
  },
  mounted() {
    let login = localStorage.getItem("login");
    if (login) {
      let dataUser = JSON.parse(login);
      this.userName = dataUser[0].user_name;
      this.isRight = dataUser[0].right;
      this.isLogin = true;
    }
    this.loadData();
  },
  methods: {
    goToMap(url) {
      // console.log(url);
      if (url) {
        window.open(
          JSON.parse(url),
          "_blank" // <- This is what makes it open in a new window.
        );
      }else{
        console.log(0);
      }
    },
    showMapAll() {
      this.showMap = !this.showMap;
    },
    loadData() {
      let baseUrl = process.env.VUE_APP_DATA;
      axios
        .get(`${baseUrl}/getGraduateDataAll`)
        .then((resp) => {
          let data = resp.data.data;
          this.desserts = data;
          if (data.length > 0) {
            data.map((val) => {
              let markerNew = JSON.parse(val.company_location);
              let label = val.company_location_label;
              this.markers.push({
                position: markerNew,
                label: {
                  color: "black",
                  fontWeight: "bold",
                  text: label,
                },
                url: val.company_location_url,
              });
              this.center = markerNew;
            });
          }
        })
        .catch((error) => {
          this.$swal("เกิดข้อผิดพลาด", "Error" + error, "error");
        });
    },
    editItem(id) {
      localStorage.setItem("isAdminUpdate", id);
      window.location = "/shot-form";
    },
    viewData(id) {
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
      localStorage.clear();
      window.location = "/COE/login";
    },
  },
};
</script>
<style>
</style>
