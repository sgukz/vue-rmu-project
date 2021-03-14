<template>
  <v-card>
    <div style="text-align:center;">
      <h2>บริษัทวีเอสที อีซีเอส (ประเทศไทย) จำกัด</h2>
      <h2>VST ECS (Thailand) Co., Ltd.</h2>
      <br />
      <p>
        275 ซอยลาดพร้าว 101 (วัดบึงทองหลาง) แขวงคลองเจ้าคุณสิงห์ เขตวังทองหลาง กรุงเทพฯ 10310
        <br />275 Soi Lat Phrao 101 (Wat Bung Thonglang), Khlong Chao Khun Sing, Wang Thonglang, Bangkok 10310, Thailand
        <br />โทร.0-2032-9999 แฟกซ์ 0-2032-9989
      </p>
    </div>
    <v-container fluid>
      <v-form ref="form" v-model="valid">
        <v-row>
          <v-col cols="10">
            <v-row>
              <v-col cols="12" sm="6" md="4">
                <v-menu
                  ref="menu"
                  v-model=" menu1 "
                  :close-on-content-click="false"
                  :return-value.sync="data.date1"
                  transition="scale-transition"
                  offset-y
                  min-width="290px"
                >
                  <template v-slot:activator="{ on }">
                    <v-text-field
                      v-model="tdate1_format"
                      label="วันที่สมัคร /Application Date"
                      prepend-icon="mdi-calendar-multiple"
                      readonly
                      v-on="on"
                    ></v-text-field>
                  </template>
                  <v-date-picker v-model="data.date1" no-title scrollable>
                    <v-spacer></v-spacer>
                    <v-btn text color="primary" @click="menu1 = false">Cancel</v-btn>
                    <v-btn text color="primary" @click="$refs.menu.save(data.date1)">OK</v-btn>
                  </v-date-picker>
                </v-menu>
              </v-col>
              <v-col cols="6" sm="2" md="4">
                <v-text-field
                  v-model="data.positionnew"
                  :rules="rules.req"
                  label="*ตำแหน่ง /Position*"
                  required
                />
              </v-col>
            </v-row>
            <v-row>
              <v-col cols="12" sm="6" md="4">
                <v-menu
                  ref="menu"
                  v-model=" menu2 "
                  :close-on-content-click="false"
                  :return-value.sync="data.date2"
                  transition="scale-transition"
                  offset-y
                  min-width="290px"
                >
                  <template v-slot:activator="{ on }">
                    <v-text-field
                      v-model="tdate2_format"
                      label="วันที่เริ่มงาน /Strating Date"
                      prepend-icon="mdi-calendar-multiple"
                      readonly
                      v-on="on"
                    ></v-text-field>
                  </template>
                  <v-date-picker v-model="data.date2" no-title scrollable>
                    <v-spacer></v-spacer>
                    <v-btn text color="primary" @click="menu2 = false">Cancel</v-btn>
                    <v-btn text color="primary" @click="$refs.menu.save(data.date2)">OK</v-btn>
                  </v-date-picker>
                </v-menu>
              </v-col>
              <v-col cols="6" sm="2" md="4">
                <v-text-field
                  v-model="data.receivenewsfrom"
                  :rules="rules.req"
                  label="*ได้รับข่าสารจาก /Receive news from*"
                  placeholder=" "
                  required
                />
              </v-col>
            </v-row>
            <v-row>
              <v-col cols="6" sm="2" md="2">
                <v-text-field
                  v-model="data.titlename"
                  :rules="rules.name"
                  label="*คำนำหน้า/Titel*(TH)"
                  placeholder=" "
                  required
                />
              </v-col>
              <v-col cols="4" sm="6" md="4">
                <v-text-field
                  v-model="data.name"
                  :rules="rules.name"
                  label="*ชื่อ/Name*(TH)"
                  placeholder=" "
                  required
                />
              </v-col>
              <v-col cols="4" sm="6" md="4">
                <v-text-field
                  v-model="data.surname"
                  :rules="rules.name"
                  label="*นามสกุล/Surname*(TH)"
                  placeholder=" "
                  required
                />
              </v-col>
              <v-col cols="4" sm="1" md="2">
                <v-text-field v-model="data.nick" label="ชื่อเล่น/nickname(TH)" placeholder=" " />
              </v-col>
            </v-row>
            <v-row>
              <v-col cols="6" sm="2" md="2">
                <v-text-field
                  v-model="data.titlenamee"
                  :rules="rules.name"
                  label="*Titel*(EN)"
                  placeholder=" "
                  required
                />
              </v-col>
              <v-col cols="4" sm="6" md="4">
                <v-text-field
                  v-model="data.namee"
                  :rules="rules.name"
                  label="*Name*(EN)"
                  placeholder=" "
                  required
                />
              </v-col>
              <v-col cols="4" sm="6" md="4">
                <v-text-field
                  v-model="data.surnamee"
                  :rules="rules.name"
                  label="*Surname*(EN)"
                  placeholder=" "
                  required
                />
              </v-col>
              <v-col cols="4" sm="1" md="2">
                <v-text-field v-model="data.nicke" label="Nickname(EN)" placeholder=" " />
              </v-col>
            </v-row>
            <v-row>
              <v-col cols="12" sm="6" md="4">
                <v-text-field
                  prepend-icon="mdi-cellphone-iphone"
                  v-model="data.tel"
                  :rules="rules.req"
                  label="*เบอร์มือถือ/Mobile*"
                  placeholder=" "
                  required
                />
              </v-col>
              <v-col cols="12" sm="6" md="4">
                <v-text-field
                  prepend-icon="mdi-email"
                  v-model="data.email"
                  :rules="rules.email"
                  label="*อีเมล/Email*"
                  placeholder=" "
                  hint="example@gmail.com"
                  required
                />
              </v-col>
              <v-col cols="12" sm="6" md="4">
                <v-text-field
                  prepend-icon="mdi-account-card-details"
                  v-model="data.lineid"
                  label="ID Line"
                  placeholder=" "
                  required
                />
              </v-col>
            </v-row>
          </v-col>
          <v-col cols="2">
            <picture-input
              ref="pictureInput"
              width="300"
              height="320"
              margin="16"
              accept="image/jpeg, image/png"
              size="0.1"
              button-class="btn"
              :custom-strings="{
                upload: '<h1>Bummer!</h1>',
                drag: 'ขนาดไม่ควรเกิน 100KB . Size should not 100KB . 120x148 pixels'
              }"
              @change="onChange"
            />
          </v-col>
        </v-row>

        <v-row>
          <!-- ยังใช้งานไม่ได้ date brihtday -->
          <v-col cols="3">
            <v-row>
              <v-col cols="5">
                <v-subheader>
                  วันเกิด
                  <br />Brith Date
                  <br />DD/MM/YY
                </v-subheader>
              </v-col>
              <v-col cols="7">
                <v-dialog
                  ref="dialo"
                  v-model="Brith_Date_Model"
                  :return-value.sync="data.brithdate"
                  persistent
                  width="290px"
                >
                  <template v-slot:activator="{ on }">
                    <v-text-field
                      v-model="tbd_format"
                      label="วัน/เดือน/ปี DD/MM/YY*"
                      placeholder=" "
                      readonly
                      v-on="on"
                    ></v-text-field>
                  </template>
                  <v-date-picker rules="rules.req" v-model="data.brithdate" scrollable>
                    <v-spacer></v-spacer>
                    <v-btn text color="primary" @click="Brith_Date_Model = false">Cancel</v-btn>
                    <v-btn text color="primary" @click="$refs.dialo.save(data.brithdate)">OK</v-btn>
                  </v-date-picker>
                </v-dialog>
              </v-col>
            </v-row>
          </v-col>

          <v-col cols="2">
            <v-row>
              <v-col cols="3"></v-col>
              <v-col cols="7">
                <v-text-field
                  readonly
                  v-model="comp_age"
                  :rules="rules.req"
                  label="อายุ/Age"
                  placeholder=" "
                ></v-text-field>
              </v-col>
            </v-row>
          </v-col>
          <v-col cols="2">
            <v-row>
              <v-col cols="3">
                <v-subheader>
                  เพศ
                  <br />Sex
                </v-subheader>
              </v-col>
              <v-col cols="8">
                <v-select
                  v-model="data.sex"
                  :rules="rules.req"
                  :items="['Male','Female']"
                  label="Male/Female"
                  placeholder=" "
                ></v-select>
              </v-col>
            </v-row>
          </v-col>
          <v-col cols="3">
            <v-row>
              <v-col cols="6">
                <v-text-field
                  v-model="data.height"
                  :rules="rules.reqm2"
                  label="ส่วนสูง/Height"
                  placeholder=" "
                ></v-text-field>
              </v-col>
              <v-col cols="6">
                <v-text-field
                  v-model="data.weight"
                  :rules="rules.reqm2"
                  label="น้ำหนัก/Weight"
                  placeholder=" "
                ></v-text-field>
              </v-col>
            </v-row>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="2">
            <v-row>
              <v-col cols="4">
                <v-subheader>
                  <br />Place of birth
                </v-subheader>
              </v-col>
              <v-col cols="8">
                <v-text-field
                  v-model="data.pofb"
                  :rules="rules.req"
                  label="สถานที่เกิด/Place of birth"
                  placeholder=" "
                ></v-text-field>
              </v-col>
            </v-row>
          </v-col>
          <v-col cols="2">
            <v-row>
              <v-col cols="1"></v-col>
              <v-col cols="10">
                <v-text-field
                  v-model="data.citizen"
                  :rules="rules.req"
                  label="เชื้อชาติ / Citizen"
                  placeholder=" "
                ></v-text-field>
              </v-col>
            </v-row>
          </v-col>
          <v-col cols="2">
            <v-row>
              <v-col cols="1"></v-col>
              <v-col cols="10">
                <v-text-field
                  v-model="data.nationality"
                  :rules="rules.req"
                  label="สัญชาติ / Nationality"
                  placeholder=" "
                ></v-text-field>
              </v-col>
            </v-row>
          </v-col>
          <v-col cols="2">
            <v-row>
              <v-col cols="1"></v-col>
              <v-col cols="10">
                <v-text-field
                  v-model="data.religion"
                  :rules="rules.req"
                  label="ศาสนา / Religion"
                  placeholder=" "
                ></v-text-field>
              </v-col>
            </v-row>
          </v-col>
          <v-col cols="2">
            <v-row>
              <v-col cols="8">
                <v-select
                  v-model="data.group"
                  :rules="rules.req"
                  :items="['O','A','B','AB']"
                  label="กรุ๊ปเลือด/Blood Group"
                  placeholder=" "
                ></v-select>
              </v-col>
            </v-row>
          </v-col>
        </v-row>
        <br />
        <v-divider />
        <br />
        <v-chip class="ma-2">** ที่อยู่ปัจจุบัน/ Pressent **</v-chip>
        <v-row>
          <v-col cols="2" md="2">
            <v-text-field
              v-model="data.pr_add"
              :rules="rules.reqm2"
              label="บ้านเลขที่/หมู่ /House number"
              placeholder=" "
            ></v-text-field>
          </v-col>
          <v-col cols="3" md="3">
            <v-text-field
              v-model="data.pr_addhh"
              label="หมู่บ้าน/อาคาร Village/building"
              placeholder=" "
            ></v-text-field>
          </v-col>
          <v-col cols="2" md="2">
            <v-text-field v-model="data.pr_soi" label="ซอย/Alley" placeholder=" "></v-text-field>
          </v-col>
          <v-col cols="2" md="2">
            <v-text-field v-model="data.pr_street" label="ถนน/Street" placeholder=" "></v-text-field>
          </v-col>
          <v-col cols="2" md="2">
            <v-text-field
              v-model="data.pr_district"
              :rules="rules.reqm2"
              label="แขวง/ตำบล District"
              placeholder=" "
            ></v-text-field>
          </v-col>
          <v-col cols="2" md="2">
            <v-text-field
              v-model="data.pr_aumphur"
              :rules="rules.reqm2"
              label="เขต/อำเภอ  Canton"
              placeholder=" "
            ></v-text-field>
          </v-col>
          <v-col cols="2" md="2">
            <v-text-field
              v-model="data.pr_proince"
              :rules="rules.reqm2"
              label="จังหวัด/Province"
              placeholder=" "
            ></v-text-field>
          </v-col>
          <v-col cols="2" md="2">
            <v-text-field
              v-model="data.pr_country"
              :rules="rules.reqm2"
              label="ประเทศ/County"
              placeholder=" "
            ></v-text-field>
          </v-col>
          <v-col cols="2" md="2">
            <v-text-field
              v-model="data.pr_postaicode"
              :rules="rules.reqeq5"
              label="รหัสไปรษณีย์/Postal code"
              placeholder=" "
            ></v-text-field>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="3" md="3">
            <v-text-field
              v-model="data.office_address"
              label="สถานที่ทำงานปัจจุบัน/Office Address"
              placeholder=" "
            ></v-text-field>
          </v-col>
          <v-col cols="2" md="2">
            <v-text-field v-model="data.phone" label="โทรศัพท์/Telephone" placeholder=" "></v-text-field>
          </v-col>
        </v-row>
        <br />
        <v-divider />
        <br />
        <v-checkbox
          v-model="data.experience"
          label="ที่อยู่ตามทะเบียนบ้านเป็นที่อยู่ปัจจุบัน"
          value="ที่อยู่ตามทะเบียนบ้านเป็นที่อยู่ปัจจุบัน"
        />
        <v-divider />
        <div v-if="!data.experience">
          <v-chip class="ma-2">ที่อยู่ตามทะเบียนบ้าน/Permanent address</v-chip>
          <v-row>
            <v-col cols="2" md="2">
              <v-text-field
                v-model="data.re_add"
                :rules="rules.reqm2"
                label="บ้านเลขที่/หมู่ House number"
                placeholder=" "
              ></v-text-field>
            </v-col>
            <v-col cols="3" md="3">
              <v-text-field
                v-model="data.re_addhh"
                label="หมู่บ้าน/อาคาร Village/building"
                placeholder=" "
              ></v-text-field>
            </v-col>
            <v-col cols="2" md="2">
              <v-text-field v-model="data.re_soi" label="ซอย/Alley" placeholder=" "></v-text-field>
            </v-col>
            <v-col cols="2" md="2">
              <v-text-field v-model="data.re_street" label="ถนน/Street" placeholder=" "></v-text-field>
            </v-col>
            <v-col cols="2" md="2">
              <v-text-field
                v-model="data.re_district"
                :rules="rules.reqm2"
                label="แขวง/ตำบล  District"
                placeholder=" "
              ></v-text-field>
            </v-col>
            <v-col cols="2" md="2">
              <v-text-field
                v-model="data.re_aumphur"
                :rules="rules.reqm2"
                label="เขต/อำเภอ  Canton"
                placeholder=" "
              ></v-text-field>
            </v-col>
            <v-col cols="2" md="2">
              <v-text-field
                v-model="data.re_proince"
                :rules="rules.reqm2"
                label="จังหวัด/Province"
                placeholder=" "
              ></v-text-field>
            </v-col>
            <v-col cols="2" md="2">
              <v-text-field
                v-model="data.re_country"
                :rules="rules.reqm2"
                label="ประเทศ/County"
                placeholder=" "
              ></v-text-field>
            </v-col>
            <v-col cols="2" md="2">
              <v-text-field
                v-model="data.re_postaicode"
                :rules="rules.reqeq5"
                label="รหัสไปรษณีย์/Postal code"
                placeholder=" "
              ></v-text-field>
            </v-col>
          </v-row>
        </div>
        <br />
        <v-divider />
        <br />
        <v-row>
          <v-chip class="ma-2">การอุปสมบท/Ordination</v-chip>
        </v-row>
        <v-row>
          <v-radio-group v-model="data.ordination" row>
            <v-radio label="ไม่เคยบวช/ No" value="ไม่เคยบวช" />
            <v-radio v-model="xordination" label="บวชเรียนแล้ว-ชื่อวัดและที่ตั้ง/ (Yes / where)" />
          </v-radio-group>
          <v-col cols="3" md="3">
            <v-text-field
              v-if="data.ordination!='ไม่เคยบวช'"
              v-model="xdetails"
              label="ระบุรายละเอียด/Datails"
              placeholder=" "
            ></v-text-field>
          </v-col>
        </v-row>
        <v-row>
          <v-chip class="ma-2">สถานภาพทางทหาร/Military status</v-chip>
        </v-row>
        <v-row>
          <v-radio-group v-model="data.military_status" row>
            <v-radio
              label="ยังไม่ผ่านการเกณฑ์ทหาร /No Dischrged"
              value="ยังไม่ผ่านการเกณฑ์ทหาร "
              dense
              outlined
            ></v-radio>
            <v-radio
              label="ผ่านการศึกษาวิชาทหาร /Military Studied"
              value="ผ่านการศึกษาวิชาทหาร"
              dense
              outlined
            ></v-radio>
            <v-radio label="ผ่านการเกณฑ์ทหาร /Dischrged" value="ผ่านการเกณฑ์ทหาร" dense outlined></v-radio>
            <v-radio label="ได้รับการยกเว้น /Exempted" value="ได้รับการยกเว้น " dense outlined></v-radio>
          </v-radio-group>
        </v-row>
        <v-row>
          <v-chip class="ma-2">สถานภาพการสมรส/Marital status</v-chip>
        </v-row>
        <v-row>
          <v-radio-group v-model="data.marital_status" row>
            <v-radio label="โสด/ Single" value="โสด " dense outlined></v-radio>
            <v-radio label="หย่า/ Divorced" value="หย่า" dense outlined></v-radio>
            <v-radio label="หม้าย/ Widowed" value="หม้าย" dense outlined></v-radio>
            <v-radio label="สมรสจดทะเบียน/ Civil marriage" value="สมรสจดทะเบียน " dense outlined></v-radio>
            <v-radio
              label="สมรสไม่จดทะเบียน/ Common-law marriage"
              value="สมรสไม่จดทะเบียน "
              dense
              outlined
            ></v-radio>
          </v-radio-group>
        </v-row>
        <v-row>
          <v-chip class="ma-2">ข้อมูลของคู่สมรสเเละบุตร/Family information</v-chip>
        </v-row>
        <v-row>
          <v-col cols="4" sm="2" md="2">
            <v-text-field
              v-model="data.spouses"
              label="คำนำหน้า/Titel(TH)"
              placeholder=" "
              required
            />
          </v-col>
          <v-col cols="4" sm="2" md="2">
            <v-text-field v-model="data.spouses_n" label="ชื่อ/Name(TH)" placeholder=" " required />
          </v-col>
          <v-col cols="4" sm="2" md="2">
            <v-text-field
              v-model="data.spouses_sur"
              label="นามสกุล/Surname(TH)"
              placeholder=" "
              required
            />
          </v-col>
          <v-col cols="4" sm="2" md="2">
            <v-text-field v-model="data.spouses_co" label="อาชีพ/career" placeholder=" " required />
          </v-col>
          <v-col cols="4" sm="2" md="2">
            <v-text-field
              v-model="data.spouses_oc"
              label="ตำเเหน่ง/position"
              placeholder=" "
              required
            />
          </v-col>

          <v-col cols="4" sm="2" md="2">
            <v-text-field
              v-model="data.spouses_wp"
              label="สถานที่ทำงาน/Office address"
              placeholder=" "
              required
            />
          </v-col>
          <v-col cols="4" sm="2" md="2">
            <v-text-field
              v-model="data.spouses_tel"
              label="โทรศัพท์/Telephone"
              placeholder=" "
              required
            />
          </v-col>
          <v-col cols="4" sm="2" md="2">
            <v-text-field
              v-model="data.spouses_odder"
              label="จำนวนบุตร/Name of children"
              placeholder=" "
              required
            />
          </v-col>
        </v-row>
        <br />
        <v-divider />
        <br />
        <v-row>
          <v-chip
            class="ma-2"
          >ประวัติทางครอบครัว (ประวัติของบิดา/มารดา/พี่น้องทุกคน)/Family background</v-chip>
        </v-row>
        <v-row>
          <v-col cols="4" sm="2" md="2">
            <v-text-field
              v-model="data.num_b"
              label="จำนวนพี่น้องรวมผู้สมัคร/Brother&Sisther"
              hint="Brother&Sisther No."
              placeholder=" "
              required
            />
          </v-col>
          <v-col cols="4" sm="2" md="2">
            <v-text-field
              v-model="data.order_d"
              label="คุณเป็นบุตรคนที่/No Also"
              placeholder=" "
              required
            />
          </v-col>
          <v-col cols="4" sm="2" md="2">
            <v-text-field v-model="data.num_s" label="ชาย/Son" placeholder=" " required />
          </v-col>
          <v-col cols="4" sm="2" md="2">
            <v-text-field v-model="data.num_d" label="หญิง/Daughter" placeholder=" " required />
          </v-col>
        </v-row>
        <v-row>
          <v-subheader>
            <p class="font-weight-black">บิดา/Father</p>
          </v-subheader>
          <v-col cols="2" md="2">
            <v-text-field
              v-model="data.father_n"
              label="ชื่อ/นามสกุล - Name/Surname"
              placeholder="Name/Surname"
            ></v-text-field>
          </v-col>
          <v-col cols="2" md="2">
            <v-text-field v-model="data.father_age" label="อายุ/Age" placeholder=" "></v-text-field>
          </v-col>
          <v-col cols="3" md="3">
            <v-text-field
              v-model="data.father_wp"
              label="สถานที่ทำงาน/เบอร์ติดต่อ - Company/Telephone"
              placeholder=" "
            ></v-text-field>
          </v-col>
          <v-col cols="2" md="2">
            <v-text-field v-model="data.father_oc" label="ตำเเหนน่งอาชีพ/Position" placeholder=" "></v-text-field>
          </v-col>
        </v-row>
        <v-row>
          <v-subheader>
            <p class="font-weight-black">มารดา/Mather</p>
          </v-subheader>
          <v-col cols="2" md="2">
            <v-text-field
              v-model="data.mather_n"
              label="ชื่อ/นามสกุล - Name/Surname"
              placeholder=" "
            ></v-text-field>
          </v-col>
          <v-col cols="2" md="2">
            <v-text-field v-model="data.mather_age" label="อายุ/Age" placeholder=" "></v-text-field>
          </v-col>
          <v-col cols="3" md="3">
            <v-text-field
              v-model="data.mather_wp"
              label="สถานที่ทำงาน/เบอร์ติดต่อ - Company/Telephone"
              placeholder=" "
            ></v-text-field>
          </v-col>
          <v-col cols="2" md="2">
            <v-text-field v-model="data.mather_oc" label="ตำเเหนน่งอาชีพ/Position" placeholder=" "></v-text-field>
          </v-col>
        </v-row>
        <v-row>
          <v-subheader>
            <p class="font-weight-black">พี่น้องลำดับที่1</p>
          </v-subheader>
          <v-col cols="2" md="2">
            <v-text-field
              v-model="data.bs_name"
              label="ชื่อ/นามสกุล - Name/Surname"
              placeholder=" "
            ></v-text-field>
          </v-col>
          <v-col cols="2" md="2">
            <v-text-field v-model="data.bs_age" label="อายุ/Age" placeholder=" "></v-text-field>
          </v-col>
          <v-col cols="3" md="3">
            <v-text-field
              v-model="data.bs_wp"
              label="สถานที่ทำงาน/เบอร์ติดต่อ - Company/Telephone"
              placeholder=" "
            ></v-text-field>
          </v-col>
          <v-col cols="2" md="2">
            <v-text-field v-model="data.bs_oc" label="ตำเเหนน่งอาชีพ/Position" placeholder=" "></v-text-field>
          </v-col>
        </v-row>
        <v-row>
          <v-subheader>
            <p class="font-weight-black">พี่น้องลำดับที่2</p>
          </v-subheader>
          <v-col cols="2" md="2">
            <v-text-field
              v-model="data.bs2_name"
              label="ชื่อ/นามสกุล - Name/Surname"
              placeholder=" "
            ></v-text-field>
          </v-col>
          <v-col cols="2" md="2">
            <v-text-field v-model="data.bs2_age" label="อายุ/Age" placeholder=" "></v-text-field>
          </v-col>
          <v-col cols="3" md="3">
            <v-text-field
              v-model="data.bs2_wp"
              label="สถานที่ทำงาน/เบอร์ติดต่อ - Company/Telephone"
              placeholder=" "
            ></v-text-field>
          </v-col>
          <v-col cols="2" md="2">
            <v-text-field v-model="data.bs2_oc" label="ตำเเหนน่งอาชีพ/Position" placeholder=" "></v-text-field>
          </v-col>
        </v-row>
        <v-row>
          <v-subheader>
            <p class="font-weight-black">พี่น้องลำดับที่3</p>
          </v-subheader>
          <v-col cols="2" md="2">
            <v-text-field
              v-model="data.bs3_name"
              label="ชื่อ/นามสกุล - Name/Surname"
              placeholder=" "
            ></v-text-field>
          </v-col>
          <v-col cols="2" md="2">
            <v-text-field v-model="data.bs3_age" label="อายุ/Age" placeholder=" "></v-text-field>
          </v-col>
          <v-col cols="3" md="3">
            <v-text-field
              v-model="data.bs3_wp"
              label="สถานที่ทำงาน/เบอร์ติดต่อ - Company/Telephone"
              placeholder=" "
            ></v-text-field>
          </v-col>
          <v-col cols="2" md="2">
            <v-text-field v-model="data.bs3_oc" label="ตำเเหนน่งอาชีพ/Position" placeholder=" "></v-text-field>
          </v-col>
        </v-row>
        <v-row>
          <v-subheader>
            <p class="font-weight-black">พี่น้องลำดับที่4</p>
          </v-subheader>
          <v-col cols="2" md="2">
            <v-text-field
              v-model="data.bs4_name"
              label="ชื่อ/นามสกุล - Name/Surname"
              placeholder=" "
            ></v-text-field>
          </v-col>
          <v-col cols="2" md="2">
            <v-text-field v-model="data.bs4_age" label="อายุ/Age" placeholder=" "></v-text-field>
          </v-col>
          <v-col cols="3" md="3">
            <v-text-field
              v-model="data.bs4_wp"
              label="สถานที่ทำงาน/เบอร์ติดต่อ - Company/Telephone"
              placeholder=" "
            ></v-text-field>
          </v-col>
          <v-col cols="2" md="2">
            <v-text-field v-model="data.bs4_oc" label="ตำเเหนน่งอาชีพ/Position" placeholder=" "></v-text-field>
          </v-col>
        </v-row>
        <v-row>
          <v-subheader>
            <p class="font-weight-black">พี่น้องลำดับที่5</p>
          </v-subheader>
          <v-col cols="2" md="2">
            <v-text-field
              v-model="data.bs5_name"
              label="ชื่อ/นามสกุล - Name/Surname"
              placeholder=" "
            ></v-text-field>
          </v-col>
          <v-col cols="2" md="2">
            <v-text-field v-model="data.bs5_age" label="อายุ/Age" placeholder=" "></v-text-field>
          </v-col>
          <v-col cols="3" md="3">
            <v-text-field
              v-model="data.bs5_wp"
              label="สถานที่ทำงาน/เบอร์ติดต่อ - Company/Telephone"
              placeholder=" "
            ></v-text-field>
          </v-col>
          <v-col cols="2" md="2">
            <v-text-field v-model="data.bs5_oc" label="ตำเเหนน่งอาชีพ/Position" placeholder=" "></v-text-field>
          </v-col>
        </v-row>

        <br />
        <v-divider />
        <br />
        <v-row>
          <v-chip class="ma-5">**ระดับการศึกษา/ Education level**</v-chip>
        </v-row>
        <v-row>
          <v-chip class="ma-5">มัธยมศึกษา/Secondary School</v-chip>
          <v-col cols="3">
            <v-text-field
              v-model="data.institute1"
              label="จากสถาบัน/มหาวิทยาลัย(From institutions / Universities)"
              prepend-inner-icon="mdi-city"
              placeholder=" "
              hint="From institutions / Universities"
            ></v-text-field>
          </v-col>

          <v-col cols="1.5">
            <v-text-field v-model="data.name_country1" label="ประเทศ/Country" placeholder=" "></v-text-field>
          </v-col>

          <v-col cols="1.5">
            <v-text-field
              v-model="data.name_degree1"
              label=" วุฒิการศึกษา/Degree/Cert"
              placeholder=" "
            ></v-text-field>
          </v-col>
        </v-row>

        <v-row>
          <v-col cols="1.5">
            <v-text-field v-model="data.name_grade1" label="คะแนนเฉลี่ย/G.P.A" placeholder=" "></v-text-field>
          </v-col>

          <v-col cols="1.5">
            <v-text-field v-model="data.name_dept1" label="คณะ/Dept" placeholder=" "></v-text-field>
          </v-col>

          <v-col cols="1.5">
            <v-text-field v-model="data.name_subject1" label="สาขาวิชา/Subject" placeholder=" "></v-text-field>
          </v-col>
          <v-col cols="1.5">
            <v-dialog
              ref="after"
              v-model="modal_graduation"
              :return-value.sync="data.graduation"
              persistent
              width="290px"
            >
              <template v-slot:activator="{ on }">
                <v-text-field
                  v-model="date_graduation"
                  label="ปีที่สำเร็จการศึกษา/(ค.ศ.) Graduation year/(A.D.)"
                  placeholder=" "
                  prepend-icon="mdi-developer-board"
                  readonly
                  v-on="on"
                ></v-text-field>
              </template>
              <v-date-picker v-model="data.graduation" type="month" scrollable>
                <v-spacer></v-spacer>
                <v-btn text color="primary" @click="modal_graduation = false">Cancel</v-btn>
                <v-btn text color="primary" @click="$refs.after.save(data.graduation)">OK</v-btn>
              </v-date-picker>
            </v-dialog>
          </v-col>
        </v-row>
        <v-row>
          <v-chip class="ma-5">ปวช./Vocational certificate</v-chip>
          <v-col cols="3">
            <v-text-field
              v-model="data.institute2"
              label="จากสถาบัน/มหาวิทยาลัย(From institutions / Universities)"
              prepend-inner-icon="mdi-city"
              placeholder=" "
              hint="From institutions / Universities"
            ></v-text-field>
          </v-col>

          <v-col cols="1.5">
            <v-text-field v-model="data.name_country2" label="ประเทศ/Country" placeholder=" "></v-text-field>
          </v-col>

          <v-col cols="1.5">
            <v-text-field
              v-model="data.name_degree2"
              label=" วุฒิการศึกษา/Degree/Cert"
              placeholder=" "
            ></v-text-field>
          </v-col>
        </v-row>

        <v-row>
          <v-col cols="1.5">
            <v-text-field v-model="data.name_grade2" label="คะแนนเฉลี่ย/G.P.A" placeholder=" "></v-text-field>
          </v-col>

          <v-col cols="1.5">
            <v-text-field v-model="data.name_dept2" label="คณะ/Dept" placeholder=" "></v-text-field>
          </v-col>

          <v-col cols="1.5">
            <v-text-field v-model="data.name_subject2" label="สาขาวิชา/Subject" placeholder=" "></v-text-field>
          </v-col>

          <v-col cols="1.5">
            <v-dialog
              ref="noon"
              v-model="modal_graduation1"
              :return-value.sync="data.graduation1"
              persistent
              width="290px"
            >
              <template v-slot:activator="{ on }">
                <v-text-field
                  v-model="date_graduation1"
                  label="ปีที่สำเร็จการศึกษา/(ค.ศ.) Graduation year/(A.D.)"
                  placeholder=" "
                  prepend-icon="mdi-developer-board"
                  readonly
                  v-on="on"
                ></v-text-field>
              </template>
              <v-date-picker v-model="data.graduation1" type="month" scrollable>
                <v-spacer></v-spacer>
                <v-btn text color="primary" @click="modal_graduation1 = false">Cancel</v-btn>
                <v-btn text color="primary" @click="$refs.noon.save(data.graduation1)">OK</v-btn>
              </v-date-picker>
            </v-dialog>
          </v-col>
        </v-row>
        <v-row>
          <v-chip class="ma-5">ปวส./High Vocationalcertificate</v-chip>
          <v-col cols="3">
            <v-text-field
              v-model="data.institute3"
              label="จากสถาบัน/มหาวิทยาลัย(From institutions / Universities)"
              prepend-inner-icon="mdi-city"
              placeholder=" "
              hint="From institutions / Universities"
            ></v-text-field>
          </v-col>

          <v-col cols="1.5">
            <v-text-field v-model="data.name_country3" label="ประเทศ/Country" placeholder=" "></v-text-field>
          </v-col>

          <v-col cols="1.5">
            <v-text-field
              v-model="data.name_degree3"
              label=" วุฒิการศึกษา/Degree/Cert"
              placeholder=" "
            ></v-text-field>
          </v-col>
        </v-row>

        <v-row>
          <v-col cols="1.5">
            <v-text-field v-model="data.name_grade3" label="คะแนนเฉลี่ย/G.P.A" placeholder=" "></v-text-field>
          </v-col>

          <v-col cols="1.5">
            <v-text-field v-model="data.name_dept3" label="คณะ/Dept" placeholder=" "></v-text-field>
          </v-col>

          <v-col cols="1.5">
            <v-text-field v-model="data.name_subject3" label="สาขาวิชา/Subject" placeholder=" "></v-text-field>
          </v-col>

          <v-col cols="1.5">
            <v-dialog
              ref="half"
              v-model="modal_graduation2"
              :return-value.sync="data.graduation2"
              persistent
              width="290px"
            >
              <template v-slot:activator="{ on }">
                <v-text-field
                  v-model="date_graduation2"
                  label="ปีที่สำเร็จการศึกษา/(ค.ศ.) Graduation year/(A.D.)"
                  placeholder=" "
                  prepend-icon="mdi-developer-board"
                  readonly
                  v-on="on"
                ></v-text-field>
              </template>
              <v-date-picker v-model="data.graduation2" type="month" scrollable>
                <v-spacer></v-spacer>
                <v-btn text color="primary" @click="modal_graduation2 = false">Cancel</v-btn>
                <v-btn text color="primary" @click="$refs.half.save(data.graduation2)">OK</v-btn>
              </v-date-picker>
            </v-dialog>
          </v-col>
        </v-row>
        <v-row>
          <v-chip class="ma-5">ปริญญาตรี/Bachelor degree</v-chip>
          <v-col cols="3">
            <v-text-field
              v-model="data.institute4"
              label="จากสถาบัน/มหาวิทยาลัย(From institutions / Universities)"
              prepend-inner-icon="mdi-city"
              hint="From institutions / Universities"
            ></v-text-field>
          </v-col>

          <v-col cols="1.5">
            <v-text-field v-model="data.name_country4" label="ประเทศ/Country" placeholder=" "></v-text-field>
          </v-col>

          <v-col cols="1.5">
            <v-text-field
              v-model="data.name_degree4"
              label=" วุฒิการศึกษา/Degree/Cert"
              placeholder=" "
            ></v-text-field>
          </v-col>
        </v-row>

        <v-row>
          <v-col cols="1.5">
            <v-text-field v-model="data.name_grade4" label="คะแนนเฉลี่ย/G.P.A" placeholder=" "></v-text-field>
          </v-col>

          <v-col cols="1.5">
            <v-text-field v-model="data.name_dept4" label="คณะ/Dept" placeholder=" "></v-text-field>
          </v-col>

          <v-col cols="1.5">
            <v-text-field v-model="data.name_subject4" label="สาขาวิชา/Subject" placeholder=" "></v-text-field>
          </v-col>

          <v-col cols="1.5">
            <v-dialog
              ref="eight"
              v-model="modal_graduation3"
              :return-value.sync="data.graduation3"
              persistent
              width="290px"
            >
              <template v-slot:activator="{ on }">
                <v-text-field
                  v-model="date_graduation3"
                  label="ปีที่สำเร็จการศึกษา/(ค.ศ.) Graduation year/(A.D.)"
                  placeholder=" "
                  prepend-icon="mdi-developer-board"
                  readonly
                  v-on="on"
                ></v-text-field>
              </template>
              <v-date-picker v-model="data.graduation3" type="month" scrollable>
                <v-spacer></v-spacer>
                <v-btn text color="primary" @click="modal_graduation3 = false">Cancel</v-btn>
                <v-btn text color="primary" @click="$refs.eight.save(data.graduation3)">OK</v-btn>
              </v-date-picker>
            </v-dialog>
          </v-col>
        </v-row>
        <v-row>
          <v-chip class="ma-5">ปริญญาโท/Master's Degree</v-chip>
          <v-col cols="3">
            <v-text-field
              v-model="data.institute5"
              label="จากสถาบัน/มหาวิทยาลัย(From institutions / Universities)"
              prepend-inner-icon="mdi-city"
              placeholder=" "
              hint="From institutions / Universities"
            ></v-text-field>
          </v-col>

          <v-col cols="1.5">
            <v-text-field v-model="data.name_country5" label="ประเทศ/Country" placeholder=" "></v-text-field>
          </v-col>

          <v-col cols="1.5">
            <v-text-field
              v-model="data.name_degree5"
              label=" วุฒิการศึกษา/Degree/Cert"
              placeholder=" "
            ></v-text-field>
          </v-col>
        </v-row>

        <v-row>
          <v-col cols="1.5">
            <v-text-field v-model="data.name_grade5" label="คะแนนเฉลี่ย/G.P.A" placeholder=" "></v-text-field>
          </v-col>

          <v-col cols="1.5">
            <v-text-field v-model="data.name_dept5" label="คณะ/Dept" placeholder=" "></v-text-field>
          </v-col>

          <v-col cols="1.5">
            <v-text-field v-model="data.name_subject5" label="สาขาวิชา/Subject" placeholder=" "></v-text-field>
          </v-col>

          <v-col cols="1.5">
            <v-dialog
              ref="five"
              v-model="modal_graduation4"
              :return-value.sync="data.graduation4"
              persistent
              width="290px"
            >
              <template v-slot:activator="{ on }">
                <v-text-field
                  v-model="date_graduation4"
                  label="ปีที่สำเร็จการศึกษา/(ค.ศ.) Graduation year/(A.D.)"
                  placeholder=" "
                  prepend-icon="mdi-developer-board"
                  readonly
                  v-on="on"
                ></v-text-field>
              </template>
              <v-date-picker v-model="data.graduation4" type="month" scrollable>
                <v-spacer></v-spacer>
                <v-btn text color="primary" @click="modal_graduation4 = false">Cancel</v-btn>
                <v-btn text color="primary" @click="$refs.five.save(data.graduation4)">OK</v-btn>
              </v-date-picker>
            </v-dialog>
          </v-col>
        </v-row>
        <v-row>
          <v-chip class="ma-5">ปริญญาเอก/Ph.D</v-chip>
          <v-col cols="3">
            <v-text-field
              v-model="data.institute6"
              label="จากสถาบัน/มหาวิทยาลัย(From institutions / Universities)"
              prepend-inner-icon="mdi-city"
              placeholder=" "
              hint="From institutions / Universities"
            ></v-text-field>
          </v-col>

          <v-col cols="1.5">
            <v-text-field v-model="data.name_country6" label="ประเทศ/Country" placeholder=" "></v-text-field>
          </v-col>

          <v-col cols="1.5">
            <v-text-field
              v-model="data.name_degree6"
              label=" วุฒิการศึกษา/Degree/Cert"
              placeholder=" "
            ></v-text-field>
          </v-col>
        </v-row>

        <v-row>
          <v-col cols="1.5">
            <v-text-field v-model="data.name_grade6" label="คะแนนเฉลี่ย/G.P.A" placeholder=" "></v-text-field>
          </v-col>

          <v-col cols="1.5">
            <v-text-field v-model="data.name_dept6" label="คณะ/Dept" placeholder=" "></v-text-field>
          </v-col>

          <v-col cols="1.5">
            <v-text-field v-model="data.name_subject6" label="สาขาวิชา/Subject" placeholder=" "></v-text-field>
          </v-col>

          <v-col cols="1.5">
            <v-dialog
              ref="nine"
              v-model="modal_graduation5"
              :return-value.sync="data.graduation5"
              persistent
              width="290px"
            >
              <template v-slot:activator="{ on }">
                <v-text-field
                  v-model="date_graduation5"
                  label="ปีที่สำเร็จการศึกษา/(ค.ศ.) Graduation year/(A.D.)"
                  placeholder=" "
                  prepend-icon="mdi-developer-board"
                  readonly
                  v-on="on"
                ></v-text-field>
              </template>
              <v-date-picker v-model="data.graduation5" type="month" scrollable>
                <v-spacer></v-spacer>
                <v-btn text color="primary" @click="modal_graduation5 = false">Cancel</v-btn>
                <v-btn text color="primary" @click="$refs.nine.save(data.graduation5)">OK</v-btn>
              </v-date-picker>
            </v-dialog>
          </v-col>
        </v-row>

        <v-row>
          <v-chip class="ma-5">อื่นๆ/Others</v-chip>
        </v-row>
        <v-row>
          <v-col cols="3">
            <v-text-field
              v-model="data.institute7"
              label="จากสถาบัน/มหาวิทยาลัย/From institutions / Universities"
              prepend-inner-icon="mdi-city"
              placeholder=" "
              hint="From institutions / Universities"
            ></v-text-field>
          </v-col>

          <v-col cols="1.5">
            <v-text-field v-model="data.name_country7" label="ประเทศ/Country" placeholder=" "></v-text-field>
          </v-col>

          <v-col cols="1.5">
            <v-text-field
              v-model="data.name_degree7"
              label=" วุฒิการศึกษา/Degree/Cert"
              placeholder=" "
            ></v-text-field>
          </v-col>
        </v-row>

        <v-row>
          <v-col cols="1.5">
            <v-text-field v-model="data.name_grade7" label="  คะแนนเฉลี่ย/G.P.A" placeholder=" "></v-text-field>
          </v-col>

          <v-col cols="1.5">
            <v-text-field v-model="data.name_dept7" label="คณะ/Dept" placeholder=" "></v-text-field>
          </v-col>

          <v-col cols="1.5">
            <v-text-field v-model="data.name_subject7" label="สาขาวิชา/Subject" placeholder=" "></v-text-field>
          </v-col>

          <v-col cols="1.5">
            <v-dialog
              ref="past"
              v-model="modal_graduation6"
              :return-value.sync="data.graduation6"
              persistent
              width="290px"
            >
              <template v-slot:activator="{ on }">
                <v-text-field
                  v-model="date_graduation6"
                  label="ปีที่สำเร็จการศึกษา/(ค.ศ.) Graduation year/(A.D.)"
                  placeholder=" "
                  prepend-icon="mdi-developer-board"
                  readonly
                  v-on="on"
                ></v-text-field>
              </template>
              <v-date-picker v-model="data.graduation6" type="month" scrollable>
                <v-spacer></v-spacer>
                <v-btn text color="primary" @click="modal_graduation6 = false">Cancel</v-btn>
                <v-btn text color="primary" @click="$refs.past.save(data.graduation6)">OK</v-btn>
              </v-date-picker>
            </v-dialog>
          </v-col>
        </v-row>
        <v-row>
          <v-chip class="ma-5">ปัจจุบันศึกษาต่อ/ Studying</v-chip>
        </v-row>
        <v-checkbox
          v-model="data.tudying"
          label="ไม่ได้ศึกษาต่อ/ No further education"
          value="ไม่ได้ศึกษาต่อ/ No further education"
        />
        <div v-if="!data.tudying">
          <v-row>
            <v-col cols="2">
              <v-autocomplete
                :items="lists.find(e => e.name =='tudying').data"
                v-model="data.name_Level8"
                placeholder=" "
                label="ระดับการศึกษา/Level"
              ></v-autocomplete>
            </v-col>
            <v-col cols="3">
              <v-text-field
                v-model="data.institute8"
                label="ศึกษาต่ออยู่ที่/Institute"
                placeholder=" "
              ></v-text-field>
            </v-col>

            <v-col cols="1.5">
              <v-text-field v-model="data.name_major8" label=" วิชาเอก/Major" placeholder=" "></v-text-field>
            </v-col>

            <v-col cols="1.5">
              <v-text-field v-model="data.name_dept8" label="คณะ/Dept" placeholder=" "></v-text-field>
            </v-col>

            <v-col cols="1.5">
              <v-text-field
                v-model="data.name_year8"
                label="ปีที่คาดว่าจะจบ/Expected year of completion"
                placeholder=" "
              ></v-text-field>
            </v-col>
          </v-row>
        </div>
        <br />
        <v-divider />
        <br />

        <v-row>
          <v-col cols="3" md="3">
            <v-text-field v-model="data.hobbies" label="งานอดิเรก/Hobbies" placeholder=" "></v-text-field>
          </v-col>
          <v-col cols="3" md="3">
            <v-text-field v-model="data.sport" label="กีฬา/Sports" placeholder=" "></v-text-field>
          </v-col>
        </v-row>

        <v-row>
          <v-chip class="ma-2">มียานพาหนะเป็นของตัวเอง / Vehicle</v-chip>
        </v-row>
        <v-row>
          <v-col cols="2">
            <v-subheader>
              <p class="font-weight-black">รถยนต์/Car</p>
            </v-subheader>
          </v-col>
          <v-radio-group v-model="data.car" row>
            <v-radio label="มี/have" value="มี" />
            <v-radio value="ไม่มี" label="ไม่มี/without" />
          </v-radio-group>
        </v-row>
        <v-row>
          <v-col cols="2">
            <v-subheader>
              <p class="font-weight-black">รถจักรยานยนต์ Motorcycle</p>
            </v-subheader>
          </v-col>
          <v-radio-group v-model="data.motorcycle" row>
            <v-radio label="มี/have" value="มี" />
            <v-radio value="ไม่มี" label="ไม่มี/without" />
          </v-radio-group>
        </v-row>
        <v-row>
          <v-chip class="ma-2">ความสามารถพิเศษ/ Special Ability</v-chip>
        </v-row>
        <v-row>
          <v-chip class="ma-2">ด้านคอมพิวเตอร์/ Computer Skill</v-chip>
        </v-row>
        <v-row>
          <v-col cols="3" md="3">
            <v-text-field v-model="data.n_software" label="Software/ซอฟต์แวร์" placeholder=" "></v-text-field>
          </v-col>
          <v-col cols="3" md="3">
            <v-text-field v-model="data.n_hardware" label="Hardware/ฮาร์ดแวร์" placeholder=" "></v-text-field>
          </v-col>
          <v-col cols="3" md="3">
            <v-text-field
              v-model="data.n_certificate"
              label="Certificate/ใบรับรอง"
              placeholder="  "
            ></v-text-field>
          </v-col>
          <v-col cols="3" md="3">
            <v-text-field v-model="data.n_others" label="อื่นๆ/Others" placeholder=" "></v-text-field>
          </v-col>
        </v-row>

        <v-row>
          <v-chip class="ma-2">**ภาษาอังกฤษ / English language**</v-chip>
          <v-col cols="2.5">
            <v-autocomplete
              v-model="data.name_understanding1"
              label="เข้าใจ/Understanding"
              :rules="rules.req"
              placeholder=" "
              :items="lists.find(e => e.name =='gfb').data"
              prepend-inner-icon="mdi-lightbulb-on"
            />
          </v-col>

          <v-col cols="2.5">
            <v-autocomplete
              v-model="data.name_speaking1"
              label="พูด/Speaking"
              :rules="rules.req"
              placeholder=" "
              :items="lists.find(e => e.name =='gfb').data"
              prepend-inner-icon="mdi-comment-processing"
            />
          </v-col>

          <v-col cols="2.5">
            <v-autocomplete
              v-model="data.name_reading1"
              :rules="rules.req"
              :items="lists.find(e => e.name =='gfb').data"
              label="อ่าน/Reading"
              prepend-inner-icon="mdi-book-open-variant"
              placeholder=" "
            />
          </v-col>

          <v-col cols="2.5">
            <v-autocomplete
              v-model="data.name_writing1"
              label="เขียน/Writing"
              :rules="rules.req"
              placeholder=" "
              :items="lists.find(e => e.name =='gfb').data"
              prepend-inner-icon="mdi-lead-pencil"
            />
          </v-col>
        </v-row>

        <v-row>
          <v-chip class="ma-2">ภาษาอื่นๆ / Others</v-chip>

          <v-col cols="2.5">
            <v-text-field v-model="data.name_language2" label="ภาษา/Language" placeholder=" "></v-text-field>
          </v-col>

          <v-col cols="2">
            <v-autocomplete
              v-model="data.name_understanding2"
              label="เข้าใจ/Understanding"
              :items="lists.find(e => e.name =='gfb').data"
              prepend-inner-icon="mdi-lightbulb-on"
              placeholder=" "
            ></v-autocomplete>
          </v-col>
          <v-col cols="2">
            <v-autocomplete
              v-model="data.name_speaking2"
              label="พูด/Speaking"
              placeholder=" "
              :items="lists.find(e => e.name =='gfb').data"
              prepend-inner-icon="mdi-comment-processing"
            ></v-autocomplete>
          </v-col>
          <v-col cols="2">
            <v-autocomplete
              v-model="data.name_reading2"
              label="อ่าน/Reading"
              placeholder=" "
              :items="lists.find(e => e.name =='gfb').data"
              prepend-inner-icon="mdi-book-open-variant"
            ></v-autocomplete>
          </v-col>
          <v-col cols="2">
            <v-autocomplete
              v-model="data.name_writing2"
              :items="lists.find(e => e.name =='gfb').data"
              label="เขียนWriting"
              prepend-inner-icon="mdi-lead-pencil"
              placeholder=" "
            ></v-autocomplete>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="3">
            <v-text-field
              v-model="data.certificate"
              label="ประกาศนียบัตร/Certificate"
              prepend-inner-icon="mdi-certificate"
              placeholder=" "
            ></v-text-field>
          </v-col>
        </v-row>
        <br />
        <v-divider />
        <br />
        <v-chip>การทำงาน (ระบุประสบการณืในการทำงานโดยเริ่มจากที่ล่าสุดก่อน) / Employment record (List from present to last)</v-chip>
        <v-checkbox
          v-model="data.experience"
          label="ไม่มีประสบการณ์การทำงาน"
          value="ไม่มีประสบการณ์การทำงาน"
        />
        <v-divider />
        <div v-if="!data.experience">
          <v-chip class="ma-2">อันดับที่ 1/ No.1</v-chip>
          <v-row>
            <v-col cols="2">
              <v-subheader>
                <p class="font-weight-black">
                  บริษัท/หน่วยงาน
                  <br />Company / Department
                </p>
              </v-subheader>
            </v-col>
            <v-col cols="2" md="2">
              <v-text-field
                v-model="data.company_add1"
                label="Company / Department"
                placeholder=" "
              ></v-text-field>
            </v-col>
            <v-col cols="2" md="2">
              <v-text-field
                v-model="data.type_of_business1"
                label="ประเภทธุรกิจ/Type of Business"
                placeholder=" "
              ></v-text-field>
            </v-col>
            <v-subheader>
              <p class="font-weight-black">
                ระยะเวลา
                <br />Period
              </p>
            </v-subheader>
            <v-col cols="2" md="2">
              <v-dialog
                ref="dialog"
                v-model="modal_period"
                :return-value.sync="data.period"
                persistent
                width="290px"
              >
                <template v-slot:activator="{ on }">
                  <v-text-field
                    v-model="date_1"
                    label="เริม/Since"
                    placeholder=" "
                    prepend-icon="mdi-calendar-range"
                    readonly
                    v-on="on"
                  ></v-text-field>
                </template>
                <v-date-picker v-model="data.period" type="month" scrollable>
                  <v-spacer></v-spacer>
                  <v-btn text color="primary" @click="modal_period = false">Cancel</v-btn>
                  <v-btn text color="primary" @click="$refs.dialog.save(data.period)">OK</v-btn>
                </v-date-picker>
              </v-dialog>
            </v-col>
            <v-col cols="2" md="2">
              <v-dialog
                ref="dia"
                v-model="modal_period2"
                :return-value.sync="data.period2"
                persistent
                width="290px"
              >
                <template v-slot:activator="{ on }">
                  <v-text-field
                    v-model="date_2"
                    label="ถึง/Until"
                    placeholder=" "
                    prepend-icon="mdi-calendar-range"
                    readonly
                    v-on="on"
                  ></v-text-field>
                </template>
                <v-date-picker v-model="data.period2" type="month" scrollable>
                  <v-spacer></v-spacer>
                  <v-btn text color="primary" @click="modal_period2 = false">Cancel</v-btn>
                  <v-btn text color="primary" @click="$refs.dia.save(data.period2)">OK</v-btn>
                </v-date-picker>
              </v-dialog>
            </v-col>
            <v-col cols="1" md="1">
              <v-text-field v-model="comp_inc1" readonly label="รวม/Total" placeholder=" "></v-text-field>
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="2">
              <v-subheader>
                <p class="font-weight-black">
                  ตำแหน่งงานสุดท้าย
                  <br />Last Position
                </p>
              </v-subheader>
            </v-col>
            <v-col cols="2" md="2">
              <v-text-field v-model="data.position1" label="Last Position" placeholder=" "></v-text-field>
            </v-col>
            <v-subheader>
              <p class="font-weight-black">
                เงินเดือน
                <br />Salary
              </p>
            </v-subheader>
            <v-col cols="2" md="2">
              <v-text-field
                v-model="data.s_last1"
                label="ค่าจ้าง/เงินเดือน (Wage/salary) "
                placeholder=" "
              ></v-text-field>
            </v-col>
            <v-col cols="3" md="3">
              <v-text-field
                v-model="data.tel1"
                label=" ชื่อ-สกุล ผู้บังคับบัญชา/โทรศัพท์ (Name-surname of contractor / telephone)"
                placeholder=" "
                hint="Name-surname of contractor / telephone"
              ></v-text-field>
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="2">
              <v-subheader>
                <p class="font-weight-black">
                  เงินได้พิเศษ
                  <br />Special Income
                </p>
              </v-subheader>
            </v-col>
            <v-col cols="1" md="1">
              <v-text-field
                v-model="data.travelling_expenses1"
                label="ค่าพาหนะ/Travelling expenses"
                placeholder="  "
                hint="Travelling expenses"
              ></v-text-field>
            </v-col>
            <v-col cols="1" md="1">
              <v-text-field
                v-model="data.mobile1"
                label="ค่าโทรศัพท์/Mobile"
                placeholder=" "
                hint="Mobile expenses"
              ></v-text-field>
            </v-col>
            <v-col cols="1" md="1">
              <v-text-field
                v-model="data.commission1"
                label="ค่าคอมมิชชัน/Commission"
                placeholder=" "
                hint="Commission"
              ></v-text-field>
            </v-col>
            <v-col cols="1" md="1">
              <v-text-field v-model="data.ther1" label="อื่นๆ/Other" placeholder=" "></v-text-field>
            </v-col>

            <v-col cols="3" md="3">
              <v-text-field
                v-model="data.note1"
                label="  สาเหตุที่ลาออก/Reason for Leaving"
                placeholder=" "
              ></v-text-field>
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="2">
              <v-subheader>
                <p class="font-weight-black">
                  หน้าที่ความรับผิดชอบ
                  <br />Type of Work
                </p>
              </v-subheader>
            </v-col>
            <v-col cols="2" md="7">
              <v-text-field v-model="data.job_discription1" label="Type of Work" placeholder=" "></v-text-field>
            </v-col>
            <v-checkbox
              v-model="data.name_working"
              label="ยังทำงานอยู่/Still working"
              value="ยังทำงานอยู่/Stillworking"
            ></v-checkbox>
          </v-row>
          <v-chip class="ma-2">อันดับที่ 2/ No.2</v-chip>
          <v-row>
            <v-col cols="2">
              <v-subheader>
                <p class="font-weight-black">
                  บริษัท/หน่วยงาน
                  <br />Company / Department
                </p>
              </v-subheader>
            </v-col>
            <v-col cols="2" md="2">
              <v-text-field
                v-model="data.company_add2"
                label="Company / Department"
                placeholder=" "
              ></v-text-field>
            </v-col>
            <v-col cols="2" md="2">
              <v-text-field
                v-model="data.type_of_business2"
                label="ประเภทธุรกิจ/Type of Business"
                placeholder=" "
              ></v-text-field>
            </v-col>
            <v-subheader>
              <p class="font-weight-black">
                ระยะเวลา
                <br />Period
              </p>
            </v-subheader>
            <v-col cols="2" md="2">
              <v-dialog
                ref="meri"
                v-model="modal_period3"
                :return-value.sync="data.period3"
                persistent
                width="290px"
              >
                <template v-slot:activator="{ on }">
                  <v-text-field
                    v-model="date_3"
                    label="เริ่ม/Since"
                    placeholder=" "
                    prepend-icon="mdi-calendar-range"
                    readonly
                    v-on="on"
                  ></v-text-field>
                </template>
                <v-date-picker v-model="data.period3" type="month" scrollable>
                  <v-spacer></v-spacer>
                  <v-btn text color="primary" @click="modal_period3 = false">Cancel</v-btn>
                  <v-btn text color="primary" @click="$refs.meri.save(data.period3)">OK</v-btn>
                </v-date-picker>
              </v-dialog>
            </v-col>
            <v-col cols="2" md="2">
              <v-dialog
                ref="diem"
                v-model="modal_period4"
                :return-value.sync="data.period4"
                persistent
                width="290px"
              >
                <template v-slot:activator="{ on }">
                  <v-text-field
                    v-model="date_4"
                    label="ถึง/Until"
                    placeholder=" "
                    prepend-icon="mdi-calendar-range"
                    readonly
                    v-on="on"
                  ></v-text-field>
                </template>
                <v-date-picker v-model="data.period4" type="month" scrollable>
                  <v-spacer></v-spacer>
                  <v-btn text color="primary" @click="modal_period4 = false">Cancel</v-btn>
                  <v-btn text color="primary" @click="$refs.diem.save(data.period4)">OK</v-btn>
                </v-date-picker>
              </v-dialog>
            </v-col>
            <v-col cols="1" md="1">
              <v-text-field v-model="comp_inc2" readonly label="รวม/Total" placeholder=" "></v-text-field>
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="2">
              <v-subheader>
                <p class="font-weight-black">
                  ตำแหน่งงานสุดท้าย
                  <br />Last Position
                </p>
              </v-subheader>
            </v-col>
            <v-col cols="2" md="2">
              <v-text-field v-model="data.position2" label="Last Position" placeholder=" "></v-text-field>
            </v-col>

            <v-subheader>
              <p class="font-weight-black">
                เงินเดือน
                <br />Salary
              </p>
            </v-subheader>
            <v-col cols="2" md="2">
              <v-text-field
                v-model="data.s_last2"
                label="ค่าจ้าง/เงินเดือน (Wage/salary) "
                placeholder=" "
              ></v-text-field>
            </v-col>
            <v-col cols="3" md="3">
              <v-text-field
                v-model="data.tel2"
                label=" ชื่อ-สกุล ผู้บังคับบัญชา/โทรศัพท์ (Name-surname of contractor / telephone)"
                placeholder=" "
                hint="Name-surname of contractor / telephone"
              ></v-text-field>
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="2">
              <v-subheader>
                <p class="font-weight-black">
                  เงินได้พิเศษ
                  <br />Special Income
                </p>
              </v-subheader>
            </v-col>

            <v-col cols="1" md="1">
              <v-text-field
                v-model="data.travelling_expenses2"
                label="ค่าพาหนะ/Travelling expenses"
                placeholder="  "
                hint="Travelling expenses"
              ></v-text-field>
            </v-col>
            <v-col cols="1" md="1">
              <v-text-field
                v-model="data.mobile2"
                label="ค่าโทรศัพท์"
                placeholder=" "
                hint="Mobile expenses"
              ></v-text-field>
            </v-col>
            <v-col cols="1" md="1">
              <v-text-field
                v-model="data.commission2"
                label="ค่าคอมมิชชัน/Commission"
                placeholder=" "
                hint="Commission"
              ></v-text-field>
            </v-col>
            <v-col cols="1" md="1">
              <v-text-field v-model="data.ther2" label="อื่นๆ/Other" placeholder=" "></v-text-field>
            </v-col>

            <v-col cols="3" md="3">
              <v-text-field
                v-model="data.note2"
                label="  สาเหตุที่ลาออก/Reason for Leaving"
                placeholder=" "
              ></v-text-field>
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="2">
              <v-subheader>
                <p class="font-weight-black">
                  หน้าที่ความรับผิดชอบ
                  <br />Type of Work
                </p>
              </v-subheader>
            </v-col>
            <v-col cols="2" md="7">
              <v-text-field v-model="data.job_discription2" label="Type of Work" placeholder=" "></v-text-field>
            </v-col>
          </v-row>
          <v-chip class="ma-2">อันดับที่ 3/ No.3</v-chip>
          <v-row>
            <v-col cols="2">
              <v-subheader>
                <p class="font-weight-black">
                  บริษัท/หน่วยงาน
                  <br />Company / Department
                </p>
              </v-subheader>
            </v-col>
            <v-col cols="2" md="2">
              <v-text-field
                v-model="data.company_add3"
                label="Company / Department"
                placeholder=" "
              ></v-text-field>
            </v-col>
            <v-col cols="2" md="2">
              <v-text-field
                v-model="data.type_of_business3"
                label="ประเภทธุรกิจ/Type of Business"
                placeholder=" "
              ></v-text-field>
            </v-col>
            <v-subheader>
              <p class="font-weight-black">
                ระยะเวลา
                <br />Period
              </p>
            </v-subheader>
            <v-col cols="2" md="2">
              <v-dialog
                ref="mor"
                v-model="modal_period5"
                :return-value.sync="data.period5"
                persistent
                width="290px"
              >
                <template v-slot:activator="{ on }">
                  <v-text-field
                    v-model="date_5"
                    label="เริ่ม/since"
                    placeholder=" "
                    prepend-icon="mdi-calendar-range"
                    readonly
                    v-on="on"
                  ></v-text-field>
                </template>
                <v-date-picker v-model="data.period5" type="month" scrollable>
                  <v-spacer></v-spacer>
                  <v-btn text color="primary" @click="modal_period5 = false">Cancel</v-btn>
                  <v-btn text color="primary" @click="$refs.mor.save(data.period5)">OK</v-btn>
                </v-date-picker>
              </v-dialog>
            </v-col>
            <v-col cols="2" md="2">
              <v-dialog
                ref="ning"
                v-model="modal_period6"
                :return-value.sync="data.period6"
                persistent
                width="290px"
              >
                <template v-slot:activator="{ on }">
                  <v-text-field
                    v-model="date_6"
                    label="ถึง/Until"
                    placeholder=" "
                    prepend-icon="mdi-calendar-range"
                    readonly
                    v-on="on"
                  ></v-text-field>
                </template>
                <v-date-picker v-model="data.period6" type="month" scrollable>
                  <v-spacer></v-spacer>
                  <v-btn text color="primary" @click="modal_period6 = false">Cancel</v-btn>
                  <v-btn text color="primary" @click="$refs.ning.save(data.period6)">OK</v-btn>
                </v-date-picker>
              </v-dialog>
            </v-col>
            <v-col cols="1" md="1">
              <v-text-field v-model="comp_inc3" readonly label="รวม/Total" placeholder=" "></v-text-field>
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="2">
              <v-subheader>
                <p class="font-weight-black">
                  ตำแหน่งงานสุดท้าย
                  <br />Last Position
                </p>
              </v-subheader>
            </v-col>
            <v-col cols="2" md="2">
              <v-text-field v-model="data.position3" label="Last Position" placeholder=" "></v-text-field>
            </v-col>
            <v-subheader>
              <p class="font-weight-black">
                เงินเดือน
                <br />Salary
              </p>
            </v-subheader>
            <v-col cols="2" md="2">
              <v-text-field
                v-model="data.s_last3"
                label="ค่าจ้าง/เงินเดือน (Wage/salary) "
                placeholder=" "
              ></v-text-field>
            </v-col>
            <v-col cols="3" md="3">
              <v-text-field
                v-model="data.tel3"
                label=" ชื่อ-สกุล ผู้บังคับบัญชา/โทรศัพท์ (Name-surname of contractor / telephone)"
                placeholder=" "
                hint="Name-surname of contractor / telephone"
              ></v-text-field>
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="2">
              <v-subheader>
                <p class="font-weight-black">
                  เงินได้พิเศษ
                  <br />Special Income
                </p>
              </v-subheader>
            </v-col>

            <v-col cols="1" md="1">
              <v-text-field
                v-model="data.travelling_expenses3"
                label="ค่าพาหนะ/Travelling expenses"
                placeholder=" "
                hint="Travelling expenses"
              ></v-text-field>
            </v-col>
            <v-col cols="1" md="1">
              <v-text-field
                v-model="data.mobile3"
                label="ค่าโทรศัพท์/Mobile"
                placeholder=" "
                hint="Mobile expenses"
              ></v-text-field>
            </v-col>
            <v-col cols="1" md="1">
              <v-text-field
                v-model="data.commission3"
                label="ค่าคอมมิชชัน/Commission"
                placeholder=" "
                hint="Commission"
              ></v-text-field>
            </v-col>
            <v-col cols="1" md="1">
              <v-text-field v-model="data.ther3" label="อื่นๆ/Other" placeholder=" "></v-text-field>
            </v-col>

            <v-col cols="3" md="3">
              <v-text-field
                v-model="data.note3"
                label="  สาเหตุที่ลาออก/Reason for Leaving"
                placeholder=" "
              ></v-text-field>
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="2">
              <v-subheader>
                <p class="font-weight-black">
                  หน้าที่ความรับผิดชอบ
                  <br />Type of Work
                </p>
              </v-subheader>
            </v-col>
            <v-col cols="2" md="7">
              <v-text-field v-model="data.job_discription3" label="Type of Work" placeholder=" "></v-text-field>
            </v-col>
          </v-row>
        </div>
        <br />
        <v-divider />
        <br />
        <v-chip class="ma-2">ประวัติการฝึกอบรมสัมนา/Training Course-Seminar</v-chip>
        <v-row>
          <v-subheader>
            <p class="font-weight-black">ลำดับที่1</p>
          </v-subheader>
          <v-col cols="2" md="2">
            <v-text-field v-model="data.inst1" label="ชื่อสถาบัน/Institute" placeholder=" "></v-text-field>
          </v-col>
          <v-col cols="2" md="2">
            <v-text-field v-model="data.course1" label="หัวข้อการฝึกอบรม/Course" placeholder=" "></v-text-field>
          </v-col>
          <v-col cols="2" md="2">
            <v-dialog
              ref="train"
              v-model="modal_trainingyear"
              :return-value.sync="data.trainingyear"
              persistent
              width="290px"
            >
              <template v-slot:activator="{ on }">
                <v-text-field
                  v-model="date_trainingyear"
                  label="ปีที่อบรม/Training year"
                  placeholder=" "
                  prepend-icon="mdi-developer-board"
                  readonly
                  v-on="on"
                ></v-text-field>
              </template>
              <v-date-picker v-model="data.trainingyear" type="month" scrollable>
                <v-spacer></v-spacer>
                <v-btn text color="primary" @click="modal_trainingyear = false">Cancel</v-btn>
                <v-btn text color="primary" @click="$refs.train.save(data.trainingyear)">OK</v-btn>
              </v-date-picker>
            </v-dialog>
          </v-col>
          <v-col cols="2" md="2">
            <v-text-field
              v-model="data.traininghours1"
              label="จำนวนเวลาที่อบรม/Number of training"
              placeholder=" "
              hint="Number of training "
            ></v-text-field>
          </v-col>
        </v-row>
        <v-row>
          <v-subheader>
            <p class="font-weight-black">ลำดับที่2</p>
          </v-subheader>
          <v-col cols="2" md="2">
            <v-text-field v-model="data.inst12" label="ชื่อสถาบัน/Institute" placeholder=" "></v-text-field>
          </v-col>
          <v-col cols="2" md="2">
            <v-text-field v-model="data.course2" label="หัวข้อการฝึกอบรม/Course" placeholder=" "></v-text-field>
          </v-col>
          <v-col cols="2" md="2">
            <v-dialog
              ref="teach"
              v-model="modal_trainingyear1"
              :return-value.sync="data.trainingyear1"
              persistent
              width="290px"
            >
              <template v-slot:activator="{ on }">
                <v-text-field
                  v-model="date_trainingyear1"
                  label="ปีที่อบรม/Training year"
                  placeholder=" "
                  prepend-icon="mdi-developer-board"
                  readonly
                  v-on="on"
                ></v-text-field>
              </template>
              <v-date-picker v-model="data.trainingyear1" type="month" scrollable>
                <v-spacer></v-spacer>
                <v-btn text color="primary" @click="modal_trainingyear1 = false">Cancel</v-btn>
                <v-btn text color="primary" @click="$refs.teach.save(data.trainingyear1)">OK</v-btn>
              </v-date-picker>
            </v-dialog>
          </v-col>
          <v-col cols="2" md="2">
            <v-text-field
              v-model="data.traininghours2"
              label="จำนวนเวลาที่อบรม/Number of training "
              placeholder=" "
              hint="Number of training"
            ></v-text-field>
          </v-col>
        </v-row>
        <v-row>
          <v-subheader>
            <p class="font-weight-black">ลำดับที่3</p>
          </v-subheader>
          <v-col cols="2" md="2">
            <v-text-field v-model="data.inst13" label="ชื่อสถาบัน/Institute" placeholder=" "></v-text-field>
          </v-col>
          <v-col cols="2" md="2">
            <v-text-field v-model="data.course3" label="หัวข้อการฝึกอบรม/Course" placeholder=" "></v-text-field>
          </v-col>
          <v-col cols="2" md="2">
            <v-dialog
              ref="educate"
              v-model="modal_trainingyear2"
              :return-value.sync="data.trainingyear2"
              persistent
              width="290px"
            >
              <template v-slot:activator="{ on }">
                <v-text-field
                  v-model="date_trainingyear2"
                  label="ปีที่อบรม/Training year"
                  placeholder=" "
                  prepend-icon="mdi-developer-board"
                  readonly
                  v-on="on"
                ></v-text-field>
              </template>
              <v-date-picker v-model="data.trainingyear2" type="month" scrollable>
                <v-spacer></v-spacer>
                <v-btn text color="primary" @click="modal_trainingyear2 = false">Cancel</v-btn>
                <v-btn text color="primary" @click="$refs.educate.save(data.trainingyear2)">OK</v-btn>
              </v-date-picker>
            </v-dialog>
          </v-col>
          <v-col cols="2" md="2">
            <v-text-field
              v-model="data.traininghours3"
              label="จำนวนเวลาที่อบรม/Number of training "
              placeholder=" "
              hint="Number of training "
            ></v-text-field>
          </v-col>
        </v-row>
        <v-chip
          class="ma-2"
        >**บุคคลที่สามารถติดต่อได้ในกรณีฉุกเฉิน/Who should we contact in an emergency ?**</v-chip>
        <v-row>
          <v-col cols="3" md="3">
            <v-text-field
              v-model="data.name_n"
              :rules="rules.req"
              label="ชื่อสกุล/Name-Surname"
              placeholder=" "
            ></v-text-field>
          </v-col>
          <v-col cols="3" md="3">
            <v-text-field
              v-model="data.relation1"
              :rules="rules.req"
              label="ความสัมพันธ์/Relation"
              placeholder=" "
            ></v-text-field>
          </v-col>
          <v-col cols="3" md="3">
            <v-text-field
              v-model="data.address"
              :rules="rules.req"
              label="ที่อยู่/Address"
              placeholder=" "
            ></v-text-field>
          </v-col>
          <v-col cols="2" md="2">
            <v-text-field
              v-model="data.mobile"
              :rules="rules.req"
              label="โทรศัพท์มือถือ/Mobile"
              placeholder=" "
            ></v-text-field>
          </v-col>
          <v-col cols="3" md="3">
            <v-text-field v-model="data.office" label="ที่ทำงาน/Office" placeholder=" "></v-text-field>
          </v-col>
          <v-col cols="2" md="2">
            <v-text-field v-model="data.position" label="ตำเเหน่ง/Position" placeholder=" "></v-text-field>
          </v-col>
          <v-col cols="2" md="2">
            <v-text-field v-model="data.telephone" label="โทรศัพท์/Telephone" placeholder=" "></v-text-field>
          </v-col>
        </v-row>
        <v-chip class="ma-2">ข้อมูลเพิ่มเติม/Miscellaneous</v-chip>
        <br />
        <br />
        <v-row>
          <v-col cols="5">
            <v-subheader>
              <p class="font-weight-black">
                **คุณเคยต้องโทษทางอาญาหรือไม่**
                <br />Do you have any criminal or civil record?
              </p>
            </v-subheader>
          </v-col>
          <v-row>
            <v-radio-group v-model="data.record" :rules="rules.req" row>
              <v-radio label="ไม่เคย/No" value="ไม่เคย" />
              <v-radio value="เคย" label="เคย/Yes" />
            </v-radio-group>
            <v-col cols="3" md="3">
              <v-text-field
                v-if="data.record!='ไม่เคย'"
                v-model="data.explain1"
                label="ระบุรายละเอียด/Explain"
                placeholder=" "
              ></v-text-field>
            </v-col>
          </v-row>
        </v-row>
        <v-row>
          <v-col cols="5">
            <v-subheader>
              <p class="font-weight-black">
                คุณเคยสมัครงานหรือทำงานกับบริษัทมาก่อนหรือไม่
                <br />Have you ever applied to this company?
              </p>
            </v-subheader>
          </v-col>
          <v-row>
            <v-radio-group v-model="data.company" :rules="rules.req" row>
              <v-radio label="ไม่เคย/No" value="ไม่เคย" />
              <v-radio value="เคย" label="เคย/Yes" />
            </v-radio-group>
            <v-col cols="3" md="3">
              <v-text-field
                v-if="data.company!='ไม่เคย'"
                v-model="data.explain2"
                label="ระบุรายละเอียด/Explain"
                placeholder=" "
              ></v-text-field>
            </v-col>
          </v-row>
        </v-row>
        <v-row>
          <v-col cols="5">
            <v-subheader>
              <p class="font-weight-black">
                คุณเคยป่วยหนักหรือเป็นโรคติดต่อร้ายแรงหรือไม่
                <br />Have you ever been seriously ill or contracted with contagious disease?
              </p>
            </v-subheader>
          </v-col>
          <v-row>
            <v-radio-group v-model="data.disease" :rules="rules.req" row>
              <v-radio label="ไม่เคย/No" value="ไม่เคย" />
              <v-radio value="เคย" label="เคย/Yes" />
            </v-radio-group>
            <v-col cols="3" md="3">
              <v-text-field
                v-if="data.disease!='ไม่เคย'"
                v-model="data.explain3"
                label="ระบุรายละเอียด/Explain"
                placeholder=" "
              ></v-text-field>
            </v-col>
          </v-row>
        </v-row>
        <v-row>
          <v-col cols="5">
            <v-subheader>
              <p class="font-weight-black">
                บริษัทสามารถพูดคุยกับนายจ้างเดิมของคุณได้หรือไม่
                <br />Can we contact your past employer?
              </p>
            </v-subheader>
          </v-col>
          <v-row>
            <v-radio-group v-model="data.employer" :rules="rules.req" row>
              <v-radio label="ไม่ได้/No" value="ไม่ได้" />
              <v-radio value="ได้" label="ได้/yes" />
            </v-radio-group>
            <v-col cols="3" md="3">
              <v-text-field
                v-if="data.employer!='ไม่ได้'"
                v-model="data.explain4"
                label="ระบุรายละเอียด/Explain"
                placeholder=" "
              ></v-text-field>
            </v-col>
          </v-row>
        </v-row>
        <v-row>
          <v-subheader>
            <p
              class="font-weight-black"
            >บุคคลในบริษัทที่คุณรู้จัก/Relatives or friends working in this company</p>
          </v-subheader>
        </v-row>
        <v-row>
          <v-col cols="3" md="3">
            <v-text-field
              v-model="data.name_surname"
              label="ชื่อ/สกุล (Name/Surname)"
              placeholder=" "
            ></v-text-field>
          </v-col>
          <v-col cols="2" md="2">
            <v-text-field v-model="data.department" label="แผนก/Department" placeholder=" "></v-text-field>
          </v-col>
          <v-col cols="2" md="2">
            <v-text-field v-model="data.relation2" label="ความสัมพันธ์/Relation" placeholder=" "></v-text-field>
          </v-col>
        </v-row>
        <v-row>
          <v-spacer />
          <v-spacer />
          <v-list-item-content>
            <v-col cols="10">
              <v-subheader>
                <p class="font-weight-black">
                  ข้าพเจ้าขอรับรองว่าข้อความทั้งหมด
                  <br />ในใบสมัครเป็นความจริงทุกประการ
                  <br />
                  <br />I certify that all statements in the application are true.
                </p>
              </v-subheader>
            </v-col>
          </v-list-item-content>
        </v-row>
        <br />
        <v-row>
          <v-spacer />
          <v-col cols="12" sm="6" md="4">
            <v-text-field
              v-model="data.salary_expectation"
              :rules="rules.req"
              label="  เงินเดือนที่ต้องการ/Salary Expectation*"
              placeholder=" "
            ></v-text-field>
          </v-col>
        </v-row>
        <v-row>
          <v-spacer />
          <v-col cols="12" sm="6" md="4">
            <v-subheader>
              <p class="font-weight-black">
                ลงชื่อผู้สมัคร
                <br />Applicant's signature *
              </p>
            </v-subheader>
            <v-text-field v-model="data.applicant_s_signature" :rules="rules.req"></v-text-field>
          </v-col>
        </v-row>
        <v-row>
          <v-spacer />
          <v-col cols="12" sm="6" md="4">
            <v-menu
              ref="menu"
              v-model="menu3"
              :close-on-content-click="false"
              :return-value.sync="data.date3"
              transition="scale-transition"
              offset-y
              min-width="290px"
            >
              <template v-slot:activator="{ on }">
                <v-text-field
                  v-model="tdate3_format"
                  label="วันที่ /Date"
                  prepend-icon="mdi-calendar-multiple"
                  readonly
                  v-on="on"
                ></v-text-field>
              </template>
              <v-date-picker v-model="data.date3" no-title scrollable>
                <v-spacer></v-spacer>
                <v-btn text color="primary" @click="menu3 = false">Cancel</v-btn>
                <v-btn text color="primary" @click="$refs.menu.save(data.date3)">OK</v-btn>
              </v-date-picker>
            </v-menu>
          </v-col>
        </v-row>
        <br />
        <br />
      </v-form>
      <v-divider />
      <br />
      <br />
      <v-form>
        <v-row>
          <v-chip
            class="ma-5"
          >กรุณาตอบคำถามตามความคิดเห็นอย่างตรงไปตรงมาที่สุด/ Please answer the question with with the treth</v-chip>
        </v-row>
        <v-subheader>
          <p class="font-weight-black">1). อะไรที่ทำให้คุณอยากเปลี่ยนงานใหม่ *</p>
        </v-subheader>
        <v-col cols="2" md="7">
          <v-text-field v-model="data.details1" :rules="rules.req" label="Details" hint="Details"></v-text-field>
        </v-col>
        <v-subheader>
          <p class="font-weight-black">2). อะไรที่ทำให้คุณสนใจมาสมัครงานที่นี่ *</p>
        </v-subheader>
        <v-col cols="2" md="7">
          <v-text-field v-model="data.details2" :rules="rules.req" label="Details" hint="Details"></v-text-field>
        </v-col>
        <v-subheader>
          <p class="font-weight-black">3). คุณคิดว่าตัวคุณเหมาะสมกับตำแหน่งที่คุณสมัครอย่างไรบ้าง *</p>
        </v-subheader>
        <v-col cols="2" md="7">
          <v-text-field v-model="data.details3" :rules="rules.req" label="Details" hint="Details"></v-text-field>
        </v-col>
        <v-subheader>
          <p
            class="font-weight-black"
          >4). ในการทำงานที่ผ่านมาคุณได้ตั้งเป้าหมายในการทำงานหรือไม่ และประสบความสำเร็จตามเป้าหมายมากน้อยเพียงใด *</p>
        </v-subheader>
        <v-col cols="2" md="7">
          <v-text-field v-model="data.details4" :rules="rules.req" label="Details" hint="Details"></v-text-field>
        </v-col>
        <v-subheader>
          <p
            class="font-weight-black"
          >5). อธิบายความหมายของ “คิดบวกเชิงสร้างสรรค์” ในความคิดของคุณ *</p>
        </v-subheader>
        <v-col cols="2" md="7">
          <v-text-field v-model="data.details5" :rules="rules.req" label="Details" hint="Details"></v-text-field>
        </v-col>
        <v-subheader>
          <p class="font-weight-black">6). อธิบายความหมายของ “จริงใจในสิ่งที่ทำ” ในความคิดของคุณ *</p>
        </v-subheader>
        <v-col cols="2" md="7">
          <v-text-field v-model="data.details6" :rules="rules.req" label="Details" hint="Details"></v-text-field>
        </v-col>
        <v-subheader>
          <p class="font-weight-black">7). อธิบายความหมายของ “ทำงานอย่างมืออาชีพ” ในความคิดของคุณ *</p>
        </v-subheader>
        <v-col cols="2" md="7">
          <v-text-field v-model="data.details7" :rules="rules.req" label="Details" hint="Details"></v-text-field>
        </v-col>
        <v-subheader>
          <p class="font-weight-black">8). อธิบายความหมายของ “เป็นเจ้าของร่วมกัน” ในความคิดของคุณ *</p>
        </v-subheader>
        <v-col cols="2" md="7">
          <v-text-field v-model="data.details8" :rules="rules.req" label="Details" hint="Details"></v-text-field>
        </v-col>
        <v-subheader>
          <p
            class="font-weight-black"
          >9). อธิบายความหมายของ “รวมพลังเป็นหนึ่งเดียว” ในความคิดของคุณ *</p>
        </v-subheader>
        <v-col cols="2" md="7">
          <v-text-field v-model="data.details9" :rules="rules.req" label="Details" hint="Details"></v-text-field>
        </v-col>
        <v-subheader>
          <p class="font-weight-black">10).ผลงานใดที่ทำให้คุณภาคภูมิใจมากที่สุด *</p>
        </v-subheader>
        <v-col cols="2" md="7">
          <v-text-field v-model="data.details10" :rules="rules.req" label="Details" hint="Details"></v-text-field>
        </v-col>
        <v-subheader>
          <p class="font-weight-black">11). หากคุณเลือกได้คุณอยากมีหัวหน้าแบบใด *</p>
        </v-subheader>
        <v-col cols="2" md="7">
          <v-text-field v-model="data.details11" :rules="rules.req" label="Details" hint="Details"></v-text-field>
        </v-col>
        <v-subheader>
          <p class="font-weight-black">12). หากคุณเลือกได้คุณอยากได้ลูกน้องแบบใด *</p>
        </v-subheader>
        <v-col cols="2" md="7">
          <v-text-field v-model="data.details12" :rules="rules.req" label="Details" hint="Details"></v-text-field>
        </v-col>
        <v-subheader>
          <p
            class="font-weight-black"
          >13). เมื่อคุณประสบปัญหาในการทำงาน (หรือชีวิต) มากที่สุด จนรู้สึกท้อถอย คุณมีวิธีการแก้ไขสถานการณ์นั้นอย่างไร *</p>
        </v-subheader>
        <v-col cols="2" md="7">
          <v-text-field v-model="data.details13" :rules="rules.req" label="Details" hint="Details"></v-text-field>
        </v-col>
        <v-subheader>
          <p class="font-weight-black">14). คุณคิดว่าอยากจะพัฒนาตนเองในเรื่องใดมากที่สุด เพราะอะไร *</p>
        </v-subheader>
        <v-col cols="2" md="7">
          <v-text-field v-model="data.details14" :rules="rules.req" label="Details" hint="Details"></v-text-field>
        </v-col>
        <v-chip class="ma-2">English Writing</v-chip>
        <v-subheader>
          <p
            class="font-weight-black"
          >Please choose 1 topic for paragraph writing about 100 words or 10 sentences</p>
        </v-subheader>
        <v-radio-group>
          <v-col>
            <v-row>
              <v-checkbox
                v-model="data.english_writing"
                label="My life in next 5 years"
                value="My life in next 5 years"
              ></v-checkbox>
            </v-row>
            <v-row>
              <v-checkbox
                v-model="data.english_writing"
                label="If I could turn back time"
                value="If I could turn back time"
              ></v-checkbox>
            </v-row>
            <v-row>
              <v-checkbox
                v-model="data.english_writing"
                label="My dream boss"
                value="My dream boss"
              ></v-checkbox>
            </v-row>
          </v-col>
        </v-radio-group>
        <v-col cols="2" md="7">
          <v-text-field v-model="data.details15" :rules="rules.req" label="Details" hint="Details"></v-text-field>
          <v-text-field v-model="data.details16" label="Details" hint="Details"></v-text-field>
          <v-text-field v-model="data.details17" label="Details" hint="Details"></v-text-field>
          <v-text-field v-model="data.details18" label="Details" hint="Details"></v-text-field>
        </v-col>
        <br />
        <v-row>
          <v-spacer />
          <v-col cols="12" sm="6" md="4">
            <v-subheader>
              <p class="font-weight-black">
                ลงชื่อผู้สมัคร
                <br />Applicant's signature *
              </p>
            </v-subheader>
            <v-text-field v-model="data.applicant_signature1" :rules="rules.req"></v-text-field>
          </v-col>
        </v-row>
      </v-form>
      <v-row>
        <v-spacer />
        <v-col cols="2">
          <v-btn color="warning" v-if="!valid" @click="validate">Validate</v-btn>
          <v-btn color="success" v-else @click="save">Save</v-btn>
        </v-col>
      </v-row>
    </v-container>
  </v-card>
</template>
<script>
import PictureInput from "vue-picture-input";
import JSEncrypt from "jsencrypt/bin/jsencrypt";
var moment = require("moment");

export default {
  props: ["data", "rules"],
  components: {
    PictureInput
  },
  data() {
    return {
      xordination: "เคยบวชแล้ว",
      xdetails: "",
      Brith_Date_Model: false,
      thisdate: new Date().toISOString().substr(0, 10),
      thisdate1: new Date().toISOString().substr(0, 10),
      thisdate2: new Date().toISOString().substr(0, 10),
      valid: false,
      modal_trainingyear: false,
      date: new Date().toISOString().substr(0, 7),
      modal_trainingyear1: false,
      modal_trainingyear2: false,
      modal_period: false,
      date: new Date().toISOString().substr(0, 7),
      modal_period2: false,
      modal_period3: false,
      modal_period4: false,
      modal_period5: false,
      modal_period6: false,
      Brith_Date_Model: false,
      modal_graduation: false,
      date: new Date().toISOString().substr(0, 7),
      modal_graduation1: false,
      modal_graduation2: false,
      modal_graduation3: false,
      modal_graduation4: false,
      modal_graduation5: false,
      modal_graduation6: false,
      // edu
      lists: [
        {
          id: 1,
          name: "edu"
        },
        { id: 2, name: "gfb", data: ["ดี/Good", "พอใช้/Ok", "ไม่ดี/Not Good"] },
        { id: 3, name: "other", data: ["ปริญญาโท", "ปริญญาเอก", "อื่น ๆ"] },
        {
          id: 3,
          name: "tudying",
          data: [
            "ม.ปลาย",
            "ปวช.",
            "ปวส.",
            "ปริญญาตรี",
            "ปริญญาโท",
            "ปริญญาเอก",
            "อื่น ๆ"
          ]
        }
      ],
      //
      menu3: false,
      menu2: false,
      menu1: false
    };
  },
  mounted() {
    // this.init();
  },
  methods: {
    async init() {
      let listurl = process.env.VUE_APP_LIST;
      let res = await axios({
        method: "get",
        url: listurl
      });
      this.lists = res.data;
    },
    validate() {
      this.$refs.form.validate();
    },
    async save() {
      let dataurl = process.env.VUE_APP_DATA;
      if (this.data.id) {
        let xurl = dataurl + "/" + this.data.id;
        this.data.update = new Date().toISOString().substr(0, 10);
        this.data.full = "mdi-checkbox-marked-circle-outline";
        let res = await axios({
          method: "PUT",
          url: xurl,
          data: this.data
        });
        if (res.data.id) {
          this.$refs.form.reset();
          alert("ระบบ Update ข้อมูลแล้ว");
        }
      } else {
        this.data.full = "mdi-checkbox-marked-circle-outline";
        let res = await axios({
          method: "POST",
          url: dataurl,
          data: this.data
        });
        if (res.data.id) {
          this.$refs.form.reset();
          alert("ได้รับข้อมูลแล้วจะติดต่อกลับ");
        }
      }
    },
    onChange(image) {
      if (image) {
        this.data.img = image;
        this.data.img.reset();
      }
    }
  },
  watch: {
    xdetails: function(val) {
      //console.log(val);
      this.data.details = val;
      this.data.ordination = "บวชแล้วที่" + val;
      this.xordination = this.data.ordination;
    }
  },
  computed: {
    tdate3_format: function() {
      if (!this.data.date3) this.data.date3 = this.thisdate;
      return moment(this.data.date3).format("D MMM YYYY");
    },
    tdate1_format: function() {
      if (!this.data.date1) this.data.date1 = this.thisdate1;
      return moment(this.data.date1).format("D MMM YYYY");
    },
    tdate2_format: function() {
      if (!this.data.date2) this.data.date2 = this.thisdate;
      return moment(this.data.date2).format("D MMM YYYY");
    },
    tbd_format: function() {
      if (this.data.brithdate)
        return moment(this.data.brithdate).format("D MMM YYYY");
    },
    date_graduation: function() {
      if (this.data.graduation)
        return moment(this.data.graduation).format(" MMM YYYY");
    },
    date_graduation1: function() {
      if (this.data.graduation1)
        return moment(this.data.graduation1).format(" MMM YYYY");
    },
    date_graduation2: function() {
      if (this.data.graduation2)
        return moment(this.data.graduation2).format(" MMM YYYY");
    },
    date_graduation3: function() {
      if (this.data.graduation3)
        return moment(this.data.graduation3).format(" MMM YYYY");
    },
    date_graduation4: function() {
      if (this.data.graduation4)
        return moment(this.data.graduation4).format(" MMM YYYY");
    },
    date_graduation5: function() {
      if (this.data.graduation5)
        return moment(this.data.graduation5).format(" MMM YYYY");
    },
    date_graduation6: function() {
      if (this.data.graduation6)
        return moment(this.data.graduation6).format(" MMM YYYY");
    },
    date_1: function() {
      if (this.data.period) return moment(this.data.period).format(" MMM YYYY");
    },
    date_2: function() {
      if (this.data.period2)
        return moment(this.data.period2).format(" MMM YYYY");
    },
    date_3: function() {
      if (this.data.period3)
        return moment(this.data.period3).format(" MMM YYYY");
    },
    date_4: function() {
      if (this.data.period4)
        return moment(this.data.period4).format(" MMM YYYY");
    },
    date_5: function() {
      if (this.data.period5)
        return moment(this.data.period5).format(" MMM YYYY");
    },
    date_6: function() {
      if (this.data.period6)
        return moment(this.data.period6).format(" MMM YYYY");
    },
    date_trainingyear: function() {
      if (this.data.trainingyear)
        return moment(this.data.graduation).format(" MMM YYYY");
    },
    date_trainingyear1: function() {
      if (this.data.trainingyear1)
        return moment(this.data.trainingyear1).format(" MMM YYYY");
    },
    date_trainingyear2: function() {
      if (this.data.trainingyear2)
        return moment(this.data.trainingyear2).format(" MMM YYYY");
    },
    comp_age: function() {
      let yy = moment().diff(this.data.brithdate, "years", false);
      let mo = moment().diff(this.data.brithdate, "months", false);
      let xx = mo - yy * 12;
      this.data.age = yy;
      this.data.xID_Company = this.data.xID_Company || " ";
      this.data.xID_Emp = this.data.xID_Emp || " ";
      this.data.xID_Card = this.data.xID_Card || " ";
      this.data.titlename = this.data.titlename || " ";
      this.data.name = this.data.name || " ";
      this.data.surname = this.data.surname || " ";
      this.data.titlenamee = this.data.titlenamee || " ";
      this.data.namee = this.data.namee || " ";
      this.data.surnamee = this.data.surnamee || " ";
      this.data.sex = this.data.sex || " ";
      this.data.xSection_Division = this.data.xSection_Division || " ";
      this.data.xDepartment = this.data.xDepartment || " ";
      this.data.positionnew = this.data.positionnew || " ";
      this.data.xP_Level = this.data.xP_Level || " ";
      this.data.xWP = this.data.xWP || " ";
      this.data.xArea = this.data.xArea || " ";
      this.data.xWorkStatus = this.data.xWorkStatus || " ";
      this.data.marital = this.data.marital || " ";
      this.data.xD_Start = this.data.xD_Start || " ";
      this.data.xD_Test = this.data.xD_Test || " ";
      this.data.xD_Contain = this.data.xD_Contain || " ";
      this.data.xD_End = this.data.xD_End || " ";
      this.data.xWorkOut = this.data.xWorkOut || " ";
      this.data.xType_Emp = this.data.xType_Emp || " ";
      this.data.xLavel = this.data.xLavel || " ";
      this.data.id_code = this.data.id_code || " ";
      this.data.xID_CodeEnd = this.data.xID_CodeEnd || " ";
      this.data.id_tax = this.data.id_tax || " ";
      this.data.id_socail = this.data.id_socail || " ";
      this.data.xID_Backup = this.data.xID_Backup || " ";
      this.data.xHospital = this.data.xHospital || " ";
      this.data.img = this.data.img || " ";
      this.data.xPicture = this.data.xPicture || " ";
      this.data.xPre1 = this.data.xPre1 || " ";
      this.data.xPre2 = this.data.xPre2 || " ";
      this.data.xPre3 = this.data.xPre3 || " ";
      this.data.xPre4 = this.data.xPre4 || " ";
      this.data.age = this.data.age || " ";
      this.data.pofb = this.data.pofb || " ";
      this.data.BrithDate = this.data.BrithDate || " ";
      this.data.height = this.data.height || " ";
      this.data.weight = this.data.weight || " ";
      this.data.citizen = this.data.citizen || " ";
      this.data.nationality = this.data.nationality || " ";
      this.data.religion = this.data.religion || " ";
      this.data.group = this.data.group || " ";
      this.data.tel = this.data.tel || " ";
      this.data.xPager = this.data.xPager || " ";
      this.data.n_service = this.data.n_service || " ";
      this.data.skill = this.data.skill || " ";
      this.data.com_program = this.data.com_program || " ";
      this.data.hobbies = this.data.hobbies || " ";
      this.data.sport = this.data.sport || " ";
      this.data.xTyping_T = this.data.xTyping_T || " ";
      this.data.xTyping_E = this.data.xTyping_E || " ";
      this.data.xD_LicenceCar = this.data.xD_LicenceCar || " ";
      this.data.xId_Car = this.data.xId_Car || " ";
      this.data.xD_LicenceMotorcy = this.data.xD_LicenceMotorcy || " ";
      this.data.xId_Motorcy = this.data.xId_Motorcy || " ";
      this.data.father_n = this.data.father_n || " ";
      this.data.father_oc = this.data.father_oc || " ";
      this.data.father_wp = this.data.father_wp || " ";
      this.data.xFather_Tel = this.data.xFather_Tel || " ";
      this.data.mather_n = this.data.mather_n || " ";
      this.data.mather_oc = this.data.mather_oc || " ";
      this.data.mather_wp = this.data.mather_wp || " ";
      this.data.xMather_Tel = this.data.xMather_Tel || " ";
      this.data.spouses_n = this.data.spouses_n || " ";
      this.data.spouses_oc = this.data.spouses_oc || " ";
      this.data.spouses_wp = this.data.spouses_wp || " ";
      this.data.spouses_tel = this.data.spouses_tel || " ";
      this.data.num_b = this.data.num_b || " ";
      this.data.num_s = this.data.xID_Company || " ";
      this.data.num_d = this.data.num_d || " ";
      this.data.order_b = this.data.order_b || " ";
      this.data.company_add1 = this.data.company_add1 || " ";
      this.data.tel1 = this.data.tel1 || " ";
      this.data.position1 = this.data.position1 || " ";
      this.data.job_discription1 = this.data.job_discription1 || " ";
      this.data.note1 = this.data.note1 || " ";
      this.data.s_last1 = this.data.s_last1 || " ";
      this.data.company_add2 = this.data.company_add2 || " ";
      this.data.tel2 = this.data.tel2 || " ";
      this.data.position2 = this.data.position2 || " ";
      this.data.job_discription2 = this.data.job_discription2 || " ";
      this.data.note2 = this.data.note2 || " ";
      this.data.s_last2 = this.data.s_last2 || " ";
      this.data.company_add3 = this.data.company_add3 || " ";
      this.data.tel3 = this.data.tel3 || " ";
      this.data.position3 = this.data.position3 || " ";
      this.data.job_discription3 = this.data.job_discription3 || " ";
      this.data.note3 = this.data.note3 || " ";
      this.data.s_last3 = this.data.s_last3 || " ";
      this.data.pr_add = this.data.pr_add || " ";
      this.data.pr_soi = this.data.pr_soi || " ";
      this.data.pr_street = this.data.pr_street || " ";
      this.data.pr_district = this.data.pr_district || " ";
      this.data.pr_aumphur = this.data.pr_aumphur || " ";
      this.data.pr_proince = this.data.pr_proince || " ";
      this.data.pr_country = this.data.pr_country || " ";
      this.data.pr_postaicode = this.data.pr_postaicode || " ";
      this.data.xPR_Map = this.data.xPR_Map || " ";
      this.data.xPR_Tel = this.data.xPR_Tel || " ";
      this.data.re_add = this.data.re_add || " ";
      this.data.re_soi = this.data.re_soi || " ";
      this.data.re_street = this.data.re_street || " ";
      this.data.re_district = this.data.re_district || " ";
      this.data.re_aumphur = this.data.re_aumphur || " ";
      this.data.re_proince = this.data.re_proince || " ";
      this.data.re_country = this.data.re_country || " ";
      this.data.re_postaicode = this.data.re_postaicode || " ";
      this.data.xRE_Map = this.data.xRE_Map || " ";
      this.data.xRE_Tel = this.data.xRE_Tel || " ";
      this.data.institute1 = this.data.institute1 || " ";
      this.data.name_country1 = this.data.name_country1 || " ";
      this.data.name_degree1 = this.data.name_degree1 || " ";
      this.data.name_subject1 = this.data.name_subject1 || " ";
      this.data.name_grade1 = this.data.name_grade1 || " ";
      this.data.name_yIn1 = this.data.name_yIn1 || " ";
      this.name_graduation1 = this.data.name_graduation1 || " ";
      this.data.institute2 = this.data.institute2 || " ";
      this.data.name_country2 = this.data.name_country2 || " ";
      this.data.name_degree2 = this.data.name_degree2 || " ";
      this.data.name_subject2 = this.data.name_subject2 || " ";
      this.data.name_grade2 = this.data.name_grade2 || " ";
      this.data.name_yIn2 = this.data.name_yIn2 || " ";
      this.data.name_graduation2 = this.data.name_graduation2 || " ";
      this.data.institute3 = this.data.institute3 || " ";
      this.data.name_country3 = this.data.name_country3 || " ";
      this.data.name_degree3 = this.data.name_degree3 || " ";
      this.data.name_subject3 = this.data.name_subject3 || " ";
      this.data.name_grade3 = this.data.name_grade3 || " ";
      this.data.name_yIn3 = this.data.name_yIn3 || " ";
      this.data.name_graduation3 = this.data.name_graduation3 || " ";
      this.data.institute4 = this.data.institute4 || " ";
      this.data.name_country4 = this.data.name_country4 || " ";
      this.data.name_degree4 = this.data.name_degree4 || " ";
      this.data.name_major4 = this.data.name_major4 || " ";
      this.data.name_grade4 = this.data.name_grade4 || " ";
      this.data.name_yIn4 = this.data.name_yIn4 || " ";
      this.data.yout4 = this.data.yout4 || " ";
      this.data.xAccountNo = this.data.xAccountNo || " ";
      this.data.xBank = this.data.xBank || " ";
      this.data.xChildStudy = this.data.xChildStudy || " ";
      this.data.xChildNoStudy = this.data.xChildNoStudy || " ";
      this.data.xSpouseWS = this.data.xSpouseWS || " ";
      this.data.xTaxType = this.data.xTaxType || " ";
      this.data.xInsure = this.data.xInsure || " ";
      this.data.xBorrowPay = this.data.xBorrowPay || " ";
      this.data.xGiveMoney = this.data.xGiveMoney || " ";
      this.data.xSocialNo = this.data.xSocialNo || " ";
      this.data.xPsalary = this.data.xPsalary || " ";
      this.data.xPtax = this.data.xPtax || " ";
      this.data.xPsocial = this.data.xPsocial || " ";
      this.data.xPCBackup = this.data.xPCBackup || " ";
      this.data.xPBackup = this.data.xPBackup || " ";
      return yy + "ปี(" + xx + "ด.)";
    },
    comp_inc1: function() {
      let xdate = moment();
      if (this.data.period2) {
        xdate = moment(this.data.period2, "YYYY-MM");
      }
      let mo = xdate.diff(this.data.period, "months", false);
      this.data.include1 = Math.floor(mo / 12) + " ปี(" + (mo % 12) + "ด.)";
      return Math.floor(mo / 12) + " ปี(" + (mo % 12) + "ด.)";
    },
    comp_inc2: function() {
      let xdate = moment();
      if (this.data.period4) {
        xdate = moment(this.data.period4, "YYYY-MM");
      }

      let mo = xdate.diff(this.data.period3, "months", false);
      this.data.include2 = Math.floor(mo / 12) + " ปี(" + (mo % 12) + "ด.)";
      return Math.floor(mo / 12) + " ปี(" + (mo % 12) + "ด.)";
    },
    comp_inc3: function() {
      let xdate = moment();
      if (this.data.period6) {
        xdate = moment(this.data.period6, "YYYY-MM");
      }
      let mo = xdate.diff(this.data.period5, "months", false);
      this.data.include3 = Math.floor(mo / 12) + " ปี(" + (mo % 12) + "ด.)";
      return Math.floor(mo / 12) + " ปี(" + (mo % 12) + "ด.)";
    }
  }
};
</script>
