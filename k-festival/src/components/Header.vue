
<template>
    <div class="k-festival-wrap">
        <div class="header-img-container">
            <img class="background-body d-block d-sm-none" src="https://ecm-prd-pub.s3.ap-southeast-1.amazonaws.com/kfestival/assets/img/header-bg.png" width="100%"/>
            <img class="background-body d-none d-sm-block" src="https://ecm-prd-pub.s3.ap-southeast-1.amazonaws.com/kfestival/assets/img/background.jpg" width="100%"/>
            <div class="container-fluid">
                <ul class="nav nav-tabs main-tabs" role="tablist">
                    <li role="presentation" class="event-anchor-list">
                        <router-link to="/" aria-controls="event" class="event-anchor" >Highlight</router-link>
                    </li>
                    <li role="presentation" class="korea-ticket-anchor-list">
                        <router-link to="/passport" title="Liburan Gratis Ke Korea" class="korea-ticket-anchor">Liburan Gratis ke Korea</router-link>
                    </li>
                    <!-- <li role="presentation" class="k-pop-festival-anchor-list">
                        <a class="k-pop-festival-anchor" href="#k-pop-concert">K-Pop Festival</a>
                    </li> -->
                    <li role="presentation" class="performance-ticket-anchor-list">
                        <a class="performance-ticket-anchor" href="#tiket-pertunjukkan-gratis" title="Tiket Pertunjukkan Gratis">Tiket Pertunjukkan Gratis</a>
                    </li>
                    <li role="presentation" class="k-sale-festa-anchor-list">
                        <a href="https://www.ilotte.com/promo-korean-festival-000000131515.do?ch=ETCTS5WKIV" class="k-sale-festa-anchor">Korean Bazaar</a>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
    name: 'Header'
}
</script>