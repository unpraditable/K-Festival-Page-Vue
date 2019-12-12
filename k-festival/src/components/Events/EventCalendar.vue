<style lang='scss'>

@import '~@fullcalendar/core/main.css';
@import '~@fullcalendar/daygrid/main.css';

</style>

<script>
import FullCalendar from '@fullcalendar/vue'
import dayGridPlugin from '@fullcalendar/daygrid'
export default {
    name: 'EventCalendar',
    components: {
        FullCalendar // make the <FullCalendar> tag available
    },
    data() {
        return {
            calendarPlugins: [ dayGridPlugin ]
        }
    }
}
</script>

<template>
    <section class="col-12 section section-calendar">
        <div class="row">
            <div class="col-12" align="left"> 
                <h2 class="head-gibson main-head"><span class="h2-icon calendar-icon"></span> EVENT CALENDAR OCTOBER & NOVEMBER 2019</h2>
            </div>
        </div>
        
        <div class="row">
            <div class="col-sm-10 calendar">
                <FullCalendar defaultView="dayGridMonth" :plugins="calendarPlugins" />
            </div>
            <div class="col-sm-2 calendar-legend" align="right">
                    <!-- <h2 class="head-gibson col-12" style="color: transparent;">OCTOBER 2019</h2> -->

                <label>
                    <span class="circle" style="background: #FFD477;"></span> K-CONTENT
                </label>
                <label>
                    <span class="circle" style="background: #11B8E0;"></span> K-PERFORMANCE
                </label>
                <label>
                    <span class="circle" style="background: #A25099;"></span> K-EXHIBITION
                </label>
                <label>
                    <span class="circle" style="background: #ED1A3B;"></span> K-FOOD
                </label>
            </div>
        </div>
    </section>
</template>