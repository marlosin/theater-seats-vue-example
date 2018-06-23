import axios, { AxiosResponse } from 'axios'
import { TheaterLayoutModel } from '@/models/theater-layout'
import { GroupModel } from '@/models/group'

const api = '/api'

class TheaterService {
  public async getLayout () {
    const response: AxiosResponse<TheaterLayoutModel> = await axios.get(`${api}/layout`)

    return new TheaterLayoutModel(response.data)
  }

  public async getGroupData () {
    const response: AxiosResponse<GroupModel[]> = await axios.get(`${api}/groups`)

    return response.data.map(group => new GroupModel(group))
  }
}

export const theaterService = new TheaterService()
