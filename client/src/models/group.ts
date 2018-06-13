interface GroupSection {
  section: string
  row: string
  seat: string
}

export interface GroupModel {
  id: string
  seats: GroupSection[]
}
