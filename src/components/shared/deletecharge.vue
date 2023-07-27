<script>
    import axios from 'axios';
    import MessagePopup from './message.vue';
    import mitt from './mitt.js';

export default {
  data() {
    return {
      show: false,
      chargeId: null,
      source: null,
      validFrom: null,
      validTo: null,
      value: null,
    };
  },
  components: {
     MessagePopup,
    },      
  methods: {
    showPopup(title, headline, message) {
            // Call the showMessage method of the MessagePopup component
            this.$refs.messagePopup.showMessage(title, headline, message);
        },
    showDeletePopup(charge) {
        console.log('charge is');
        console.log(charge);

        this.chargeId = charge.chargeRateTypes[0].id;
        this.source = charge.dataSetDesc;
        this.validFrom = new Date(charge.validityStart).toLocaleDateString("en-GB");
        this.validTo =  new Date(charge.validityEnd).toLocaleDateString("en-GB");
        this.value = charge.chargeRateTypes[0].chargeValue;
        this.show = true;
    },
    async deleteCharge(){
            try {
                console.log('chargeid is');
                console.log(this.chargeId);
                const endpointUrl = `http://gedv-rtpsfc.gazpromuk.intra:19081/DV_FlexPortalApi/flexportal_api/ChargeRates/Delete/${this.chargeId}`;

                const response = await axios.delete(endpointUrl);

                if (response.status === 200) {
                    // Success! Handle the success scenario here.
                    console.log('ok');
                    this.show = false;
                    this.showPopup('All Done', '', 'The charge was successfully removed');
                } else {
                    // Handle other status codes if needed.
                    this.show = false;
                    console.log('fail');
                    this.showPopup('Uh-oh', 'Sorry, it didn\'t work', `The charge couldn't be removed, the attempt failed with status ${response.status}. Might be one for App Support`);
                }
                } catch (error) {
                    console.log('error status is');
                    console.log(error.response.status);
                    // Handle errors if the request fails.
                    if (error.response && error.response.status)
                    {
                        if(error.response.status === 400)
                        {
                            this.show = false;
                            this.showPopup('Uh-oh', 'Sorry, it didn\'t work', `The charge couldn't be removed, the attempt failed with the following message. '${error.response.data}'`);
                        }
                    }
                    if (error.response && error.response.data && error.response.data) {
                    // The API returned an error message.
                    this.showPopup('Uh-oh', 'Sorry, it didn\'t work', `The charge couldn't be removed, the attempt failed with status ${error.response.status}. Might be one for App Support.
                    The following text might help them. '${error.response.data}'`);
                    } else {
                    // Handle other errors.
                    this.showPopup('Uh-oh', 'Sorry, it didn\'t work', `The charge couldn't be removed, the attempt failed with status ${error.response.status}. No other information was given. Defintely one for App Support.'`);
                    }

                }
                this.chargeIdToDelete = null;
                mitt.emit('refreshView');
            },    
  },
};
</script>

<template>
    <b-modal v-model="show" hide-footer title="Delete Charge Rate?" class="v-modal-custom">
    <h5 class="fs-15">This action cannot be undone</h5>
    <b-row class="g-3">
        <b-col lg="12">
            <div class="input-group">
                <label class="input-group-text" style="width: 150px;">Source</label>
                <label class="input-group-text" style="flex:1">{{ source }}</label>              
            </div>
        </b-col>
        <b-col lg="12">
            <div class="input-group">
                <label class="input-group-text" style="width: 150px;">Valid From</label>
                <label class="input-group-text" style="flex:1">{{ validFrom }}</label>              
            </div>
        </b-col>
        <b-col lg="12">
            <div class="input-group">
                <label class="input-group-text" style="width: 150px;">Valid To</label>
                <label class="input-group-text" style="flex:1">{{ validTo }}</label> 
            </div>
        </b-col>
        <b-col lg="12">
            <div class="input-group">
                <label class="input-group-text" style="width: 150px;">Value</label>
                <label class="input-group-text" style="flex:1">{{ value }}</label>              
            </div>
        </b-col>
    </b-row>
    <div class="modal-footer v-modal-footer">
        <b-button type="button" variant="light" @click="show = false">Cancel</b-button>
        <b-button type="button" variant="primary" @click="deleteCharge">Delete Charge</b-button>
    </div>
    </b-modal>


    <MessagePopup ref="messagePopup"></MessagePopup>
</template>