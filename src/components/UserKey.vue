<template>
   <div>
      <input type="text" name="userKey" @input="setUserKey"><br/>
      <span>userKey {{ userKey }}</span>
   </div> 
</template>
<script>
export default {
   name: "UserKey",
   computed: {
      userKey() { return this.$store.getters['userKey/userKey']},
   },
   methods: {
     setUserKey(e) {
       this.$store.dispatch('userKey/setUserKey', e.target.value)
     }
}
</script>
<style scoped>
</style>