<template>
  <div class="home">
    <TopBar/>
    <SuccessPage/>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import SuccessPage from '@/components/SuccessPage.vue';
import TopBar from '@/components/TopBar.vue';

export default defineComponent({
  name: 'HomeView',
  components: {
    SuccessPage,
    TopBar
  },
});
</script>
