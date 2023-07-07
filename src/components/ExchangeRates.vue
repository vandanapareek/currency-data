<template>
    <div>
        <div class="filter-heading"><h3>{{ heading }}:</h3></div>
        <div v-if="isLoading">
            <img id="loading-image" src="../assets/loading-gif.gif" alt="Loading..." />
        </div>
        <div v-else-if="isApiError">
            <p class="error">Something went wrong! <br/> {{ isApiError }}</p>
        </div>
        <div v-else class="card-container">
            <ul class="class-list">
                <li class="card" v-for="(data, index) in exchangeRates" :key="index" :class="'card color' + (index % 6 + 1)">
                    <div class="card__flipper">
                    <div class="card__front">
                        <p class="card__name">{{data.curr}}<br><br><span>{{data.rate }}</span></p>
                        </div>
                    </div>
                </li>
            </ul>
        </div>
    </div>
</template>


<script>
import axios from 'axios';

export default{
    props: {
        selectedDate: String
    },
    data() {
        return {
            exchangeRates:null,
            isLoading:false,
            isApiError:null
        }
    },
    watch:{
        selectedDate(){
            this.getExchangeRates();
        }
    },
    computed:{
        heading() {
            return this.selectedDate ? "Rates as of "+this.selectedDate : "Latest Exchange Rates";
        }
    },
    methods:{
        async getExchangeRates() {
            const url = this.selectedDate ? "/historical":"/live";
            const params = this.selectedDate ? {date: this.selectedDate} :{};
            this.isLoading = true;
            this.error=null;

            try{
                const resp  = await axios.get(url,{
                    params
                });
//                 const resp = {
//     "success": false,
//     "error": {
//         "code": 302,
//         "info": "You have entered an invalid date. [Required format: date=YYYY-MM-DD]"
//     }
// }
                if(!resp.data.success) {
                    this.isApiError = resp.data.error.info;
                } else {
                    this.exchangeRates = Object.entries(resp.data.quotes).map(([curr,rate])=>({
                        curr: curr.substring(3),
                        rate,
                    }));
                }
            } catch(error) {
                this.isApiError = error.message;
                console.log("API error: "+this.isApiError)
            } finally {
                this.isLoading = false;
            }
        },
    },
    mounted() {
        this.getExchangeRates();
    }
}
</script>

<style lang="scss">
@import "@/styles/ExchangeRates.scss";
</style>