<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>Favoris</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content v-if="state.loading">
      <div class="loading-center">
        <ion-spinner color="primary"></ion-spinner>
      </div>
    </ion-content>
    <ion-content :fullscreen="true" v-else>
      <ion-list>
        <ion-item
            v-for="cocktail in state.favCocktail"
            :key="cocktail.strDrink"
            @click=" () =>
              router.push(`/drinks-by-favoris/${cocktail.idDrinks}`)
          "
        >
          <ion-label>
            <h2>{{ cocktail.nameDrinks }}</h2>
          </ion-label>
        </ion-item>
      </ion-list>
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import {
  IonPage,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonSpinner,
  IonLabel,
  IonItem,
  IonList,
} from "@ionic/vue";
import {reactive} from "vue";
import {useRouter} from "vue-router";
import axios from "axios";
import IFavoris from "../interfaces/IFavoris";


export default {
  name: "Tab4",
  components: {
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonPage,
    IonSpinner,
    IonLabel,
    IonItem,
    IonList,
  },
  setup() {
    const router = useRouter();

    const state = reactive({
      favCocktail: [] as IFavoris[],
      loading: false,
    });

    const fetchFavoris = async () => {
      state.loading = true;

      const res = await axios.get(
          "http://localhost:8000/favoris/all/"
      );

      if (res.data) {
        state.favCocktail = res.data;
      }
      console.log(res.data)

      state.loading = false;
    };

    fetchFavoris();

    return {
      router,
      state,
    };
  },
};
</script>
