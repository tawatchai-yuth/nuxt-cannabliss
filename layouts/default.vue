<template>
    <div class="w-full h-full">
        <Navbar />
        <div class="w-full bg-secondary scroll-smooth relative overflow-hidden">
            <div class="w-full relative" v-for="(item, i) in menus" :key="`banner-${i}`">
                <img v-if="route_name == item.route || route_name == item.sub_routes" class="w-full bg z-10"
                    :src="item.src">
                <div v-if="route_name == item.route || route_name == item.sub_routes" class="content flex z-20">
                    <h1 class="text-6xl text-primary font-normal">{{ item.label }}</h1>
                </div>
            </div>
            <div v-if="!no_breadcrumb.includes(route_name)"
                class="z-20 flex items-center px-3 mt-10 sm:mt-20 text-quaternary font-extralight text-sm px-4 sm:px-12 lg:px-16 xl:px-28 3xl:px-32">
                <base-icon icon="angle-left" viewBox="0 0 24 24" size="15" />&nbsp;&nbsp;
                <nuxt-link to="/" class="hover:underline mr-2 z-20">Home&nbsp;&nbsp;|&nbsp;
                </nuxt-link>
                <div v-for="(item, i) in menus" :key="`menus-${i}`" class="flex z-20">
                    <p v-if="route_name == item.route || route_name == item.sub_routes"
                        @click="$router.push(`${item.path}`)" class="mr-2 cursor-pointer hover:underline"
                        :class="{ 'font-normal ': route_name == item.route }">{{ item.label }}</p>
                    <p v-if="route_name == item.sub_routes" @click="$router.push(`${item.path}`)"
                        class="font-normal line-clamp-1">&nbsp;|&nbsp;&nbsp;{{ breadcrumb }}</p>
                </div>
            </div>
            <img v-if="route_name == 'blogs'" src="~/static/images/IMG_03blogs/Group1151@2x.png" class="widget1151">
            <img v-if="route_name == 'review'" src="~/static/images/IMG_03ingredients/Group1053@2x.png"
                class="reviewwidget1053 z-10">
            <img v-if="route_name == 'product-details-id'" src="~/static/images/IMG_02products_detail/Group1053@2x.png"
                class="widget1053 z-10">
            <!-- <div v-for="(item, i) in menus" :key="`banner-${i}`"> -->

            <!-- <img v-show="route_name == 'blog'" src="~/static/images/IMG_03blogs/Group1151@2x.png" class="widget1151"> -->

            <!-- </div> -->
            <div class="w-full">
                <div class="social-bar" id="gotop">
                    <div class="flex flex-col space-y-6 sm:space-y-6 items-center">
                        <a href="https://lin.ee/i5MkM6w" target="_blank">
                            <img class="w-8 sm:w-6 lg:w-8"
                                src="~/static/images/IMG_01home/pages_01home/icons8-line@2x.png" alt="">
                        </a>
                        <a href="https://www.facebook.com/CanablissCosmetic" target="_blank">
                            <img class="w-8 sm:w-6 lg:w-8"
                                src="~/static/images/IMG_01home/pages_01home/icons8-facebook@2x.png" alt="">
                        </a>
                        <a href="https://www.instagram.com/canablisscosmetic/" target="_blank">
                            <img class="w-8 sm:w-6 lg:w-8"
                                src="~/static/images/IMG_01home/pages_01home/icons8-instagram@2x.png" alt="">
                        </a>
                        <a href="https://twitter.com/CanablissC" target="_blank">
                            <img class="h-8 sm:h-6 lg:h-8"
                                src="~/static/images/IMG_01home/pages_01home/icons8-twitter@2x.png" alt="">
                        </a>
                        <a href="https://www.youtube.com/channel/UCdKSDogq_7bUzWwY_U8zerA" target="_blank">
                            <img class="h-7 sm:h-5 lg:h-7"
                                src="~/static/images/IMG_01home/pages_01home/play-video(1).png" alt="">
                        </a>
                        <a href="https://www.tiktok.com/@canablisscosmetic?_t=8VL26drxAa9&_r=1" target="_blank">
                            <img class="h-8 sm:h-6 lg:h-8"
                                src="~/static/images/IMG_01home/pages_01home/logo-tiktok-svgrepo-com.png" alt="">
                        </a>
                    </div>
                </div>
                <nuxt />
            </div>

            <button class="to-top hide" id="totop" @click="toTop">
                <base-icon icon="angle-up" viewBox="0 0 24 24" size="30" class="text-white" />
            </button>
            <img src="~/static/images/IMG_01home/pages_01home/Group831@2x.png" class="footleft z-10">
            <img src="~/static/images/IMG_01home/pages_01home/Group388@2x.png" class="footright z-10">
            <Foot class="mt-10 sm:mt-20 z-20" />
        </div>
    </div>
</template>

<script>
import Navbar from '../components/layout/navbar.vue'
import Foot from '../components/layout/foot.vue'
export default {
    components: { Navbar, Foot },
    middleware: 'auth',
    data() {
        return {
            no_breadcrumb: ['product', 'favorite'],
            menus: [{ path: "/blogs", label: "Blogs", route: ['blogs'], sub_routes: ["blogs-details-id"], src: require("~/static/images/IMG_03blogs/Group1120@2x.png") },
            { path: "/review", label: "Review", route: ['review'], src: require("~/static/images/IMG_04review/Group1162@2x.png") },
            { path: "/product", label: "Products", route: ['product'], sub_routes: ["product-details-id"], src: require("~/static/images/IMG_02products_detail/Group1137@2x.png") },
            { path: "/contact", label: "Contact", route: ['contact'], src: require("~/static/images/IMG_05contacts/Group1163@2x.png") },
            { path: "/ingredients", label: "Ingredients", route: ['ingredients'], src: require("~/static/images/IMG_03ingredients/Group1150@2x.png"), },
            { path: "/favorite", label: "Favorite", route: ['favorite'], src: require("~/static/images/IMG_02products_detail/Group1137@2x.png"), }]
        }
    },
    computed: {
        route_name() {
            return this.$route.name
        },
        breadcrumb() {
            return this.$store.getters['me/getBreadcrumb']
        },
    },
    async mounted() {
        const myID = document.getElementById("totop");
        const myID2 = document.getElementById("gotop");

        var myScrollFunc = function () {
            var y = window.scrollY;
            if (y >= 100) {
                myID.className = "to-top show"
                myID2.className = "social-bar -translate-y-20"
            } else {
                myID.className = "to-top hide"
                myID2.className = "social-bar"
            }
        };
        window.addEventListener("scroll", myScrollFunc);
    },
    methods: {
        toTop: function () {
            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });
        },
    }
}
</script>

<style scoped>
.social-bar {
    position: fixed;
    bottom: 20px;
    right: 20px;
    width: 60px;
    height: auto;
    z-index: 50;
    transition: all 1s;
}

.social {
    top: 58%;
}

.to-top {
    position: fixed;
    bottom: 20px;
    right: 20px;
    width: 60px;
    height: 60px;
    border-radius: 50%;
    background: #78A695;
    z-index: 50;
    transition: all 1s;
}

.hide {
    opacity: 0;
    bottom: -100%;
}

.show {
    opacity: 1;
    bottom: 20px;
}

.content {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
}

.widget1151 {
    height: 12rem;
    position: absolute;
    right: 16rem;
    top: 630px;
    z-index: 200;
    transform: translateY(-6rem);
}

.reviewwidget1053 {
    height: 40rem;
    top: 30rem;
    left: -20rem;
    position: absolute;
}

.widget1053 {
    height: 40rem;
    position: absolute;
    right: 0;
    transform: translate(23rem, -9rem);
}

@media (max-width:1441px) {
    .widget1053 {
        height: 35rem;
        position: absolute;
        right: 0;
        transform: translate(20rem, -8rem);
    }

    .reviewwidget1053 {
        height: 30rem;
        top: 24rem;
        left: -15rem;
        position: absolute;
    }

    .widget1151 {
        height: 10rem;
        position: absolute;
        right: 4rem;
        top: 530px;
        z-index: 200;
        transform: translateY(-6rem);
    }
}

@media (max-width:1024px) {
    img.bg {
        object-fit: cover;
        width: auto;
        height: 220px;
    }
}
</style>