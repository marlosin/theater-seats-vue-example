import Vue from 'vue'
import { Component, Prop } from 'vue-property-decorator'
import { TheaterSection, TheaterSectionRow, TheaterSectionRowSeat } from '@/models/theater-section'
import { GroupCaption } from '@/components/theater-layout/theater-layout.component'
import { GroupSeat } from '@/models/group'

interface MappedSectionRowSeat {
  seat: number
  rank: string
  isOccupied: boolean
  color?: string
}

interface MappedSectionRow {
  row: number
  seats: MappedSectionRowSeat[]
}

interface SectionGroup {
  name: string
  rows: MappedSectionRow[];
}

@Component({})
export default class TheaterLayoutSection extends Vue {
  @Prop()
  section!: TheaterSection

  @Prop()
  groupData!: GroupCaption[]

  public get sectionGroup (): SectionGroup {
    return {
      name: this.section.name,
      rows: this._rows
    }
  }

  private get _rows(): MappedSectionRow[] {
    return this.section.rows.map(theaterSectionRowSeat => {
      return {
        row: theaterSectionRowSeat.row,
        seats: this._getSeats(theaterSectionRowSeat)
      }
    })
  }

  private _getSeats(theaterSectionRow: TheaterSectionRow): MappedSectionRowSeat[] {
    return theaterSectionRow.seats.map(theaterSectionRowSeat => {
      const { seat, rank } = theaterSectionRowSeat;
      const groupSeat = this._findGroupSeat(theaterSectionRow.row, theaterSectionRowSeat)
      return {
        seat,
        rank,
        isOccupied: Boolean(groupSeat),
        color: groupSeat ? groupSeat.color : undefined
      }
    })
  }

  public _findGroupSeat(rowNumber: number, theaterSectionRowSeat: TheaterSectionRowSeat): GroupCaption | undefined {
    const findSeat = (groupSeat: GroupSeat) => {
      return Boolean(groupSeat.row === rowNumber && groupSeat.seat === theaterSectionRowSeat.seat && groupSeat.section === this.section.name);
    }
    const findGroupSeat = (groupData: GroupCaption) => Boolean(groupData.group.seats.find(findSeat))

    return this.groupData.find(findGroupSeat)
  }
}
