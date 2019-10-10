<template>
  <lu-row>
    <h1>Sidan 2</h1>
    <h2>Test av Vue och lu-mall</h2>
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
