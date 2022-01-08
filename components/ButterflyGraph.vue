<template>
  <div :class="`id${id}`" />
</template>

<script>
import * as d3 from 'd3'
export default {
  props: {
    /** array of objects {"fecha":"dd-mm-yyyy", "hora":"", "t":number} */
    observacions: {
      type: Array,
      required: true
    },
    id: {
      type: Number,
      required: true
    }
  },
  computed: {
    observationsPerWeek () {
      const parseTime = d3.timeParse('%d-%m-%Y')
      const timeToWeek = d3.timeFormat('%V')
      const weeks = []
      this.$props.observacions.forEach((element) => {
        const elementDate = parseTime(element.fecha)
        const elementWeek = timeToWeek(elementDate)
        const index = weeks.findIndex(el => el.weekNumber === elementWeek)
        if (index === -1) {
          weeks.push({
            weekNumber: elementWeek,
            value: element.t
          })
        } else {
          weeks[index].value += element.t
        }
      })
      return weeks
    }
  },
  watch: {
    observacions: function () {
      this.clearGraph()
      this.$nextTick(() => {
        this.drawGraph()
      })
    }
  },
  mounted () {
    this.clearGraph()
    this.$nextTick(() => {
      this.drawGraph()
    })
  },
  methods: {
    drawGraph () {
      const canvas = d3.select(`.id${this.id}`)
      const svg = canvas.append('svg')
        .attr('width', 300)
        .attr('height', 100)
      const xScale = d3.scaleLinear()
        .domain([9, 44])
        .range([25, 275])
      const rScale = d3.scaleLinear()
        .domain([0, 4000])
        .range([2, 210])
      const xAxis = d3.axisBottom(xScale)
      svg.selectAll('circle')
        .data(this.observationsPerWeek)
        .enter()
        .append('circle')
        .attr('cx', d => xScale(d.weekNumber))
        .attr('cy', 40)
        .attr('r', d => rScale(d.value))
        .attr('fill', 'blue')
      svg.append('g')
        .call(xAxis)
        .attr('transform', 'translate(0,68)')
    },
    clearGraph () {
      const canvas = d3.select(`.id${this.id}`)
      const svg = canvas.select('svg')
      svg.remove()
    }
  }
}

</script>

<style scoped>
p {
  font-size: .7rem;
}
</style>
