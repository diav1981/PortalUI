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
    // Listen for the custom event "button-clicked" from the mitt emitter
        mitt.on('refreshView', this.refreshView);
    },
    beforeUnmount() {
        // Don't forget to remove the event listener when the component is unmounted
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
                                                        {{ getChargeValue(item, chargeRateType.id) }}<i @click="showEditPopup(item)" class="ri-edit-2-line"></i><i @click="showDeletePopup(item)" class="ri-delete-bin-line"></i>
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

    <MessagePopup ref="messagePopup"></MessagePopup>
    <DeleteChargePopup ref="deleteChargePopup"></DeleteChargePopup>
    <EditChargePopup ref="editChargePopup"></EditChargePopup>

</template>