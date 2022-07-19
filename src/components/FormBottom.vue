<template>
    <div class="form-bottom text-white py-4">
        <div class="w-600 mx-auto flex flex-row justify-between align-items-center">
            <div class="price flex flex-col">
                <span class="text-xs truncate">Total premium</span>
                <span class="price font-bold">£223.50</span>
                <span class="text-xs truncate italic">per month. 0% APR, Tax Inc.</span>
            </div>
            <button type="submit" class="btn-primary rounded bg-color-pink font-bold text-16 h-10">Submit</button>    
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
export default defineComponent({
  name: 'FormBottom'
})
</script>

<style>
.btn-primary {
    background-color: #FF1464!important;
    width: 217px;
}
.w-600 {
  max-width:600px;
}
.form-bottom {
    background-color: #1F1F1F;
}
.price {
    font-size: 30px;
}
</style>