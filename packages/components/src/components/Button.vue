<template>
  <button 
    :class="['button', styles]"
  >
    <slot/>
  </button>
</template>
<script setup lang="ts">

interface Props {
  type: 'primary' | 'outline'
}
const props = defineProps<Props>()
  const styles = {
 'button--primary': props.type === 'primary',
 'button--outline': props.type === 'outline'
}

</script>

<style scoped>
.button {
  appearance: none;
  border: none;
  border-radius: 8px;
  padding: 12px 32px;
  cursor: pointer;
  color: #fff;
  font-size: 18px;
}
.button--primary {
  background-color: #fd6000;
}
.button--outline {
  border: 1px solid #fd6000;
  color: #000;
}
</style>
