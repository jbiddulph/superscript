<template>
    <div class="container pt-8 pb-2 px-0 w-600">
        <div class="flex justify-between align-items-center">
            <div><img src="@/assets/superscript.png" width="116"></div>
            <div class="call-us">Call us on 0333 772 0759</div>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'TopBar',
  data() {
    return {
      bgImage: "@/assets/superscript.png",
    };
  },
});
</script>

<style scoped lang="scss">
.top-shadow {
  box-shadow: rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px;
}
.w-600 {
    max-width:600px;
}
h1.brandLogo {
    text-indent: -9999px;
}
.call-us {
    font-size: 20px;
    font-weight: bold;
}
</style>
    
    