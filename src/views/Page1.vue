<template>
  <lu-row>
    <h1>Sidan 1</h1>
    <h2>Test av Vue och lu-mall</h2>
    <lu-spinner v-show="true" text="Loading" />
    <span>
      Which build tool to choose is largely dependent on your experience and needs. Webpack-based setup offers more powerful features such as code splitting, processing static assets as module dependencies and extracting component CSS into a separate file, but can be a bit more complex to configure. Browserify can be easier to setup in scenarios where you don’t need the advanced features that Webpack offers.
    </span>

    <template v-slot:right-column>
      <lu-infobox title="Info">
        <p>Something important</p>
        <hr>
        <p>And a little more text. Just for filling the box
          so it looks slightly nicer.
        </p>
      </lu-infobox>
    </template>
  </lu-row>
</template>

<script>
import { LuRow, LuInfobox, LuSpinner } from '@lu.se/vue-template'

export default {
  name: 'Page1',
  components: {
    LuRow,
    LuInfobox,
    LuSpinner
  },
  data () {
    return {
    }
  }
}
</script>
