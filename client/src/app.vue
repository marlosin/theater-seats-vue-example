<template>
  <main>
    <header>
      <i class="material-icons app-icon">home</i>
      <h1>Theater Layout</h1>
    </header>
    <theater-layout
      :theater-layout="theaterLayout"
      :group-data="groupData"
    />
  </main>
</template>

<script lang="ts">
import Vue from 'vue'
// @ts-ignore
import TheaterLayout from '@/components/theater-layout/index.vue'
import { theaterService } from './services/theater.service'
import { TheaterLayoutModel } from './models/theater-layout'
import { DataType } from './models/data-type'
import { GroupModel } from './models/group'
import { Component } from 'vue-property-decorator'

@Component({ components: { TheaterLayout } })
export default class App extends Vue {
  name = 'app'
  theaterLayout: TheaterLayoutModel = new TheaterLayoutModel()
  groupData: GroupModel[] = []

  public created (): void {
    const loadData = async () => {
      this.theaterLayout = await theaterService.getLayout()
      this.groupData = await theaterService.getGroupData()
    }

    loadData()
  }
}
</script>

<style src="./styles/app.scss" lang="scss"></style>
