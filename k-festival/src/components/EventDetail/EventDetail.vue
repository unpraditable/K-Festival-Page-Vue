<script>
    import { mapState } from 'vuex'


    export default {

        name: 'EventDetail',
        
        computed: mapState({
            eventList: state => state.eventList
        }),
        created () {
            this.$store.dispatch('loadEvents')
        }
    }
</script>

<template>
    <div class="col-xs-12 event-detail">
        <div class="col-sm-10 col-sm-offset-1">
            <h1 class="heading">FLYING</h1>
            <p class="event-detail-date"><b>16 - 17 Oktober 2019</b></p>
            <a href="https://g.page/artpreneur" title="Ciputra Artpreneur" >
                <h4>VENUE: Ciputra Artpreneur Theater</h4>
            </a>
            <div class="row">
                <div class="col-xs-12 img-container">
                    <img src="https://ecm-stg-pub.s3.ap-southeast-1.amazonaws.com/kfestival/assets/img/events/%5BPoster%5DNon-Verbal%20Performance%20%27Flying%27%20revised.jpg" width="100%" alt="FLYING Poster" />
                </div>
            </div>
            <hr>
            <p class="desc">FLYING adalah pertunjukan komedi non-verbal yang menceritakan kisah Hwarang (prajurit Korea) dan Dokkebi (monster Korea) yang datang dari masa lalu ke masa sekarang.</p>
            <p class="desc">Mereka bergabung dengan tim pemandu sorak sekolah menengah dan ikut berpartisipasi dalam sebuah kompetisi. FLYING adalah pertunjukan yang memadukan olahraga senam, senam irama, pemandu sorak, seni bela diri dan B-boying. Pertunjukan ini adalah pertujukan fantasi yang belum pernah dilihat sebelumnya. </p>
            <div class="event-sns-wrapper">
                <a href="https://twitter.com/kcc_indonesia"  title="KCC Indonesia Twitter" class="event-sns">
                    <img src="https://ecm-prd-pub.s3.ap-southeast-1.amazonaws.com/kfestival/assets/img/sns-button-twitter.png" alt="Twitter Icon">
                </a>
                <a href="https://www.facebook.com/KCCIndonesia/"  title="KCC Indonesia Facebook" class="event-sns">
                    <img src="https://ecm-prd-pub.s3.ap-southeast-1.amazonaws.com/kfestival/assets/img/sns-button-facebook.png" alt="Facebook Icon">
                </a>
                <a href="https://www.instagram.com/kcc.id"  title="KCC Indonesia Instagram" class="event-sns">
                    <img src="https://ecm-prd-pub.s3.ap-southeast-1.amazonaws.com/kfestival/assets/img/sns-button-instagram.png" alt="Instagram Icon">
                </a>
            </div>
        </div>
    </div>
</template>