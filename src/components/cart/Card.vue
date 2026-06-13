<script setup>
import { dataBases } from "../data/app";
</script>
<template>
  <div
    v-for="item in dataBases"
    :key="item.id"
    class="w-80 shadow shadow-1xl hover:shadow-2xl hover:-translate-y-2 active:translate-y-1 transition duration-300 ease-in-out shadow-[#00000040] text-center py-6 px-8"
  >
    <component :is="item.svg" class="w-10 h-10 mx-auto" />
    <h1 class="text-[#323232] text-[16px] lg:text-[28px] font-bold py-6">
      {{ item.name }}
    </h1>
    <p class="text-[#323232] text-[12px] lg:text-[14px] font-normal">
      {{ item.desc }}
    </p>
  </div>
</template>
