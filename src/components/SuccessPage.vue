<template>
  <div class="bg-gray-100">
    <div class="top-shadow bg-white">
      <h2>here we are</h2>
    </div>
    <h2>here we are</h2>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'SuccessPage'
});
</script>

<style scoped lang="scss">
.top-shadow {
  box-shadow: rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px;
}
h2 {
  font-family: 'Roboto', sans-serif;
  font-size: 18px;
  font-weight: 500;
}
p {
  font-family: 'Roboto', sans-serif;
  font-size: 14px;
}
a {
  color: #0046FF
}
textarea {
  resize: none;
}
.w-600 {
  max-width:600px;
}
</style>
