'use strict'

var Vue = require('vue')
Vue.use(require('vue-resource'))

var FilmCard = require('./components/film-card.vue')

new Vue({
  el: '#app',
  data: {
    films: []
  },
  components: {
    'film-card': FilmCard
  },
  created: function () {
    this.$http.get('https://swapi.co/api/films/')
              .then(function (response) {
                this.films = response.data.results.map(function (film) {
                  return {
                    id: film.episode_id,
                    title: film.title,
                    opening: film.opening_crawl,
                    seen: false
                  }
                })
              }.bind(this))
  }
})
