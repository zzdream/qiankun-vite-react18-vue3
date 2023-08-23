<template>
 <div>我是vue首页</div>
 <div @click="jump">跳转setting page</div>
</template>

<script setup lang="ts">
const router = useRouter()
const jump = () => {
  router.push(`/setting`)
}
</script>

<style scoped lang="less"></style>
