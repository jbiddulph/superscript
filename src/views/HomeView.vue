<template>
  <div class="home">
    <TopBar/>
    <RegisterForm/>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import RegisterForm from '@/components/RegisterForm.vue';
import TopBar from '@/components/TopBar.vue';

export default defineComponent({
  name: 'HomeView',
  components: {
    RegisterForm,
    TopBar
  },
});
</script>
