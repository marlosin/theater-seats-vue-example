interface TheaterRowSeat {
  seat: number
  rank: string
}

interface TheaterRow {
  row: number
  seats: TheaterRowSeat[]
}

interface TheaterSection {
  mame: string
  rows: TheaterRow[]
}

interface TheaterLayoutOptions {
  ranks: string[]
  sections: TheaterSection[]
}

export class TheaterLayoutModel implements TheaterLayoutOptions {
  ranks: string[]
  sections: TheaterSection[]

  constructor (options: TheaterLayoutOptions) {
    this.ranks = options.ranks
    this.sections = options.sections
  }
}
