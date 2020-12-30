<template>
  <div class="download">
    <h2>ダウンロード</h2>
      <p>Android版</p>
      <span>ユーザー鍵を入力<br/></span>
      <input type="text" class="userkey" name="userKey" @input="setUserKey"><br/>
      <div style="margin:20px 15px;">
        <ul style="list-style: none;text-align:center">
          <li v-if="userKey == 'kh'"><a href="../downloads/app-kahalaHotelYokohamaUF2200-release.apk">ザ・カハラ・ホテル＆リゾート横浜</a></li>
          <li v-if="userKey == 'ic'"><a href="../downloads/app-interContinentalTKUF2200-release.apk">インターコンチネンタル東京ベイ</a></li> 
          <li v-if="userKey == 'mm'"><a href="../downloads/app-mesmUF2200-release.apk">メズム東京オートグラフコレクション</a></li>
          <li v-if="userKey == 'yb'"><a href="../downloads/app-yokohamaBayCourtClubUF2200-release.apk">横浜ベイコート倶楽部</a></li>
          <li v-if="userKey == 'rz'"><a href="../downloads/app-ritzCarltonNikkoUF2200-release.apk">ザ・リッツ・カールトン日光</a></li>
          <li v-if="userKey == 'te'"><a href="../downloads/app-tokyoEditionToranomonUF2200-release.apk">東京エディション虎ノ門</a></li>
          <li v-if="userKey == 'jw'"><a href="../downloads/app-JWMarriottNaraUF2200-release.apk">JWマリオットホテル奈良</a></li>
          <li v-if="userKey == 'gn'"><a href="../downloads/app-grandNikkoTKDaibaUF2200-release.apk">グランドニッコー東京台場</a></li>
          <li v-if="userKey == 'hy'"><a href="../downloads/app-hyattUF2200.apk">ハイアットプレイス</a></li> 
          <li v-if="userKey == 'cg'"><a href="../downloads/app-centricUF2200.apk">ハイアットセントリック銀座東京</a></li> 
          <li v-if="userKey == 'ht'"><a href="../downloads/app-hoshinoyaUF2200.apk">星のや東京</a></li> 
        </ul> 
      </div>
    <div class="copy">Copyright &copy; SHIN-NIPPON WEX CO.,LTD All Rights Reserved.</div>
  </div>
</template>
<script>
export default {
   name: "Download",
   computed: {
      userKey() { return this.$store.getters['userKey/userKey']},
   },
   methods: {
     setUserKey(e) {
       this.$store.dispatch('userKey/setUserKey', e.target.value)
     }
   }
}
</script>
<style lang="scss" scoped>
.download{
    padding-bottom: 50px;
}
.userkey{
   border-radius: 3px; /*ボックス角の丸み*/
   border: 2px solid #ddd; /*枠線*/
}
</style>