<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-buttons slot="start">
          <ion-back-button></ion-back-button>
        </ion-buttons>
        <ion-title>{{ state.lstDrinks.strDrink }}</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content v-if="state.loading">
      <div class="loading-center">
        <ion-spinner color="primary"></ion-spinner>
      </div>
    </ion-content>
    <ion-content :fullscreen="true" v-else>
      <DrinkCard :drink="state.lstDrinks" />
      <ion-button  @click="() => deleteFavoris(state.lstDrinks.idDrink)" >Supprimer des favoris</ion-button>

    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import {
  IonPage,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonButtons,
  IonBackButton,
  IonContent,
  IonSpinner,
} from "@ionic/vue";


import { reactive } from "vue";
import {useRoute, useRouter} from "vue-router";

import axios from "axios";
import IDrinkDetails from "@/interfaces/IDrinkDetails";
import DrinkCard from "../components/DrinkCard.vue";



export default {
  name: "FavorisVue",
  components: {
    IonHeader,
    IonToolbar,
    IonButtons,
    IonBackButton,
    IonTitle,
    DrinkCard,
    IonContent,
    IonPage,
    IonSpinner,
  },
  setup() {
    const router = useRouter();
    const route = useRoute();

    const cocktail = route.params.id as string;

    const state = reactive({
      lstDrinks: {} as IDrinkDetails[] ,
      loading: false,
    });


    const fetchDrinksByFavoris = async (cocktail: string) => {
      state.loading = true;

      const res = await axios.get(
          `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${cocktail}`
      );

      if (res.data) {
        state.lstDrinks = res.data?.drinks[0];
      }
      console.log(res.data)

      state.loading = false;
    };
    const deleteFavoris = async (idDrink: string) => {
      state.loading = true;

      const res = await axios.post(
          `http://localhost:8000/favoris/delete/`, {idDrinks: idDrink}
      );

      if (res.data) {
        console.log(res.data);
      }

      state.loading = false;
    };



    fetchDrinksByFavoris(cocktail);

    return {
      router,
      state,
      cocktail,
      deleteFavoris,
    };
  },
};
</script>
