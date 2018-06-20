interface TheaterRowSeat {
  seat: number
  rank: string
}

interface TheaterRow {
  row: number
  seats: TheaterRowSeat[]
}

export interface TheaterSection {
  mame: string
  rows: TheaterRow[]
}
