<script>
export default {
    name: 'EventCalendar'
}
</script>

<template>
    <section class="col-12 section section-calendar">
        <div class="col-12" align="left"> 
            <h2 class="head-gibson main-head"><span class="h2-icon calendar-icon"></span> EVENT CALENDAR OCTOBER & NOVEMBER 2019</h2>
        </div>
        
        <div class="col-12 col-sm-10 calendar" align="left">
            <div class="fullcalendar"></div>
        </div>
        <div class="col-12 col-sm-2 calendar-legend" align="right">
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
    </section>
</template>