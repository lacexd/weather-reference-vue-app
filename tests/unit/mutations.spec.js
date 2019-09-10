import mutations from "@/vuex/mutations.js"
const location = {
  "coord": {
    "lon": 19.08,
    "lat": 47.48
  },
  "weather": [{
    "id": 800,
    "main": "Clear",
    "description": "clear sky",
    "icon": "01n"
  }],
  "base": "stations",
  "main": {
    "temp": 12.59,
    "pressure": 1017,
    "humidity": 100,
    "temp_min": 11.67,
    "temp_max": 13.33
  },
  "visibility": 8000,
  "wind": {
    "speed": 2.51,
    "deg": 313.563
  },
  "clouds": {
    "all": 0
  },
  "dt": 1568065961,
  "sys": {
    "type": 1,
    "id": 6663,
    "message": 0.0074,
    "country": "HU",
    "sunrise": 1568002352,
    "sunset": 1568049012
  },
  "timezone": 7200,
  "id": 7284825,
  "name": "Budapest IX. keruelet",
  "cod": 200,
  "perfect": false
}

describe("SET_POST", () => {
  it("adds a location to the state", () => {
    const state = {
      locations: [location]
    }
    // mutations.addLocation(state, location)
    expect(state).toEqual({
      locations: [location]
    })
  })
})
