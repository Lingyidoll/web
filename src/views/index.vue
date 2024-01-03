<template>
    <!-- 导航栏 -->
    <div class="headerlist">
        <div class="logo">
            <img src="@/assets/imgs/logo.png" alt="">
        </div>
        <ul>
            <li>
                <router-link to="/home">
                    首页
                </router-link>
            </li>
            <li>
                <router-link to="/scenicarea">
                    景区介绍
                </router-link>
            </li>
            <li>
                <router-link to="/food">
                    美食介绍
                </router-link>
            </li>
            <li>
                <router-link to="/fruit">
                    水果介绍
                </router-link>
            </li>
            <li>
                <router-link to="/picture">
                    精美图片
                </router-link>
            </li>
        </ul>
    </div>
    <div>
        <router-view></router-view>
    </div>
</template>

<script>

export default {

}
</script>

<style>
.headerlist {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    z-index: 999;
    height: 52px;
    background-color: rgb(0, 0, 0, 0.4);
    display: flex;
    align-items: center;
}


.headerlist ul {
    float: right;
    line-height: 12px;
    margin-left: 50%;
}


.headerlist ul li {
    display: block;
    float: left;
    height: 52px;
    padding-left: 50px;
    line-height: 50px;
}

.headerlist ul li a {
    color: #fff;
    font-size: 18px;
}

.headerlist ul li a:hover {
    text-shadow: 0 0 10px #69e0ff, 0 0 20px #69e0ff, 0 0 40px #69e0ff;
    border-top: 3px solid #69e0ff;
    padding-top: 4px;
}

.logo img {
    height: 140px;
    width: 140px;
}


.logo::after {
    content: '攀西阳光第一城——四川汉源';
    position: absolute;
    top: 14px;
    font-size: 18px;
    color: azure;
}
</style>
