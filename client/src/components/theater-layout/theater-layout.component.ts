import Vue from 'vue'
import { Component, Prop } from 'vue-property-decorator'
import { TheaterLayoutModel } from '@/models/theater-layout'
import { GroupModel } from '@/models/group'
// @ts-ignore
import TheaterLayoutSection from '@/components/theater-layout-section/index.vue'
import randomColor from 'randomcolor'

interface Caption {
  label: string
  color?: string
  styleClass?: string
}

@Component({ components: { TheaterLayoutSection } })
export default class TheaterLayout extends Vue {
  @Prop({ default: () => new TheaterLayoutModel() })
  theaterLayout!: TheaterLayoutModel

  @Prop({ default: () => [] })
  groupData!: GroupModel[]

  private get _rankCaptions (): Caption[] {
    return this.theaterLayout.ranks
      .map(rank => ({ label: rank, styleClass: rank }))
  }

  private get _groupDataCaptions (): Caption[] {
    return this.groupData
      .map(groupData => ({ label: groupData.id, color: randomColor() }))
  }

  public get captions (): Caption[] {
    return [
      ...this._rankCaptions,
      ...this._groupDataCaptions
    ]
  }
}
