<script lang="ts" setup>
import { cva, type VariantProps } from 'class-variance-authority'
import { twMerge } from 'tailwind-merge'
import type { Component } from 'vue'
import type { HTMLNonFunctionalElement } from '~/utils/html-element-types'

const variants = cva(
  'flex w-full h-dvh bg-gray-50 text-gray-700',
  {
    variants: {
      direction: {
        row: 'flex-row',
        col: 'flex-col',
      },
      gap: {
        10: 'gap-10',
        false: '',
      },
      center: {
        true: 'justify-center items-center',
      },
    },
  },
)

type LayoutRootVariants = VariantProps<typeof variants>
type LayoutRootProps = {
  as?: HTMLNonFunctionalElement | Component
  direction?: LayoutRootVariants['direction']
  gap?: LayoutRootVariants['gap']
  center?: boolean
}

const props = withDefaults(defineProps<LayoutRootProps>(), {
  as: 'div',
  direction: 'col',
  gap: 10,
})

const element = computed(() => props.as)
const classes = computed(() => twMerge(variants(props)))
</script>

<template>
  <component :is="element" :class="classes">
    <slot />
  </component>
</template>
