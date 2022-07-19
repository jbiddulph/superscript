<template>
  <div class="bg-gray-100">
     <div class="top-shadow bg-white">
      &nbsp;
    </div>
    <div class="form-inline rounded-xl bg-green-200 container mt-12 mb-12 p-4 w-600">
      <div class="flex justify-between align-items-center">
        <div class="flex-row align-items-center">
          <div class="flex flex-row align-items-center">
            <img src="@/assets/tick.png" width="33" height="33" />
            <h3 class="mt-2 ml-8">Success!</h3>
          </div>
          <span class="ml-16">Reference number: #5b7a8643256d5</span>
        </div>
        <img src="@/assets/cross.png" height="20" />
      </div>
    </div>
    <div class="form-inline rounded-xl bg-white container mt-12 mb-12 p-4 w-600">
      <div class="pb-20">
        <h2>here we go</h2>
      </div>
    </div>
    <div class="h-8">
    </div>
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
