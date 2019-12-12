<script>
    import 'swiper/dist/css/swiper.css'

    import { swiper, swiperSlide } from 'vue-awesome-swiper'

    export default {
    name: 'EventBanner',
    components: {
        swiper,
        swiperSlide
    },
    data() {
      return {
        swiperOption: {
            slidesPerView: 1,
            centerMode: true,
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev'
            },
            pagination: {
                el: '.swiper-pagination',
            }
        }
      }
    }
}
</script>

<template>
    
    <section class="col-12 section section-banner">
        
        <swiper :options="swiperOption" class=" banner-slide">
            <!-- slides -->
                <swiper-slide>
                    <a href="#k-content-expo-2019" title="K-Content Expo 2019">
                        <div class="banner-slide-item" align="center">
                            <img class="bg-slider img-fluid" src="https://ecm-prd-pub.s3.ap-southeast-1.amazonaws.com/kfestival/assets/img/billboards/mbb_kcontent.jpg" alt="K-Content Event Billboard" />
                        </div>
                    </a>
                </swiper-slide>
                <swiper-slide>
                    <a href="#seoul-food-from-home" title="Seoul Food From Home">
                        <div class="banner-slide-item" align="center">
                            <img class="bg-slider img-fluid" src="https://ecm-prd-pub.s3.ap-southeast-1.amazonaws.com/kfestival/assets/img/billboards/mbb_kfood.jpg" alt="Seoul Food From Home" />
                        </div>
                    </a>
                </swiper-slide>
                <swiper-slide>
                    <a href="#hangul-day" title="Hangul Day">
                        <div class="banner-slide-item" align="center">
                            <img class="bg-slider img-fluid" src="https://ecm-prd-pub.s3.ap-southeast-1.amazonaws.com/kfestival/assets/img/billboards/mbb_hangulday.jpg" alt="Hangul Day Event Billboard" />
                        </div>
                    </a>
                </swiper-slide>
                <swiper-slide>
                    <a href="#korea-indonesia-film-festival" title="Korea Indonesia Film Festival">
                        <div class="banner-slide-item" align="center">
                            <img class="bg-slider img-fluid" src="https://ecm-prd-pub.s3.ap-southeast-1.amazonaws.com/kfestival/assets/img/billboards/mbb_koreanculture.jpg" alt="Korea - Indonesia 10th Film Festival Billboard" />
                        </div>
                    </a>
                </swiper-slide>
                
                <!-- Optional controls -->
                <div class="swiper-button-prev" slot="button-prev"></div>
                <div class="swiper-button-next" slot="button-next"></div>
                <div class="swiper-pagination"  slot="pagination"></div>

        </swiper>
    </section>
</template>