<template>
    <div>
        <h3>{{ day }}</h3>
        <v-menu
            ref="openingMenu"
            v-model="openingMenu"
            :close-on-content-click="false"
            :nudge-right="40"
            :return-value.sync="openingHour"
            transition="scale-transition"
            offset-y
            max-width="290px"
            min-width="290px"
        >
            <template v-slot:activator="{ on, attrs }">
                <v-text-field
                    v-model="openingHour"
                    label="Opening hour"
                    prepend-icon="mdi-clock-time-four-outline"
                    readonly
                    v-bind="attrs"
                    v-on="on"
                ></v-text-field>
            </template>
            <v-time-picker
                v-if="openingMenu"
                v-model="openingHour"
                full-width
                @click:minute="$refs.openingMenu.save(openingHour), onOpeningTimeSave()"
            ></v-time-picker>
        </v-menu>
        <v-menu
            ref="closingMenu"
            v-model="closingMenu"
            :close-on-content-click="false"
            :nudge-right="40"
            :return-value.sync="closingHour"
            transition="scale-transition"
            offset-y
            max-width="290px"
            min-width="290px"
        >
            <template v-slot:activator="{ on, attrs }">
                <v-text-field
                    v-model="closingHour"
                    label="Opening hour"
                    prepend-icon="mdi-clock-time-four-outline"
                    readonly
                    v-bind="attrs"
                    v-on="on"
                ></v-text-field>
            </template>
            <v-time-picker
                v-if="closingMenu"
                v-model="closingHour"
                full-width
                @click:minute="$refs.closingMenu.save(closingHour), onClosingTimeSave()"
            ></v-time-picker>
        </v-menu>
    </div>
</template>

<script>
    export default {
        name: 'TimePickerByDayModal',
        props: {
            day: {
                type: String,
                default: ''
            }
        },
        data() {
            return {
                openingMenu: false,
                closingMenu: false,
                openingHour: null,
                closingHour: null
            }
        },
        methods: {
            onOpeningTimeSave() {
                console.log(this.openingHour)
                this.$emit('onOpeningTime', this.openingHour, this.day)
            },
            onClosingTimeSave() {
                console.log(this.closingHour)
                this.$emit('onClosingTime', this.closingHour, this.day)
            }
        }
    }
</script>

<style scoped>
    .list {
        background-color: #ebecf0;
    }
</style>
