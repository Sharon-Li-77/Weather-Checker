import request from 'superagent'

const URL =
  'https://api.open-meteo.com/v1/forecast?latitude=-36.8485&longitude=174.7635&hourly=temperature_2m,rain,weathercode'

export async function getWeather() {
  const response = await request.get(URL)
  return response.body.hourly
}
