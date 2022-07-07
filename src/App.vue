<template>
  <DashboardLayout >
    <template  v-slot:content>
        <router-view></router-view>
    </template>
  </DashboardLayout>
</template>

<script>
import DashboardLayout from './layouts/DashboardLayout.vue'
export default {
    components:{
        DashboardLayout
    }
}
</script>