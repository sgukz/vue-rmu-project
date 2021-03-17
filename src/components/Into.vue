<template>
  <section id="hero">
    <div class="hero-container">
      <h1>
        ระบบการจัดเก็บข้อมูลการทำงานของนักศึกษา <br />
        สาขาวิศวกรรมคอมพิวเตอร์ COE <br />
        Student employment management system
      </h1>
      <a href="/shot-form" class="btn-get-started scrollto mb-4"
        >กรอกข้อมูลการทำงาน</a
      >
      <a href="#" class="btn-get-started scrollto mb-4" @click="openModal"
        >ตรวจสอบข้อมูล</a
      >
      <a href="/COE/main" class="btn-get-started scrollto">ดูข้อมูลทั้งหมด</a>
    </div>
  </section>
</template>

<script>
import axios from "axios";

export default {
  name: "into",
  data: () => ({
    isData: false,
  }),
  methods: {
    openModal() {
      this.$swal({
        text: "กรุณากรอกเลขบัตรประชาชนที่ต้องการตรวจสอบข้อมูล",
        input: "text",
        inputAttributes: {
          autocapitalize: "off",
        },
        showCancelButton: true,
        confirmButtonText: "ตกลง",
        showLoaderOnConfirm: true,
        preConfirm: (login) => {
          if (login !== "") {
            let baseUrl = process.env.VUE_APP_DATA;
            axios
              .get(`${baseUrl}/getGraduateDataByCID/${login}`)
              .then((resp) => {
                let data = resp.data.data;
                if (data.length > 0) {
                  localStorage.setItem("isAdminUpdate", data[0].cid);
                  localStorage.removeItem("isViewer");
                  window.location = "/shot-form";
                } else {
                  this.$swal("แจ้งเตือน", "ไม่พบข้อมูล!", "error");
                }
              })
              .catch((error) => console.log("Error :", error));
          }
        },
      }).then((result) => {
        if (result.isConfirmed) {
        }
      });
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
