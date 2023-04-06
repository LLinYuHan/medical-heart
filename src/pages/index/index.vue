<template>
    <view class="content">
        <view class="module">
            <text class="title">预约</text>
        </view>
        <view class="module">
            <text class="title">导航</text>
        </view>
    </view>
</template>

<script setup lang="ts">
import { ref } from 'vue';
const title = ref('Hello LinYuHan');
</script>

<style lang="less" scoped>
.content {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 20rpx;
}

.module {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 100rpx;
    margin: 20rpx;
    height: 100rpx;
    width: 100%;
    color: #fff;
    background-color: rgb(89, 113, 231);
    border-radius: 10rpx;
}

.title {
    font-size: 36rpx;
    font-weight: 400;
}
</style>
