<script setup>
import { BaseButton } from "@/components/ui";
</script>

<template>
  <header>
    <nav>
      <div class="container_1280 flex justify-between items-center py-8">
        <div class="w-32 h-11 cursor-pointer">
          <img class="w-full h-full" src="@/assets/icons/logo.svg" alt="" />
        </div>
        <ul class="flex items-center gap-9 nav_link">
          <li>Home</li>
          <li>Sobre</li>
          <li>Serviços</li>
          <li>Nosso App</li>
          <li>Blog</li>
        </ul>
        <BaseButton variant="primary">Acessar</BaseButton>
      </div>
    </nav>
  </header>
</template>
