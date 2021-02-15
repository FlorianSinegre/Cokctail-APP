<template>
  <ion-card>
    <img :src="drink.strDrinkThumb" />
    <ion-card-header>
      <ion-card-subtitle>
        {{ drink.strCategory }} | Servie dans une
        {{ drink.strGlass }}
      </ion-card-subtitle>
      <ion-card-title>
        {{ drink.strDrink }}
      </ion-card-title>
    </ion-card-header>
    <ion-card-content>
      <p>{{ drink.strInstructions }}</p>
      <ion-list-header> Ingredients </ion-list-header>
      <ion-list>
        <template v-for="index in 15" :key="index">
          <ion-item v-if="drink[`strIngredient${index}`]">
            <ion-label>
              <span v-if="drink[`strMeasure${index}`]">
                {{ drink[`strMeasure${index}`] }} -
              </span>
              {{ drink[`strIngredient${index}`] }}
            </ion-label>
          </ion-item>
        </template>
      </ion-list>
    </ion-card-content>
    <ion-button  @click="() => addFavoris(drink.strDrink, drink.idDrink)" >Ajouter en favoris</ion-button>


  </ion-card>
</template>

<script lang="ts">
import {
  IonCard,
  IonCardTitle,
  IonCardHeader,
  IonCardSubtitle,
  IonCardContent,
  IonListHeader,
  IonLabel,
  IonItem,
  IonList,
} from "@ionic/vue";
import {reactive} from "vue";
import IDrink from "../interfaces/IDrink";
import axios from "axios";
export default {
  name: "DrinkCard",
  props: {
    drink: Object,
  },
  components: {
    IonCardContent,
    IonCard,
    IonCardTitle,
    IonCardHeader,
    IonCardSubtitle,
    IonListHeader,
    IonLabel,
    IonItem,
    IonList,
  },
  setup(){
    const state = reactive({
      favDrinks: [] as IDrink[],
      loading: false,
    });

    const addFavoris = async (nameDrink: string, idDrink: string) => {
      state.loading = true;

      const res = await axios.post(
          `http://localhost:8000/favoris/add/`, {nameDrinks: nameDrink, idDrinks: idDrink}
      );

      if (res.data) {
        console.log(res.data);
      }

      state.loading = false;
    };
    return {
      addFavoris,
    };
  },
};
</script>

<style>
img{
  height: 50vh;
}
</style>