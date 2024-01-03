<template>
    <div class="header">
        <h2 class="title">汉源特产</h2>
        <h3 class="subtitle">Hanyuan Specialty</h3>
    </div>
    <div class="card">
        <div class="picture">
            <img src="@/assets/fruit/01.jpg" alt="">
        </div>
        <div class="info">
            <h2>大樱桃</h2>
            <p>汉源樱桃在汉源栽培历史悠久，据史料记载就有200多年的历史
                。汉源樱桃果实宽心脏形，果个中大整齐，梗洼中广，果梗短、粗，果顶较平，缝合线不明显。果面紫红色，有光泽，果皮细薄、光滑，果肉黄色，近核胭脂红色、细嫩、软，汁多，味甜，风味浓。
            </p>
        </div>
    </div>
    <div class="card">
        <div class="picture">
            <img src="@/assets/fruit/02.jpg" alt="">
        </div>
        <div class="info">
            <h2>枇杷</h2>
            <p>雅安汉源枇杷因其果实肉厚、汁多、鲜甜、果肉细腻，呈现出蜜糖样的甜度和极佳的风味而闻名。果实呈黄色，外皮光滑，果肉呈半透明状，可食部分约占整个果实的50％，并含有多种营养成分，如维生素C、葡萄糖、果胶、原花青素等</p>
        </div>
    </div>
    <div class="card">
        <div class="picture">
            <img src="@/assets/fruit/03.jpg" alt="">
        </div>
        <div class="info">
            <h2>苹果</h2>
            <p>汉源苹果，四川省雅安市汉源县特产，海拔高、阳光充足、昼夜温差大、山泉水浇灌等优越的自然环境造就了汉源阳光苹果外形硕大、口感松脆、水分充足、糖分高等特点。汉源昼夜温差大，使苹果在果肉中形成了漂亮的糖分结晶体，这就是“糖心”苹果。
            </p>
        </div>
    </div>
    <div class="card">
        <div class="picture">
            <img src="@/assets/fruit/04.jpg" alt="">
        </div>
        <div class="info">
            <h2>汉源樱桃</h2>
            <p>汉源樱桃在汉源栽培历史悠久，据史料记载就有200多年的历史。汉源樱桃
                品系较多，优系品种就有20多个，依品种和海拔高度不同，成熟期从4月中旬至5月下旬。汉源樱桃个大皮薄，形如玛瑙，香气沁人，营养丰富，含铁量高，含糖量高，具有
                促进血红蛋白再生，对软化血管、抵抗衰老、减少贫血患者、癌症病患有一定的补益作用，被誉为果之珍品。</p>
        </div>
    </div>
    <div class="card">
        <div class="picture">
            <img src="@/assets/fruit/05.jpg" alt="">
        </div>
        <div class="info">
            <h2>雪梨</h2>
            <p>汉源雪梨产区地处横断山脉北段东缘，海拔550-4021米，地貌以高、中山为主，地质构造复杂，
                四周环山，谷深岭高，褶皱、断裂密集。土壤以沙壤土、褐红壤为主，pH值5.5-7.0，土质疏松、土层深厚肥沃，富含微量元素，地下水位低，具有较好的保水保肥能力，非常适宜雪梨生长
                发育。汉源雪梨果形大，倒卵圆形；果皮绿黄色、光滑、有蜡质，果肉白色，果心较小，肉质较细、松脆。
            </p>
        </div>
    </div>
    <div class="card">
        <div class="picture">
            <img src="@/assets/fruit/06.jpg" alt="">
        </div>
        <div class="info">
            <h2>桃花李</h2>
            <p>四川汉源·桃花李得皇帝恩宠，钦定为“贡果”“三月花香飘十里，六月李熟漫山红。”每年的六七月，汉源桃花李味道鲜美，桃花李挂满枝头，香飘满园！
                桃花李皮色黄澄，鲜亮如玉，刚下树的桃花李略施粉黛，附着薄薄的果霜，十分新鲜。
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
        return
    },
    methods: {
        //解决分辨率文字溢出
        Init() {
            var p = document.getElementsByTagName("p")
            if (window.screen.width == 1536) {
                for (let i = 0; i < p.length - 3; i++) {
                    p[i].style.width = "820px"
                    p[i].style.fontSize = "18px"
                }
            }
            if (window.screen.width == 1920) {
                for (let i = 0; i < p.length - 3; i++) {
                    p[i].style.width = "1100px"
                    p[i].style.fontSize = "25px"
                }
            }
            if (window.screen.width == 2048) {
                for (let i = 0; i < p.length - 3; i++) {
                    p[i].style.width = "1250px"
                    p[i].style.fontSize = "25px"
                    p[i].style.letterSpacing = "8px"
                    p[i].style.lineHeight = "3rem"
                }
            }
        }
    },
    mounted() {
        this.Init()
    }
}
</script>

<style scoped>
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
    margin-top: 88px;
}

.subtitle {
    color: rgba(255, 255, 255, 0.5);
    font-size: 10px;
    letter-spacing: 5px;
    margin: 10px 0 0 0;
    font-weight: normal;
    letter-spacing: 2px;
}

@keyframes move {
    0% {
        transform: translate(100px, 100px);
        margin-top: 100px;
        opacity: 0;

    }

    100% {
        transform: translate(0, 0);
        margin-top: 0;
        opacity: 1;
    }
}

.card {
    margin: auto 10%;
    height: 300px;
    background-color: #fff;
    border-radius: 10px;
    margin-bottom: 20px;
    animation: move 2s;
}

.picture {
    float: left;
    border-radius: 2px;
}

.picture img {
    width: 250px;
    height: 250px;
    padding: 23px;
    border-radius: 2px;
}

.info {
    position: relative;
    float: left;
    height: 200px;
    margin-left: 20px;
    margin-top: 17px;
    color: #000;
}

.info h2 {
    font-size: 30px;
    margin-bottom: 8px;
}

.info p {
    position: absolute;
    width: 950px;
    font-size: 20px;
    text-indent: 2em;
    letter-spacing: 12px;
    line-height: 2rem;
}
</style>
