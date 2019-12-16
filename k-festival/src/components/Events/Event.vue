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
            
            <a class="anchor-wrapper map-anchor-wrapper pull-right hidden-xs" onclick="smoothScroll('.section-map')">
                MAP
            </a>
            <a class="anchor-wrapper calendar-anchor-wrapper pull-right hidden-xs" onclick="smoothScroll('.section-calendar')">
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