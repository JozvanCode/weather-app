# Weather App

A modern weather application built with Vue 3, TypeScript, Ionic Vue and Open-Meteo.

The application allows users to search for a city and view its current weather conditions together with a 7-day forecast.

**Live demo:** https://weather-app.jozvancode.workers.dev

## Features

<<<<<<< HEAD

- Search weather by city
- Current weather conditions
- Feels-like temperature
- Humidity
- Wind speed
- 7-day weather forecast
- Weather condition icons
- Slovak localization
- Responsive design
- Loading and error states
- TypeScript type safety
- Automated tests
- ESLint and Prettier
- Automated CI with GitHub Actions
- Production deployment with Cloudflare
  \=======

* Search weather by city
* Current weather conditions
* Feels-like temperature
* Humidity
* Wind speed
* 7-day weather forecast
* Weather condition icons
* Slovak localization
* Responsive design
* Loading and error states
* TypeScript type safety
* Automated tests
* ESLint and Prettier
* Automated CI with GitHub Actions
* Production deployment with Cloudflare

> > > > > > > b39cc75d3ea47ccc8065d68bb2fb0000153b4323

## Tech Stack

### Frontend

<<<<<<< HEAD

- Vue 3
- TypeScript
- Ionic Vue
- Vite

### APIs

- Open-Meteo Geocoding API
- Open-Meteo Weather API

### Quality & Testing

- Vitest
- ESLint
- Prettier
- vue-tsc

### CI/CD & Deployment

- GitHub
- GitHub Actions
- Cloudflare Workers
  \=======

* Vue 3
* TypeScript
* Ionic Vue
* Vite

### APIs

- Open-Meteo Geocoding API
- Open-Meteo Weather API

### Quality & Testing

- Vitest
- ESLint
- Prettier
- vue-tsc

### CI/CD & Deployment

- GitHub
- GitHub Actions
- Cloudflare Workers

> > > > > > > b39cc75d3ea47ccc8065d68bb2fb0000153b4323

## Architecture

The application separates UI components, API services, types and utility functions.

```text
src/
├── components/
│   ├── ForecastCard.vue
│   ├── SearchBar.vue
│   └── WeatherCard.vue
├── services/
│   ├── geocodingApi.ts
│   └── weatherApi.ts
├── types/
│   └── weather.ts
├── utils/
│   ├── weatherCode.ts
│   └── weatherCode.test.ts
├── views/
│   └── HomePage.vue
├── App.vue
├── main.ts
└── theme/
    └── variables.css
```

### Data flow

```text
User
 │
 ▼
SearchBar
 │
 ▼
HomePage
 │
 ├── Geocoding API
 │       │
 │       ▼
 │   Coordinates
 │
 └── Weather API
         │
         ▼
    Weather data
         │
         ├── WeatherCard
         └── ForecastCard
```

The application first converts the searched city into geographic coordinates using the Open-Meteo Geocoding API. These coordinates are then used to request the current weather and 7-day forecast.

## Getting Started

### Requirements

<<<<<<< HEAD

- Node.js 22+
- npm 10+
  \=======

* Node.js 22+
* npm 10+

> > > > > > > b39cc75d3ea47ccc8065d68bb2fb0000153b4323

### Installation

Clone the repository:

```bash
git clone https://github.com/jozvancode/weather-app.git
cd weather-app
```

Install dependencies:

```bash
npm install
```

### Development

Start the development server:

```bash
npm run dev
```

The application will be available at:

```text
http://localhost:5173
```

## Available Scripts

| Command                | Description                          |
| ---------------------- | ------------------------------------ |
| `npm run dev`          | Start the development server         |
| `npm run build`        | Type-check and build the application |
| `npm run preview`      | Preview the production build         |
| `npm run type-check`   | Run TypeScript type checking         |
| `npm run lint`         | Run ESLint                           |
| `npm run format`       | Format the project with Prettier     |
| `npm run format:check` | Check code formatting                |
| `npm test`             | Run the test suite                   |

## Testing

Tests are written with Vitest.

The current test suite covers the weather-code mapping utility, including:

<<<<<<< HEAD

- Clear weather
- Mostly clear weather
- Cloudy weather
- Rain
- Snow
- Thunderstorms
- Unknown weather codes
  \=======

* Clear weather
* Mostly clear weather
* Cloudy weather
* Rain
* Snow
* Thunderstorms
* Unknown weather codes

> > > > > > > b39cc75d3ea47ccc8065d68bb2fb0000153b4323

Run tests with:

```bash
npm test
```

## Code Quality

Before deployment, the project runs several quality checks:

```text
TypeScript
    ↓
ESLint
    ↓
Prettier
    ↓
Vitest
    ↓
Production build
```

These checks are also executed automatically by GitHub Actions.

## CI/CD

The project uses GitHub Actions for continuous integration.

On pushes to `main` and pull requests targeting `main`, the CI pipeline:

1. Installs dependencies with `npm ci`
2. Runs TypeScript type checking
3. Runs ESLint
4. Checks Prettier formatting
5. Runs Vitest
6. Builds the production application

```text
GitHub
   │
   ├── Pull Request
   │       │
   │       ▼
   │   GitHub Actions
   │       │
   │       ├── TypeScript
   │       ├── ESLint
   │       ├── Prettier
   │       ├── Vitest
   │       └── Build
   │
   └── main
          │
          ▼
      Cloudflare
          │
          ▼
      Production
```

## Deployment

The production application is deployed using Cloudflare.

Live application:

https://weather-app.jozvancode.workers.dev

The application is built with:

```bash
npm run build
```

and deployed to Cloudflare after changes are pushed to the production branch.

## API

This project uses [Open-Meteo](https://open-meteo.com/) because it provides weather and geocoding data without requiring an API key for this application.

### Geocoding

The city search is handled by the Open-Meteo Geocoding API.

```text
City name
   ↓
Latitude + Longitude
```

### Weather

The coordinates are then used with the Open-Meteo Forecast API.

The application requests:

<<<<<<< HEAD

- Current temperature
- Apparent temperature
- Relative humidity
- Wind speed
- Weather code
- Daily maximum temperature
- Daily minimum temperature
- Daily weather code
  \=======

* Current temperature
* Apparent temperature
* Relative humidity
* Wind speed
* Weather code
* Daily maximum temperature
* Daily minimum temperature
* Daily weather code

> > > > > > > b39cc75d3ea47ccc8065d68bb2fb0000153b4323

## Project Goals

This project was built as a practical learning project to gain experience with:

<<<<<<< HEAD

- Vue 3
- TypeScript
- Component-based architecture
- REST API integration
- Asynchronous data handling
- Error handling
- Automated testing
- Code quality tooling
- CI/CD
- Cloud deployment
  \=======

* Vue 3
* TypeScript
* Component-based architecture
* REST API integration
* Asynchronous data handling
* Error handling
* Automated testing
* Code quality tooling
* CI/CD
* Cloud deployment

> > > > > > > b39cc75d3ea47ccc8065d68bb2fb0000153b4323

## Future Improvements

Possible future improvements include:

<<<<<<< HEAD

- Automatic geolocation
- Search history
- Favorite cities
- More detailed hourly forecast
- Weather charts
- Dark mode
- Unit selection
- Improved accessibility
- Progressive Web App support
- Cloudflare Worker API proxy
- Caching weather responses
  \=======

* Automatic geolocation
* Search history
* Favorite cities
* More detailed hourly forecast
* Weather charts
* Dark mode
* Unit selection
* Improved accessibility
* Progressive Web App support
* Cloudflare Worker API proxy
* Caching weather responses

> > > > > > > b39cc75d3ea47ccc8065d68bb2fb0000153b4323

## License

This project is for educational and portfolio purposes.
