<template>
  <ion-page>
    <ion-tabs>
      <ion-tab-bar slot="bottom">
        <ion-tab-button tab="tab1" href="/tabs/tab1">
          <ion-icon :icon="shuffle" />
          <ion-label>Aléatoire</ion-label>
        </ion-tab-button>

        <ion-tab-button tab="tab2" href="/tabs/tab2">
          <ion-icon :icon="pint" />
          <ion-label>Par ingredient</ion-label>
        </ion-tab-button>

        <ion-tab-button tab="tab3" href="/tabs/tab3">
          <ion-icon :icon="search" />
          <ion-label>Rechercher</ion-label>
        </ion-tab-button>

        <ion-tab-button tab="tab4" href="/tabs/tab4">
          <ion-icon :icon="star" />
          <ion-label>Favoris</ion-label>
        </ion-tab-button>
      </ion-tab-bar>
    </ion-tabs>
  </ion-page>
</template>

<script lang="ts">
import { IonTabBar, IonTabButton, IonTabs, IonLabel, IonIcon, IonPage } from '@ionic/vue';
import { pint, search, shuffle, star } from 'ionicons/icons';

export default {
  name: 'Tabs',
  components: { IonLabel, IonTabs, IonTabBar, IonTabButton, IonIcon, IonPage },
  setup() {
    return {
      pint,
      search,
      shuffle,
      star,
    }
  }
}
</script>