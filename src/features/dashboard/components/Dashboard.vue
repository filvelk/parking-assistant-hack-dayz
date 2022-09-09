<template>
    <v-app>
        <v-container
            fluid
            grid-list-md
            class="pa-5"
        >
            <v-layout>
                <v-row>
                    <v-btn
                        text
                        class="btn-action teal accent-4"
                        @click="showAddStreetModal = true"
                    >
                        <i class="fa-solid fa-plus"></i>
                    </v-btn>
                </v-row>
                <v-row>
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
                </v-row>
            </v-layout>
        </v-container>
        <AddStreetModal
            class="cardModal"
            v-if="showAddStreetModal"
            :show="showAddStreetModal"
            @addStreet="addStreet"
            @onClose="showAddStreetModal = false"
        />
    </v-app>
</template>

<script>
import AddStreetModal from './AddStreetModal'
import Street from './Street'
import StreetsBackend from '../backend/StreetsBackend'

export default {
    name: 'Dashboard',
    components: {
        AddStreetModal,
        Street
    },
    data() {
        return {
            showAddStreetModal: false,
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
        async addStreet(newStreet) {
            this.showAddStreetModal = false
            await StreetsBackend.createStreet(newStreet)
        },
        async loadStreets() {
            this.streets = await StreetsBackend.getStreets()
        }
    }
}
</script>

<style scoped>
</style>
