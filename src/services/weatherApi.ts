import type { WeatherData, ForecastDay } from "../types/weather"

const BASE_URL = "https://api.open-meteo.com/v1/forecast"

export const getWeather = async (
  latitude: number,
  longitude: number,
): Promise<WeatherData> => {
  const url = new URL(BASE_URL)

  url.searchParams.set("latitude", latitude.toString())
  url.searchParams.set("longitude", longitude.toString())

  url.searchParams.set(
    "current",
    "temperature_2m,relative_humidity_2m,apparent_temperature,weather_code,wind_speed_10m",
  )

  const response = await fetch(url)

  if (!response.ok) {
    throw new Error("Nepodarilo sa načítať počasie.")
  }

  const data = await response.json()

  return {
    temperature: data.current.temperature_2m,
    feelsLike: data.current.apparent_temperature,
    humidity: data.current.relative_humidity_2m,
    windSpeed: data.current.wind_speed_10m,
    weatherCode: data.current.weather_code,
  }
}

export const getForecast = async (
  latitude: number,
  longitude: number,
): Promise<ForecastDay[]> => {
  const url = new URL(BASE_URL)

  url.searchParams.set("latitude", latitude.toString())
  url.searchParams.set("longitude", longitude.toString())

  url.searchParams.set(
    "daily",
    "temperature_2m_max,temperature_2m_min,weather_code",
  )

  url.searchParams.set("forecast_days", "7")
  url.searchParams.set("timezone", "auto")

  const response = await fetch(url)

  if (!response.ok) {
    throw new Error("Nepodarilo sa načítať predpoveď.")
  }

  const data = await response.json()

  return data.daily.time.map((date: string, index: number): ForecastDay => ({
    date,
    temperatureMax: data.daily.temperature_2m_max[index],
    temperatureMin: data.daily.temperature_2m_min[index],
    weatherCode: data.daily.weather_code[index],
  }))
}
