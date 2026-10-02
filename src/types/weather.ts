export interface WeatherData {
  temperature: number
  feelsLike: number
  humidity: number
  windSpeed: number
  weatherCode: number
}

export interface ForecastDay {
  date: string
  temperatureMax: number
  temperatureMin: number
  weatherCode: number
}
