<script>
    import EventSEO from './EventSEO.vue';
    import EventMap from './EventMap.vue';
    import EventBanner from './EventBanner.vue';
    import EventList from './EventList.vue';
    import EventCalendar from './EventCalendar.vue';

    export default {
        name: 'Event',
        components: {
            EventBanner,
            EventMap,
            EventCalendar,
            EventSEO,
            EventList
        },
    }

</script>

<template>
    <div class="col-12 content no-pad">
        <section class="col-12 section section-navigation">
            <a href="#section-map" class="anchor-wrapper map-anchor-wrapper float-right d-none d-sm-block" v-smooth-scroll>
                MAP
            </a>
            <a href="#section-calendar" class="anchor-wrapper calendar-anchor-wrapper float-right d-none d-sm-block" v-smooth-scroll>
                CALENDAR
            </a>
        </section>
        <EventBanner />
        <EventList />
        <EventCalendar />
        <EventMap />
        <EventSEO />
    </div>
</template>