import Vue from 'vue'
import { Component, Prop } from 'vue-property-decorator'
import { TheaterSection, TheaterSectionRow } from '@/models/theater-section'
import { GroupModel } from '@/models/group'

@Component({})
export default class TheaterLayoutSection extends Vue {
  @Prop()
  section!: TheaterSection

  @Prop()
  groupData!: GroupModel[]
}
