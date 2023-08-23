<template>
  <div>我是vue list</div>
  <div @click="jump">返回list</div>
</template>

<script setup lang="ts">
const router = useRouter()
const jump = () => {
  router.push(`/list`)
}
</script>
<style scoped lang="less">
</style>
