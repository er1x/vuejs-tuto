'use strict'

require('./components/film-card')

new Vue({
  el: '#app',
  data: {
    films: []
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
