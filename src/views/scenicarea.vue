<template>
    <div class="shell" id="shell">
        <div class="header">
            <h2 class="title">汉源之旅</h2>
            <h3 class="subtitle">Hanyuan Tour</h3>
        </div>
        <div class="timeline">
            <div class="item" data-text="《金沙水拍云崖暖，大渡桥横铁索寒。》">
                <div class="content">
                    <img src="@/assets/Scenic/01.jpg" alt="" class="img">
                    <h2 class="content-title">大渡河大峡谷</h2>
                    <p class="content-desc">
                        号称世界最窄的大峡谷比虎跳峡还窄,峡谷最大谷深2600米,
                        比美国科落拉多大峡谷深860米,为长江三峡的一倍。
                    </p>
                </div>
            </div>

            <div class="item" data-text="《云端上的小卖部》">
                <div class="content">
                    <img src="@/assets/Scenic/02.jpg" alt="" class="img">
                    <h2 class="content-title">轿顶山</h2>
                    <p class="content-desc">
                        置身于此，竟不知天上人间，是游人避暑胜地

                    </p>
                </div>
            </div>

            <div class="item" data-text="《今朝也算共白首》">
                <div class="content">
                    <img src="@/assets/Scenic/03.jpg" alt="" class="img">
                    <h2 class="content-title">泥巴山</h2>
                    <p class="content-desc">
                        该地区属于典型的亚热带季风气候，具有四季分明的特点。
                        春天时万物复苏，夏天则清凉宜人，秋天则是枫叶满山，冬天则白雪皑皑

                    </p>
                </div>
            </div>

            <div class="item" data-text="《清风雅雨建昌月》">
                <div class="content">
                    <img src="@/assets/Scenic/04.jpg" alt="" class="img">
                    <h2 class="content-title">清溪古镇</h2>
                    <p class="content-desc">
                        清溪古镇建于隋仁寿四年，距今已有一千四百多年的历史，
                        是古南方丝绸之路上一个极为重要的驿站，城内保存着大量唐、宋、明、清各代的建筑。
                        位于汉源县城北39公里的大相岭山脉西南麓的高山河谷地带,海拔166
                        5米。清朝时期,过往客商频繁，每年七月"椒会"期间，市场特别兴旺，故清溪古镇还有"建昌道上小潼关"之称。
                    </p>
                </div>
            </div>

            <div class="item" data-text="《水光潋滟晴方好,山色空蒙雨亦奇》">
                <div class="content">
                    <img src="@/assets/Scenic/05.jpg" alt="" class="img">
                    <h2 class="content-title">汉源湖</h2>
                    <p class="content-desc">
                        汉源湖位于汉源新县城,湖水为贡嘎雪山冰雪融水,四季清澈透明。
                        湖周群山绵延，水面百鸟翱翔,气候温和，湖区空气清新、
                        冬无严寒、夏无酷暑，是宜于休闲、度假、康体、养生的生态宝地。
                    </p>
                </div>
            </div>

            <div class="item" data-text="《天梯上的彝寨》">
                <div class="content">
                    <img src="@/assets/Scenic/06.jpg" alt="" class="img">
                    <h2 class="content-title">古路村</h2>
                    <p class="content-desc">
                        古路村位于四川大渡河大峡谷入口的绝壁之上，被称为悬崖上的村庄，天梯上的彝寨,
                        是个500多人的彝族村落。村民与外界交流有两个通道,
                        一是2003年从石壁上凿出的一条长约3公里、垂直高度近1000米的骡马道,
                        二是位于悬崖上的付费索道。
                    </p>
                </div>
            </div>

            <div class="item" data-text="《湖光山色,林下山海》">
                <div class="content">
                    <img src="@/assets/Scenic/07.jpg" alt="" class="img">
                    <h2 class="content-title">金钟山</h2>
                    <p class="content-desc">
                        大渡河畔，一山如金钟罩地，是为金钟山。
                        一口'巨钟'，神奇地扣在大渡河边上，仰望龙塘山峰，如一尊天然女佛仰卧苍穹，
                        大渡河水东流去，江边苇花萧瑟，轻风微月，情波万里。
                        唐代古寺续古今，天国翼王兵折大树，工农红军三战汉源。

                    </p>
                </div>
            </div>

            <div class="item" data-text="《双节孝石牌坊》">
                <div class="content">
                    <img src="@/assets/Scenic/08.jpg" alt="" class="img">
                    <h2 class="content-title">九襄石牌坊</h2>
                    <p class="content-desc">
                        据当地老人们讲,清朝道光29年,偶然发迹、捐贡出身的黄体诚，
                        为感念寡母、恩嫂的养育之恩，打点清溪县令(汉源县古为清溪县)上报清廷，
                        经道光皇帝批准并颁发圣旨，修建的双节孝石牌坊。
                    </p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    // 定义 prop
    props: {
        id: {
            type: String,
            required: true,
        },
    },
    // 定义 mounted 钩子函数
    mounted() {
        // 调用 timeline 函数
        this.timeline(this.$el);
    },
    // 定义 methods
    methods: {
        // 定义 timeline 函数
        timeline(element) {
            // 定义一些选择器和变量
            var selectors = {
                id: element, // 时间轴的元素
                item: element.querySelectorAll(".item"), // 时间轴的项目
                activeClass: "item--active", // 激活状态的类名
                img: ".img", // 图片的选择器
            };
            // 获取时间轴项目的总数
            var itemLength = selectors.item.length;
            // 将第一个时间轴项目激活，并设置时间轴背景图片为第一个项目的图片
            selectors.item[0].classList.add(selectors.activeClass);
            selectors.id.style.backgroundImage =
                "url(" + selectors.item[0].querySelector(selectors.img).src + ")";
            // 当页面滚动时，触发滚动事件
            window.addEventListener("scroll", function () {
                var max, min;
                // 获取页面滚动的距离
                var pos = window.scrollY;
                // 遍历每个时间轴项目
                for (var i = 0; i < itemLength; i++) {
                    // 获取当前时间轴项目的最小和最大高度
                    min = selectors.item[i].offsetTop;
                    max = selectors.item[i].offsetHeight + selectors.item[i].offsetTop;
                    // 如果滚动到最后一个项目，并且超过了当前项目高度的一半，
                    // 则将最后一个项目设置为激活状态，并设置背景图片为最后一个项目的图片
                    if (
                        i == itemLength - 2 &&
                        pos > min + selectors.item[i].offsetHeight / 2
                    ) {
                        selectors.item.forEach(function (item) {
                            item.classList.remove(selectors.activeClass);
                        });
                        selectors.id.style.backgroundImage =
                            "url(" +
                            selectors.item[itemLength - 1].querySelector(selectors.img).src +
                            ")";
                        selectors.item[itemLength - 1].classList.add(selectors.activeClass);
                    }
                    // 如果当前滚动位置在当前项目的最小和最大高度之间，
                    // 则将当前项目设置为激活状态，并设置背景图片为当前项目的图片
                    else if (pos <= max - 10 && pos >= min) {
                        selectors.id.style.backgroundImage =
                            "url(" + selectors.item[i].querySelector(selectors.img).src + ")";
                        selectors.item.forEach(function (item) {
                            item.classList.remove(selectors.activeClass);
                        });
                        selectors.item[i].classList.add(selectors.activeClass);
                    }
                }
            });
        },
    },
};
</script>

<style scoped>
.shell {
    width: 100%;
    position: relative;
    padding: 80px 0;
    transition: 0.3s ease 0s;
    background-attachment: fixed;
    background-size: cover;
}

.shell:before {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background: rgba(99, 99, 99, 0.8);
    content: "";
}

.header {
    width: 100%;
    text-align: center;
    margin-bottom: 80px;
    position: relative;
}

.title {
    color: #fff;
    font-size: 46px;
    font-weight: normal;
    margin: 0;
}

.timeline {
    display: flex;
    margin: 0 auto;
    flex-wrap: wrap;
    flex-direction: column;
    max-width: 700px;
    position: relative;
}

.content-title {
    font-weight: normal;
    font-size: 45px;
    margin: -10px 0 0 0;
    transition: 0.4s;
    padding: 0 10px;
    box-sizing: border-box;
    color: #fff;

}

.content-desc {
    margin: 0;
    font-size: 15px;
    box-sizing: border-box;
    color: rgba(255, 255, 255, 0.7);
    line-height: 25px;
}

.timeline:before {
    position: absolute;
    left: 50%;
    width: 2px;
    height: 100%;
    margin-left: -1px;
    content: "";
    background: rgba(255, 255, 255, 0.07);
}

.item {
    padding: 40px 0;
    opacity: 0.3;
    filter: blur(2px);
    transition: 0.5s;
    box-sizing: border-box;
    width: calc(50% - 40px);
    display: flex;
    position: relative;
    transform: translateY(-80px);
}

.item:before {
    content: attr(data-text);
    letter-spacing: 3px;
    width: 100%;
    position: absolute;
    color: rgba(255, 255, 255, 0.5);
    font-size: 13px;
    border-left: 2px solid rgba(255, 255, 255, 0.5);
    top: 70%;
    margin-top: -5px;
    padding-left: 15px;
    opacity: 0;
    right: calc(-100% - 56px);
    font: 900 20px '';
    letter-spacing: 5px;
    white-space: nowrap;
}

.item:nth-child(even) {
    align-self: flex-end;
}

.item:nth-child(even):before {
    right: auto;
    text-align: right;
    left: calc(-100% - 56px);
    padding-left: 0;
    border-left: none;
    border-right: 2px solid rgba(255, 255, 255, 0.5);
    padding-right: 15px;
}

.item--active {
    opacity: 1;
    transform: translateY(0);
    filter: blur(0px);
}

.item--active:before {
    top: 50%;
    transition: 0.3s all 0.2s;
    opacity: 1;
}

.item--active .content-title {
    margin: -50px 0 20px 0;
}

.img {
    max-width: 100%;
    box-shadow: 0 10px 15px rgba(0, 0, 0, 0.4);
}

.subtitle {
    color: rgba(255, 255, 255, 0.5);
    font-size: 12px;
    letter-spacing: 5px;
    margin: 10px 0 0 0;
    font-weight: normal;
}

.footer {
    padding: 95px 0;
    text-align: center;
}

.footer a {
    color: #999;
    display: inline-block;
}

@media only screen and (max-width: 767px) {
    .item {
        align-self: baseline !important;
        width: 100%;
        padding: 0 30px 150px 80px;
    }

    .item:before {
        left: 10px !important;
        padding: 0 !important;
        top: 50px;
        text-align: center !important;
        width: 60px;
        border: none !important;
    }

    .item:last-child {
        padding-bottom: 40px;
    }
}

@media only screen and (max-width: 767px) {
    .timeline:before {
        left: 40px;
    }
}
</style>
