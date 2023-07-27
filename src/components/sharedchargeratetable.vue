<!-- SharedChargeRateTable.vue -->

<script>
    import ChargeRateComponent from "./chargerate.js";
    import axios from 'axios';
    import VueDatePicker from '@vuepic/vue-datepicker';
    import '@vuepic/vue-datepicker/dist/main.css'

    export default {
    mixins: [ChargeRateComponent], // Using the ChargeRateComponent as a mixin

    props: {
    chargeRateIdProp: {
        type: Number,
        required: true,
    }, 
    },
    components: {
     VueDatePicker,
    },
    data() {
    return {
        modalEditPopup: false,
        modalDeletePopup: false,
        modalerrorPopup: false,

        errorText: null,
        chargeIdToDelete: null,
        chargeIdToEdit: null,

        selectedSource: null,

        dateFrom: null,
        dateTo: null,

        sourceData: null,

        /*edit popup fields*/
        editedChargeSourceId: null,
        editedChargeValue: null,
        editedChargeValidFrom: null,
        editedChargeValidTo: null,

        /*delete popup fields*/
        deletedPopupCharge: null,
        deletedPopupChargeSource: null,
        deletedPopupChargeValidFrom: null,
        deletedPopupChargeValidTo: null,
        deletedPopupChargeTypeName: null,
        deletedPopupChargeValue: null,

    }
    },    
    methods:{
        onEditClicked(charge){
            console.log('edit clicked');
            console.log(charge);
            this.chargeIdToEdit = charge.chargeRateTypes[0].id;
            this.editedChargeRateTypeId = charge.chargeRateTypes[0].chargeRateTypeId;           
            this.editedChargeSourceId = charge.dataSetId,
            this.editedChargeValue = charge.chargeRateTypes[0].chargeValue;
            this.editedChargeValidFrom = charge.validityStart;
            this.editedChargeValidTo = charge.validityEnd;


            console.log('charge edit is');
            console.log(charge.chargeRateTypes[0]);

            
            console.log('charge is');
            console.log(charge);

            console.log((charge.chargeRateTypes[0].chargeValue));
                        
            this.modalEditPopup = true;
        },
        onDeleteClicked(charge){
            this.chargeIdToDelete = charge.chargeRateTypes[0].id;
            this.deletedPopupCharge = charge;
            this.deletedPopupChargeSource = charge.dataSetDesc;
            this.deletedPopupChargeValidFrom = new Date(charge.validityStart).toLocaleDateString("en-GB");
            this.deletedPopupChargeValidTo =new Date(charge.validityEnd).toLocaleDateString("en-GB");
            this.deletedPopupChargeValue = charge.chargeRateTypes[0].chargeValue;
            console.log(this.deletedPopupCharge);
            this.modalDeletePopup = true;
        },
        async fetchSourceData() {        
            const url = `http://gedv-rtpsfc.gazpromuk.intra:19081/DV_FlexPortalApi/flexportal_api/Source/`;

            try {
                const response = await axios.get(url);
                this.sourceData = response.data;
            } catch (error) {
                console.error('Error fetching source data:', error);
            }
        },   
        async submitEditedCharge()
        {
            console.log(this.chargeIdToEdit);
            console.log(this.editedChargeSourceId),
            console.log(this.editedChargeValue);
            console.log(this.editedChargeValidFrom);
            console.log(this.editedChargeValidTo);

            const dataToSend = {
                ChargeId: this.chargeIdToEdit,
                ChargeTypeId: this.editedChargeRateTypeId,
                SourceId: this.editedChargeSourceId,
                ValidFrom: this.editedChargeValidFrom,
                ValidTo:this.editedChargeValidTo,
                Value: this.editedChargeValue
            };

            try
            {
                const url = `http://gedv-rtpsfc.gazpromuk.intra:19081/DV_FlexPortalApi/flexportal_api/ChargeRates/`;


                const response = await axios.post(url, dataToSend)
                console.log(response);
                if (response.status === 200) {
                        // Success! Handle the success scenario here.
                        console.log('POST request successful.');
                        this.modalEditPopup = false;
                    } else {
                        // Handle other status codes if needed.
                        console.log(`POST request failed with status: ${response.status}`);
                        this.modalEditPopup = false;
                    }
            } catch (error) {
                // Handle errors if the request fails.
                if (error.response && error.response.status)
                {
                    if(error.response.status === 400)
                    {
                        this.errorText = error.response.data;
                        this.modalEditPopup = false;
                        console.log(`POST request failed with status: ${error.response.data}`);
                    }
                }
                if (error.response && error.response.data && error.response.data) {
                // The API returned an error message.
                console.error('API Error:', error.response.data);
                } else {
                // Handle other errors.
                console.error('An error occurred while processing the POST request:', error);
                }

            }
            this.chargeIdToEdit = null;
            this.setChargeRateId(this.chargeRateIdProp);

        },
        async deleteCharge(){
            try {
                const endpointUrl = `http://gedv-rtpsfc.gazpromuk.intra:19081/DV_FlexPortalApi/flexportal_api/ChargeRates/Delete/${this.chargeIdToDelete}`;

                const response = await axios.delete(endpointUrl);

                if (response.status === 200) {
                    // Success! Handle the success scenario here.
                    console.log('DELETE request successful.');
                    this.modalDeletePopup = false;
                } else {
                    // Handle other status codes if needed.
                    console.log(`DELETE request failed with status: ${response.status}`);
                    this.modalDeletePopup = false;
                }
                } catch (error) {
                    // Handle errors if the request fails.
                    if (error.response && error.response.status)
                    {
                        if(error.response.status === 400)
                        {
                            this.errorText = error.response.data;
                            this.modalDeletePopup = false;
                            console.log(`DELETE request failed with status: ${error.response.data}`);
                        }
                    }
                    if (error.response && error.response.data && error.response.data) {
                    // The API returned an error message.
                    console.error('API Error:', error.response.data);
                    } else {
                    // Handle other errors.
                    console.error('An error occurred while processing the DELETE request:', error);
                    }

                }
                this.chargeIdToDelete = null;
                this.setChargeRateId(this.chargeRateIdProp);
            },
    },   
    watch: {
    chargeRateIdProp: {
        immediate: true, // Run the handler immediately on component creation
        handler(newChargeRateId) {
        this.setChargeRateId(newChargeRateId);
        },
    },
    },
    mounted(){
        this.fetchSourceData();
    }
    };
</script>

<template>
    <b-row>

<b-row>
  <b-col cols="12">
    <b-card no-body>
      <b-card-body class="p-0">
                      <b-row class="align-items-end">
                        <b-col sm="12">
                          <div class="p-3">
                            <div v-if="hasData">
                              <div class="mt-3 table-hscroll">
                                <table class="table table-nowrap table-hover">
                                  <thead>
                                    <tr scope="col">
                                      <th scope="col">Source</th>
                                      <th scope="col">Valid From</th>
                                      <th scope="col">Valid To</th>
                                      <th v-for="chargeRateType in uniqueChargeRateTypesArray" :key="chargeRateType.id">
                                        {{ chargeRateType.description }}
                                      </th>
                                    </tr>
                                  </thead>
                                    <tbody>
                                        <!-- Generate rows for each day of the month -->
                                        <template v-for="item in flattenedChargeData" :key="item.id">
                                          <tr>
                                            <td>{{ item.dataSetDesc }}</td>
                                              <td>{{  new Date(item.validityStart).toLocaleDateString("en-GB") }}</td>
                                              <td>{{ new Date(item.validityEnd).toLocaleDateString("en-GB") }}</td>
                                              <td v-for="chargeRateType in uniqueChargeRateTypesArray" :key="chargeRateType.id">
                                                {{ getChargeValue(item, chargeRateType.id) }}<i @click="onEditClicked(item)" class="ri-edit-2-line"></i><i @click="onDeleteClicked(item)" class="ri-delete-bin-line"></i>
                                            </td>
                                          </tr>
                                        </template>
                                    </tbody>
                                  </table>
                              </div>
                            </div>
                            <div v-else class="centered-children-200">
                              <p>No Data Available</p>
                            </div>   
                          </div>                               
                        </b-col>
                        <b-col sm="4">
                        </b-col>
                      </b-row>

      </b-card-body>
    </b-card>
  </b-col>
</b-row>
</b-row>


<b-modal v-model="modalEditPopup" hide-footer title="Edit Charge Rate" class="v-modal-custom">
        <form action="javascript:void(0);">
            <b-row class="g-3">
                <b-col lg="12">
                    <div class="input-group">
                        <label class="input-group-text" style="width: 150px;" for="ogMonth">Source</label>
                        <select class="form-select" id="ogSource" v-model="editedChargeSourceId">
                            <option v-for="source in sourceData" :key="source.id" :value="source.id">{{ source.description }}</option>
                        </select>
                    </div>
                </b-col>
                <b-col lg="12">
                    <div class="input-group">
                        <label for="dtFrom" class="form-label">Valid From</label>
                        <VueDatePicker dark auto-apply :enable-time-picker="false" id="dtFrom" v-model="editedChargeValidFrom"></VueDatePicker>
                    </div>
                </b-col>
                <b-col lg="12">
                    <div>
                        <label for="dtTo" class="form-label">Valid To</label>
                        <VueDatePicker dark auto-apply :enable-time-picker="false" id="dtTo" v-model="editedChargeValidTo"></VueDatePicker>
                    </div>
                </b-col>                
                <b-col lg="12">
                    <div class="input-group">
                        <label class="input-group-text" style="width:150px" for="chargeValueInput">Value</label>
                        <input type="number" class="form-control" id="chargeValueInput"
                        placeholder="Enter The Charge Value" v-model="editedChargeValue"/>
                      </div>
                </b-col>
                <b-col lg="12">
                    <div class="hstack gap-2 justify-content-end">
                        <b-button type="button" variant="light" @click="modalEditPopup = false">
                            Cancel</b-button>
                        <b-button type="submit" variant="primary" @click="submitEditedCharge">Submit</b-button>
                    </div>
                </b-col>
            </b-row>
        </form>
    </b-modal>

    <!-- Default Modals -->
    <b-modal v-model="modalDeletePopup" hide-footer title="Delete Charge Rate?" class="v-modal-custom">
    <h5 class="fs-15">This action cannot be undone</h5>
    <b-row class="g-3">
        <b-col lg="12">
            <div class="input-group">
                <label class="input-group-text" style="width: 150px;">Source</label>
                <label class="input-group-text" style="flex:1">{{ deletedPopupChargeSource }}</label>              
            </div>
        </b-col>
        <b-col lg="12">
            <div class="input-group">
                <label class="input-group-text" style="width: 150px;">Valid From</label>
                <label class="input-group-text" style="flex:1">{{ deletedPopupChargeValidFrom }}</label>              
            </div>
        </b-col>
        <b-col lg="12">
            <div class="input-group">
                <label class="input-group-text" style="width: 150px;">Valid To</label>
                <label class="input-group-text" style="flex:1">{{ deletedPopupChargeValidTo }}</label> 
            </div>
        </b-col>
        <b-col lg="12">
            <div class="input-group">
                <label class="input-group-text" style="width: 150px;">Value</label>
                <label class="input-group-text" style="flex:1">{{ deletedPopupChargeValue }}</label>              
            </div>
        </b-col>
    </b-row>
    <div class="modal-footer v-modal-footer">
        <b-button type="button" variant="light" @click="modalDeletePopup = false">Cancel</b-button>
        <b-button type="button" variant="primary" @click="deleteCharge">Delete Charge</b-button>
    </div>
    </b-modal>
    <!-- Default Modals -->
    <b-modal v-model="modalerrorPopup" hide-footer title="Oh no" class="v-modal-custom">
        <h5 class="fs-15">:(</h5>
        <p class="text-muted">{{errorText}}</p>
        <div class="modal-footer v-modal-footer">
            <b-button type="button" variant="primary" @click="modalerrorPopup = false">Ok</b-button>
        </div>
    </b-modal>            
</template>