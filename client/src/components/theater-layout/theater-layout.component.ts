import Vue from 'vue'
import Component from 'vue-class-component'
// import { Emit, Prop, Watch } from 'vue-property-decorator'
import { Prop } from 'vue-property-decorator'
import { TheaterLayoutModel } from '@/models/theater-layout'
import { GroupModel } from '@/models/group'

@Component({})
export default class TheaterLayout extends Vue {
  @Prop() theaterLayout!: TheaterLayoutModel
  addingTheaterLayout = !this.theaterLayout
  editingTheaterLayout = null

  @Prop() groupData!: GroupModel[]
  addingGroupData = !this.groupData
  editingGroupData = null

  $refs!: {
    id: HTMLElement,
    name: HTMLElement
  }
}
