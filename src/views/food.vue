<template>
    <div class="max">
        <img src="@/assets/food/bj.jpg" alt="">
    </div>
    <div class="header">
        <h2 class="title">吃在汉源</h2>
        <h3 class="subtitle">Hanyuan Food</h3>
    </div>
    <div class="ww">
        <div>
            <el-carousel height="500px" class="card">
                <el-carousel-item v-for="index in img">
                    <img class="cobot" :src="index" />
                </el-carousel-item>
            </el-carousel>
        </div>
    </div>
    <div class="ww">
        <h2>传统美食</h2>
        <div class="foodimg">
            <ul class="food_ul1 clearfix">
                <li>
                    <img src="@/assets/food/01.jpg" alt="">
                    <div class="mask">
                        <p>汉源臭豆腐，原名叫锅贴臭豆腐，是一道汉源著名的街头小吃。在过去，由于条件受限，人们只能使用破铁锅刷油煎制。锅里不止煎炸臭豆腐,还有土豆等其他的食物，所以炸好的臭豆腐会被摆在锅边，于是就有了锅贴臭豆腐的叫法。但现在，当地人似乎已经忘却了锅贴臭豆腐一名，只称其为臭豆腐。
                        </p>
                    </div>
                </li>
                <li>
                    <img src="@/assets/food/02.jpg" alt="">
                    <div class="mask">
                        <p>没有浓烈的香味，复杂的调料，有的只是米线本身和多种配菜的香味，再加上砂锅的加持，把米线更香的味道激发出来。在全国砂锅米线的种类有很多，但因为九襄自身的特点，九襄的这种砂锅米线就只能在九襄才能吃到，哪怕是汉源其它乡镇的米线都很难有九襄的味道。
                        </p>
                    </div>
                </li>
                <li>
                    <img src="@/assets/food/03.jpg" alt="">
                    <div class="mask">
                        <p>，炸好的土豆配上店内秘制酱料和干辣椒面，真的太香了!土豆外皮炸得焦香，里面的土豆又绵密又甜。因为汉源的特殊气候和土壤，这里的土豆真的比一般的好吃很多e店内的榨榨面也是当地特色，其实就是现榨的荞麦面，面里面放了耙豌豆、肉臊、泡菜
                        </p>
                    </div>
                </li>
                <li>
                    <img src="@/assets/food/04.jpg" alt="">
                    <div class="mask">
                        <p>汉源榨榨面。汉源榨榨面是汉源县的一种特色面食，也是四川省非物质文化遗产之一。它是用选用面粉和水和成面团，再用手工将面团拉成细长的面条，放入开水中煮熟后捞出。然后将面条放入碗中，加上辣椒油、花椒油、醋、盐、芝麻酱等调味品拌匀。最后撒上花生碎、芝麻、香菜等即可食用。
                        </p>
                    </div>
                </li>
            </ul>
        </div>
        <div class="foodimg clearfix">
            <ul class="food_ul1">
                <li>
                    <img src="@/assets/food/05.jpg" alt="">
                    <div class="mask">
                        <p>黄牛肉好吃也是有诀窍的，煮制牛肉时，火候须掌握得当，既要软糯入味，又需保留一定的嚼劲。与大麻大辣的重口味不同，锅底醇厚微辣，没有覆盖牛肉本身的鲜香。
                        </p>
                    </div>
                </li>
                <li>
                    <img src="@/assets/food/06.jpg" alt="">
                    <div class="mask">
                        <p>本地酸菜和豆豆米的结合,巨下饭，一定要试一试
                        </p>
                    </div>
                </li>
                <li>
                    <img src="@/assets/food/07.jpg" alt="">
                    <div class="mask">
                        <p>2018年12月1日17时54分,中央电视台第二套节目播出了精品财经纪录片《川味第二季第一集、腊肉》。这是皇木腊肉第一次作为美食代表上央视,也是汉源本土特色美食第二次被《川味》纪录片纪录</p>
                    </div>
                </li>
                <li>
                    <img src="@/assets/food/08.jpg" alt="">
                    <div class="mask">
                        <p>坛子肉(炸肉)起源的宜东镇，由于地势偏僻,所以当地人自古过着自给自足的农耕生活，粮食自己种，牲畜自喂养，这里的庄稼全是原生态绿色食物，而牲畜也是全由“猪草”和各家自己种植的玉米、土豆等粮食喂养，所以肉质非常细嫩，营养丰富。
                        </p>
                    </div>
                </li>
            </ul>
        </div>
    </div>
    <div>
        <myfooter class="myfooter"></myfooter>
    </div>
</template>

<script>
import myfooter from '@/components/myfooter.vue'
export default {
    components: { myfooter },
    data() {
        return {
            img: [
                require('@/assets/food/lunbo/lunbo1.png'),
                require('@/assets/food/lunbo/lunbo2.png'),
                require('@/assets/food/lunbo/lunbo3.png'),
                require('@/assets/food/lunbo/lunbo1.png'),
            ],
        }
    }
}
</script>

<style scoped>
.header {
    width: 100%;
    text-align: center;
    margin-bottom: 20px;
}

.title {
    color: #fff;
    font-size: 46px;
    font-weight: normal;
    margin: 0;
    margin-top: 88px;
}

.subtitle {
    color: rgba(255, 255, 255, 0.5);
    font-size: 12px;
    letter-spacing: 5px;
    margin: 10px 0 0 0;
    font-weight: normal;
}

.ww {
    width: 1200px;
    margin: 0 auto;
}

.ww h2 {
    text-align: center;
    margin-top: 15px;
    margin-bottom: 13px;
    font-size: 33px;
    color: #fff;
}

.cobot {
    width: 100%;
    height: 100%;
    object-fit: cover;

}

.card {
    border-radius: 10px;
}

.foodimg {
    width: 100%;
    margin-bottom: 15px;
}

.food_ul1 {
    position: relative;
}

.food_ul1 li {
    display: block;
    width: 292.5px;
    height: 310px;
    margin-left: 10px;
    background-color: pink;
    float: left;
    overflow: hidden;
    border-radius: 4px;
}

.food_ul1 li img {
    float: left;
    width: 292.5px;
    height: 310px;
    transition: all 2s;
}

.food_ul1 li:first-child {
    margin-left: 0px;
}

.food_ul1 li:last-child {
    margin-right: 0px;
}

.foodimg ul li {
    margin-bottom: 15px;
}

.mask {
    width: 292.5px;
    height: 150px;
    background-color: rgba(0, 0, 0, 0.3);
    position: relative;
    top: 310px;
    /* z-index: 9; */
    color: #fff;
    animation-fill-mode: forwards;

}

.mask p {
    position: absolute;
}

@keyframes move {
    100% {
        transform: translate(0, -235px);
    }
}

.food_ul1 li:hover .mask {
    animation-duration: 2s;
    animation-name: move;
}

.food_ul1 li:hover img {
    transform: calc(1.2);
}

.myfooter {
    margin-top: 2px;
}

.max img {
    z-index: -1;
    width: 100%;
    height: 100%;
    position: fixed;
    top: 0;
    filter: brightness(0.5);
}
</style>
