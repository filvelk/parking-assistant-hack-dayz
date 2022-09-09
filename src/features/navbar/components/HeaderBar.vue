<template>
    <v-toolbar dense class="toolbar">
        <v-toolbar-title class="title">Dashboard</v-toolbar-title>
        <v-spacer/>
        <v-toolbar-items
                class="hidden-xs-only"
        >
            <v-btn
                    v-if="isUserLoggedIn"
                    text
                    @click="signOutUser"
            >
                <span>Log Out</span>
                <i class="fas fa-sign-out-alt"/>
            </v-btn>
            <v-btn
                    class="btn-action"
                    v-else
                    :to="'/login'"
                    text
            >
            <span class="mr-2">Log In</span>
            <i class="fas fa-sign-in-alt"/>
        </v-btn>
    </v-toolbar-items>
</v-toolbar>
</template>

<script>
import { mapActions, mapState } from 'vuex'

export default {
    name: 'HeaderBar',
    data() {
        return {
            drawer: false,
            regularUserLinks: [
                {
                    icon: 'fas fa-th-list',
                    text: 'Board',
                    route: '/dashboad'
                }
            ]
        }
    },
    computed: {
        ...mapState('Login', ['isUserLoggedIn'])
    },
    methods: {
        ...mapActions('Login', ['setIsUserLoggedIn']),
        signOutUser() {
            this.setIsUserLoggedIn(false)
            this.$router.push('/login')
        }
    }
}
</script>
<style>
.toolbar {
    background-color: #1976d2 !important;
}

.title {
    color: white;
}

.btn-action {
    background-color: #1976d2 !important;
    color: white !important;
}
</style>
