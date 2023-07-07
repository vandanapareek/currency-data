<template>
  <HeaderComp/>
  <div class="container">
    <div class="container-filter">
      <date-picker @selected-date="onDateSelection"></date-picker>
    </div>
    <exchange-rates :selected-date="selectedDate"></exchange-rates>
  </div>
</template>

<script>
import HeaderComp from './components/HeaderComp.vue'
import DatePicker from './components/DatePicker.vue'
import ExchangeRates from './components/ExchangeRates.vue'

export default {
  name: 'App',
  components: {
    HeaderComp,
    DatePicker,
    ExchangeRates
  },
  data() {
    return {
      selectedDate:''
    }
  },
  methods: {
    onDateSelection(date) {
      this.selectedDate = date;
    }
  }
}
</script>
<style lang="scss">
@import "@/styles/Common.scss";
</style>
