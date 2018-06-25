import { TheaterSection } from '@/models/theater-section'
import Vue from 'vue'
import { expect } from 'chai'
import { shallowMount } from '@vue/test-utils'
// @ts-ignore
import TheaterLayoutSection from './index.vue'
import { GroupCaption } from '@/components/theater-layout/theater-layout.component'

interface Props {
  section: TheaterSection,
  groupData: GroupCaption[]
}

describe('TheaterLayoutSection', () => {
  let propsData: Props

  it('render an empty section name when none is provided', () => {
    const wrapper = shallowMount(TheaterLayoutSection)
    expect(wrapper.find('h3').text()).to.be.an('string').that.is.empty
  })

  it('renders the section name', () => {
    propsData = {
      section: {
        name: 'section name',
        rows: []
      },
      groupData: []
    }

    const wrapper = shallowMount(TheaterLayoutSection, { propsData })

    expect(wrapper.find('h3').text()).to.equal('section name')
  })

  it('renders section rows', () => {
    propsData = {
      section: {
        name: 'section name',
        rows: [
          {
            row: 1,
            seats: [
              { seat: 1, rank: 'rank1' },
              { seat: 2, rank: 'rank2' }
            ]
          }
        ]
      },
      groupData: []

    }

    const wrapper = shallowMount(TheaterLayoutSection, { propsData })

    expect(wrapper.findAll('ul').length).to.equal(propsData.section.rows.length)
  })

  it('renders seats in section rows', () => {
    propsData = {
      section: {
        name: 'section name',
        rows: [
          {
            row: 1,
            seats: [
              { seat: 1, rank: 'rank1' },
              { seat: 2, rank: 'rank2' }
            ]
          }
        ]
      },
      groupData: []
    }

    const wrapper = shallowMount(TheaterLayoutSection, { propsData })
    const [firstRow] = propsData.section.rows

    expect(wrapper.findAll('ul li').length).to.equal(firstRow.seats.length)
  })

  it('renders a seat icon for NOT occupied seat', () => {
    propsData = {
      section: {
        name: 'section name',
        rows: [
          {
            row: 1,
            seats: [
              { seat: 1, rank: 'rank1' }
            ]
          }
        ]
      },
      groupData: []
    }

    const wrapper = shallowMount(TheaterLayoutSection, { propsData })
    const [firstRow] = propsData.section.rows
    const icon = wrapper.find('.theater-seat')

    expect(icon.is('.rank1')).to.be.true
  })

  it('renders a seat icon for occupied seat', () => {
    const sectionName = 'section name'

    propsData = {
      section: {
        name: sectionName,
        rows: [
          {
            row: 1,
            seats: [
              { seat: 1, rank: 'rank1' }
            ]
          }
        ]
      },
      groupData: [
         {
          group: {
            id: '+31611111111',
              seats: [
                {
                  section: sectionName,
                  row: 1,
                  seat: 1
                }
              ]
          },
          color: 'blue'
        }
      ]
    }

    const wrapper = shallowMount(TheaterLayoutSection, { propsData })
    const [firstRow] = propsData.section.rows
    const icon = wrapper.find('.theater-seat--group')

    expect(icon.attributes().style).to.contain('blue')
  })
})
