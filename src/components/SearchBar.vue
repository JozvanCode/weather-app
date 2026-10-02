<script setup lang="ts">
import { ref } from "vue"

import { IonButton, IonInput, IonItem, IonLabel } from "@ionic/vue"

const city = ref("")

const emit = defineEmits<{
  search: [city: string]
}>()

const handleSearch = () => {
  const value = city.value.trim()

  if (!value) {
    return
  }

  emit("search", value)
  city.value = ""
}
</script>

<template>
  <form class="search-form" @submit.prevent="handleSearch">
    <div class="input-wrapper">
      <IonItem lines="none">
        <IonLabel position="stacked"> Mesto </IonLabel>

        <IonInput
          v-model="city"
          type="text"
          inputmode="text"
          placeholder="Napr. Bratislava"
          autocomplete="off"
        />
      </IonItem>
    </div>

    <IonButton type="submit" class="search-button" :disabled="!city.trim()">
      Vyhľadať
    </IonButton>
  </form>
</template>

<style scoped>
.search-form {
  display: flex;
  align-items: flex-end;
  gap: 12px;
  width: 100%;
}

.input-wrapper {
  flex: 1;
  min-width: 0;
}

.input-wrapper ion-item {
  --padding-start: 0;
  --padding-end: 0;
  --inner-padding-start: 0;
  --inner-padding-end: 0;
  --background: transparent;
}

.input-wrapper ion-label {
  margin-bottom: 8px;
  font-weight: 600;
}

.input-wrapper ion-input {
  --background: var(--ion-color-light);
  --border-radius: 10px;
  --padding-start: 14px;
  --padding-end: 14px;
  --padding-top: 12px;
  --padding-bottom: 12px;
  min-height: 48px;
}

.search-button {
  min-height: 48px;
  margin: 0;
  --border-radius: 10px;
  font-weight: 600;
}

@media (max-width: 600px) {
  .search-form {
    flex-direction: column;
    align-items: stretch;
    gap: 12px;
  }

  .search-button {
    width: 100%;
  }
}
</style>
