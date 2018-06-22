export interface GroupSeat {
  section: string
  row: number
  seat: number
}

interface GroupModelOptions {
  id: string
  seats: GroupSeat[]
}

export class GroupModel implements GroupModelOptions {
  id: string = ''
  seats: GroupSeat[] = []

  public constructor (options?: GroupModelOptions) {
    if (options) {
      this.id = options.id
      this.seats = options.seats
    }
  }
}
