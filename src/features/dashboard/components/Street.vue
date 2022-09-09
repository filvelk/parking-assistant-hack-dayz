<template>
    <v-card
            class="d-flex list"
    >
        <v-card-text
                class="list-cards"
        >
            <h3 class="text--primary">
                {{ list.name }}
            </h3>
            <v-card-actions class="d-flex justify-end mb-6">
                <v-btn
                        text
                        class="btn-action"
                        @click="onEdit"
                >
                    <i class="fas fa-edit"></i>
                </v-btn>
                <v-btn
                        text
                        class="btn-action teal accent-4"
                        @click="onDelete"
                >
                    <i class="fas fa-trash-alt"></i>
                </v-btn>
            </v-card-actions>
        </v-card-text>
        <AddStreetModal
            class="cardModal"
            v-if="showAddStreetModal"
            :show="showAddStreetModal"
            @addStreet="addStreet"
            @onClose="updateAddStreetModal"
        />
    </v-card>
</template>

<script>
import AddStreetModal from './AddStreetModal'

export default {
    name: 'Street',
    components: {
        AddStreetModal
    },
    props: {
        list: {
            type: Object,
            default: () => {
            }
        }
    },
    data() {
        return {
            cards: [],
            showAddStreetModal: false
        }
    },
    created() {},
    methods: {
        onEdit() {
            this.showAddStreetModal = true
        },
        onDelete() {
            console.log('On Delete')
            // const payload = {
            //     street: this.street
            // }
            // await StreetService.updateStreet(this.street.id, payload)
            // this.$emit('reloadList')
        },
        async addStreet() {
            console.log('On Add ')
            // const payload = {
            //     name: title,
            //     desc: description,
            //     idList: this.list.id
            // }
            // this.showAddStreetModal = false
            // await BoardsService.createCard(payload)
            // this.loadCards()
        },
        updateAddStreetModal(value) {
            this.showAddStreetModal = value
        }
    }
}
</script>

<style scoped>
.list, .cardModal {
    background-color: #ebecf0;
}
</style>
