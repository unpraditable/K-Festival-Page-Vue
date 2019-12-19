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
                <div :class="[event.category + ` col-2 col-md-1 event-item-thumbnail`]" v-html="event.date">
                </div>
                <div class="col-4 col-md-3 event-thumb">
                    <a :href=event.slug :title=event.title>
                        <img :src=event.image width="100%" :alt=event.title />
                    </a>
                </div>
                <div class="col-6 col-md-8 event-item-caption">
                    <a :href=event.slug :title=event.title>
                        <h3>{{event.title}}</h3>
                    </a>
                    <a :href=event.location_map :title=event.location >
                        <h4>{{event.location}}</h4>
                    </a>
                    <label class="event-label">{{event.category}}</label>
                    <p class="excerpt d-none d-sm-block">{{event.excerpt}}</p>
                    <a :href=event.slug :title=event.title class="view-button d-none d-sm-block">
                        VIEW DETAIL <span class="glyphicon glyphicon-chevron-right"></span>
                    </a>
                </div>
            </div>
        </div>
    </section>
</template>

