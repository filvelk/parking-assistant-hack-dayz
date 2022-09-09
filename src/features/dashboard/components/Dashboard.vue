<template>
    <v-app>
        <v-container
            fluid
            grid-list-md
            class="pa-5"
        >
            <v-layout row wrap>
                <v-flex
                    class="xs4"
                    v-for="street in getStreets"
                    :key="street.id"
                >
                    <Street
                        :street="street"
                        @reload="loadStreets"
                    />
                </v-flex>
            </v-layout>
        </v-container>
    </v-app>
</template>

<script>
import Street from './Street'
import StreetsBackend from "../backend/StreetsBackend"
export default {
    name: 'Dashboard',
    components: {
        Street
    },
    data() {
        return {
            streets: []
        }
    },
    computed: {
        getStreets() {
            return this.streets.data
        }
    },
    created() {
        this.loadStreets()
    },
    methods: {
        async loadStreets() {
            this.streets = await StreetsBackend.getStreets()
            /*this.streets = [
                {
                    id: 1,
                    price: 30.0,
                    zone: "C1",
                    company: "test",
                    companyPhoneNumber: "+4565454",
                    type: "HOURLY",
                    openingHour: "07:00",
                    closingHour: "23:00",
                    coordinates: [
                        {
                            "id": 9,
                            "latitude": 41.40338,
                            "longitude": 2.17403
                        },
                        {
                            "id": 10,
                            "latitude": 45.40338,
                            "longitude": 7.17403
                        }
                    ]
                },
                {
                    id: 2,
                    price: 30.0,
                    zone: "C1",
                    company: "test",
                    companyPhoneNumber: "+4565454",
                    type: "HOURLY",
                    openingHour: "07:00",
                    closingHour: "23:00",
                    coordinates: [
                        {
                            "id": 9,
                            "latitude": 41.40338,
                            "longitude": 2.17403
                        },
                        {
                            "id": 10,
                            "latitude": 45.40338,
                            "longitude": 7.17403
                        }
                    ]
                },
                {
                    id: 3,
                    price: 30.0,
                    zone: "C1",
                    company: "test",
                    companyPhoneNumber: "+4565454",
                    type: "HOURLY",
                    openingHour: "07:00",
                    closingHour: "23:00",
                    coordinates: [
                        {
                            "id": 9,
                            "latitude": 41.40338,
                            "longitude": 2.17403
                        },
                        {
                            "id": 10,
                            "latitude": 45.40338,
                            "longitude": 7.17403
                        }
                    ]
                }
            ]*/
        }
    }
}
</script>

<style scoped>
</style>
