<script setup lang="ts">
import {
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardTitle,
  IonIcon,
} from "@ionic/vue"

import type { ForecastDay } from "../types/weather"
import { getWeatherInfo } from "../utils/weatherCode"

defineProps<{
  forecast: ForecastDay[]
}>()

const formatDate = (date: string): string => {
  return new Intl.DateTimeFormat("sk-SK", {
    weekday: "long",
    day: "numeric",
    month: "numeric",
  }).format(new Date(date))
}
</script>

<template>
  <IonCard>
    <IonCardHeader>
      <IonCardTitle> 7-dňová predpoveď </IonCardTitle>
    </IonCardHeader>

    <IonCardContent>
      <div v-for="day in forecast" :key="day.date" class="forecast-day">
        <div class="forecast-info">
          <strong>
            {{ formatDate(day.date) }}
          </strong>

          <div class="forecast-description">
            <IonIcon :icon="getWeatherInfo(day.weatherCode).icon" />

            <span>
              {{ getWeatherInfo(day.weatherCode).description }}
            </span>
          </div>
        </div>

        <div class="temperatures">
          <strong> {{ Math.round(day.temperatureMax) }} °C </strong>

          <span> {{ Math.round(day.temperatureMin) }} °C </span>
        </div>
      </div>
    </IonCardContent>
  </IonCard>
</template>

<style scoped>
.forecast-day {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 16px;
  padding: 12px 0;
  border-bottom: 1px solid var(--ion-color-light);
}

.forecast-day:last-child {
  border-bottom: none;
}

.forecast-info {
  min-width: 0;
}

.forecast-info > strong {
  text-transform: capitalize;
}

.forecast-description {
  display: flex;
  align-items: center;
  gap: 6px;
  margin-top: 6px;
  color: var(--ion-color-medium);
}

.forecast-description ion-icon {
  font-size: 20px;
}

.temperatures {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 4px;
  white-space: nowrap;
}

.temperatures span {
  color: var(--ion-color-medium);
}
</style>
