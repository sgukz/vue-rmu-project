<template>
  <v-app id="inspire">
    <v-app-bar
      app
      color="white"
      flat
    >
      <v-container class="py-0 fill-height">
        <v-avatar
          class="mr-10"
          color="red lighten-3"
          size="52"
        ></v-avatar>

<v-toolbar-title>COE. Management</v-toolbar-title>

        <v-spacer></v-spacer>

        <v-responsive max-width="220">
          <v-text-field
            dense
            flat
            hide-details
            rounded
            solo-inverted
          ></v-text-field>
        </v-responsive>
      </v-container>
    </v-app-bar>

    <v-main class="red lighten-3">
      <v-container>
        <v-row>
          <v-col cols="2">
            <v-sheet rounded="lg">
              <v-list color="transparent">
                <v-list-item
                  @click="$router.push('/')"
                >
                  <v-list-item-content>
                    <v-list-item-title>
                      Back to menu
                    </v-list-item-title>
                    <v-list-item-title>
                      ถอยกลับ
                    </v-list-item-title>
                  </v-list-item-content>
                </v-list-item>

                <v-divider class="my-2"></v-divider>

                <v-list-item
                  link
                  color="grey lighten-4"
                >
                  <v-list-item-content>
                    <v-list-item-title>
                      Refresh
                    </v-list-item-title>
                  </v-list-item-content>
                </v-list-item>
              </v-list>
            </v-sheet>
          </v-col>

          <v-col>
            <v-sheet
              min-height="70vh"
              rounded="lg"
            >
  <div>
    <formshot :data="data" :rules="formshot_rules" />
  </div>

            </v-sheet>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import formshot from "@/components/forms/form-shot.vue";

export default {
  components: {
    formshot
  },
  data() {
    return {
      data: {},

      formshot_rules: {
        req: [v => !!v || "Item is required"],
        name: [
          v => !!v || "Item is required",
          v => (v && v.length >= 2) || "Must be more than 2 characters",
          v => (v || "").indexOf(" ") < 0 || "No spaces are allowed"
        ],
        email: [
          v => !!v || "Item is required",
          v => /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(v) || "E-mail must be valid"
        ],
      reqm2: [
          v => !!v || "Item is required",
          v => (v && v.length >= 2) || "Must be more than 2 characters"
        ],
        reqeq5: [
          v => !!v || "Item is required",
          v => (v && v.length == 5) || "Must be 5 Digit"
        ]
      }
    };
  }
};
</script>