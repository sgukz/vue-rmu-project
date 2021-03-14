<template>
  <div>
    <formfull :data="data" :rules="formfull_rules" />
  </div>
</template>
<script>
import formfull from "@/components/forms/form-full.vue";

export default {
  components: {
    formfull
  },
  data() {
    return {
      data: {
        date3: this.$route.query.date3,
        positionnew: this.$route.query.positionnew,
        titlenamet: this.$route.query.titlenamet,
        namet: this.$route.query.namet,
        surnamet: this.$route.query.surnamet,
        nickt: this.$route.query.nickt,
        tel: this.$route.query.tel,
        email: this.$route.query.email,
        lineid: this.$route.query.lineid,
        BrithDate: this.$route.query.BrithDate,
        comp_age: this.$route.query.comp_age,
        sex: this.$route.query.sex,
        height: this.$route.query.height,
        weight: this.$route.query.weight,
        pr_add: this.$route.query.pr_add,
        pr_addhh: this.$route.query.pr_addhh,
        pr_soi: this.$route.query.pr_soi,
        pr_street: this.$route.query.pr_street,
        pr_district: this.$route.query.pr_district,
        pr_aumphur: this.$route.query.pr_aumphur,
        pr_proince: this.$route.query.pr_proince,
        pr_country: this.$route.query.pr_country,
        pr_postaicode: this.$route.query.pr_postaicode,
        name_Level1: this.$route.query.name_Level1,
        institute1: this.$route.query.institute1,
        name_subject1: this.$route.query.name_subject1,
        name_graduation1: this.$route.query.name_graduation3,
        name_Level3: this.$route.query.name_Level3,
        institute3: this.$route.query.institute3,
        name_subject3: this.$route.query.name_subject3,
        name_graduation3: this.$route.query.name_graduation3,
        name_understanding1: this.$route.query.name_understanding1,
        name_speaking1: this.$route.query.name_speaking1,
        name_reading1: this.$route.query.name_reading1,
        name_writing1: this.$route.query.name_writing1,
        name_language2: this.$route.query.name_language2,
        name_understanding2: this.$route.query.name_understanding2,
        name_speaking2: this.$route.query.name_speaking2,
        name_raeding2: this.$route.query.name_reading2,
        name_writing2: this.$route.query.name_writing2,
        certificate: this.$route.query.certificate,
        experince: this.$route.query.experince,
        experince: this.$route.query.experince,
        company_add1: this.$route.query.company_add1,
        from1: this.$route.query.from1,
        to1: this.$route.query.to1,
        position1: this.$route.query.position1,
        s_last1: this.$route.query.s_last1,
        note1: this.$route.query.note1,
        company_add2: this.$route.query.company_add2,
        from2: this.$route.query.from2,
        to2: this.$route.query.to2,
        position2: this.$route.query.position2,
        s_last2: this.$route.query.s_last2,
        note2: this.$route.query.note2,
        company_add3: this.$route.query.company_add3,
        from3: this.$route.query.from3,
        to3: this.$route.query.to3,
        position3: this.$route.query.position3,
        s_last3: this.$route.query.s_last3,
        note3: this.$route.query.note3,
        applicant_s_signature: this.$route.query.applicant_s_signature
      },
      formfull_rules: {},
      formfull_rules1: {
        req: [v => !!v || "Item is required"],
        name: [
          v => !!v || "Item is required",
          v => (v && v.length >= 2) || "Must be more than 2 characters",
          v => (v || "").indexOf(" ") < 0 || "No spaces are allowed"
        ],
        email: [
          v => !!v || "Item is required",
          v =>
            /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
              v
            ) || "E-mail must be valid"
        ],
        reqm2: [
          v => !!v || "Item is required",
          v => (v && v.length >= 2) || "Must be more than 2 characters"
        ],
        reqeq5: [
          v => !!v || "Item is required",
          v => (v && v.length == 5) || "Must be 5 Digit"
        ],
        reqeq6: [
          v => !!v || "Item is required",
          v => (v && v.length == 10) || "Must be 10 Digit"
        ]
      }
    };
  }
};
</script>