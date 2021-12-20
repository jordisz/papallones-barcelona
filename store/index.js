import parcList from './parcs.json'

export const state = () => ({
  counter: 0,
  data: [],
  especiesParcSeleccionat: [],
  especiesFiltrades: [],
  parcList
})

export const getters = {
  getParcData: state => (nom) => {
    return state.data.filter(parc => parc.nom === nom)[0]
  }
}

export const mutations = {
  populateData (state, data) {
    state.data = data
  }
}

export const actions = {
  getData ({ commit }) {
    fetch('https://ubmsapp.creaf.cat/public_map/data/?sp=')
      .then((response) => {
        return response.json()
      })
      .then((data) => {
        const dataBarna = Object.entries(data).filter(([key]) => key.includes('BARCELONA'))
        parcList.forEach((parc) => {
          parc.especies = dataBarna.filter(([key]) => key.includes(parc.clau))
          parc.especies.forEach((arr) => {
            arr[0] = arr[0].replace(/.*\)\s/, '')
          })
        })
        commit('populateData', parcList)
      })
      .catch(error => console.error('ERROR:', error))
  }
}
