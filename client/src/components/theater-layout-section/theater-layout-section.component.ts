import Vue from 'vue'
import { Component, Prop } from 'vue-property-decorator'
import { TheaterSection } from '@/models/theater-section'

@Component({})
export default class TheaterLayoutSection extends Vue {
  @Prop()
  section!: TheaterSection
}
