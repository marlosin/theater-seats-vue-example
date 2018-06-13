<template>
  <div>
    <h1>Theater Layout - seats</h1>
    <theater-layout
      :layout="theaterLayout"
      :group-data="groupData"
    />
  </div>
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
  name: 'app',
  components: {
    TheaterLayout
  },
  data () {
    const data: DataType = {
      theaterLayout: {
        ranks: [],
        sections: []
      } as TheaterLayoutModel,
      groupData: [
        { id: '', seats: [] } as GroupModel
      ]
    }

    return data
  },
  mounted () {
    const load = async () => {
      const b = await TheaterService.getLayout()
      this.theaterLayout = b
    }

    load()
    // this.groupData = [
    //   {
    //     id: '+4412323232323232',
    //     seats: []
    //   } as GroupModel
    // ]
  }
})
</script>

<style lang="scss">
#app {
  font-family: 'Roboto', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  margin-top: 60px;
}
</style>
