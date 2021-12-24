import parcList from './parcs.json'

export const state = () => ({
  counter: 0,
  data: [],
  especiesParcSeleccionat: [],
  especiesFiltrades: [],
  parcList,
  fetching: null
})

export const getters = {
  getParcData: state => (nom) => {
    return state.data.filter(parc => parc.nom === nom)[0]
  },
  getTotalData: (state) => {
    const totalEspecies = []
    const totalArray = []
    state.data.forEach((parc) => {
      parc.observacions.forEach((especie) => {
        if (!totalEspecies.includes(especie[0])) {
          totalEspecies.push(especie[0])
          totalArray.push(especie)
        } else {
          const index = totalArray.findIndex(el => el[0] === especie[0])
          console.log(especie[0], index)
          totalArray[index][1] = [...totalArray[index][1], ...especie[1]]
        }
      })
    })
    return totalArray
  }
}

export const mutations = {
  populateData (state, data) {
    state.data = data
  }
}

export const actions = {
  setInitialData ({ commit }) {
    async function fetchData () {
      const response = await fetch('https://ubmsapp.creaf.cat/public_map/data/?sp=')
      const data = await response.json()
      return data
    }
    fetchData()
      .then((data) => {
        const dataBarna = Object.entries(data).filter(([key]) => key.includes('BARCELONA'))
        parcList.forEach((parc) => {
          const especies = dataBarna.filter(([key]) => key.includes(parc.clau))
          especies.forEach((arr) => {
            arr[0] = arr[0].replace(/.*\)\s/, '')
            arr[2] = arr[1].muestreos
            arr.splice(1, 1)
          })
          parc.observacions = especies
        })
        commit('populateData', parcList)
      })
  }
}
