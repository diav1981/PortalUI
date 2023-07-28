export default {
    data() {        
        return {
            apiBaseUrl: 'http://gedv-rtpsfc.gazpromuk.intra:19081/DV_FlexPortalApi/flexportal_api/',
            endpoints: {
                Source: 'Source',
                ChargeRates: 'ChargeRates',
                ChargeRatesDelete: 'ChargeRates/Delete',
                ChargeRatesByRateId: 'ChargeRates/ByRateId'
            },
        };
    },
    computed:{
        sourceApiUrl() {
            return this.apiBaseUrl + this.endpoints.Source;
          },   
          ChargeRateseApiUrl() {
            return this.apiBaseUrl + this.endpoints.ChargeRates;
          },   
          ChargeRateseApiDeleteUrl() {
            return this.apiBaseUrl + this.endpoints.ChargeRatesDelete;
          },   
          ChargeRateseApiByRateIdUrl() {
            return this.apiBaseUrl + this.endpoints.ChargeRatesByRateId;
          },   

      }, 
    }
