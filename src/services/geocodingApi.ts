export interface LocationData {
  name: string
  latitude: number
  longitude: number
  country: string
}

const BASE_URL = "https://geocoding-api.open-meteo.com/v1/search"

export const searchLocation = async (city: string): Promise<LocationData> => {
  const url = new URL(BASE_URL)

  url.searchParams.set("name", city)
  url.searchParams.set("count", "1")
  url.searchParams.set("language", "sk")
  url.searchParams.set("format", "json")

  const response = await fetch(url)

  if (!response.ok) {
    throw new Error("Nepodarilo sa vyhľadať mesto.")
  }

  const data = await response.json()

  if (!data.results || data.results.length === 0) {
    throw new Error("Mesto sa nepodarilo nájsť.")
  }

  const location = data.results[0]

  return {
    name: location.name,
    latitude: location.latitude,
    longitude: location.longitude,
    country: location.country,
  }
}
