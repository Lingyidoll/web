<template>
    <div class="container">
        <div class="slide">
            <div class="item" v-for="item in items"></div>
        </div>
        <div class="button">
            <div class="left" @click="lfBtn">上一张</div>
            <div class="right" @click="rgBtn">下一张</div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            items: [
                require('@/assets/Picture/01.jpg'),
                require('@/assets/Picture/02.jpg'),
                require('@/assets/Picture/03.jpg'),
                require('@/assets/Picture/04.jpg'),
                require('@/assets/Picture/05.jpg'),
                require('@/assets/Picture/06.jpg'),
            ],
            isclick: true
        }
    },
    methods: {
        lfBtn() {
            if (this.isclick) {
                this.isclick = false
                const slide = document.querySelector(".slide")
                //获取所有的item,形成一个数组
                const items = document.querySelectorAll(".item")
                //prepend函数，将数组中最后一个元素添加到开头位置
                slide.prepend(items[items.length - 1])
                setTimeout(() => {
                    this.isclick = true
                }, 1000);
            }
        },
        rgBtn() {
            if (this.isclick) {
                this.isclick = false
                const slide = document.querySelector(".slide")
                //获取所有的item,形成一个数组
                const items = document.querySelectorAll(".item")
                // 将数组中第一个添加到slide之中,从而形成将下一张图片放到全屏的位置
                slide.appendChild(items[0])
                setTimeout(() => {
                    this.isclick = true
                }, 1000);
            }
        },
        linmit() {
            const item = document.querySelectorAll(".item")
            for (let i = 0; i < item.length; i++) {
                item[i].style.backgroundImage = "url(" + this.items[i] + ")";
            }
        }
    },
    mounted() {
        this.linmit()
    }
}
</script>

<style scoped>
.container {
    /* 设置整体容器*/
    width: 100vw;
    /* 注意这里的宽度和高度一个vw一个vh，会根据窗口进行自动变更vw vh单位可以根据窗口的宽度自动改变大小*/
    height: 100vh;
    position: relative;
    overflow: hidden;
    background: linear-gradient(200deg, rgba(224, 192, 255, 0.451), #918ef9);
}

.item {
    /* 设置卡片区域*/
    width: 240px;
    height: 160px;
    position: absolute;
    top: 50%;
    left: 0;
    /* transform: translateY(-50%); */
    border-radius: 10px;
    /* 过度铺满 */
    background-size: cover;
    background-position: center;
    transition: 1.5s;
    margin-top: -20px;
}

.item:nth-child(1),
.item:nth-child(2) {
    /* 通过后续的js将不同的照片放到首位和第二位,从而实现更换照片的时候选中第一张和第二章
        第一张放在下面当背景图片,第二章放在上面当全屏图片,通过两个图片叠加可以在更换图的时候显得自然 */
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    transform: translateY(0);
    box-shadow: none;
    border-radius: 0;
    margin-top: 0;
    /* 第一张和第二章图片是为了铺满屏幕 */
}

/* 这里设置所有图片一律靠右排列开来*/
.item:nth-child(3) {
    left: 65%;
}

.item:nth-child(4) {
    left: calc(65% + 245px);
}

.item:nth-child(5) {
    left: calc(65% + 490px);
}

.item:nth-child(n+6) {
    /* 超出屏幕区域的暂时隐藏起来*/
    left: calc(65% + 685px);
    opacity: 0;
}

.item {
    /* 设置阴影效果*/
    box-shadow: 0 30px 50px #505050;
}

.button {
    width: 100%;
    position: absolute;
    bottom: 50px;
    text-align: center;
    display: flex;
    justify-content: center;
}

.button div {
    width: 120px;
    height: 50px;
    line-height: 50px;
    text-align: center;
    border-radius: 5px;
    margin: 0 25px;
    transition: .5s;
    cursor: pointer;
    user-select: none;
    font-size: 20px;
    color: #fff;
    background-color: rgba(0, 0, 0, 0.4);
    box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.2);
}
</style>
