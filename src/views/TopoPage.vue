<template>
  <div id="flex-container">
    <div class="flex-item">
      <EditPanel></EditPanel>
    </div>
    <div class="flex-item info-panel">
      asd
    </div>
  </div>
</template>

<script setup>

import EditPanel from "../components/EditPanel.vue";
</script>

<style scoped>
#flex-container {
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: flex-start;
  align-items: center;
}
.flex-item {
  flex: 0.65;
}
.info-panel {
  flex: 0.35;
  border: 1px solid red;
}
</style>
