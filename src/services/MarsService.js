import { AppState } from "../AppState"
import { logger } from "../utils/Logger"
import { marsApi } from "./AxiosService"


const baseQuery = {
  api_key: '5qOogkDDz49cxaQagwD3cj0D1jnNvKfnaaHyR46c',
  earth_date: ''
}

class MarsService {
  async mars(mars) {
    baseQuery.earth_date = mars
    const res = await marsApi.get('', { params: baseQuery })
    logger.log(res.data)
    AppState.mars = res.data.photos
  }

}

export const marsService = new MarsService()