<style scoped>
  .film {
    text-align: center;
  }

  .film.seen {
    text-decoration: line-through;
  }

  .panel-body {
    position: relative;
  }

  .seen::before {
    background-color: rgba(0, 0, 0, 0.5);
    height: 100%;
    width: 100%;
    position: absolute;
    display: block;
    left: 0;
    top: 0;
  }
</style>

<template>
  <div class="panel panel-primary">
    <div class="panel-heading">
      <h3 class="panel-title">{{* title }}</h3>
    </div>
    <div class="panel-body" :class="{'seen': seen}">
      {{* opening }}
    </div>
    <button class="btn btn-block"
            :class="{'btn-danger': seen, 'btn-success': !seen}"
            @click="toggleSeen"
    >
      {{ seenText }}
    </button>
  </div>
</template>C

<script>
  export default {
    props: ['title', 'opening', 'seen'],
    methods: {
      toggleSeen() {
        this.seen = !this.seen
      }
    },
    computed: {
      seenText() {
        return this.seen ? 'Ya la he visto' : '¡Quiero verla!'
      }
    }
  }
</script>
