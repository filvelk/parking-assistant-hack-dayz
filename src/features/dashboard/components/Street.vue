<template>
    <v-card
        class="d-flex list"
    >
        <v-card-text
            class="list-cards"
        >
            <h3 class="text--primary">
                {{ street.zone }}
            </h3>
            <v-card-actions class="d-flex justify-end mb-6">
                <v-btn
                    text
                    class="btn-action"
                    @click="showUpdateStreetModal = true"
                >
                    <i class="fas fa-edit"></i>
                </v-btn>
                <v-btn
                    text
                    class="btn-action teal accent-4"
                    @click="showDeleteStreetModal = true"
                >
                    <i class="fas fa-trash-alt"></i>
                </v-btn>
            </v-card-actions>
        </v-card-text>
        <UpdateStreetModal
            class="cardModal"
            v-if="showUpdateStreetModal"
            :show="showUpdateStreetModal"
            :street="street"
            @updateStreet="updateStreet"
            @onClose="showUpdateStreetModal = false"
        />
        <DeleteStreetModal
            class="cardModal"
            v-if="showDeleteStreetModal"
            :show="showDeleteStreetModal"
            :id="street.id"
            :name="street.zone"
            @onConfirm="onDeleteStreet"
            @onClose="showDeleteStreetModal = false"
        />
    </v-card>
</template>

<script>
import DeleteStreetModal from './DeleteStreetModal'
import UpdateStreetModal from './UpdateStreetModal'
import StreetsBackend from "../backend/StreetsBackend"

export default {
    name: 'Street',
    components: {
        DeleteStreetModal,
        UpdateStreetModal
    },
    props: {
        street: {
            type: Object,
            default: () => {}
        }
    },
    data() {
        return {
            showUpdateStreetModal: false,
            showDeleteStreetModal: false
        }
    },
    methods: {
        async onDeleteStreet(id) {
            await StreetsBackend.deleteStreet(id)
            this.showDeleteStreetModal = false
            this.$emit('reload')
        },
        async updateStreet(updatedStreet) {
            this.showUpdateStreetModal = false
            await StreetsBackend.updateStreet(updatedStreet.id, updatedStreet)
        }
    }
}
</script>

<style scoped>
.list, .cardModal {
    background-color: #ebecf0;
}
</style>
