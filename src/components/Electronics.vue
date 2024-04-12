<template>
  <v-container>
    <v-row>
      <v-col
        v-for="product in products"
        :key="product.id"
        cols="12"
        sm="6"
        md="4"
        lg="3">
        <StoreItem :product="product"></StoreItem>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts" setup>
import { computed } from "vue"
import { useProductStore } from "../stores/ProductStore";
import StoreItem from "./StoreItem.vue";
const productStore = useProductStore();
productStore.init();
productStore.filterByCategory("Electronics");
const products = computed(() => productStore.products);
</script>
