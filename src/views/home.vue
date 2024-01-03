<template>
    <div>
        <el-carousel height="450px" class="lunbo">
            <el-carousel-item v-for="index in img">
                <img class="cobot" :src="index" />
            </el-carousel-item>
        </el-carousel>
    </div>
    <!-- 汉源介绍 -->
    <el-divider content-position="center">
        <h1>汉源简介</h1>
    </el-divider>
    <div class="hanyuan clearfix">
        <div class="hanyuanimg card clearfix">
            <img src="@/assets/imgs/hanyuan.jpg" alt="">
            <p>汉源县，隶属四川省雅安市，位于四川省境西部偏南，地理坐标介于东经102°16′—103°00′，北纬29°05′—29°43′之间。
                东邻乐山市金口河区和眉山市洪雅县，南连凉山彝族自治州的甘洛县，西靠甘孜藏族自治州泸定县和雅安市石棉县，北接雅安市荥经县；全境
                东西长71.4千米，南北宽70.1千米。全县幅员面积2382平方千米， [1] 属亚热带季风性湿润气候，冬暖夏凉，四季分明。截至2019年，汉源县
                辖21个乡镇（5个少数民族乡），县城驻富林镇。 [2-3]根据第七次人口普查数据，截至2020年11月1日零时，汉源县常住人口为285558人。 [15]
            </p>
            <p>
                汉源县古名笮都，属蜀国。周慎靓王五年（公元前316年），秦灭蜀国设蜀郡，属蜀郡管辖。隋仁寿四年（604年），
                以汉源之名于今九襄镇置汉源县。清雍正七年（1729年），改称清溪县。民国三年（1914年），因清溪县与贵州省的青溪县
                同名同音，复改名汉源县。 [2] 2019年12月6日，入选全国农民
                合作社质量提升整县推进试点单位。 [4] 2020年7月29日，入选2019年重新确认国家卫生乡镇（县城）名单。 [5]
                2022年，汉源县实现地区生产总值134.29亿元，增速3.2%。
            </p>
            <p>
                公元前316年，秦灭蜀国设蜀郡，属蜀郡管辖。东汉中平六年（189年），改蜀郡为
                汉嘉郡。1950年3月汉源解放，县城由清溪迁至九襄，属西
                康省雅安专区。1952年10月，县政府驻地迁富林。[10]特色景区
                有花海果乡、汉源湖、轿顶山、茶马古道等。[11]
            </p>
        </div>
    </div>
    <div class="hanyuan history clearfix">
        <div class="historyicon">
        </div>
        <span>历史文化</span>
        <div class="horizon "></div>
    </div>
    <div class="hanyuan history_name">
        <h3>地名由来</h3>
        <div class="card">
            <p>汉源县建制于汉武帝天汉四年（公元前97年），已有二千多年的建制
                历史。县城所在地富林镇，是旧石器时代的文化遗址。"古牦牛道记叙着
                “南方丝绸之路”的悠悠岁月；太平天国、辛亥革命、万里长征，曾在这里写下可歌可泣的壮丽诗篇。“富林
                文化”、“清溪文庙”、"九襄石牌坊"古朴深邃；“汉源春色”、"大渡晴波"、"鸡冠朝阳"绚丽多姿，景色迷人，文化底蕴丰厚。 [2]</p>
        </div>
    </div>
    <div class="hanyuan history_name">
        <h3>古遗址</h3>
        <div class="card">
            <p>汉源古遗址有旧石器时代的富林文化遗
                址；新石器时代的狮子山型文化遗址、富林背后山型文化遗址、大树背后山型文化遗址；秦汉时代的
                大田二半山冶炼遗址；古文化遗
                址有黎州古城遗址、王建城遗址、清溪古道遗址、大树古堡遗址、清溪关遗址、孟获城遗址、三交城古遗址。</p>
        </div>
    </div>
    <div class="hanyuan history_name">
        <h3>古墓葬</h3>
        <div class="card">
            <p>有背后山商周土坑墓、大瑶石棺葬，桃坪战国、西汉土坑墓群、东汉砖室墓、明瓮棺葬。</p>
        </div>
    </div>
    <div class="hanyuan history_name">
        <h3>碑刻</h3>
        <div class="card">
            <p>有玉渊铭碑、山横水远石刻、刘延摩崖石刻、文昌宫书法碑、花椒免贡碑、三绝墓碑、红军长征石刻。</p>
        </div>
    </div>
    <div class="hanyuan history_name">
        <h3>馆藏文物</h3>
        <div class="card">
            <p>有新时器时代的玉斧、双耳罐、豆形器；商周时代的单口双联
                罐、绳纹陶釜、青铜兵器；战国时代三叉格剑、巴蜀短剑、铜
                钺、铜釜、戈；西汉时代的龙首玉带钩、贮钱罐、耳环、陶
                罐、铜柄铁剑、铜刀、铜镜、博山炉、铜釜、铜鍪、五铢铜币、四铢半两
                币；唐代的三鲁铜镜、铜佛、铜镜、乾元通宝；明代的瓷瓶、瓷杯、瓷
                碗、铜镜；清代的瓷瓶；革命文物有水壶、菜刀。</p>
        </div>
    </div>
    <div class="hanyuan  history_name clearfix">
        <h3>馆藏文物</h3>
        <div class="hanyuanimg card clearfix">
            <img src="@/assets/imgs/build.jpg" alt="" class="imgend">
            <p>汉源县，隶属四川省雅安市，位于四川省境西部偏南，地理坐标介于东经102°16′—103°00′，北纬29°05′—29°43′之间。
                东邻乐山市金口河区和眉山市洪雅县，南连凉山彝族自治州的甘洛县，西靠甘孜藏族自治州泸定县和雅安市石棉县，北接雅安市荥经县；全境
                东西长71.4千米，南北宽70.1千米。全县幅员面积2382平方千米， [1] 属亚热带季风性湿润气候，冬暖夏凉，四季分明。截至2019年，汉源县
                辖21个乡镇（5个少数民族乡），县城驻富林镇。 [2-3]根据第七次人口普查数据，截至2020年11月1日零时，汉源县常住人口为285558人。 [15]
            </p>
            <p>
                汉源县古名笮都，属蜀国。周慎靓王五年（公元前316年），秦灭蜀国设蜀郡，属蜀郡管辖。隋仁寿四年（604年），
                以汉源之名于今九襄镇置汉源县。清雍正七年（1729年），改称清溪县。民国三年（1914年），因清溪县与贵州省的青溪县
                同名同音，复改名汉源县。 [2] 2019年12月6日，入选全国农民
                合作社质量提升整县推进试点单位。 [4] 2020年7月29日，入选2019年重新确认国家卫生乡镇（县城）名单。 [5]
                2022年，汉源县实现地区生产总值134.29亿元，增速3.2%。
            </p>
            <p>
                公元前316年，秦灭蜀国设蜀郡，属蜀郡管辖。东汉中平六年（189年），改蜀郡为
                汉嘉郡。1950年3月汉源解放，县城由清溪迁至九襄，属西
                康省雅安专区。1952年10月，县政府驻地迁富林。[10]特色景区
                有花海果乡、汉源湖、轿顶山、茶马古道等。[11]
            </p>
        </div>
    </div>
    <div>
        <myfooter></myfooter>
    </div>
</template>

<script>
import myfooter from '@/components/myfooter.vue'
export default {
    components: { myfooter },
    data() {
        return {
            img: [
                require('@/assets/imgs/lunbo1.png'),
                require('@/assets/imgs/lunbo2.png'),
                require('@/assets/imgs/lunbo3.png'),
                require('@/assets/imgs/lunbo4.png'),
            ],
        }
    }
}
</script>

<style scoped>
.lunbo {
    border-radius: 0 0 20px 20px;
    box-shadow: 0 0 10px 3px #999
}

.cobot {
    width: 100%;
    height: 100%;
}

.hanyuan {
    margin-right: 150px;
    margin-left: 150px;
}

.card {
    border: 3px solid;
    background-color: rgba(255, 255, 255, 0.05);
    backdrop-filter: blur(30px);
    -webkit-backdrop-filter: blur(30px);
    border: 0.666667px solid rgba(255, 255, 255, 0.18);
    box-shadow: rgba(142, 142, 142, 0.19) 0px 6px 15px 0px;
    -webkit-box-shadow: rgba(142, 142, 142, 0.19) 0px 6px 15px 0px;
    border-radius: 25px;
    -webkit-border-radius: 25px;
    color: rgba(255, 255, 255, 0.4);
    padding: 3px;
}

.hanyuanimg {
    float: left;
}

.hanyuanimg img {
    border-radius: 10px;
    float: left;
    width: 250px;
    height: 250px;
    margin-right: 3px;
    margin-left: 2px;
    margin-top: 2px;
}

.hanyuanimg p,
.history_name p {
    font-size: 18px;
    text-indent: 2em;
    line-height: 2em;
}

.history {
    margin-top: 14px;
}

.history span {
    margin-left: 15px;
    float: left;
    font-size: 25px;
    color: #000;
}

.historyicon {
    margin-top: 7px;
    float: left;
    display: block;
    height: 23px;
    width: 12px;
    background-color: #1f9ff4;
}

.horizon {
    background-color: #4c7e9f;
    width: 250px;
    height: 2px;
    float: left;
    margin-top: 16px;
    margin-left: 18px;
}

.history_name {
    margin-top: 9px;
}

.history_name h3 {
    margin-bottom: 9px;
    color: rgba(150, 56, 56, 0.4);
    text-align: center;
}

.hanyuan .hanyuanimg .imgend {
    width: 300px;
    float: right;

}
</style>
