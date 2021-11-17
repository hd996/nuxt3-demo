<template>
  <div class="i18n">
    {{ $t('Common.Ok') }}
    <select id="locale-select" v-model="$i18n.locale">
      <option value="en">en</option>
      <option value="cn">cn</option>
    </select>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped></style>
