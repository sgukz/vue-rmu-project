<template>
  <v-card style="font-family: 'Kanit', sans-serif">
    <v-card-actions class="justify-center">
      <v-img
        max-height="300"
        max-width="300"
        src="http://image.free.in.th/v/2013/ig/210222022023.png"
      >
      </v-img>
    </v-card-actions>
    <div class="text-center">
      <h2>Computer Engineering</h2>
      <h2>Rajbhat Maha Sarakham University</h2>
      <br />
      <p>
        เอกสารเก็บข้อมูลการฝึกประสบการณ์ของนักศึกษา สาขาวิศวกรรมคิมพิวเตอร์
        คณะวิศวกรรมศาสตร์
        <br />มหาวิทยาลัยราชภัฏมหาสารคาม
      </p>
    </div>
    <v-container fluid>
      <!-- <v-form ref="form" v-model="valid"> -->
      <v-chip class="ma-2">** ข้อมูลของบริษัท/ Information Company **</v-chip>
      <v-row>
        <v-col cols="10">
          <v-row>
            <v-col cols="6" sm="2" md="4">
              <v-text-field
                v-model="form.company_name"
                :rules="rules.req"
                label="*ชื่อบริษัท /Company*"
                placeholder=" "
                required
              />
            </v-col>
          </v-row>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="2" md="2">
          <v-text-field
            v-model="form.company_house_number"
            :rules="rules.reqm2"
            label="บ้านเลขที่/หมู่ (House number)"
            placeholder=" "
          ></v-text-field>
        </v-col>
        <v-col cols="3" md="3">
          <v-text-field
            v-model="form.company_building"
            label="หมู่บ้าน/อาคาร (Village/building)"
            placeholder=" "
          ></v-text-field>
        </v-col>
        <v-col cols="2" md="2">
          <v-text-field
            v-model="form.company_alley"
            label="ซอย/Alley"
            placeholder=" "
          ></v-text-field>
        </v-col>
        <v-col cols="2" md="2">
          <v-text-field
            v-model="form.company_street"
            label="ถนน/Street"
            placeholder=" "
          ></v-text-field>
        </v-col>
        <v-col cols="2" md="2">
          <v-text-field
            v-model="form.company_district"
            :rules="rules.reqm2"
            label="แขวง/ตำบล  District"
            placeholder=" "
          ></v-text-field>
        </v-col>
        <v-col cols="2" md="2">
          <v-text-field
            v-model="form.company_aumphur"
            :rules="rules.reqm2"
            label="เขต/อำเภอ  Canton"
            placeholder=" "
          ></v-text-field>
        </v-col>
        <v-col cols="2" md="2">
          <v-text-field
            v-model="form.company_province"
            :rules="rules.reqm2"
            label="จังหวัด/Province"
            placeholder=" "
          ></v-text-field>
        </v-col>
        <v-col cols="2" md="2">
          <v-text-field
            v-model="form.company_country"
            :rules="rules.reqm2"
            label="ประเทศ/County"
            placeholder=" "
          ></v-text-field>
        </v-col>
        <v-col cols="2" md="2">
          <v-text-field
            v-model="form.company_postcode"
            :rules="rules.reqeq5"
            label="รหัสไปรษณีย์/Postal code"
            placeholder=" "
          ></v-text-field>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="2" md="3">
          <v-text-field
            v-model="form.company_telephone"
            :rules="rules.req"
            label="เบอร์ติดต่อ/Telephone"
            placeholder=" "
          ></v-text-field>
        </v-col>
        <v-col cols="2">
          <v-subheader>
            <p class="font-weight-black">เบี้ยเลี้ยง /<br />Allowance</p>
          </v-subheader>
        </v-col>
        <v-radio-group v-model="form.company_allowance" row>
          <v-radio label="มี/have" value="1" />
          <v-radio label="ไม่มี/without" value="0" />
        </v-radio-group>
      </v-row>
      <v-row>
        <v-col cols="12">
          <v-subheader>
            <p class="font-weight-black">ค้นหาตำแหน่งที่ตั้งบริษัท</p>
          </v-subheader>
          <!-- {{ this.form.company_location }} -->
          <div>
            <label>
              <gmap-autocomplete @place_changed="setPlace"> </gmap-autocomplete>
              <button @click="addMarker">Add</button>
            </label>
          </div>
          <br />
          <gmap-map
            :center="center"
            :zoom="12"
            style="width: 100%; height: 400px"
          >
            <gmap-marker
              :key="index"
              v-for="(m, index) in markers"
              :position="m.position"
              @click="center = m.position"
            ></gmap-marker>
          </gmap-map>
        </v-col>
      </v-row>
      <br />

      <v-chip class="ma-2">
        แนะนำที่พักใกล้บริทษัท / Recommended accommodation **</v-chip
      >
      <v-checkbox
        v-model="form.not_recom_room"
        label="ไม่มีที่พักแนะนำ"
        value="ไม่มีที่พักแนะนำ"
      />
      <div v-if="!form.not_recom_room">
        <v-row>
          <v-col cols="2" md="2">
            <v-text-field
              v-model="form.recom_flat_house_number"
              label="บ้านเลขที่/หมู่ (House number)"
              placeholder=" "
            ></v-text-field>
          </v-col>
          <v-col cols="3" md="3">
            <v-text-field
              v-model="form.recom_flat_building"
              label="หมู่บ้าน/อาคาร (Village/building)"
              placeholder=" "
            ></v-text-field>
          </v-col>
          <v-col cols="2" md="2">
            <v-text-field
              v-model="form.recom_flat_alley"
              label="ซอย/Alley"
              placeholder=" "
            ></v-text-field>
          </v-col>
          <v-col cols="2" md="2">
            <v-text-field
              v-model="form.recom_flat_street"
              label="ถนน/Street"
              placeholder=" "
            ></v-text-field>
          </v-col>
          <v-col cols="2" md="2">
            <v-text-field
              v-model="form.recom_flat_district"
              label="แขวง/ตำบล  District"
              placeholder=" "
            ></v-text-field>
          </v-col>

          <v-col cols="2" md="2">
            <v-text-field
              v-model="form.recom_flat_aumphur"
              label="เขต/อำเภอ Canton"
              placeholder=" "
            ></v-text-field>
          </v-col>
          <v-col cols="2" md="2">
            <v-text-field
              v-model="form.recom_flat_province"
              label="จังหวัด/Province"
              placeholder=" "
            ></v-text-field>
          </v-col>
          <v-col cols="2" md="2">
            <v-text-field
              v-model="form.recom_flat_country"
              label="ประเทศ/County"
              placeholder=" "
            ></v-text-field>
          </v-col>
          <v-col cols="2" md="2">
            <v-text-field
              v-model="form.recom_flat_postaicode"
              label="รหัสไปรษณีย์/Postal code"
              placeholder=" "
            ></v-text-field>
          </v-col>
          <v-col cols="2" md="3">
            <v-text-field
              v-model="form.recom_flat_telephone"
              label="เบอร์ติดต่อ/Telephone"
              placeholder=" "
            ></v-text-field>
          </v-col>
        </v-row>
      </div>
      <br />
      <v-divider />
      <br />
      <br />
      <v-chip>**ผู้ให้ข้อมูล/ Informant**</v-chip>
      <v-row>
        <v-col cols="3" sm="3" md="3">
          <v-text-field
            v-model="form.cid"
            :rules="rules.cid"
            label="*เลขบัตรประชาชน/ CID*"
            placeholder=" "
            required
          />
        </v-col>
        <v-col cols="3" sm="3" md="3">
          <v-text-field
            v-model="form.informant_pname"
            :rules="rules.req"
            label="*คำนำหน้า/Titel(TH)*"
            placeholder=" "
            required
          />
        </v-col>
        <v-col cols="3" sm="3" md="3">
          <v-text-field
            v-model="form.informant_fname"
            :rules="rules.name"
            label="*ชื่อ/Name(TH)*"
            placeholder=" "
            required
          />
        </v-col>
        <v-col cols="3" sm="3" md="3">
          <v-text-field
            v-model="form.informant_lname"
            :rules="rules.name"
            label="*นามสกุล/Surname(TH)*"
            placeholder=" "
            required
          />
        </v-col>
        <!-- <v-col cols="3" sm="3" md="3">
            <v-text-field
              v-model="form.informant_lname"
              :rules="rules.name"
              label="*นามสกุล/Surname(TH)*"
              placeholder=""
              required
            />
          </v-col> -->
      </v-row>
      <v-row>
        <v-col cols="3" sm="3" md="3">
          <v-text-field
            v-model="form.informant_nickname"
            label="ชื่อเล่น/Nickname(TH)"
            placeholder=" "
          />
        </v-col>
        <v-col cols="3" sm="3" md="3">
          <v-text-field
            prepend-icon="mdi-cellphone-iphone"
            v-model="form.informant_tel"
            label="*เบอร์มือถือ/Mobile*"
            placeholder=" "
            :rules="rules.req"
            required
          />
        </v-col>
        <v-col cols="3" sm="3" md="3">
          <v-text-field
            v-model="form.informant_email"
            :rules="rules.email"
            label="Email"
            placeholder=" "
            required
          />
        </v-col>
        <v-col cols="3" sm="3" md="3">
          <v-text-field
            v-model="form.informant_lineid"
            label="ID Line"
            placeholder=" "
            :rules="rules.req"
            required
          />
        </v-col>
      </v-row>
      <v-chip>**ประสบการณ์ทำงาน/ Employment record**</v-chip>
      <v-checkbox
        v-model="form.not_experience"
        label="ไม่มีประสบการณ์การทำงาน"
        value="ไม่มีประสบการณ์การทำงาน"
      />
      <div v-if="!form.not_experience">
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
          <v-col cols="3" md="3">
            <v-text-field
              v-model="form.experience_company"
              label="Company / Department"
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
              :return-value.sync="form.experience_company_period_from"
              persistent
              width="290px"
            >
              <template v-slot:activator="{ on }">
                <v-text-field
                  v-model="date_1"
                  label="จาก เดือน/ปี (From month/year)"
                  placeholder=" "
                  prepend-icon="mdi-calendar-range"
                  readonly
                  v-on="on"
                ></v-text-field>
              </template>
              <v-date-picker
                v-model="form.experience_company_period_from"
                type="month"
                scrollable
              >
                <v-spacer></v-spacer>
                <v-btn text color="primary" @click="modal_period = false"
                  >Cancel</v-btn
                >
                <v-btn
                  text
                  color="primary"
                  @click="
                    $refs.dialog.save(form.experience_company_period_from)
                  "
                  >OK</v-btn
                >
              </v-date-picker>
            </v-dialog>
          </v-col>
          <v-col cols="2" md="2">
            <v-dialog
              ref="dia"
              v-model="modal_period2"
              :return-value.sync="form.experience_company_period_to"
              persistent
              width="290px"
            >
              <template v-slot:activator="{ on }">
                <v-text-field
                  v-model="date_2"
                  label="ถึง เดือน/ปี (To month/year)"
                  placeholder=" "
                  prepend-icon="mdi-calendar-range"
                  readonly
                  v-on="on"
                ></v-text-field>
              </template>
              <v-date-picker
                v-model="form.experience_company_period_to"
                type="month"
                scrollable
              >
                <v-spacer></v-spacer>
                <v-btn text color="primary" @click="modal_period2 = false"
                  >Cancel</v-btn
                >
                <v-btn
                  text
                  color="primary"
                  @click="$refs.dia.save(form.experience_company_period_to)"
                  >OK</v-btn
                >
              </v-date-picker>
            </v-dialog>
          </v-col>
          <v-col cols="2" md="2">
            <v-text-field
              :rules="rules.morethenz"
              v-model="comp_inc1"
              readonly
              label="รวม/To include"
              placeholder=" "
            ></v-text-field>
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
          <v-col cols="3" md="3">
            <v-text-field
              v-model="form.experience_position"
              label="Last Position"
              placeholder=" "
            ></v-text-field>
          </v-col>
          <v-subheader>
            <p class="font-weight-black">
              เงินเดือน
              <br />Salary
            </p>
          </v-subheader>
          <v-col cols="2" md="2">
            <v-text-field
              v-model="form.experience_salary"
              label="ค่าจ้าง/เงินเดือน (Wage/salary) "
              placeholder=" "
            ></v-text-field>
          </v-col>
          <v-col cols="2" md="2">
            <v-text-field
              v-model="form.experience_resign_note"
              label="  สาเหตุที่ลาออก/Reason for Leaving"
              placeholder=" "
            ></v-text-field>
          </v-col>
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
          <v-col cols="3" md="3">
            <v-text-field
              v-model="form.experience_company_2"
              label="Company / Department"
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
              :return-value.sync="form.experience_company_period_from_2"
              persistent
              width="290px"
            >
              <template v-slot:activator="{ on }">
                <v-text-field
                  v-model="date_3"
                  label="จาก เดือน/ปี (From month/year)"
                  placeholder=" "
                  prepend-icon="mdi-calendar-range"
                  readonly
                  v-on="on"
                ></v-text-field>
              </template>
              <v-date-picker
                v-model="form.experience_company_period_from_2"
                type="month"
                scrollable
              >
                <v-spacer></v-spacer>
                <v-btn text color="primary" @click="modal_period3 = false"
                  >Cancel</v-btn
                >
                <v-btn
                  text
                  color="primary"
                  @click="
                    $refs.meri.save(form.experience_company_period_from_2)
                  "
                  >OK</v-btn
                >
              </v-date-picker>
            </v-dialog>
          </v-col>
          <v-col cols="2" md="2">
            <v-dialog
              ref="diem"
              v-model="modal_period4"
              :return-value.sync="form.experience_company_period_to_2"
              persistent
              width="290px"
            >
              <template v-slot:activator="{ on }">
                <v-text-field
                  v-model="date_4"
                  label="ถึง เดือน/ปี (To month/year)"
                  placeholder=" "
                  prepend-icon="mdi-calendar-range"
                  readonly
                  v-on="on"
                ></v-text-field>
              </template>
              <v-date-picker
                v-model="form.experience_company_period_to_2"
                type="month"
                scrollable
              >
                <v-spacer></v-spacer>
                <v-btn text color="primary" @click="modal_period4 = false"
                  >Cancel</v-btn
                >
                <v-btn
                  text
                  color="primary"
                  @click="$refs.diem.save(form.experience_company_period_to_2)"
                  >OK</v-btn
                >
              </v-date-picker>
            </v-dialog>
          </v-col>
          <v-col cols="2" md="2">
            <v-text-field
              :rules="rules.morethenz"
              v-model="comp_inc2"
              readonly
              label="รวม/To include"
              placeholder=" "
            ></v-text-field>
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
          <v-col cols="3" md="3">
            <v-text-field
              v-model="form.experience_position_2"
              label="Last Position"
              placeholder=" "
            ></v-text-field>
          </v-col>
          <v-subheader>
            <p class="font-weight-black">
              เงินเดือน
              <br />Salary
            </p>
          </v-subheader>
          <v-col cols="2" md="2">
            <v-text-field
              v-model="form.experience_salary_2"
              label="ค่าจ้าง/เงินเดือน (Wage/salary) "
              placeholder=" "
            ></v-text-field>
          </v-col>
          <v-col cols="2" md="2">
            <v-text-field
              v-model="form.experience_resign_note_2"
              label="  สาเหตุที่ลาออก/Reason for Leaving"
              placeholder=" "
            ></v-text-field>
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
          <v-col cols="3" md="3">
            <v-text-field
              v-model="form.experience_company_3"
              label="Company / Department"
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
              :return-value.sync="form.experience_company_period_from_3"
              persistent
              width="290px"
            >
              <template v-slot:activator="{ on }">
                <v-text-field
                  v-model="date_5"
                  label="จาก เดือน/ปี (From month/year)"
                  placeholder=" "
                  prepend-icon="mdi-calendar-blank"
                  readonly
                  v-on="on"
                ></v-text-field>
              </template>
              <v-date-picker
                v-model="form.experience_company_period_from_3"
                type="month"
                scrollable
              >
                <v-spacer></v-spacer>
                <v-btn text color="primary" @click="modal_period5 = false"
                  >Cancel</v-btn
                >
                <v-btn
                  text
                  color="primary"
                  @click="$refs.mor.save(form.experience_company_period_from_3)"
                  >OK</v-btn
                >
              </v-date-picker>
            </v-dialog>
          </v-col>
          <v-col cols="2" md="2">
            <v-dialog
              ref="ning"
              v-model="modal_period6"
              :return-value.sync="form.experience_company_period_to_3"
              persistent
              width="290px"
            >
              <template v-slot:activator="{ on }">
                <v-text-field
                  v-model="date_6"
                  label="ถึง เดือน/ปี (To month/year)"
                  placeholder=" "
                  prepend-icon="mdi-calendar-blank"
                  readonly
                  v-on="on"
                ></v-text-field>
              </template>
              <v-date-picker
                v-model="form.experience_company_period_to_3"
                type="month"
                scrollable
              >
                <v-spacer></v-spacer>
                <v-btn text color="primary" @click="modal_period6 = false"
                  >Cancel</v-btn
                >
                <v-btn
                  text
                  color="primary"
                  @click="$refs.ning.save(form.experience_company_period_to_3)"
                  >OK</v-btn
                >
              </v-date-picker>
            </v-dialog>
          </v-col>
          <v-col cols="2" md="2">
            <v-text-field
              :rules="rules.morethenz"
              v-model="comp_inc3"
              readonly
              label="รวม/To include"
              placeholder=" "
            ></v-text-field>
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
          <v-col cols="3" md="3">
            <v-text-field
              v-model="form.experience_position_3"
              label="Last Position"
              placeholder=" "
            ></v-text-field>
          </v-col>
          <v-subheader>
            <p class="font-weight-black">
              เงินเดือน
              <br />Salary
            </p>
          </v-subheader>
          <v-col cols="2" md="2">
            <v-text-field
              v-model="form.experience_salary_3"
              label="ค่าจ้าง/เงินเดือน (Wage/salary) "
              placeholder=" "
            ></v-text-field>
          </v-col>
          <v-col cols="2" md="2">
            <v-text-field
              v-model="form.experience_resign_note_3"
              label="  สาเหตุที่ลาออก/Reason for Leaving"
              placeholder=" "
            ></v-text-field>
          </v-col>
        </v-row>
      </div>
      <br />
      <br />
      <v-row>
        <v-spacer />
        <v-spacer />
        <v-list-item-content>
          <v-col cols="10">
            <v-subheader>
              <p class="font-weight-black">
                <br />
                ข้าพเจ้าขอรับรองว่าข้อความทั้งหมด
                <br />ในเอกสารเป็นความจริงทุกประการ <br />I certify that all
                statements in the application are true.
              </p>
            </v-subheader>
          </v-col>
        </v-list-item-content>
      </v-row>
      <br />

      <v-row>
        <v-spacer />
        <v-col cols="12" sm="6" md="4">
          <v-subheader>
            <p class="font-weight-black">
              ลงชื่อผู้ให้ข้อมูล
              <br />Applicant's Informant *
            </p>
          </v-subheader>
          <v-text-field
            v-model="form.signature"
            :rules="rules.req"
            label="Applicant's Informant"
            placeholder=" "
          ></v-text-field>
        </v-col>
      </v-row>
      <!-- </v-form> -->
      <v-row>
        <v-spacer />
        <v-col cols="2">
          <!-- <v-btn color="warning" v-if="!valid" @click="validate"
            >Validate</v-btn
          > -->
          <div v-if="!isViewer">
            <v-btn color="success" v-if="!isData" @click="save">Save</v-btn>
            <v-btn color="success" v-else @click="saveChang">Save change</v-btn>
          </div>
        </v-col>
      </v-row>
    </v-container>
  </v-card>
</template>
<script>
import PictureInput from "vue-picture-input";
var moment = require("moment");
import axios from "axios";

export default {
  props: ["data", "rules"],
  components: {
    PictureInput,
  },
  data() {
    return {
      form: {
        cid: "",
        company_name: "",
        company_house_number: "",
        company_building: "",
        company_alley: "",
        company_street: "",
        company_district: "",
        company_aumphur: "",
        company_province: "",
        company_country: "ประเทศไทย",
        company_postcode: "",
        company_telephone: "",
        company_allowance: "",
        company_location: "",
        not_recom_room: "",
        recom_flat_house_number: "",
        recom_flat_building: "",
        recom_flat_alley: "",
        recom_flat_street: "",
        recom_flat_district: "",
        recom_flat_aumphur: "",
        recom_flat_province: "",
        recom_flat_country: "",
        recom_flat_postaicode: "",
        recom_flat_telephone: "",
        informant_pname: "",
        informant_fname: "",
        informant_lname: "",
        informant_nickname: "",
        informant_tel: "",
        informant_email: "",
        informant_lineid: "",
        not_experience: "",
        experience_company: "",
        experience_company_period_from: "",
        experience_company_period_to: "",
        experience_company_period_total: "",
        experience_position: "",
        experience_salary: "",
        experience_resign_note: "",
        experience_company_2: "",
        experience_company_period_from_2: "",
        experience_company_period_to_2: "",
        experience_company_period_total_2: "",
        experience_position_2: "",
        experience_salary_2: "",
        experience_resign_note_2: "",
        experience_company_3: "",
        experience_company_period_from_3: "",
        experience_company_period_to_3: "",
        experience_company_period_total_3: "",
        experience_position_3: "",
        experience_salary_3: "",
        experience_resign_note_3: "",
        signature: "",
      },
      isData: false,
      modal_period: false,
      date: new Date().toISOString().substr(0, 7),
      modal_period2: false,
      modal_period3: false,
      modal_period4: false,
      modal_period5: false,
      modal_period6: false,
      Brith_Date_Model: false,
      thisdate: new Date().toISOString().substr(0, 10),
      valid: false,
      // edu
      lists: [
        {
          id: 1,
          name: "edu",
          data: ["ม.ปลาย", "ปวช.", "ปวส.", "ปริญญาตรี", "ปริญญาโท", "อื่น ๆ"],
        },
        { id: 2, name: "gfb", data: ["ดี/Good", "พอใช้/Ok", "ไม่ดี/Not Good"] },
        { id: 3, name: "other", data: ["ปริญญาโท", "ปริญญาเอก", "อื่น ๆ"] },
      ],
      //
      menu3: false,
      center: { lat: 45.508, lng: -73.587 },
      markers: [],
      places: [],
      currentPlace: null,
      isViewer: false,
    };
  },
  mounted() {
    let isIdUpdate = localStorage.getItem("isAdminUpdate");
    let isViewer = localStorage.getItem("isViewer");
    if (isIdUpdate) {
      if (isViewer) {
        this.isViewer = true;
      } else {
        localStorage.removeItem("isViewer");
        this.isViewer = false;
      }
      this.loadData(isIdUpdate);
    }
    this.geolocate();
  },
  methods: {
    validate() {
      this.$refs.form.validate();
    },
    loadData(cid) {
      let baseUrl = process.env.VUE_APP_DATA;
      axios
        .get(`${baseUrl}/getGraduateDataByCID/${cid}`)
        .then((resp) => {
          let data = resp.data.data;
          if (data.length > 0) {
            this.isData = true;
            this.form.cid = data[0].cid;
            this.form.company_name = data[0].company_name;
            this.form.company_house_number = data[0].company_house_number;
            this.form.company_building = data[0].company_building;
            this.form.company_alley = data[0].company_alley;
            this.form.company_street = data[0].company_street;
            this.form.company_district = data[0].company_district;
            this.form.company_aumphur = data[0].company_aumphur;
            this.form.company_province = data[0].company_province;
            this.form.company_country = data[0].company_country;
            this.form.company_postcode = data[0].company_postcode;
            this.form.company_telephone = data[0].company_telephone;
            this.form.company_allowance = data[0].company_allowance;
            this.form.not_recom_room = data[0].not_recom_room;
            this.form.recom_flat_house_number = data[0].recom_flat_house_number;
            this.form.recom_flat_building = data[0].recom_flat_building;
            this.form.recom_flat_alley = data[0].recom_flat_alley;
            this.form.recom_flat_street = data[0].recom_flat_street;
            this.form.recom_flat_district = data[0].recom_flat_district;
            this.form.recom_flat_aumphur = data[0].recom_flat_aumphur;
            this.form.recom_flat_province = data[0].recom_flat_province;
            this.form.recom_flat_country = data[0].recom_flat_country;
            this.form.recom_flat_postaicode = data[0].recom_flat_postaicode;
            this.form.recom_flat_telephone = data[0].recom_flat_telephone;
            this.form.informant_pname = data[0].informant_pname;
            this.form.informant_fname = data[0].informant_fname;
            this.form.informant_lname = data[0].informant_lname;
            this.form.informant_nickname = data[0].informant_nickname;
            this.form.informant_tel = data[0].informant_tel;
            this.form.informant_email = data[0].informant_email;
            this.form.informant_lineid = data[0].informant_lineid;
            this.form.not_experience = data[0].not_experience;
            this.form.experience_company = data[0].experience_company;
            this.form.experience_company_period_from =
              data[0].experience_company_period_from;
            this.form.experience_company_period_to =
              data[0].experience_company_period_to;
            this.form.experience_company_period_total =
              data[0].experience_company_period_total;
            this.form.experience_position = data[0].experience_position;
            this.form.experience_salary = data[0].experience_salary;
            this.form.experience_resign_note = data[0].experience_resign_note;
            this.form.experience_company_2 = data[0].experience_company_2;
            this.form.experience_company_period_from_2 =
              data[0].experience_company_period_from_2;
            this.form.experience_company_period_to_2 =
              data[0].experience_company_period_to_2;
            this.form.experience_company_period_total_2 =
              data[0].experience_company_period_total_2;
            this.form.experience_position_2 = data[0].experience_position_2;
            this.form.experience_salary_2 = data[0].experience_salary_2;
            this.form.experience_resign_note_2 =
              data[0].experience_resign_note_2;
            this.form.experience_company_3 = data[0].experience_company_3;
            this.form.experience_company_period_from_3 =
              data[0].experience_company_period_from_3;
            this.form.experience_company_period_to_3 =
              data[0].experience_company_period_to_3;
            this.form.experience_company_period_total_3 =
              data[0].experience_company_period_total_3;
            this.form.experience_position_3 = data[0].experience_position_3;
            this.form.experience_salary_3 = data[0].experience_salary_3;
            this.form.experience_resign_note_3 =
              data[0].experience_resign_note_3;
            this.form.signature = data[0].signature;

            this.form.company_location = data[0].company_location;
            this.markers.push({
              position: JSON.parse(data[0].company_location),
            });
            this.places.push(this.currentPlace);
            this.center = JSON.parse(data[0].company_location);
            this.currentPlace = null;
          }
        })
        .catch((error) => console.log("Error :", error));
    },
    saveChang() {
      let baseUrl = process.env.VUE_APP_DATA;
      let formData = this.form;
      axios
        .post(`${baseUrl}/saveDataChange`, {
          register: formData,
        })
        .then((res) => {
          let data = res.data;
          if (data.status_code === 200) {
            this.$swal({
              title: "บันทึกการเปลี่ยนแปลงข้อมูลแล้ว",
              text: "ข้อมูลของท่านจะเป็นประโยชน์ต่อน้องๆรุ่นถัดไป",
              type: "success",
              showCancelButton: false,
              confirmButtonText: "OK",
              showCloseButton: true,
            }).then((result) => {
              if (result.value) {
                let id = data.id;
                this.loadData(id);
              }
            });
          } else {
            this.$swal("เกิดข้อผิดพลาด", data.msg, data.type);
          }
        })
        .catch((error) => {
          this.$swal("เกิดข้อผิดพลาด", "Error" + error, "error");
        });
    },
    save() {
      if (this.form.cid === "" || this.form.company_name === "") {
        this.$swal("แจ้งเตือน", "กรุณากรอกข้อมูลให้ครบ", "warning");
      } else {
        let baseUrl = process.env.VUE_APP_DATA;
        let formData = this.form;
        axios
          .post(`${baseUrl}/saveData`, {
            register: formData,
          })
          .then((res) => {
            let data = res.data;
            if (data.status_code === 200) {
              this.$swal({
                title: "บันทึกข้อมูลเรียบร้อย",
                text: "ข้อมูลของท่านจะเป็นประโยชน์ต่อน้องๆรุ่นถัดไป",
                type: "success",
                showCancelButton: false,
                confirmButtonText: "OK",
                showCloseButton: true,
              }).then((result) => {
                if (result.value) {
                  let id = data.id;
                  this.loadData(id);
                }
              });
            } else {
              this.$swal("เกิดข้อผิดพลาด", data.msg, data.type);
            }
          })
          .catch((error) => {
            this.$swal("เกิดข้อผิดพลาด", "Error" + error, "error");
          });
      }
    },
    setPlace(place) {
      this.currentPlace = place;
    },
    addMarker() {
      if (this.currentPlace) {
        const marker = {
          lat: this.currentPlace.geometry.location.lat(),
          lng: this.currentPlace.geometry.location.lng(),
        };
        this.form.company_location = JSON.stringify(marker);
        this.markers.push({ position: marker });
        this.places.push(this.currentPlace);
        this.center = marker;
        this.currentPlace = null;
      }
    },
    geolocate: function () {
      navigator.geolocation.getCurrentPosition((position) => {
        this.center = {
          lat: position.coords.latitude,
          lng: position.coords.longitude,
        };
      });
    },
  },
  computed: {
    tdate3_format: function () {
      if (!this.data.date3) this.data.date3 = this.thisdate;
      return moment(this.data.date3).format("D MMM YYYY");
    },
    tbd_format: function () {
      if (this.data.brithdate)
        return moment(this.data.brithdate).format("D MMM YYYY");
    },
    date_1: function () {
      if (this.form.experience_company_period_from)
        return moment(this.form.experience_company_period_from).format(
          " MMM YYYY"
        );
    },
    date_2: function () {
      if (this.form.experience_company_period_to)
        return moment(this.form.experience_company_period_to).format(
          " MMM YYYY"
        );
    },
    date_3: function () {
      if (this.form.experience_company_period_from_2)
        return moment(this.form.experience_company_period_from_2).format(
          " MMM YYYY"
        );
    },
    date_4: function () {
      if (this.form.experience_company_period_to_2)
        return moment(this.form.experience_company_period_to_2).format(
          " MMM YYYY"
        );
    },
    date_5: function () {
      if (this.form.experience_company_period_from_3)
        return moment(this.form.experience_company_period_from_3).format(
          " MMM YYYY"
        );
    },
    date_6: function () {
      if (this.form.experience_company_period_to_3)
        return moment(this.form.experience_company_period_to_3).format(
          " MMM YYYY"
        );
    },

    comp_age: function () {
      let yy = moment().diff(this.data.brithdate, "years", false);
      let mo = moment().diff(this.data.brithdate, "months", false);
      let xx = mo - yy * 12;
      this.data.age = yy;
      return yy + "ปี(" + xx + "ด.)";
    },

    comp_inc1: function () {
      let xdate = moment();
      if (this.form.experience_company_period_to) {
        xdate = moment(this.form.experience_company_period_to, "YYYY-MM");
      }
      let mo = xdate.diff(
        this.form.experience_company_period_from,
        "months",
        false
      );
      this.form.experience_company_period_total =
        Math.floor(mo / 12) + " ปี(" + (mo % 12) + "ด.)";
      return Number.isNaN(mo)
        ? ""
        : Math.floor(mo / 12) + " ปี(" + (mo % 12) + "ด.)";
    },
    comp_inc2: function () {
      let xdate = moment();
      if (this.form.experience_company_period_to_2) {
        xdate = moment(this.form.experience_company_period_to_2, "YYYY-MM");
      }

      let mo = xdate.diff(
        this.form.experience_company_period_from_2,
        "months",
        false
      );
      this.form.experience_company_period_total_2 =
        Math.floor(mo / 12) + " ปี(" + (mo % 12) + "ด.)";
      return Number.isNaN(mo)
        ? ""
        : Math.floor(mo / 12) + " ปี(" + (mo % 12) + "ด.)";
    },
    comp_inc3: function () {
      let xdate = moment();
      if (this.form.experience_company_period_to_3) {
        xdate = moment(this.form.experience_company_period_to_3, "YYYY-MM");
      }
      let mo = xdate.diff(
        this.form.experience_company_period_from_3,
        "months",
        false
      );
      this.form.experience_company_period_total_3 =
        Math.floor(mo / 12) + " ปี(" + (mo % 12) + "ด.)";
      return Number.isNaN(mo)
        ? ""
        : Math.floor(mo / 12) + " ปี(" + (mo % 12) + "ด.)";
    },
  },
};
</script>

