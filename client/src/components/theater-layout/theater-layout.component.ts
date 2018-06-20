import Vue from 'vue'
// import { Emit, Prop, Watch } from 'vue-property-decorator'
import { Component, Prop } from 'vue-property-decorator'
import { TheaterLayoutModel } from '@/models/theater-layout'
import { GroupModel } from '@/models/group'
// @ts-ignore
import TheaterLayoutSection from '@/components/theater-layout-section/index.vue'

@Component({ components: { TheaterLayoutSection } })
export default class TheaterLayout extends Vue {
  @Prop({ default: () => new TheaterLayoutModel() })
  theaterLayout!: TheaterLayoutModel

  @Prop({ default: () => [] })
  groupData!: GroupModel[]
}
