import { GroupModel } from '@/models/group'
import { TheaterLayoutModel } from '@/models/theater-layout'

export interface DataType {
  theaterLayout: TheaterLayoutModel
  groupData: GroupModel[]
}
