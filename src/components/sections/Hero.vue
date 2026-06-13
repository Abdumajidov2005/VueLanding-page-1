<script setup>
import { BaseButton } from "@/components/ui";
</script>
<template>
  <div
    class="flex flex-col-reverse lg:flex-row lg:justify-between justify-center items-center flex-wrap container_1280 lg:pt-14 lg:pb-28 pt-9 pb-14"
  >
    <div
      class="lg:w-lg w-full lg:text-left text-center mb-5 mx-auto"
      data-aos="fade-right"
    >
      <h1 class="text-[#0D0C22] font-medium lg:text-5xl text-4xl leading-14">
        O melhor suporte no cuidado para seu
        <span class="text-[#FBBC05]">melhor amigo</span>
      </h1>
      <p
        class="py-8 text-[#323232] lg:text-[21px] lg:font-light text-[16px] font-light"
      >
        Aqui, você encontrará respostas para todas as suas dúvidas, desde a
        escolha da melhor ração até dicas essenciais para garantir o bem-estar
        do seu companheiro peludo.
      </p>
      <BaseButton variant="primary" size="lg">Acessar</BaseButton>
    </div>
    <div class="w-full h-full lg:w-lg lg:h-2/5 mx-auto" data-aos="fade-left">
      <img class="w-full h-full" src="@/assets/imgs/hero.png" alt="" />
    </div>
  </div>
</template>
