<script>
import { mapState } from 'vuex'

    export default {

        name: 'EventList',
        
        computed: mapState({
            eventList: state => state.eventList
        }),
        created () {
            this.$store.dispatch('loadEvents')
        }
    }
</script>

<template>
    <section class="col-12 section section-event">
        <div class="event-header" align="left">
            <h2 class="head-gibson main-head"><i class="h2-icon event-icon"></i>EVENT LIST</h2>
        </div>
        <div class="col-12 event-body">
            <div class="event-list-item row" v-for="event in eventList" :key="event">
                <div :class="`col-2 col-md-1 event-item-thumbnail ${event.category }`" v-html="event.date">
                </div>
                <div class="col-4 col-md-3 event-thumb">
                    <router-link :to="`/events/${event.slug}`" :title=event.title>
                        <img :src=event.image width="100%" :alt=event.title />
                    </router-link>
                </div>
                <div class="col-6 col-md-8 event-item-caption">
                    <router-link :to="`/events/${event.slug}`"  :title=event.title>
                        <h3>{{event.title}}</h3>
                    </router-link>
                    <a :href=event.location_map :title=event.location >
                        <h4>{{event.location}}</h4>
                    </a>
                    <label class="event-label">{{event.category}}</label>
                    <p class="excerpt d-none d-sm-block">{{event.excerpt}}</p>
                    <router-link :to="`/events/${event.slug}`" :title=event.title class="view-button d-none d-sm-block">
                        VIEW DETAIL <span class="glyphicon glyphicon-chevron-right"></span>
                    </router-link>
                </div>
            </div>
        </div>
    </section>
</template>

