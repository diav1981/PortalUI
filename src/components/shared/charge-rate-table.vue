<style>
  .table-container {
    position: relative;
  }

  .overlay-image {
    position: absolute;
    top: 10px; /* Adjust the top value as per your requirement */
    right: 10px; /* Adjust the right value as per your requirement */
    z-index: 1; /* Make sure the image is above the table */
  }

  .grey-circle {
    width: 48px;
    height: 48px;
    border-radius: 50%;
    background-color: rgb(60, 66, 71); /* Slightly lighter grey color (33, 37, 41) */
  }

  /* Pseudo-element for the horizontal line of the cross */
  .grey-circle::before {
    content: '';
    position: absolute;
    top: 50%;
    left: 15%; /* Adjust the left value to position the horizontal line */
    width: 65%; /* Slightly thinner width to control the length of the line */
    height: 4px; /* Adjust the height to control the thickness of the line */
    background-color: white;
    transform: translateY(-50%); /* Center the line vertically */
  }

  /* Pseudo-element for the vertical line of the cross */
  .grey-circle::after {
    content: '';
    position: absolute;
    left: 50%;
    top: 15%; /* Adjust the top value to position the vertical line */
    width: 4px; /* Adjust the width to control the thickness of the line */
    height: 65%; /* Slightly thinner height to control the length of the line */
    background-color: white;
    transform: translateX(-50%); /* Center the line horizontally */
  }

  .grey-circle:hover {
    background-color: rgb(77, 83, 88); /* Slightly darker on hover for a highlight effect */
    transform: scale(1.05); /* Slightly increase the size on hover */
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2); /* Add a slight box shadow for depth on hover */
  }
</style>



<script>
    import ChargeRateComponent from "./chargerate.js";
    import '@vuepic/vue-datepicker/dist/main.css';
    import MessagePopup from './message.vue';
    import DeleteChargePopup from './delete-charge.vue';
    import EditChargePopup from './edit-charge.vue';
    import mitt from './/mitt.js';

    export default {
    mixins: [ChargeRateComponent], // Using the ChargeRateComponent as a mixin

    props: {
    chargeRateIdProp: {
        type: Number,
        required: true,
    }, 
    },
    components: {
     MessagePopup,
     DeleteChargePopup,
     EditChargePopup,
    },
    data() {
    return {
    }
    },    
    methods:{
        refreshView(){
            this.setChargeRateId(this.chargeRateIdProp);
        },
        showPopup(title, headline, message) {
            // Call the showMessage method of the MessagePopup component
            this.$refs.messagePopup.showMessage(title, headline, message);
        },
        showDeletePopup(charge){
            this.$refs.deleteChargePopup.showDeletePopup(charge);
        },   
        showEditPopup(charge){
            this.$refs.editChargePopup.showEditPopup(charge);
        },           
        showAddPopup(){
            this.$refs.editChargePopup.showEditPopup();            
        }
    },   
    watch: {
    chargeRateIdProp: {
        immediate: true, // Run the handler immediately on component creation
        handler(newChargeRateId) {
        this.setChargeRateId(newChargeRateId);
        },
    },
    },
    created() {
        mitt.on('refreshView', this.refreshView);
    },
    beforeUnmount() {
        mitt.off('refreshView', this.refreshView);
    },    
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
                                    <div class="mt-3 table-hscroll table-container">
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
                                                <template v-for="item in flattenedChargeData" :key="item.id">
                                                <tr>
                                                    <td>{{ item.dataSetDesc }}</td>
                                                    <td>{{  new Date(item.validityStart).toLocaleDateString("en-GB") }}</td>
                                                    <td>{{  new Date(item.validityEnd).toLocaleDateString("en-GB") }}</td>
                                                    <td v-for="chargeRateType in uniqueChargeRateTypesArray" :key="chargeRateType.id">
                                                        {{ getChargeValue(item, chargeRateType.id) }}<i @click="showEditPopup(item)" class="ri-edit-2-line"></i><i @click="showDeletePopup(item)" class="ri-delete-bin-line"></i>
                                                    </td>
                                                </tr>
                                                </template>
                                            </tbody>
                                        </table>
                                        <div class="grey-circle overlay-image" @click="showAddPopup()"></div>
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

    <MessagePopup ref="messagePopup"></MessagePopup>
    <DeleteChargePopup ref="deleteChargePopup"></DeleteChargePopup>
    <EditChargePopup ref="editChargePopup"></EditChargePopup>

</template>