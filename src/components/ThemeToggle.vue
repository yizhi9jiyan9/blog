<script setup lang="ts">
import { onMounted, ref } from 'vue';

const isDark = ref(false);

function applyTheme(nextIsDark: boolean) {
  isDark.value = nextIsDark;
  document.documentElement.classList.toggle('dark', nextIsDark);
  localStorage.setItem('theme', nextIsDark ? 'dark' : 'light');
}

onMounted(() => {
  isDark.value = document.documentElement.classList.contains('dark');
});
</script>

<template>
  <button
    type="button"
    class="border border-[color:var(--color-line)] px-3 py-2 font-garamond text-xs font-bold uppercase tracking-[0.28em] text-[color:var(--color-muted)] transition hover:bg-[color:var(--color-text)] hover:text-[color:var(--color-bg)] sm:px-4"
    :aria-label="isDark ? '切换到浅色主题' : '切换到深色主题'"
    @click="applyTheme(!isDark)"
  >
    {{ isDark ? 'Light' : 'Dark' }}
  </button>
</template>
