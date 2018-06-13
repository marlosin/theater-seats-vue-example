import axios, { AxiosResponse } from 'axios'
import { TheaterLayoutModel } from '@/models/theater-layout'

class TheaterService {
  private static _instance: TheaterService

  // eslint-disable-next-line no-useless-constructor
  private constructor () {}

  public static getInstance (): TheaterService {
    return new TheaterService()
  }

  public async getLayout () {
    const response: AxiosResponse<TheaterLayoutModel> = await axios.get('/layout.json')

    return new TheaterLayoutModel(response.data)
  }
}

export default TheaterService.getInstance()
