<template>
  <lu-row>
    <h1>Sidan 2</h1>
    <h2>Test av Vue och lu-mall</h2>
    <div class="masonry-tile">
      <a
        class="masonry-tile-img"
      >

        <div class="masonry-tile-img-bg">
          <img
            src="@/assets/logo.png"
            alt="Ekonomihögskolans finansprogram bland de 50 bästa i världen"
          >
        </div>
        <div class="masonry-tile-img-content">
          <div class="blockline">
            <h1>
              <span class="a nav-block-link">Ekonomihögskolans finansprogram bland de 50 bästa i världen&nbsp;<i class="fal fa-chevron-circle-right fa-sm" /></span>
            </h1>
          </div>
        </div>
      </a>
    </div>
    <span>
      Redmine is a free and open source project management and issue tracking application. It is cross-platform and cross-database and built on top of the Ruby on Rails framework.

      Redmine includes support for multiple projects, wikis, issue tracking system, forums, calendars, email notifications, and much more.

      In this tutorial, we’ll show you how to install and configure the latest version of Redmine on a Debian 9 server using MySQL as a database back-end and Passenger + Nginx as a Ruby application server.

    </span>
  </lu-row>
</template>

<script>
import { LuRow } from '@lu.se/vue-template'

export default {
  name: 'Page2',
  components: {
    LuRow
  },
  data () {
    return {
    }
  }
}
</script>
