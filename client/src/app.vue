<template>
  <main>
    <header>
      <i class="material-icons app-icon">home</i>
      <h1>Theater Layout</h1>
    </header>
    <theater-layout
      :layout="theaterLayout"
      :group-data="groupData"
    />
  </main>
</template>

<script lang="ts">
import Vue from 'vue'
// @ts-ignore
import TheaterLayout from '@/components/theater-layout/index.vue'
import TheaterService from './services/theater.service'
import { TheaterLayoutModel } from './models/theater-layout'
import { DataType } from './models/data-type'
import { GroupModel } from './models/group'

export default Vue.extend({
  // eslint-disable-next-line space-infix-ops
  name: 'app',
  components: {
    TheaterLayout
  },
  data () {
    const data: DataType = {
      theaterLayout: {
        ranks: [],
        sections: []
      },
      groupData: [
        { id: '', seats: [] }
      ]
    }

    return data
  },
  async mounted () {
    this.theaterLayout = await TheaterService.getLayout()
    this.groupData = await TheaterService.getGroupData()
  }
})
</script>

<style src="./styles/app.scss" lang="scss"></style>
