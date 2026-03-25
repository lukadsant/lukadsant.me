<script setup lang="ts">
// Impact Stats component
</script>

<template>
  <section class="mb-10 px-6">
    <h2
      class="text-white font-outfit font-semibold text-lg mb-5 flex items-center gap-2"
    >
      <span class="w-2 h-2 rounded-full bg-green-vibrant block" />
      Impact
    </h2>
    <div class="flex gap-4 overflow-x-auto no-scrollbar pb-2 -mx-6 px-6">
      <div class="min-w-[120px] p-4 bg-neutral-soft border border-neutral-light shadow-sm rounded-2xl flex flex-col justify-center">
        <p class="text-3xl font-outfit font-bold text-blue-dark mb-1">
          10+
        </p>
        <p class="text-blue-dark/60 font-inter text-xs font-medium uppercase tracking-wider">
          Projects done
        </p>
      </div>
      <div class="min-w-[120px] p-4 bg-neutral-soft border border-neutral-light shadow-sm rounded-2xl flex flex-col justify-center">
        <p class="text-3xl font-outfit font-bold text-blue-dark mb-1">
          5+
        </p>
        <p class="text-blue-dark/60 font-inter text-xs font-medium uppercase tracking-wider">
          Happy clients
        </p>
      </div>
      <div class="min-w-[120px] p-4 bg-neutral-soft border border-neutral-light shadow-sm rounded-2xl flex flex-col justify-center">
        <p class="text-3xl font-outfit font-bold text-blue-dark mb-1">
          4 <span class="text-xl text-blue-dark/60">yr</span>
        </p>
        <p class="text-blue-dark/60 font-inter text-xs font-medium uppercase tracking-wider">
          Years exp.
        </p>
      </div>
    </div>
  </section>
</template>

<style scoped>
.no-scrollbar::-webkit-scrollbar {
  display: none;
}
.no-scrollbar {
  -ms-overflow-style: none;
  scrollbar-width: none;
}
</style>
