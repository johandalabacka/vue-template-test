<template>
  <lu-row>
    <h1>Sidan 3</h1>
    <h2>Test av Vue och lu-mall</h2>
    <span>
      Lorem Ipsum är en utfyllnadstext från tryck- och förlagsindustrin. Lorem ipsum har varit standard ända sedan 1500-talet, när en okänd boksättare tog att antal bokstäver och blandade dem för att göra ett provexemplar av en bok. Lorem ipsum har inte bara överlevt fem århundraden, utan även övergången till elektronisk typografi utan större förändringar. Det blev allmänt känt på 1960-talet i samband med lanseringen av Letraset-ark med avsnitt av Lorem Ipsum, och senare med mjukvaror som Aldus PageMaker.
    </span>
  </lu-row>
</template>

<script>
import { LuRow } from '@lu.se/vue-template'

export default {
  name: 'Page3',
  components: {
    LuRow
  },
  data () {
    return {
    }
  }
}
</script>
