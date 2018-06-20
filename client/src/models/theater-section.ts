export interface TheaterSectionRowSeat {
  seat: number
  rank: string
}

export interface TheaterSectionRow {
  row: number
  seats: TheaterSectionRowSeat[]
}

export interface TheaterSection {
  mame: string
  rows: TheaterSectionRow[]
}
