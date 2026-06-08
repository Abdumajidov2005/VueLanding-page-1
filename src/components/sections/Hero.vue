<script setup>
import { BaseButton } from "@/components/ui";
</script>
<template>
  <div class="flex justify-between items-center container_1280 pt-14 pb-28">
    <div class="w-lg" data-aos="fade-right">
      <h1 class="text-[#0D0C22] font-medium text-5xl leading-14">
        O melhor suporte no cuidado para seu
        <span class="text-[#FBBC05]">melhor amigo</span>
      </h1>
      <p class="py-8 text-[#323232] text-[21px] font-light">
        Aqui, você encontrará respostas para todas as suas dúvidas, desde a
        escolha da melhor ração até dicas essenciais para garantir o bem-estar
        do seu companheiro peludo.
      </p>
      <BaseButton variant="primary" size="lg">Acessar</BaseButton>
    </div>
    <div class="w-lg h-2/5" data-aos="fade-left">
      <img class="w-full h-full" src="@/assets/imgs/hero.png" alt="" />
    </div>
  </div>
</template>
