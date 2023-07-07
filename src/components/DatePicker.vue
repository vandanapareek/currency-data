<template>
    <div>
        <input class="picker" type="date" id="datepicker" v-model="date" @change="updateDate" :max="maxDate">
        <p v-if="invalidDate">Please select valid date (YYYY-MM-DD).</p>
    </div>
</template>

<script>
export default {
    data(){
        return {
            date:new Date().toISOString().substring(0, 10),
            invalidDate:false,
            maxDate:null
        }
    },
    mounted() {
        const currDate = new Date();
        this.maxDate = currDate.toISOString().split('T')[0];
    },
    methods:{
        updateDate(){
            const dateFormat = /^\d{4}-\d{2}-\d{2}$/;
            if(!dateFormat.test(this.date)){
                this.invalidDate = true;
                return;
            }
            this.invalidDate = false;
            this.$emit("selected-date",this.date);
        },
    }
}
</script>
<style lang="scss">
@import "@/styles/DatePicker.scss";
</style>