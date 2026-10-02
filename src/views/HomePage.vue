<script setup lang="ts">
import { ref } from "vue"

import {
  IonContent,
  IonHeader,
  IonPage,
  IonSpinner,
  IonText,
  IonTitle,
  IonToolbar,
} from "@ionic/vue"

import SearchBar from "../components/SearchBar.vue"
import WeatherCard from "../components/WeatherCard.vue"
import ForecastCard from "../components/ForecastCard.vue"

import { searchLocation } from "../services/geocodingApi"
import { getForecast, getWeather } from "../services/weatherApi"

import type { ForecastDay, WeatherData } from "../types/weather"

const weather = ref<WeatherData | null>(null)
const forecast = ref<ForecastDay[]>([])
const city = ref("")

const loading = ref(false)
const error = ref("")

const handleSearch = async (searchedCity: string) => {
  loading.value = true
  error.value = ""

  try {
    const location = await searchLocation(searchedCity)

    const weatherData = await getWeather(location.latitude, location.longitude)

    const forecastData = await getForecast(
      location.latitude,
      location.longitude,
    )

    city.value = location.name
    weather.value = weatherData
    forecast.value = forecastData
  } catch (err) {
    weather.value = null
    forecast.value = []

    if (err instanceof Error) {
      error.value = err.message
    } else {
      error.value = "Nastala neočakávaná chyba."
    }
  } finally {
    loading.value = false
  }
}
</script>

<template>
  <IonPage>
    <IonHeader>
      <IonToolbar>
        <IonTitle> Weather App </IonTitle>
      </IonToolbar>
    </IonHeader>

    <IonContent>
      <main class="page">
        <div class="container">
          <section class="hero">
            <p class="eyebrow">POČASIE</p>

            <h1>Aké je dnes počasie?</h1>

            <p class="subtitle">
              Vyhľadaj mesto a zobraz aktuálne počasie spolu so 7-dňovou
              predpoveďou.
            </p>
          </section>

          <section class="search-section">
            <div class="search-card">
              <SearchBar @search="handleSearch" />
            </div>
          </section>

          <section v-if="loading" class="loading-section">
            <IonSpinner name="crescent" />

            <p>Načítavam počasie...</p>
          </section>

          <section v-if="error" class="error-section">
            <IonText color="danger">
              <p>
                {{ error }}
              </p>
            </IonText>
          </section>

          <section v-if="weather && !loading" class="weather-section">
            <WeatherCard :city="city" :weather="weather" />

            <ForecastCard v-if="forecast.length" :forecast="forecast" />
          </section>
        </div>
      </main>
    </IonContent>
  </IonPage>
</template>

<style scoped>
.page {
  min-height: 100%;
  background: var(--ion-background-color);
}

.container {
  width: min(100% - 32px, 960px);
  margin: 0 auto;
  padding: 48px 0 64px;
}

.hero {
  max-width: 700px;
  margin: 0 auto 32px;
  text-align: center;
}

.eyebrow {
  margin: 0 0 8px;
  font-size: 13px;
  font-weight: 700;
  letter-spacing: 2px;
  color: var(--ion-color-primary);
}

.hero h1 {
  margin: 0;
  font-size: clamp(32px, 5vw, 52px);
  font-weight: 700;
  line-height: 1.1;
}

.subtitle {
  max-width: 600px;
  margin: 16px auto 0;
  color: var(--ion-color-medium);
  font-size: 17px;
  line-height: 1.6;
}

.search-section {
  max-width: 680px;
  margin: 0 auto 32px;
}

.search-card {
  padding: 20px;
  border: 1px solid var(--ion-color-light-shade);
  border-radius: 16px;
  background: var(--ion-background-color);
  box-shadow: 0 8px 30px rgb(0 0 0 / 8%);
}

.loading-section {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 160px;
  gap: 12px;
  color: var(--ion-color-medium);
}

.loading-section p {
  margin: 0;
}

.error-section {
  max-width: 680px;
  margin: 0 auto 24px;
  padding: 14px 18px;
  border-radius: 12px;
  background: var(--ion-color-danger-tint);
  text-align: center;
}

.error-section p {
  margin: 0;
}

.weather-section {
  display: flex;
  flex-direction: column;
  gap: 20px;
  max-width: 680px;
  margin: 0 auto;
}

.weather-section :deep(ion-card) {
  margin: 0;
  border-radius: 16px;
}

@media (max-width: 600px) {
  .container {
    width: min(100% - 24px, 960px);
    padding: 32px 0 48px;
  }

  .hero {
    margin-bottom: 24px;
  }

  .hero h1 {
    font-size: 34px;
  }

  .subtitle {
    font-size: 15px;
  }

  .search-card {
    padding: 16px;
    border-radius: 14px;
  }

  .search-section {
    margin-bottom: 24px;
  }

  .weather-section {
    gap: 16px;
  }
}

@media (min-width: 768px) {
  .container {
    padding-top: 64px;
  }
}
</style>
