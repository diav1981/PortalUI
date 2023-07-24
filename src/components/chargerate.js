import axios from 'axios';

export default {
    data() {        
        return {
            chargeData: null,
            uniqueChargeRateTypesArray: null,
            flattenedChargeData: null,
            chargeRateId: null,
        };
    },
    computed:{
    hasData() {
      return !!this.chargeData;
    }, 
  },  
  methods:{
    async setChargeRateId(id){
        this.chargeRateId = id;
        console.log('setting new charge rate and called fetch')
        console.log(this.chargeRateId);
        await this.fetchChargeData();
        console.log('fetch call completed');
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
        const url = `http://gedv-rtpsfc.gazpromuk.intra:19081/DV_FlexPortalApi/flexportal_api/ChargeRates/ByRateId/${this.chargeRateId}`;

        try {
            const response = await axios.get(url);
            this.chargeData = response.data;
            this.getUniqueChargeRateTypes();
            this.flattenData();
            console.log(this.uniqueChargeRateTypesArray);
        } catch (error) {
            console.error('Error fetching charge rate data:', error);
        }
    },   
  },
  async mounted(){
    console.log('mounted 2');
    console.log(this.flattenedChargeData);
  }  
};