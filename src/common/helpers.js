export const getURL = (data) => {
  if (data.position) {
    const latitude = data.position.coords.latitude
    const longitude = data.position.coords.longitude
    return `https://openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=b6907d289e10d714a6e88b30761fae22`
  } else {
    return `https://openweathermap.org/data/2.5/weather?q=${data.name}&appid=b6907d289e10d714a6e88b30761fae22`
  }
}

export const getLocationsBasedOnThreshold = (locations, settings) => {
  let locs = locations
  locs = locs.map((loc) => {
    loc.perfect = isLocationPerfect(loc, settings)
    return loc;
  })
  return locs;
}

export const isLocationPerfect = (location, settings) => {
  const allPerfect = []
  for (let key in settings) {
    var threshold = settings[key]
    if (key === 'temperature') {
      if (location.main.temp > threshold[0] && location.main.temp < threshold[1]) {
        allPerfect.push(true)
      } else {
        allPerfect.push(false)
      }
    }
    if(key === 'humidity') {
      if(location.main.humidity > threshold[0] && location.main.humidity < threshold[1]){
        allPerfect.push(true)
      } else {
        allPerfect.push(false)
      }
    }
    if(key === 'wind') {
      if(location.wind.speed > threshold[0] && location.wind.speed < threshold[1]){
        allPerfect.push(true)
      } else {
        allPerfect.push(false)
      }
    }
  }
  return allPerfect.length !== 0 && !allPerfect.includes(false)
}

export const isLocationInTheList = (locations, location)  => {
  return locations.filter(present => present.id === location.id).length === 0
}
