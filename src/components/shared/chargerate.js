import axios from 'axios';
import base from './base/base-component.js'

export default {
    data() {        
        return {
            chargeData: null,
            uniqueChargeRateTypesArray: null,
            flattenedChargeData: null,
            chargeRateId: null,
            apiCallInProgress: false,
        };
    },
    computed:{
      isLoading(){
        return this.apiCallInProgress;
      },
      hasData() {
        return !!this.chargeData && !!this.chargeData.length > 0;
      }, 
  },  
  mixins: [base],   
  methods:{
    async setChargeRateId(id){
        this.chargeRateId = id;
        await this.fetchChargeData();
    },
    getUniqueChargeRateTypes() {
      const uniqueChargeRateTypes = new Map();

      this.chargeData.forEach((item) => {
        if (item.chargeRateType) {
          uniqueChargeRateTypes.set(item.chargeRateType.id, item.chargeRateType.description);
        }
      });

      this.uniqueChargeRateTypesArray = Array.from(uniqueChargeRateTypes.entries()).map(([id, description]) => ({ id, description }));

    },
    flattenData() {
      this.flattenedChargeData = this.chargeData.reduce((result, item) => {
        const key = `${item.dataSetId}_${item.chargeRateId}_${item.validityStart}_${item.validityEnd}`;
        const existingItem = result.find((i) => i.key === key);

        if (existingItem) {
          existingItem.chargeRateTypes.push({
            chargeRateTypeId: item.chargeRateTypeId,
            chargeValue: item.chargeValue,
          });
        } else {
          result.push({
            key,
            dataSetId: item.dataSetId,
            dataSetDesc: item.dataSet.description,
            chargeRateId: item.chargeRateId,            
            validityStart: item.validityStart,
            validityEnd: item.validityEnd,
            chargeRateTypes: [
              {
                chargeRateTypeId: item.chargeRateTypeId,
                chargeValue: item.chargeValue,
                id: item.id,
              },
            ],
          });
        }

        return result;
      }, []);
    },
    getChargeValue(item, chargeRateTypeId) {
      var crt = item.chargeRateTypes.find(cr => cr.chargeRateTypeId === chargeRateTypeId);
      if(crt){
        return crt.chargeValue;
      }
      return ''; // Return an empty string if chargeRateType not found
    },
    async fetchChargeData() {  
        try {
            const response = await axios.get(`${this.ChargeRateseApiByRateIdUrl}/${this.chargeRateId}`);
            this.chargeData = response.data;
            this.getUniqueChargeRateTypes();
            this.flattenData();
        } catch (error) {
            console.error('Error fetching charge rate data:', error);
        }
    },   
  },
  async mounted(){

  }  
};