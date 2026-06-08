<script setup>
defineProps({
  variant: {
    type: String,
    default: "primary",
  },
  size: {
    type: String,
    default: "md",
  },
  disabled: {
    type: Boolean,
    default: false,
  },
});

const variants = {
  primary: "bg-[#FBBC05] text-white hover:bg-[#FBBC05]/80 transition-colors duration-300",
  danger: "bg-red-600 text-white hover:bg-red-700",
  success: "bg-green-600 text-white hover:bg-green-700",
  ghost:
    "bg-transparent border border-gray-300 text-gray-700 hover:bg-gray-100",
};

const sizes = {
  sm: "px-3 py-1 text-sm",
  md: "px-4 py-2",
  lg: "px-6 py-3 text-lg",
};
</script>

<template>
  <button
    :class="[
      'rounded-lg transition font-medium',
      variants[variant],
      sizes[size],
      disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer',
    ]"
    :disabled="disabled"
  >
    <slot />
  </button>
</template>
