<template>
  <v-hover>
    <template v-slot:default="{ isHovering, props }">
      <v-card v-bind="props" class="d-flex flex-column" height="420" :elevation="isHovering ? 10 : 2">
        <v-card-title class="d-flex align-center">
          {{ product.data.name }}
        </v-card-title>
        <v-card-subtitle>
          {{ product.data.category }}
        </v-card-subtitle>
        <v-spacer>
          <v-img max-height="128" :src="product.data.image"></v-img>
        </v-spacer>
        <v-card-text>
          {{ product.data.description }}
        </v-card-text>
        <v-container>
          <v-row>
            <v-spacer />
            <v-icon icon="mdi-store" /> {{ product.data.stock }} items
            <v-spacer />
            <v-icon icon="mdi-currency-usd" /> ${{ product.data.price }}
            <v-spacer />
          </v-row>
        </v-container>
        <v-container>
          <v-row>
            <v-spacer />
            <v-rating :model-value="product.data.rating" color="blue-darken-4" readonly>
            </v-rating>
            <v-spacer />
          </v-row>
        </v-container>
      </v-card>
    </template>
  </v-hover>
</template>

<script lang="ts" setup>
import { ProductDoc } from '../types/product';
import { defineProps } from "vue"
defineProps<{
  product: ProductDoc
}>();
</script>
