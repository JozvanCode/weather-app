import { describe, expect, it } from "vitest"

import { getWeatherInfo } from "./weatherCode"

describe("getWeatherInfo", () => {
  it("returns clear weather for code 0", () => {
    const result = getWeatherInfo(0)

    expect(result.description).toBe("Jasno")
  })

  it("returns mostly clear weather for code 1", () => {
    const result = getWeatherInfo(1)

    expect(result.description).toBe("Prevažne jasno")
  })

  it("returns cloudy weather for code 3", () => {
    const result = getWeatherInfo(3)

    expect(result.description).toBe("Zamračené")
  })

  it("returns rain for code 63", () => {
    const result = getWeatherInfo(63)

    expect(result.description).toBe("Dážď")
  })

  it("returns snow for code 73", () => {
    const result = getWeatherInfo(73)

    expect(result.description).toBe("Sneženie")
  })

  it("returns thunderstorm for code 95", () => {
    const result = getWeatherInfo(95)

    expect(result.description).toBe("Búrka")
  })

  it("returns fallback for an unknown code", () => {
    const result = getWeatherInfo(999)

    expect(result.description).toBe("Neznáme počasie")
  })
})
