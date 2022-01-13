import parcList from './parcs.json'

export const state = () => ({
  data: [],
  especiesParcSeleccionat: [],
  especiesFiltrades: [],
  parcList,
  fetched: null,
  colors: [
    ['Papilionidae', '#8d95a666'],
    ['Hesperiidae', '#a6625365'],
    ['Pieridae', '#a8bfb577'],
    ['Nymphalidae', '#f2cb9b99'],
    ['Lycaenidae', '#9386a655']
  ]
})

export const getters = {
  fetchedStatus: (state) => {
    return state.fetched
  },
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
          totalArray[index][1] = [...totalArray[index][1], ...especie[1]]
        }
      })
    })
    return totalArray
  },
  getParcsWithSpecies: state => (species) => {
    const parcsWithSpecies = []
    state.data.forEach((parc) => {
      const index = parc.observacions.findIndex(observacio => observacio[0] === species)
      if (index > -1) {
        const exemplars = parc.observacions[index][1].reduce((prev, curr) => prev + curr.t, 0)
        parcsWithSpecies.push({
          parc: parc.nom,
          recomptes: parc.observacions[index][1].length,
          exemplars
        })
      }
    })
    return parcsWithSpecies
  },
  getFamilyColor: state => (family) => {
    const index = state.colors.findIndex(el => el[0] === family)
    return {
      '--sp-color': state.colors[index][1]
    }
  }
}

export const mutations = {
  populateData (state, data) {
    state.data = data
  },
  changeFetchedStatus (state, bool) {
    state.fetched = bool
  }
}

export const actions = {
  setInitialData ({ commit }) {
    commit('changeFetchedStatus', false)
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
        commit('changeFetchedStatus', true)
      })
  }
}
