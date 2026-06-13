<script setup>
import { ClockIcon } from "@heroicons/vue/20/solid";
import { BaseButton } from "../ui";
import { CursorArrowRippleIcon } from "@heroicons/vue/24/solid";
</script>

<template>
  <section>
    <div
      class="container_1280 flex lg:justify-between justify-center flex-wrap items-center py-28"
    >
      <div class="w-full h-80 lg:w-lg lg:h-1/3">
        <img class="w-full h-full object-cover" src="/imgs/app.png" alt="" />
      </div>
      <div class="lg:w-5/12">
        <h1 class="lg:text-5xl text-2xl text-[#323232] font-bold mb-5">
          BAIXE O NOSSO APP!
        </h1>
        <h2
          class="flex items-center justify-left gap-1 text-[18px] font-semibold text-[#323232]"
        >
          <ClockIcon class="w-6 h-6" /> Alertas e lembretes inteligentes
        </h2>
        <p class="text-[18px] text-[#323232] font-light py-1 mb-2">
          Receba notificações personalizadas para vacinas, consultas
          veterinárias e outras necessidades, garantindo que você nunca perca um
          cuidado essencial para o seu pet.
        </p>
        <h2
          class="flex items-center justify-left gap-1 text-[18px] font-semibold text-[#323232]"
        >
          <ClockIcon class="w-6 h-6" /> Alertas e lembretes inteligentes
        </h2>
        <p class="text-[18px] text-[#323232] font-light py-1 mb-2">
          Receba notificações personalizadas para vacinas, consultas
          veterinárias e outras necessidades, garantindo que você nunca perca um
          cuidado essencial para o seu pet.
        </p>
        <h2
          class="flex items-center justify-left gap-1 text-[18px] font-semibold text-[#323232]"
        >
          <ClockIcon class="w-6 h-6" /> Alertas e lembretes inteligentes
        </h2>
        <p class="text-[18px] text-[#323232] font-light py-1 mb-2">
          Receba notificações personalizadas para vacinas, consultas
          veterinárias e outras necessidades, garantindo que você nunca perca um
          cuidado essencial para o seu pet.
        </p>
        <BaseButton
          variant="ghost"
          size="md"
          data-aos="zoom-out"
          class="flex gap-2 items-center"
        >
          <CursorArrowRippleIcon class="w-10" />
          Download App
        </BaseButton>
      </div>
    </div>
  </section>
</template>
