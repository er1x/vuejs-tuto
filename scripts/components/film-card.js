'use strict'

module.exports = Vue.component('film-card', {
  template: require('../../templates/film-card.html'),
  props: ['title', 'opening', 'seen'],
  methods: {
    toggleSeen: function () {
      this.seen = !this.seen
    }
  },
  computed: {
    seenText: function () {
      return this.seen ? 'Ya la he visto' : '¡Quiero verla!'
    }
  }
})
