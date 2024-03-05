<script lang="ts" setup>
definePageMeta({ layout: 'login' })
</script>

<template>
  <form action="/api/authorize" class="flex flex-col gap-6" method="POST">
    <input name="username" placeholder="username" type="text">
    <input name="password" placeholder="password" type="password">

    <button type="submit">
      로그인
    </button>
  </form>
</template>
