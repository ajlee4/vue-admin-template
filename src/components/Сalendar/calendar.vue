<template>
  <div class="calendar_wrap">
    <h1>{{fastEdit?'Режим Быстрого редактирования':'Календарь записей'}}</h1>

    <div class="hdr_row">
      <slot name="hdrExtend"></slot>

      <el-date-picker
        v-model="selectDate"
        :picker-options="pickerOptions"
        type="date"
        :clearable="false"
        @change="handleChangeDate"
        placeholder="Pick a day"
        class="mb_20"
        style="margin-right: 30px;"
      />
    </div>

    <div class="table_wrap" >
      <!--th-->
      <div class="table_row thead">
        <div class="table_cell">
          <svg
            class="icon"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            x="0px"
            y="0px"
            viewBox="0 0 97.16 97.16"
            style="enable-background:new 0 0 97.16 97.16;"
            xml:space="preserve"
          >
            <g>
              <g>
                <path
                  d="M48.58,0C21.793,0,0,21.793,0,48.58s21.793,48.58,48.58,48.58s48.58-21.793,48.58-48.58S75.367,0,48.58,0z M48.58,86.823
                c-21.087,0-38.244-17.155-38.244-38.243S27.493,10.337,48.58,10.337S86.824,27.492,86.824,48.58S69.667,86.823,48.58,86.823z"
                />
                <path
                  d="M73.898,47.08H52.066V20.83c0-2.209-1.791-4-4-4c-2.209,0-4,1.791-4,4v30.25c0,2.209,1.791,4,4,4h25.832
                c2.209,0,4-1.791,4-4S76.107,47.08,73.898,47.08z"
                />
              </g>
            </g>
          </svg>
        </div>
        <div v-for="day in currentWeek.days" :key="day" class="table_cell">{{ day }}</div>
      </div>
      <!-- //th-->

      <!--tr-->
      <div v-for="(hour,idx) in hours"  :key="idx"  class="table_row">
        <div class="table_cell titles">{{ hour }}</div>

        <div v-for="(day, idx) in currentWeek.daysKeys" :key="idx" class="table_cell">
          <slot name="cellContent" :day="day" :hour="formatedHour(hour)"></slot>
        </div>
      </div>
      <!-- //tr-->
    </div>
  </div>
</template>

<script>
export default {
  props: {
    hours: {
      type: Array,
   
    },
    fastEdit:{
      type:Boolean,
    }
  },
  data() {
    return {
      selectDate: this.$moment(),
      pickerOptions: {
        disabledDate(time) {
          if (time.getDay() > 5 || time.getDay() == 0) return time;
        },
        firstDayOfWeek: 1
      }
    };
  },
  computed: {
    currentWeek() {
      if (!this.selectDate) return null;

      var startOfWeek = this.$moment(this.selectDate).startOf("isoWeek");
      var endOfWeek = this.$moment(this.selectDate)
        .endOf("isoWeek")
        .day(-2);

      var resultObj = {};
      var daysKeys = [];
      var days = [];
      var day = startOfWeek;

      while (day <= endOfWeek) {
        days.push(
          `${day.format("dd")}, ${day.format("DD")} ${day.format("MMM")}`
        );
        daysKeys.push(day.format("YYYY-MM-DD"));

        day = day.clone().add(1, "d");
      }
      resultObj.days = days;
      resultObj.daysKeys = daysKeys;

      return resultObj;
    }
  },
  methods: {
    handleChangeDate($event) {
      this.$emit('calendarDateChange',$event)
    },
    formatedHour($hour) {
      $hour += ""; //to string
      return $hour.length === 1 ? "0" + $hour : $hour;
    }
  }
};
</script>

<style lang="scss" scoped>
* {
  box-sizing: border-box;
}
$pad: 30px;
%transition {
  transition: all 0.6s;
}

.mb_20 {
  margin-bottom: 20px;
}

.calendar_wrap {
  padding: $pad;
  width: 100%;
  max-width: 1170px;
}

.table_wrap {
  display: flex;
  flex-direction: column;
  width: 100%;
}

.table_row {
  display: flex;
  align-items: center;
  border-bottom: 1px solid #dedede;

  @extend %transition;

  &:hover {
    background: rgba(219, 227, 235, 0.52);
  }

  &.thead {
    height: 46px;
    background: #dbe3eb;
    color: #3c3d41;
    border-bottom: none;
  }
}

.table_cell {
  font-size: 12px;
  line-height: 1.5;
  font-weight: 800;
  text-transform: uppercase;

  padding: 15px 10px;
  flex: 1;
  text-align: center;

  display: inline-flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  &.titles {
    font-size: 120%;
  }
}

.icon {
  height: 20px;
  width: 20px;
}
.hdr_row {
  display: flex;
  align-items: center;
}
</style>