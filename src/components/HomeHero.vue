<template>
   <section class="home-hero">
       <v-container fluid fill-height class="home-hero__content">
           <v-row>
               <v-col class="home-hero__content-text">
                   <p>Welcom to WEXLIVE</p>
                   <p>スマホアプリダウンロードサイト</p>
               </v-col>
           </v-row>
       </v-container>
   </section> 
</template>
<style lang="scss" scoped>
.home-hero__content {
/*    background: url("../assets/logo.png");*/
    background-size: cover;
    background-position: center center;
    width: 100%;
    height: 50vh;

    @include display_pc {
        height: 100vh !important;
    }

    &-text {
        color: red;
        text-align: center;
        font-size: 16px;
        font-weight: bold;

        @include display_pc {
            font-size: 28px !important;
        }
    }
}
</style>