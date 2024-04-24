<template>
  <v-hover>
    <template v-slot:default="{ isHovering, props }">
      <v-card
        v-bind="props"
        class="d-flex flex-column"
        height="500"
        :elevation="isHovering ? 10 : 2"
      >
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
            <v-rating
              :model-value="product.data.rating"
              color="blue-darken-4"
              readonly
            >
            </v-rating>
            <v-spacer />
          </v-row>
        </v-container>
        <v-row class="justify-start">
          <v-col class="ma-3 v-col-auto">
            <v-btn class="bg-blue" @click="openModItem"> Modify </v-btn>
          </v-col>
          <v-col class="ma-3 v-col-auto">
            <v-btn class="bg-red" @click="delItem"> Delete </v-btn>
          </v-col>
        </v-row>
      </v-card>
    </template> </v-hover
  ><v-dialog v-model="modding" max-width="600px">
    <v-card>
      <v-card-title>Modifying Item</v-card-title>
      <v-card-text
        ><v-text-field v-model="product.name" label="Name"></v-text-field>
        <v-row>
          <v-col>
            <v-text-field
              v-model="product.image"
              label="Image URL"
            ></v-text-field>
          </v-col>
          <v-col>
            <v-select
              label="Type"
              :items="['Electronics', 'Clothing', 'Groceries']"
            ></v-select>
          </v-col>
        </v-row>
        <v-text-field
          v-model="product.description"
          label="Description"
        ></v-text-field>
        <v-row>
          <v-col>
            <v-text-field v-model="product.price" label="Price (USD)" />
          </v-col>
          <v-col>
            <v-text-field v-model="product.stock" label="Stock" />
          </v-col>
        </v-row>
        <v-slider
          label="Rating"
          v-model="product.rating"
          min="0"
          max="5"
          step=".5"
          show-ticks="always"
          tick-size="4"
        >
          <template v-slot:append>
            <v-text-field
              v-model="product.rating"
              style="width: 70px"
              density="compact"
              type="number"
            ></v-text-field>
          </template>
        </v-slider>
        <v-row>
          <v-col>
            <v-btn color="blue" class="mt-2" block @click="modItem"
              >Save Changes</v-btn
            >
          </v-col>
          <v-col>
            <v-btn color="red" class="mt-2" block @click="modding = false"
              >Cancel</v-btn
            >
          </v-col>
        </v-row>
      </v-card-text>
    </v-card>
  </v-dialog>
</template>

<script lang="ts" setup>
import { doc, deleteDoc, updateDoc } from "firebase/firestore";
import { db } from "../main";
import { ProductDoc } from "../types/product";
import { defineProps, reactive, ref } from "vue";
defineProps<{
  product: ProductDoc;
}>();

const modding = ref(false);

const openModItem = () => {
  modding.value = true;
  console.log("Opening dialog");
};

const modItem = () => {};

const delItem = async (product: ProductDoc) => {
  const confirmDel = confirm("You sure about that?");
  const prodRef = doc(db, "products", product.id);
  if (confirmDel) {
    await deleteDoc(prodRef);
    window.location.reload();
  }
};
</script>
