<script setup lang="ts">
import {
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardTitle,
  IonIcon,
} from "@ionic/vue"

import type { WeatherData } from "../types/weather"
import { getWeatherInfo } from "../utils/weatherCode"

defineProps<{
  city: string
  weather: WeatherData
}>()
</script>

<template>
  <IonCard>
    <IonCardHeader>
      <IonCardTitle>
        {{ city }}
      </IonCardTitle>
    </IonCardHeader>

    <IonCardContent>
      <div class="weather-main">
        <IonIcon
          :icon="getWeatherInfo(weather.weatherCode).icon"
          class="weather-icon"
        />

        <div>
          <h2>{{ Math.round(weather.temperature) }} °C</h2>

          <p>
            {{ getWeatherInfo(weather.weatherCode).description }}
          </p>
        </div>
      </div>

      <div class="weather-details">
        <div class="weather-detail">
          <span class="label"> Pocitová teplota </span>

          <strong> {{ Math.round(weather.feelsLike) }} °C </strong>
        </div>

        <div class="weather-detail">
          <span class="label"> Vlhkosť </span>

          <strong> {{ weather.humidity }} % </strong>
        </div>

        <div class="weather-detail">
          <span class="label"> Vietor </span>

          <strong> {{ Math.round(weather.windSpeed) }} km/h </strong>
        </div>
      </div>
    </IonCardContent>
  </IonCard>
</template>

<style scoped>
.weather-main {
  display: flex;
  align-items: center;
  gap: 20px;
  margin-bottom: 24px;
}

.weather-icon {
  width: 72px;
  height: 72px;
}

.weather-main h2 {
  margin: 0;
  font-size: 42px;
}

.weather-main p {
  margin: 4px 0 0;
  color: var(--ion-color-medium);
}

.weather-details {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 12px;
}

.weather-detail {
  display: flex;
  flex-direction: column;
  gap: 4px;
  padding: 12px;
  border-radius: 8px;
  background: var(--ion-color-light);
}

.label {
  font-size: 13px;
  color: var(--ion-color-medium);
}

@media (max-width: 500px) {
  .weather-details {
    grid-template-columns: 1fr;
  }
}
</style>
