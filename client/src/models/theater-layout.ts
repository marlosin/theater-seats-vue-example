import { TheaterSection } from '@/models/theater-section'

interface TheaterLayoutOptions {
  ranks: string[]
  sections: TheaterSection[]
}

export class TheaterLayoutModel implements TheaterLayoutOptions {
  ranks: string[] = []
  sections: TheaterSection[] = []

  constructor (options?: TheaterLayoutOptions) {
    if (options) {
      this.ranks = options.ranks
      this.sections = options.sections
    }
  }
}
