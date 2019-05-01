<template>
  <ul class="social">
    <li class="social-item" v-for="img in imgs" :key="img.id">
      <a href="#"><img v-bind:src="'/static/img/social/'+img.name+'.png'" :alt="img.name" width="34" height="34"></a>
    </li>
  </ul>
</template>

<script>
// Experimentando *___*
export default {
  name: 'SocialLink',

  data () {
    return {
      imgs: [
        { name: 'linkedin' },
        { name: 'facebook' },
        { name: 'instagram' },
        { name: 'twitter' },
        { name: 'youtube' }
      ]
    }
  }
}
</script>

<style scoped>
  .social {
    display: flex;
    align-items: center;
  }
  .social a {
    display: block; /* flex */
    margin-left: 8px;
  }
</style>
