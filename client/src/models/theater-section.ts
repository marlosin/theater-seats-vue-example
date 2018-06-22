export interface TheaterSectionRowSeat {
  seat: number
  rank: string
}

export interface TheaterSectionRow {
  row: number
  seats: TheaterSectionRowSeat[]
}

export interface TheaterSection {
  name: string
  rows: TheaterSectionRow[]
}
