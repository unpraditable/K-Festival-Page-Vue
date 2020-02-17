<script>

    export default {
        name: 'EventDetail',
        created () {
            this.$store.dispatch('loadEventDetail')
        },
        computed: {
            getEvent() {
                return this.$store.getters.getEventBySlug(this.$route.params.slug)
            },
           
        },
         head() {
                return {
                    title: getEvent().title,
                }
            },
        data () {
            return {
                title: getEvent().title,
            }
        }
    }
</script>

<template>
    <div class="event-detail">
        <vue-headful
            :title="`${getEvent.title}`"
            description="Description from vue-headful"
        />
        <div class="col-sm-10 offset-sm-1">
            <h1 class="heading">{{getEvent.title}}</h1>
            <p class="event-detail-date"><b>{{getEvent.date}}</b></p>
            <a :href="`${getEvent.location_map}`" title="Ciputra Artpreneur" >
                <h4>VENUE: {{getEvent.location_title}}</h4>
            </a>
            <div class="row">
                <div class="col-12 img-container">
                    <img :src="`${getEvent.image}`" width="100%" alt="FLYING Poster" />
                </div>
            </div>
            <hr>
            <p class="desc" v-html="getEvent.content"></p>
            <div class="event-sns-wrapper">
                <a :href="`${getEvent.twitter_link}`"  title="KCC Indonesia Twitter" class="event-sns" v-if="getEvent.twitter_link">
                    <img src="https://ecm-prd-pub.s3.ap-southeast-1.amazonaws.com/kfestival/assets/img/sns-button-twitter.png" alt="Twitter Icon">
                </a>
                <a :href="`${getEvent.facebook_link}`"  title="KCC Indonesia Facebook" class="event-sns" v-if="getEvent.facebook_link">
                    <img src="https://ecm-prd-pub.s3.ap-southeast-1.amazonaws.com/kfestival/assets/img/sns-button-facebook.png" alt="Facebook Icon">
                </a>
                <a :href="`${getEvent.instagram_link}`"   title="KCC Indonesia Instagram" class="event-sns" v-if="getEvent.instagram_link">
                    <img src="https://ecm-prd-pub.s3.ap-southeast-1.amazonaws.com/kfestival/assets/img/sns-button-instagram.png" alt="Instagram Icon">
                </a>
            </div>
        </div>
    </div>
</template>