import { nasaApi } from "./AxiosService"
import { logger } from "../utils/Logger"
import { AppState } from "../AppState"

const baseQuery = {
  api_key: '5qOogkDDz49cxaQagwD3cj0D1jnNvKfnaaHyR46c',
  date: ''
}

class DatesService {
  async date(date) {
    baseQuery.date = date
    const res = await nasaApi.get('', { params: baseQuery })
    logger.log(res.data)
    AppState.planet = res.data
  }
}
export const datesService = new DatesService()