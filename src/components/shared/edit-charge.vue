<script>
    import axios from 'axios';
    import VueDatePicker from '@vuepic/vue-datepicker';    
    import MessagePopup from './message.vue';
    import mitt from './mitt.js';
    import base from './base/base-component.js'

export default {
  data() {
    return {
        sourceData: null,
        formAction: null,
        /*edit popup fields*/
        sourceId: null,
        value: null,
        validFrom: null,
        validTo: null,
        chargeId: null,
        chargeRateTypeId: null,

        isNewCharge: false,

        show: false,
    };
  },
  mixins: [base],  
  components: {
    VueDatePicker,
    MessagePopup,
    },  
    mounted(){
        this.fetchSourceData();
    },          
  methods: {
    showPopup(title, headline, message) {
            // Call the showMessage method of the MessagePopup component
            this.$refs.messagePopup.showMessage(title, headline, message);
        },
    resetVars(){
        this.chargeId = null;
        this.chargeRateTypeId = null;           
        this.sourceId = null,
        this.value = null;
        this.validFrom = null;
        this.validTo = null;
    },
    showEditPopup(charge){
        if(charge){
            console.log('edit clicked');
            console.log(charge);
            this.resetVars();
            this.formAction = "Edit";
            this.chargeId = charge.chargeRateTypes[0].id;
            this.chargeRateTypeId = charge.chargeRateTypes[0].chargeRateTypeId;           
            this.sourceId = charge.dataSetId,
            this.value = charge.chargeRateTypes[0].chargeValue;
            this.validFrom = charge.validityStart;
            this.validTo = charge.validityEnd;
            this.isNewCharge = false;

            console.log('charge edit is');
            console.log(charge.chargeRateTypes[0]);

            
            console.log('charge is');
            console.log(charge);

            console.log((charge.chargeRateTypes[0].chargeValue));
        }            
        else{
            this.formAction = "Add";
            console.log('add clicked');
            this.resetVars();
            this.isNewCharge = true;
        }
        this.show = true;
    },
    async fetchSourceData() {        
            try {
                const response = await axios.get(this.sourceApiUrl);
                this.sourceData = response.data;
            } catch (error) {
                this.showPopup('Uh-oh', 'Couldn\'t Fetch Data',`There was a problem fetching some lookup data. If it keeps happening, show this to App Support. ${error}`);
            }
        },           
    async editCharge(){
        const dataToSend = {
                ChargeId: this.chargeId,
                ChargeTypeId: this.chargeRateTypeId,
                SourceId: this.sourceId,
                ValidFrom: this.validFrom,
                ValidTo: this.validTo,
                Value: this.value
            };

        try
        {
            const response = await axios.put(this.chargeRatesApiUrl, dataToSend)
            console.log(response);
            if (response.status === 200) {
                    this.show = false;
                    this.showPopup('All Done', '', 'The charge was successfully updated');
                } else {
                    this.show = false;
                    this.showPopup('Uh-oh', 'Sorry, it didn\'t work', `The charge couldn't be removed, the attempt failed with status ${response.status}. Might be one for App Support`);
                }
            } catch (error) {
                this.show = false;
                if (error.response && error.response.status)
                {
                    if(error.response.status === 400)
                    {
                        this.showPopup('Uh-oh', 'Sorry, it didn\'t work', `The charge couldn't be updated, the attempt failed with the following message. '${error.response.data}'`);
                    }
                }
                if (error.response && error.response.data && error.response.data) {
                    this.showPopup('Uh-oh', 'Sorry, it didn\'t work', `The charge couldn't be updated, the attempt failed with status ${error.response.status}. Might be one for App Support.
                    The following text might help them. '${error.response.data}'`);
                    } else {
                    this.showPopup('Uh-oh', 'Sorry, it didn\'t work', `The charge couldn't be updated, the attempt failed. No other information was given. Defintely one for App Support.`);
                }
            }
            mitt.emit('refreshView');   
        },
    },
};
</script>

<template>
    <b-modal v-model="show" hide-footer :title="formAction + ' Charge Rate'" class="v-modal-custom">
        <form action="javascript:void(0);">
            <b-row class="g-3">
                <b-col lg="12">
                    <div class="input-group">
                        <label class="input-group-text" style="width: 150px;" for="ogMonth">Source</label>
                        <select class="form-select" id="ogSource" v-model="sourceId">
                            <option v-for="source in sourceData" :key="source.id" :value="source.id">{{ source.description }}</option>
                        </select>
                    </div>
                </b-col>
                <b-col lg="12">
                    <div class="input-group">
                        <label for="dtFrom" class="form-label">Valid From</label>
                        <VueDatePicker dark auto-apply :enable-time-picker="false" id="dtFrom" v-model="validFrom"></VueDatePicker>
                    </div>
                </b-col>
                <b-col lg="12">
                    <div>
                        <label for="dtTo" class="form-label">Valid To</label>
                        <VueDatePicker dark auto-apply :enable-time-picker="false" id="dtTo" v-model="validTo"></VueDatePicker>
                    </div>
                </b-col>                
                <b-col lg="12">
                    <div class="input-group">
                        <label class="input-group-text" style="width:150px" for="chargeValueInput">Value</label>
                        <input type="number" class="form-control" id="chargeValueInput"
                        placeholder="Enter The Charge Value" v-model="value"/>
                      </div>
                </b-col>
                <b-col lg="12">
                    <div class="hstack gap-2 justify-content-end">
                        <b-button type="button" variant="light" @click="show = false">Cancel</b-button>
                        <b-button type="submit" variant="primary" @click="editCharge">Submit</b-button>
                    </div>
                </b-col>
            </b-row>
        </form>
    </b-modal>
    <MessagePopup ref="messagePopup"></MessagePopup>
</template>