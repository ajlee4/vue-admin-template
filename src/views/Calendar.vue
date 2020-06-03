<template>
  <div class="app_wrapper" v-loading="listLoading">
    <calendar
      :hours="hours"
      :disableSelect="!office"
      @dateSet="handeDataSet"
      @calendarDateChange="handeDataSet"
    >
      <template v-slot:hdrExtend>
        <div style="position: relative;">
          <transition name="fade" mode="in-out">
            <!-- <div
              v-show="showTooltip"
              class="tooltip"
              @click="showTooltip = false"
            >Для начала работы выберите офис &#8681;</div>-->
          </transition>

          <el-select
            v-model="categories_id"
            placeholder="Выберите категорию"
            @change="handleChangeCategory"
            @focus="showTooltip = false"
            class="mb_20"
            style="margin-right: 30px;"
          >
            <el-option
              v-for="item in categories"
              :key="item.id"
              :label="item.name"
              :value="item.id"
            ></el-option>
          </el-select>

          <el-select
            :disabled="showModal || !categories_id "
            v-model="office"
            placeholder="Выберите офис"
            @change="handleChangePlace"
            @focus="showTooltip = false"
            class="mb_20"
            style="margin-right: 30px;"
          >
            <el-option
              v-for="item in placesList"
              :key="item.id"
              :label="item.address"
              :value="item.id"
            ></el-option>
          </el-select>
        </div>

        <button
          class="btn_textstyle editrecord ml-auto"
          @click="downloadModal.visible = true"
          style="margin-right: 10px;"
        >Скачать анкеты</button>

        <button class="btn_textstyle editrecord" @click="createRecordModal.visible = true">
          <svg
            width="20"
            height="20"
            aria-hidden="true"
            focusable="false"
            data-icon="pencil-alt"
            role="img"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
          >
            <path
              fill="currentColor"
              d="M497.9 142.1l-46.1 46.1c-4.7 4.7-12.3 4.7-17 0l-111-111c-4.7-4.7-4.7-12.3 0-17l46.1-46.1c18.7-18.7 49.1-18.7 67.9 0l60.1 60.1c18.8 18.7 18.8 49.1 0 67.9zM284.2 99.8L21.6 362.4.4 483.9c-2.9 16.4 11.4 30.6 27.8 27.8l121.5-21.3 262.6-262.6c4.7-4.7 4.7-12.3 0-17l-111-111c-4.8-4.7-12.4-4.7-17.1 0zM124.1 339.9c-5.5-5.5-5.5-14.3 0-19.8l154-154c5.5-5.5 14.3-5.5 19.8 0s5.5 14.3 0 19.8l-154 154c-5.5 5.5-14.3 5.5-19.8 0zM88 424h48v36.3l-64.5 11.3-31.1-31.1L51.7 376H88v48z"
            />
          </svg>
          <span>Редактировать</span>
        </button>
        <button class="btn_textstyle editrecord" @click="fastEdit=!fastEdit">
          <span style="font-size:12px">{{fastEdit? 'Отменить':'Быстрое редактирование'}}</span>
        </button>
      </template>

      <template v-if="activeOffice" v-slot:cellContent="slotProps">
        <!--{{ slotProps.day }}, {{ slotProps.hour }}-->
        <!-- 
        !depsByKey[slotProps.day+slotProps.hour+':'+minute+':00'+office]-->
        <div class="calendar_btn_wrap">
          <button
            v-for="minute in minutes"
            :key="minute"
            class="calendar_btn"
            :class="{disabled: !recordCountByDay[slotProps.day + '_' + slotProps.hour + ':' + minute + ':00'] && !recordByDay[slotProps.day + '_' + slotProps.hour + ':' + minute + ':00'],
              bold:recordByDay[slotProps.day + '_' + slotProps.hour + ':' + minute + ':00']
            
            }"
            @click="!fastEdit && initModal(slotProps.day, slotProps.hour, minute); setActiveModalTime(slotProps.day, slotProps.hour, minute)"
          >
            <span
              v-if="recordCountByDay && recordCountByDay[slotProps.day+'_'+slotProps.hour+':'+minute+':00'] && !fastEdit"
              class="counter"
              :class="{warn: recordCountByDay[slotProps.day+'_'+slotProps.hour+':'+minute+':00'] >=  recordMaxCountByDay[slotProps.day + '_' + slotProps.hour + ':' + minute + ':00']}"
            >{{ recordCountByDay[slotProps.day + '_' + slotProps.hour + ':' + minute + ':00'] }}</span>
            <span
              class="counter warn"
              @click="fastDelete(recordById[slotProps.day + '_' + slotProps.hour + ':' + minute + ':00'])"
              v-if="fastEdit && recordByDay[slotProps.day + '_' + slotProps.hour + ':' + minute + ':00'] && !recordCountByDay[slotProps.day+'_'+slotProps.hour+':'+minute+':00'] "
            >&#215;</span>
            <span class="val">{{ minute }}</span>
          </button>
        </div>
      </template>
    </calendar>

    <modal
      :show="showModal"
      :data="modalData"
      :office="rec_deps"
      @close="showModal=false"
      @editRecord="handleRecordEdit"
      @makeRecord="handleShowRegModal"
    >
      <template v-if="activeOffice" v-slot:titleExtend>/ {{ activeOffice.address }}</template>
    </modal>

    <reg-modal
      :isVisible="showRegModal"
      :addFields="regAdditionalFields"
      :fieldsData="editedRecord"
      @close="showRegModal=false;"
      @submit="regModalSubmit"
    >
      <template v-slot:formExtend="slotData">
        <h2 class="tac">Собеседование</h2>

        <div>
          <div class="input_wrap">
            <div class="input_50 mb_20">
              <div class="custom_title">Адрес записи</div>
              <el-select v-model="slotData.formData.office_id" style="width: 100%;">
                <el-option
                  v-for="item in placesList"
                  :key="item.id"
                  :label="item.address"
                  :value="item.id"
                ></el-option>
              </el-select>
            </div>

            <div class="input_50 mb_20"></div>

            <div class="input_50 mb_20">
              <div class="custom_title">Дата записи</div>
              <el-date-picker
                v-model="slotData.formData.interview_date"
                type="date"
                :clearable="false"
                style="width: 100%;"
                format="dd-MM-yyyy"
              />
            </div>

            <div class="input_50 mb_20 input_wrap" style="padding-top: 0;">
              <div class="input_50">
                <div class="custom_title">Часы</div>
                <el-select
                  v-model="hour"
                  style="width: 100%;"
                  :disabled="!slotData.formData.interview_date"
                >
                  <el-option v-for="item in hours" :key="item" :label="item" :value="item"></el-option>
                </el-select>
              </div>

              <div class="input_50">
                <div class="custom_title">Минуты</div>
                <el-select
                  v-model="minute"
                  style="width: 100%;"
                  :disabled="!slotData.formData.interview_date"
                >
                  <el-option v-for="item in minutes" :key="item" :label="item" :value="item"></el-option>
                </el-select>
              </div>
            </div>
          </div>

          <div v-if="slotData.formData.category_id == 4 || slotData.formData.category_id == 9">
            <h2 class="tac">Контакты одного из родителей</h2>

            <div class="input_wrap">
              <div v-for="input in regformAddInputs" :key="input.id" class="input_50 mb_20">
                <div class="custom_title">{{ input.title }}</div>
                <el-input ref="regInputValidateAdd" v-model="slotData.formData[input.name]"></el-input>
              </div>
            </div>
          </div>
        </div>
      </template>
    </reg-modal>
    <reg-modal
      :buttonLoading="buttonLoading"
      :isVisible="showRegModalAddRecords"
      @close="showRegModalAddRecords=false;"
      @submit="regModalAddRecordsSubmit"
    >
      <template v-slot:formExtend="slotData">
        <h2 class="tac">Собеседование</h2>

        <div>
          <div class="input_wrap">
            <div class="input_50 mb_20">
              <div class="custom_title">Адрес записи</div>
              <el-select
                v-model="regFormAddUserField.office_id"
                style="width: 100%;"
                :disabled="true"
              >
                <el-option
                  v-for="item in placesList"
                  :key="item.id"
                  :label="item.address"
                  :value="item.id"
                ></el-option>
              </el-select>
            </div>

            <div class="input_50 mb_20">
              <div class="custom_title">Дата записи</div>
              <el-date-picker
                v-model="regFormAddUserField.interview_date"
                type="date"
                :clearable="false"
                style="width: 100%;"
                format="dd-MM-yyyy"
                :disabled="true"
              />
            </div>
            <div class="input_50">
              <div class="custom_title">Категория</div>
              <el-select v-model="categories_id" style="width: 100%;" :disabled="true">
                <el-option
                  v-for="item in categories"
                  :key="item.id"
                  :label="item.name"
                  :value="item.id"
                ></el-option>
              </el-select>
            </div>

            <div class="input_50 mb_20 input_wrap" style="padding-top: 0;">
              <div class="input_50">
                <div class="custom_title">Часы</div>
                <el-select v-model="hour" style="width: 100%;" :disabled="true">
                  <el-option v-for="item in hours" :key="item" :label="item" :value="item"></el-option>
                </el-select>
              </div>

              <div class="input_50">
                <div class="custom_title">Минуты</div>
                <el-select v-model="minute" style="width: 100%;" :disabled="true">
                  <el-option v-for="item in minutes" :key="item" :label="item" :value="item"></el-option>
                </el-select>
              </div>
            </div>
          </div>
          <!-- <el-checkbox v-model="parentVisible">Контакты одного из родителей</el-checkbox> -->
          <div v-if="categories_id==4 || categories_id==9">
            <h2 class="tac">Контакты одного из родителей</h2>

            <div class="input_wrap">
              <div v-for="input in regformAddInputs" :key="input.id" class="input_50 mb_20">
                <div class="custom_title">{{ input.title }}</div>
                <el-input ref="regInputValidate" v-model="slotData.formData[input.name]"></el-input>
              </div>
            </div>
          </div>
        </div>
      </template>
    </reg-modal>

    <custom-modal
      :isVisible="createRecordModal.visible"
      :addFields="createRecordModal.data"
      title="Активация и деактивация возможности записи"
      @close="createRecordModal.visible=false"
      @submit="handleRecordSubmit"
    >
      <template v-slot:formExtend="scope">
        <div class="modal_tabs">
          <button
            class="tab_btn"
            :class="{active: createRecordModal.activeTab === tab.id}"
            v-for="tab in createRecordModal.tabs"
            :key="tab.id"
            @click="createRecordModal.activeTab = tab.id"
          >{{ tab.title }}</button>
        </div>

        <transition-group tag="div" name="fade" mode="out-in" class="transition_wrap">
          <div class="tab" v-if="createRecordModal.activeTab === 1" :key="1">
            <div class="input_wrap" style="margin-top: 30px;">
              <div class="w_100">
                <div class="custom_title">Место проведения собеседования</div>

                <el-select
                  required
                  v-model="scope.formData.office"
                  placeholder="Выберите офис"
                  @focus="showTooltip = false"
                  class="mb_20 w_100 activate-form-valid-elem"
                  ref="vaidateOffice"
                  :class="{invalid: !scope.formData.office}"
                >
                  <el-option
                    v-for="item in placesList"
                    :key="item.id"
                    :label="item.address"
                    :value="item.id"
                  ></el-option>
                </el-select>
              </div>
              <div class="w_100">
                <el-select
                  v-model="scope.formData.categories_id"
                  placeholder="Выберите категорию"
                  class="mb_20 w_100"
                  style="margin-right: 30px;"
                  :class="{invalid: !scope.formData.categories_id}"
                >
                  <el-option
                    v-for="item in categories"
                    :key="item.id"
                    :label="item.name"
                    :value="item.id"
                  ></el-option>
                </el-select>
              </div>
            </div>

            <div class="input_wrap dashed spaced mt_20">
              <div class="input_50">
                <div class="custom_title">Дата (с)</div>
                <el-date-picker
                  ref="validateDateFrom"
                  v-model="scope.formData.from.date"
                  :picker-options="pickerOptions"
                  type="date"
                  required
                  :clearable="false"
                  style="width: 100%; margin-bottom: 0; "
                  class="activate-form-valid-elem"
                  :class="{invalid: !scope.formData.from.date}"
                />
              </div>
              <div class="input_50">
                <div class="custom_title">Дата (до)</div>
                <el-date-picker
                  v-model="scope.formData.to.date"
                  type="date"
                  required
                  ref="validateDateTo"
                  :clearable="false"
                  style="width: 100%; margin-bottom: 0;"
                  class="input_50 activate-form-valid-elem"
                  :class="{invalid: !scope.formData.to.date}"
                  :picker-options="pickerOptions"
                />
              </div>
              <button
                class="slearfieldsBtn"
                @click="scope.formData.from.date=null;scope.formData.to.date=null"
              >&#215;</button>
            </div>

            <div class="input_wrap my_10">
              <el-checkbox v-model="scope.formData.allDay">Активировать на весь день</el-checkbox>
            </div>

            <transition name="fade">
              <div v-if="!scope.formData.allDay" class="input_wrap dashed spaced mt_20">
                <div>
                  <div class="input_50">
                    <div class="custom_title">Продолжительность собеседования (минуты)</div>
                    <el-select
                      required
                      v-model="interview_duration"
                      placeholder
                      class="activate-form-valid-elem"
                      @change="handleInterviewTime"
                    >
                      <el-option
                        v-for="item in interview_duration_minutes"
                        :key="item"
                        :label="item"
                        :value="item"
                      ></el-option>
                    </el-select>
                  </div>
                </div>
                <div class="input_wrap">
                  <div class="input_50 input_wrap">
                    <div class="input_50">
                      <div class="custom_title">Часы</div>
                      <el-select
                        required
                        v-model="scope.formData.from.hours"
                        placeholder
                        @focus="showTooltip = false"
                        ref="validateHoursFrom"
                        class="activate-form-valid-elem"
                        :class="{invalid: !scope.formData.from.hours}"
                      >
                        <el-option v-for="item in hours" :key="item" :label="item" :value="item"></el-option>
                      </el-select>
                    </div>
                    <div class="input_50">
                      <div class="custom_title">Минуты</div>
                      <el-select
                        required
                        v-model="scope.formData.from.minutes"
                        placeholder
                        ref="validateMinutesFrom"
                        @focus="showTooltip = false"
                        class="activate-form-valid-elem"
                        :class="{invalid: !scope.formData.from.minutes}"
                        :disabled="!interview_duration"
                      >
                        <el-option v-for="item in minutes" :key="item" :label="item" :value="item"></el-option>
                      </el-select>
                    </div>
                  </div>

                  <div class="input_50 input_wrap">
                    <div class="input_50">
                      <div class="custom_title">Часы</div>
                      <el-select
                        required
                        v-model="scope.formData.to.hours"
                        placeholder
                        @focus="showTooltip = false"
                        :class="{invalid: !scope.formData.to.hours}"
                      >
                        <el-option v-for="item in hours" :key="item" :label="item" :value="item"></el-option>
                      </el-select>
                    </div>
                    <div class="input_50">
                      <div class="custom_title">Минуты</div>
                      <el-select
                        required
                        v-model="scope.formData.to.minutes"
                        placeholder
                        @focus="showTooltip = false"
                        :class="{invalid: !scope.formData.to.minutes}"
                        :disabled="!interview_duration"
                      >
                        <el-option v-for="item in minutes" :key="item" :label="item" :value="item"></el-option>
                      </el-select>
                    </div>
                  </div>
                </div>

                <button
                  class="slearfieldsBtn"
                  @click="scope.formData.from.hours=null;scope.formData.to.hours=null;scope.formData.from.minutes=null;scope.formData.to.minutes=null;"
                >&#215;</button>
              </div>
            </transition>
            <div class="w_100">
              <div class="custom_title">Максимальное кол-во записей на одно время</div>
              <el-input
                v-model="scope.formData.maxRecordCount"
                required
                ref="validateMaxRecordCount"
                :class="{invalid: !scope.formData.maxRecordCount}"
              ></el-input>
            </div>
          </div>

          <div class="tab" v-if="createRecordModal.activeTab === 2" :key="2">
            <div class="input_wrap" style="margin-top: 30px;">
              <div class="w_100">
                <div class="custom_title">Место проведения собеседования</div>

                <el-select
                  required
                  v-model="scope.formData.office"
                  placeholder="Выберите офис"
                  @focus="showTooltip = false"
                  class="mb_20 w_100"
                  :class="{invalid: !scope.formData.office}"
                >
                  <el-option
                    v-for="item in placesList"
                    :key="item.id"
                    :label="item.address"
                    :value="item.id"
                  ></el-option>
                </el-select>
              </div>
                <div class="w_100">
                <el-select
                  v-model="scope.formData.categories_id"
                  placeholder="Выберите категорию"
                  class="mb_20 w_100"
                  style="margin-right: 30px;"
                  :class="{invalid: !scope.formData.categories_id}"
                >
                  <el-option
                    v-for="item in categories"
                    :key="item.id"
                    :label="item.name"
                    :value="item.id"
                  ></el-option>
                </el-select>
              </div>
            </div>

            <div class="input_wrap my_10">
              <el-checkbox
                v-model="scope.formData.allHours"
              >Деактивировать выбранный адрес на все время</el-checkbox>
            </div>

            <transition-group v-if="!scope.formData.allHours" tag="div" name="fade" mode="out-in">
              <div class="input_wrap dashed spaced mt_20" :key="2">
                <div class="input_50">
                  <div class="custom_title">Дата (с)</div>
                  <el-date-picker
                    v-model="scope.formData.from.date"
                    type="date"
                    required
                    :clearable="false"
                    :class="{invalid: !scope.formData.from.date}"
                    style="width: 100%; margin-bottom: 0;"
                    :picker-options="pickerOptions"
                  />
                </div>
                <div class="input_50">
                  <div class="custom_title">Дата (до)</div>
                  <el-date-picker
                    v-model="scope.formData.to.date"
                    type="date"
                    required
                    :clearable="false"
                    style="width: 100%; margin-bottom: 0;"
                    class="input_50"
                    :class="{invalid: !scope.formData.to.date}"
                    :picker-options="pickerOptions"
                  />
                </div>
                <button
                  class="slearfieldsBtn"
                  @click="scope.formData.from.date=null;scope.formData.to.date=null"
                >&#215;</button>
              </div>

              <!-- <div class="input_wrap my_10" :key="3">
                <el-checkbox v-model="scope.formData.allDay">Активировать на весь день</el-checkbox>
              </div>-->
            </transition-group>

            <transition name="fade">
              <div
                v-if="!scope.formData.allDay && !scope.formData.allHours"
                class="input_wrap dashed spaced mt_20"
              >
                <div class="input_wrap">
                  <div class="input_50 input_wrap">
                    <div class="input_50">
                      <div class="custom_title">Часы</div>
                      <el-select
                        required
                        v-model="scope.formData.from.hours"
                        placeholder
                        @focus="showTooltip = false"
                        :class="{invalid: !scope.formData.from.hours}"
                      >
                        <el-option v-for="item in hours" :key="item" :label="item" :value="item"></el-option>
                      </el-select>
                    </div>
                    <div class="input_50">
                      <div class="custom_title">Минуты</div>
                      <el-select
                        required
                        v-model="scope.formData.from.minutes"
                        placeholder
                        @focus="showTooltip = false"
                        :class="{invalid: !scope.formData.from.minutes}"
                      >
                        <el-option v-for="item in minutes" :key="item" :label="item" :value="item"></el-option>
                      </el-select>
                    </div>
                  </div>
                  <!-- <div class="w_100">
                    <div class="custom_title">Максимальное кол-во записей на одно время</div>
                    <el-input v-model="scope.formData.maxRecordCount" required :class="{invalid: !scope.formData.maxRecordCount}"></el-input>
                  </div>-->
                  <div class="input_50 input_wrap">
                    <div class="input_50">
                      <div class="custom_title">Часы</div>
                      <el-select
                        required
                        v-model="scope.formData.to.hours"
                        placeholder
                        @focus="showTooltip = false"
                        :class="{invalid: !scope.formData.to.hours}"
                      >
                        <el-option v-for="item in hours" :key="item" :label="item" :value="item"></el-option>
                      </el-select>
                    </div>
                    <div class="input_50">
                      <div class="custom_title">Минуты</div>
                      <el-select
                        required
                        v-model="scope.formData.to.minutes"
                        placeholder
                        @focus="showTooltip = false"
                        :class="{invalid: !scope.formData.to.minutes}"
                      >
                        <el-option v-for="item in minutes" :key="item" :label="item" :value="item"></el-option>
                      </el-select>
                    </div>
                  </div>
                </div>
                <button
                  class="slearfieldsBtn"
                  @click="scope.formData.from.hours=null;scope.formData.to.hours=null;scope.formData.from.minutes=null;scope.formData.to.minutes=null;"
                >&#215;</button>
              </div>
            </transition>
          </div>

          <!-- <div class="tab" v-if="createRecordModal.activeTab === 3" :key="3">
            <div class="input_wrap" style="margin-top: 30px;">
              <div class="w_100">
                <div class="custom_title">Место проведения собеседования</div>

                <el-select
                  required
                  v-model="scope.formData.office"
                  placeholder="Выберите офис"
                  @focus="showTooltip = false"
                  class="mb_20 w_100"
                >
                  <el-option
                    v-for="item in placesList"
                    :key="item.id"
                    :label="item.address"
                    :value="item.id"
                  ></el-option>
                </el-select>
              </div>
              <div class="w_100">
                <div class="custom_title">Максимальное кол-во записей на одно время</div>
                <el-input v-model="scope.formData.maxRecordCount" required></el-input>
              </div>
            </div>
          </div>-->
        </transition-group>
      </template>
    </custom-modal>

    <custom-modal
      :isVisible="downloadModal.visible"
      :addFields="downloadModal.data"
      title="Загрузка анкет"
      tubmitTxt="Сформировать архив"
      @close="downloadModal.visible=false"
      @submit="submitArchive"
    >
      <template v-slot:formExtend="scope">
        <div class="input_wrap">
          <div class="w_100">
            <div class="custom_title">Место проведения собеседования</div>

            <el-select
              required
              v-model="scope.formData.office"
              placeholder="Выберите офис"
              @focus="showTooltip = false"
              class="mb_20 w_100"
            >
              <el-option
                v-for="item in placesList"
                :key="item.id"
                :label="item.address"
                :value="item.id"
              ></el-option>
            </el-select>
          </div>
        </div>

        <div class="input_wrap dashed spaced mt_20">
          <div class="input_50">
            <div class="custom_title">Дата (с)</div>
            <el-date-picker
              v-model="scope.formData.from"
              type="date"
              required
              :clearable="false"
              style="width: 100%; margin-bottom: 0;"
            />
          </div>
          <div class="input_50">
            <div class="custom_title">Дата (до)</div>
            <el-date-picker
              v-model="scope.formData.to"
              type="date"
              required
              :clearable="false"
              style="width: 100%; margin-bottom: 0;"
              class="input_50"
            />
          </div>
          <button
            class="slearfieldsBtn"
            @click="scope.formData.from=null;scope.formData.to=null"
          >&#215;</button>
        </div>
      </template>
    </custom-modal>
  </div>
</template>

<script>
import calendar from "../components/Сalendar/calendar";
import modal from "../components/Modal/modal.vue";
import regModal from "../components/Modal/regModal.vue";
import customModal from "../components/Modal/customModal.vue";
import { editUserInfo,addRecord } from "@/api/calendar";
import {
  editRecord,
  disableRecord,
  getCategoryRecords,
  deleteRecord
} from "@/api/calendar";
import { Message } from "element-ui";
import axios from "axios";

export default {
  name: "app",
  components: {
    calendar,
    modal,
    regModal,
    customModal
  },

  data() {
    return {
      moduleData: this.$moment(),
      hour: "",
      minute: "",
      parentVisible: false,
      buttonLoading: false,
      hours: [
        "09",
        "10",
        "11",
        "12",
        "13",
        "14",
        "15",
        "16",
        "17",
        "18",
        "19",
        "20"
      ],
      dependencies_id:'',
      minutes: [
        "00",
        "05",
        "10",
        "15",
        "20",
        "25",
        "30",
        "35",
        "40",
        "45",
        "50",
        "55"
      ],
      showRegModalAddRecords: false,
      records: null,
      interview_duration_minutes: ["05", "10", "15", "20", "30"],
      interview_duration: "",
      modalData: [],
      categories: [],
      categories_id: "",
      showModal: false,
      placesList: null,
      record_categories_id: "",
      office: null,
      dependencies: [],
      showTooltip: false,
      showRegModal: false,
      depsByKey: {},
      editedRecord: {},
      listLoading: true,
      fastEdit: false,
      regformAddInputs: [
        {
          id: 1,
          name: "parent_name",
          title: "Имя"
        },
        {
          id: 2,
          name: "parent_surname",
          title: "Фамилия"
        },
        {
          id: 3,
          name: "parent_patronymic",
          title: "Отчество"
        },
        {
          id: 4,
          name: "parent_phone",
          title: "Телефон"
        }
      ],
      pickerOptions: {
        disabledDate(time) {
          if (time.getDay() > 5 || time.getDay() == 0) return time;
        },
        firstDayOfWeek: 1
      },
      regFormAddUserField: {
        office_id: null,
        name: null,
        surname: null,
        phone: null,
        email: null,
        interview_date: null,
        interview_hours: null, // model to time on submit
        interview_minutes: null,
        parent_name: null,
        parent_surname: null,
        parent_patronymic: null,
        parent_phone: null
      },
      regAdditionalFields: {
        office_id: null,
        interview_date: null,
        interview_hours: null, // model to time on submit
        interview_minutes: null, // model to time on submit
        parent_name: null,
        parent_surname: null,
        parent_patronymic: null,
        parent_phone: null
      },
      formValid: true,
      activeModalTime: {
        time: null,
        date: null
      },
      createRecordModal: {
        visible: false,
        valid: true,
        activeTab: 1,
        tabs: [
          {
            id: 1,
            title: "Активация"
          },
          {
            id: 2,
            title: "Деактивация"
          }
          // {
          //   id: 3,
          //   title: "Кол-во записей"
          // }
        ],
        data: {
          office: null,
          from: {
            date: null,
            hours: null,
            minutes: null
          },
          to: {
            date: null
          },
          allDay: false,
          allHours: false,
          maxRecordCount: null
        }
      },
      downloadModal: {
        visible: false,
        valid: true,
        data: {
          office: null,
          from: null,
          to: null
        }
      }
    };
  },
  watch: {
    dependencies: function() {
      this.dependencies.map(dep => {
        console.log(dep);
        let key = String(dep.record_date + dep.record_time + dep.office_id);
        this.depsByKey[key] = true;
      });
    }
  },
  computed: {
    rec_deps() {
      console.log(this.dependencies);
      if (!this.dependencies) return null;

      let result = this.dependencies.filter(item => {
        if (
          item.record_time == this.activeModalTime.time &&
          item.record_date == this.activeModalTime.date
        ) {
          return item;
        }
      });

      return result[0];
    },

    activeOffice() {
      if (!this.office || !this.placesList) return null;

      return this.placesList.filter(place => place.id === this.office)[0];
    },
    recordCountByDay() {
      if (!this.records) return null;

      let result = {};

      this.records.map(rec => {
        console.log(result);
        if (rec.office_id == this.office) {
          let key = rec.interview_date + "_" + rec.interview_time;

          if (!result[key]) {
            result[key] = 1;
          } else {
            result[key]++;
          }
        }
      });

      return result;
    },
    recordMaxCountByDay() {
      if (!this.records) return null;

      let result = {};

      this.dependencies.map(rec => {
        if (rec.office_id == this.office) {
          let key = rec.record_date + "_" + rec.record_time;
          result[key] = rec.records_count;
        }
      });

      return result;
    },

    recordByDay() {
      if (!this.records) return null;

      let result = {};

      this.dependencies.map(rec => {
        if (rec.office_id == this.office) {
          let key = rec.record_date + "_" + rec.record_time;
          result[key] = true;
        }
      });

      return result;
    },
        recordById() {
      if (!this.records) return null;

      let result = {};

      this.dependencies.map(rec => {
        if (rec.office_id == this.office) {
          let key = rec.record_date + "_" + rec.record_time;
          result[key] = rec.id;
        }
      });
console.log(result)
      return result;
    }
  },
  mounted() {
    this.getRecords();
    this.getPlaces();
    this.listLoading = false;
    setTimeout(() => {
      if (!this.office) this.showTooltip = true;
    }, 5000);
  },
  methods: {
    parseDate(val) {
      return this.$options.filters.parseTime(val, "{y}-{m}-{d}");
    },
    parseTime(hour, minutes) {
      let time = `${hour}:${minutes}:00`;
      this.formData.interview_time = time;
    },
    setActiveModalTime(day, hour, minute) {
      let time = `${hour}:${minute}:00`;
      console.log(day, time);

      this.activeModalTime.date = day;
      this.activeModalTime.time = time;
    },
    handeDataSet(event) {
      this.moduleData = event;
      let currentMonth = this.$moment(this.moduleData).format("MM");
      this.getRecDeps(this.office, currentMonth);
    },
    getRecDeps(officeID, currentMonth,categoryID) {
      //params: officeID, currentMonth

      axios
        .post("http://ih.yourstartup.by/api/records/all-records-deps", {
          office_id: officeID,
          record_date: currentMonth,
          subcategory_id:categoryID,
        })
        .then(response => {
          console.log("GET DEPS", response);
          this.dependencies = response.data;
          console.log(this.recordByDay);
        })

        .catch(error => {
          console.log("-----error-------");
          console.log(error);
        });
    },
    getPlaces() {
      axios
        .get("http://ih.yourstartup.by/api/records/all-offices")
        .then(response => {
          console.log("resp", response);
          this.placesList = response.data;
          console.log("GOt", this.placesList);
        })

        .catch(error => {
          console.log("-----error-------");
          console.log(error);
        });

      // setTimeout(()=> {this.placesList = fakeData}, 124)
    },
    getRecords() {
      axios
        .get("http://ih.yourstartup.by/api/records/all-records")
        .then(response => {
          console.log("resp", response);
          this.records = response.data;
          console.log("Got", this.records);
        })

        .catch(error => {
          console.log("-----error-------");
          console.log(error);
        });

      axios
        .get("http://ih.yourstartup.by/api/records/all-categories")
        .then(response => {
          this.categories = response.data;
          console.log(this.categories);
        })

        .catch(error => {
          console.log("-----error-------");
          console.log(error);
        });
      // //todo fetch
      // setTimeout(() => {
      //     this.records = fakeData
      // }, 132)
    },
    initModal(date, hour, minute) {
      let time = `${hour}:${minute}:00`;
      this.hour = hour;
      this.minute = minute;
      this.regFormAddUserField.interview_time = time;
      this.regFormAddUserField.interview_date = date;
      this.regFormAddUserField.office_id = this.office;
      this.dependencies_id = this.recordById[date + '_' + hour + ':' + minute + ':00']
      let result = this.records
        .filter(item => {
          return item.interview_date === date;
        })
        .filter(item => {
          return item.interview_time === time;
        });

      this.modalData = result;
      console.log(this.modalData);
      // show modal
      this.showModal = true;
    },
    handleChangePlace() {
      let currentMonth = this.$moment(this.moduleData).format("MM");
      (this.listLoading = true), this.getRecDeps(this.office, currentMonth,this.categories_id);
      this.listLoading = false;
    },
    handleChangeCategory() {
      let data = {
        category_id: this.categories_id
      };
      let currentMonth = this.$moment(this.moduleData).format("MM");
      this.getRecDeps(this.office, currentMonth,this.categories_id)
      getCategoryRecords(data).then(res => {
        console.log(res);
        this.records = res;
      });
    },
    handleShowRegModal() {
      this.showRegModalAddRecords = true;
      this.showModal = false;
    },
    handleRecordEdit($event) {
      this.formData = $event;

      this.editedRecord = $event;
      this.showRegModal = true;
      this.showModal = false;
    },
    fastDelete(id) {
      this.$confirm("Вы хотите удалить запись?", "Осторожно", {
        confirmButtonText: "OK",
        cancelButtonText: "Cancel",
        type: "warning"
      })
        .then(() => {
          console.log("delete");
          deleteRecord(id).then(() => {
            Message({
              message: "ресурс удален",
              type: "success",
              showClose: true
            });
            this.handleChangeCategory();
            this.handleChangePlace()
          });
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "Delete canceled",
            showClose: true
          });
        });
    },
    fastEditRecord() {
      alert("edit");
    },
    regModalSubmit($event) {
      let formData = $event;

      //   addRecord(formData).then(()=>{
      //         Message({
      //       message: "Запись создана",
      //       type: "success",
      //       showClose: true
      //     });
      //       this.showRegModal = false;
      //   })
      console.log(formData);

      this.parseTime(this.hour, this.minute);
      this.formValid = true;
      if (this.categories_id == 4 || this.categories_id == 9) {
        this.$refs.regInputValidateAdd.map(item => {
          item.$el.classList.remove("invalid");
          if (!item.value) {
            console.log("no-valid");
            item.$el.classList.add("invalid");
            this.formValid = false;
          }
        });
      }

      if (this.formValid) {
        editUserInfo(formData.id, formData).then(() => {
          Message({
            message: "Данные пользователя изменены",
            type: "success",
            showClose: true
          });
          this.showRegModal = false;
        });
      }
    },
    regModalAddRecordsSubmit($event) {
      let data = $event;
      data.interview_date = this.regFormAddUserField.interview_date;
      data.interview_time = this.regFormAddUserField.interview_time;
      data.office_id = this.regFormAddUserField.office_id;
      data.category_id = this.categories_id;
      data.dependence_id = this.dependencies_id
      this.formValid = true;

      if (this.categories_id == 4 || this.categories_id == 9) {
        this.$refs.regInputValidate.map(item => {
          item.$el.classList.remove("invalid");
          if (!item.value) {
            console.log("no-valid");
            item.$el.classList.add("invalid");
            this.formValid = false;
          }
        });
      }

      if (this.formValid) {
        this.buttonLoading = true;
        addRecord(data).then(() => {
          Message({
            message: "Запись создана",
            type: "success",
            showClose: true
          });
          //  this.getRecords()
          this.handleChangeCategory();
          this.showRegModalAddRecords = false;
          this.buttonLoading = false;
          $event.name = $event.surname = $event.phone = $event.email = $event.birth_date =
            "";
          $event.parent_name = $event.parent_surname = $event.parent_phone = "";
        });
      }
    },
    handleRecordSubmit($event) {
      let formData = $event;
      if (this.createRecordModal.valid) {
        // if valid - submit
        // check type of form:
        if (this.createRecordModal.activeTab == 1) {
          try {
            formData.from.date = this.parseDate(formData.from.date);
            formData.to.date = this.parseDate(formData.to.date);

            editRecord(formData).then(() => {
              this.createRecordModal.visible = false;

              this.$message({
                type: "success",
                message: "Запись активирована",
                showClose: true
              });
              formData.allDay = false;
              formData.allHours = false;
              formData.office = null;
              formData.maxRecordCount = null;
              formData.from.date = null;
              formData.from.hours = null;
              formData.from.minutes = null;
              formData.to.date = null;
              formData.to.hours = null;
              formData.to.minutes = null;
              formData.categories_id = null;
            });
          } catch {
            this.$message({
              type: "error",
              message: "Заполните поля",
              showClose: true
            });
          }
        } else if (this.createRecordModal.activeTab === 2) {
          // Деактивация
          //            todo request

          try {
            delete formData.maxRecordCount;
            formData.from.date = this.parseDate(formData.from.date);
            formData.to.date = this.parseDate(formData.to.date);
            disableRecord(formData).then(() => {
              this.createRecordModal.visible = false;
              this.$message({
                type: "success",
                message: "Запись деактивирована",
                showClose: true
              });
            });
          } catch {
            this.$message({
              type: "error",
              message: "Заполните поля",
              showClose: true
            });
          }
          console.log("Delete record", $event);
        } else if (this.createRecordModal.activeTab === 3) {
          // Кол-во записей
          //            todo request
          console.log("Set max record count", $event);
        } else {
          console.log(
            `%c data fail: this.createRecordModal.activeTab - no matched parameters. Check tab id's`,
            "background:red;color:#fff;"
          );
          return;
        }
      }
    },
    submitArchive($event) {
      //        todo validate
      if (this.downloadModal.valid) {
        //        todo request
        console.log("get records archive", $event);
      }
    },
    handleInterviewTime() {
      (this.minutes = [
        "00",
        "05",
        "10",
        "15",
        "20",
        "25",
        "30",
        "35",
        "40",
        "45",
        "50",
        "55"
      ]),
        (this.minutes = this.minutes.filter(item => {
          return parseInt(item) % parseInt(this.interview_duration) == 0;
        }));
    }
  }
};
</script>

<style lang="scss">
/*todo DEL*/
body {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /*text-align: center;*/
  /*color: #2c3e50;*/
  /*margin-top: 60px;*/
}
.modal_wrap {
  position: relative;
  z-index: 9999;
}
.bold {
  font-weight: bold;
}
.calendar_wrap {
  padding: 0 !important;
}
.invalid {
  border: 1px solid red;
}
</style>
