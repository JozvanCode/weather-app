import {
  cloudOutline,
  partlySunnyOutline,
  rainyOutline,
  snowOutline,
  sunnyOutline,
  thunderstormOutline,
} from "ionicons/icons"

export interface WeatherInfo {
  description: string
  icon: string
}

export const getWeatherInfo = (code: number): WeatherInfo => {
  switch (code) {
    case 0:
      return {
        description: "Jasno",
        icon: sunnyOutline,
      }

    case 1:
    case 2:
      return {
        description: "Prevažne jasno",
        icon: partlySunnyOutline,
      }

    case 3:
      return {
        description: "Zamračené",
        icon: cloudOutline,
      }

    case 45:
    case 48:
      return {
        description: "Hmla",
        icon: cloudOutline,
      }

    case 51:
    case 53:
    case 55:
      return {
        description: "Mrholenie",
        icon: rainyOutline,
      }

    case 61:
    case 63:
    case 65:
      return {
        description: "Dážď",
        icon: rainyOutline,
      }

    case 71:
    case 73:
    case 75:
      return {
        description: "Sneženie",
        icon: snowOutline,
      }

    case 80:
    case 81:
    case 82:
      return {
        description: "Prehánky",
        icon: rainyOutline,
      }

    case 95:
    case 96:
    case 99:
      return {
        description: "Búrka",
        icon: thunderstormOutline,
      }

    default:
      return {
        description: "Neznáme počasie",
        icon: cloudOutline,
      }
  }
}
