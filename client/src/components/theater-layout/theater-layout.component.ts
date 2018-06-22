import Vue from 'vue'
import { Component, Prop } from 'vue-property-decorator'
import { TheaterLayoutModel } from '@/models/theater-layout'
import { GroupModel } from '@/models/group'
// @ts-ignore
import TheaterLayoutSection from '@/components/theater-layout-section/index.vue'
import randomColor from 'randomcolor'

interface RankCaption {
  label: string
  styleClass: string
}

export interface GroupCaption {
  group: GroupModel
  color: string
}

const _groupColor = (): string => randomColor({ hue: 'orange' })

@Component({ components: { TheaterLayoutSection } })
export default class TheaterLayout extends Vue {
  @Prop({ default: () => new TheaterLayoutModel() })
  theaterLayout!: TheaterLayoutModel

  @Prop({ default: () => [] })
  groupData!: GroupModel[]

  public get rankCaptions (): RankCaption[] {
    return this.theaterLayout.ranks
      .map(rank => ({ label: rank, styleClass: rank }))
  }

  public get groupDataCaptions(): GroupCaption[] {
    return this.groupData
      .map(group => ({ group, color: _groupColor() }))
  }
}
