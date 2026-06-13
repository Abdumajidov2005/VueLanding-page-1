<script setup>
import { BaseButton } from "@/components/ui";
</script>

<template>
  <header>
    <nav>
      <div class="container_1280 flex justify-between items-center py-8">
        <div data-aos="zoom-out" class="w-32 h-11 cursor-pointer">
          <img class="w-full h-full" src="@/assets/icons/logo.svg" alt="" />
        </div>
        <ul class="lg:flex lg:items-center lg:gap-9 nav_link hidden">
          <li
            class="transition duration-300"
            data-aos="fade-down-left"
            data-aos-delay="300"
          >
            Home
          </li>
          <li
            class="transition duration-300"
            data-aos="fade-down-left"
            data-aos-delay="400"
          >
            Sobre
          </li>
          <li
            class="transition duration-300"
            data-aos="fade-down-left"
            data-aos-delay="500"
          >
            Serviços
          </li>
          <li
            class="transition duration-300"
            data-aos="fade-down-left"
            data-aos-delay="600"
          >
            Nosso App
          </li>
          <li
            class="transition duration-300"
            data-aos="fade-down-left"
            data-aos-delay="700"
          >
            Blog
          </li>
        </ul>
        <BaseButton data-aos="zoom-out" variant="primary">Acessar</BaseButton>
      </div>
    </nav>
  </header>
</template>
