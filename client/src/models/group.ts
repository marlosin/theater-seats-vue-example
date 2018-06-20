interface GroupSection {
  section: string
  row: string
  seat: string
}

interface GroupModelOptions {
  id: string
  seats: GroupSection[]
}

export class GroupModel implements GroupModelOptions {
  id: string
  seats: GroupSection[]

  public constructor (options: GroupModelOptions) {
    this.id = options.id
    this.seats = options.seats
  }
}
