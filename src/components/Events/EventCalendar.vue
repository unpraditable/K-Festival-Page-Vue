<style lang='scss'>

@import '~@fullcalendar/core/main.css';
@import '~@fullcalendar/daygrid/main.css';

</style>

<script>
import FullCalendar from '@fullcalendar/vue';
import dayGridPlugin from '@fullcalendar/daygrid';
let kContentColor = '#fbb040';
let kPerformanceColor = '#11B8E0';
let kExhibitionColor = '#A25099';
let kFoodColor = '#ED1A3B';
export default {
    name: 'EventCalendar',
    components: {
        FullCalendar // make the <FullCalendar> tag available
    },
    data() {
        return {
            defaultDate: '2019-10-01',
            firstDay: 2,
            contentHeight: 'auto',
            calendarWeekends: true,
            calendarPlugins: [ 
                dayGridPlugin 
            ],
            calendarEvents: [
                {
                    title: 'K-Content Expo 2019 Indonesia',
                    start: '2019-10-03',
                    end: '2019-10-07',
                    color: kContentColor,
                },
                {
                    title: 'Press Conference',
                    start: '2019-09-25',
                    end: '2019-09-25',
                    color: kContentColor 
                },
                {
                    title: 'Korean Home Cook Style Food Festival',
                    start: '2019-10-03',
                    end: '2019-10-14',
                    color: kFoodColor,
                },
                {
                    title: 'Hangul Day',
                    start: '2019-10-09',
                    end: '2019-10-09',
                    color: kContentColor 
                },
                {
                    title: 'Korea-Indonesia Film Festival 2019',
                    start: '2019-10-10',
                    end: '2019-10-14',
                    color: kContentColor 
                },
                {
                    title: 'FLYING',
                    start: '2019-10-16',
                    end: '2019-10-18',
                    color: kPerformanceColor 
                },
                {
                    title: 'The 6th Korean Cultural Art Association Festival',
                    start: '2019-10-19',
                    end: '2019-10-26',
                    color: kContentColor 
                },
                
                {
                    title: 'K-POP Concert',
                    start: '2019-10-19',
                    end: '2019-10-21',
                    color: kPerformanceColor 
                },

                {
                    title: 'Follow Gyeonggi K-Culture FESTA 2019',
                    start: '2019-10-19',
                    end: '2019-10-21',
                    color: kPerformanceColor 
                },
                {
                    title: '2019 The Best K-POP Cover in Indonesia',
                    start: '2019-10-19',
                    end: '2019-10-21',
                    color: kPerformanceColor 
                },
                {
                    title: 'DICAPOEM Exhibition',
                    start: '2019-10-19',
                    end: '2019-10-26',
                    color: kExhibitionColor 
                },
                {
                    title: 'Korea Culture Brand Festival',
                    start: '2019-10-26',
                    end: '2019-10-26',
                    color: kExhibitionColor 
                },
                {
                    title: 'Hanwha Life Activation Program 2019',
                    start: '2019-10-26',
                    end: '2019-10-26',
                    color: kPerformanceColor 
                },
                {
                    title: '2019 Asia Taekwondo Hanmadang Championship',
                    start: '2019-10-26',
                    end: '2019-10-28',
                    color: kPerformanceColor 
                },
                {
                    title: 'Asia Traditional Orchestra',
                    start: '2019-11-06',
                    end: '2019-11-06',
                    color: kPerformanceColor 
                },
                
                {
                    title: 'Study In Korea Fair',
                    start: '2019-11-09',
                    end: '2019-11-11',
                    color: kExhibitionColor 
                },
                {
                    title: 'Jakarta International Premium Products Fair 2019',
                    start: '2019-11-07',
                    end: '2019-11-10',
                    color: kExhibitionColor 
                },
                {
                    title: 'Opening Ceremony of Korea Corner',
                    start: '2019-10-31',
                    end: '2019-10-31',
                    color: kExhibitionColor 
                }
            ]
        }
    }
}
</script>

<template>
    <section id="section-calendar" class="col-12 section section-calendar">
        <div class="row">
            <div class="col-12" align="left"> 
                <h2 class="head-gibson main-head"><span class="h2-icon calendar-icon"></span> EVENT CALENDAR OCTOBER & NOVEMBER 2019</h2>
            </div>
        </div>
        
        <div class="row">
            <div class="col-sm-10 calendar">
                <FullCalendar defaultView="dayGridMonth"
                :firstDay="firstDay"
                :defaultDate="defaultDate"
                :plugins="calendarPlugins"
                :events="calendarEvents" 
                :header="{
                    left:'',
                    center: '',
                    right: ''
                }" />
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