export default {
    data() {        
        return {
            apiBaseUrl: 'http://gedv-rtpsfc.gazpromuk.intra:19081/DV_FlexPortalApi/flexportal_api/',
            endpoints: {
                Sources: 'Source',
                ChargeRates: 'ChargeRates',
                ChargeRatesDelete: 'ChargeRates/Delete',
                ChargeRatesByRateId: 'ChargeRates/ByRateId',
                Baskets: 'Basket',
                Trades: 'Trade',
            },
        };
    },
    computed:{
        basketApiUrl() {
            return this.apiBaseUrl + this.endpoints.Baskets;
          },
        sourceApiUrl() {
            return this.apiBaseUrl + this.endpoints.Sources;
          },   
          ChargeRatesApiUrl() {
            return this.apiBaseUrl + this.endpoints.ChargeRates;
          },   
          ChargeRatesApiDeleteUrl() {
            return this.apiBaseUrl + this.endpoints.ChargeRatesDelete;
          },   
          ChargeRatesApiByRateIdUrl() {
            return this.apiBaseUrl + this.endpoints.ChargeRatesByRateId;
          },   
          TradeApiUrl() {
            return this.apiBaseUrl + this.endpoints.Trades;
          }, 
      }, 
    }
