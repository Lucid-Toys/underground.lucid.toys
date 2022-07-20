const { APP_KEY } = process.env

const API_URL = `https://api.tfl.gov.uk/line/mode/tube,overground,dlr,elizabeth-line/status?app_key=${APP_KEY}`
const BREAKPOINT = '600px'

export { API_URL, BREAKPOINT }
