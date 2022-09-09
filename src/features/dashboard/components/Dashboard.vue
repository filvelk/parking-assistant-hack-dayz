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
                    v-for="board in getStreets"
                    :key="board.id"
                >
                    <Street
                        :name="name"
                        @reload="loadStreets"
                    />
                </v-flex>
            </v-layout>
        </v-container>
    </v-app>
</template>

<script>
export default {
    name: 'Dashboard',
    data() {
        return {
            streets: []
        }
    },
    computed: {
        getStreets() {
            return this.streets
        }
    },
    created() {
        this.loadStreets()
    },
    methods: {
        loadStreets() {
            // Tuka ke prajme api call do BE
            this.streets = [
                { id: 1, name: 'Ul. test' },
                { id: 2, name: 'Ul. test 1' },
                { id: 3, name: 'Ul. test 2' }
            ]
        }
    }
}
</script>

<style scoped>
</style>
