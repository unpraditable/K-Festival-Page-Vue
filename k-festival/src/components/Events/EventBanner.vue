<script>
    import { Carousel, Slide } from 'vue-carousel';

    export default {
    name: 'EventBanner',
    components: {
        Carousel,
        Slide
    }
}
</script>

<template>
    
    <section class="col-12 section section-banner">
        <carousel :per-page="1" class="col-12 banner-slide" align="center">
            <slide>
                <a href="#k-content-expo-2019" title="K-Content Expo 2019">
                    <div class="banner-slide-item" align="center">
                        <img class="bg-slider" src="https://ecm-prd-pub.s3.ap-southeast-1.amazonaws.com/kfestival/assets/img/billboards/mbb_kcontent.jpg" width="100%" alt="K-Content Event Billboard" />
                    </div>
                </a>
            </slide>

            <slide>
                <a href="#seoul-food-from-home" title="Seoul Food From Home">
                    <div class="banner-slide-item" align="center">
                        <img class="bg-slider" src="https://ecm-prd-pub.s3.ap-southeast-1.amazonaws.com/kfestival/assets/img/billboards/mbb_kfood.jpg" width="100%" alt="Seoul Food From Home" />
                    </div>
                </a>
            </slide>

            <slide>
                <a href="#hangul-day" title="Hangul Day">
                    <div class="banner-slide-item" align="center">
                        <img class="bg-slider" src="https://ecm-prd-pub.s3.ap-southeast-1.amazonaws.com/kfestival/assets/img/billboards/mbb_hangulday.jpg" width="100%" alt="Hangul Day Event Billboard" />
                    </div>
                </a>
            </slide>

            <slide>
                <a href="#korea-indonesia-film-festival" title="Korea Indonesia Film Festival">
                    <div class="banner-slide-item" align="center">
                        <img class="bg-slider" src="https://ecm-prd-pub.s3.ap-southeast-1.amazonaws.com/kfestival/assets/img/billboards/mbb_koreanculture.jpg" width="100%" alt="Korea - Indonesia 10th Film Festival Billboard" />
                    </div>
                </a>
            </slide>
        </carousel>
    </section>
</template>