<template>
  <v-app>
    <v-app-bar app></v-app-bar>
    <v-main>
      <v-container>
        <h3> a Switch for Theme </h3>
        <div>
          <v-switch
            v-model="$vuetify.theme.dark"
            hint="전체적인 테마를 바꾸는 스위치"
            inset
            label="Vuetify Theme Dark"
            persistent-hint
          ></v-switch>
        </div>
        <h3> Alerts Sample</h3>
        <v-alert
          icon="mdi-firework"
          dense
          type="primary"
        >primary</v-alert>
        <v-alert
          dense
          type="secondary"
        >secondary</v-alert>
        <v-alert
          dense
          type="warning"
        >warning</v-alert>

        <h3> Buttons Sample </h3>
        <v-btn
          color="primary"
          >Primary</v-btn>
        <v-btn
          color="secondary"
          >secondary</v-btn>
        <v-btn
          color="error"
          >secondary</v-btn>
      </v-container>
    </v-main>
  </v-app>
</template>
<style>
h3 {
  margin : 24px  0 10px 0 ;
}
</style>
<script>
export default {
  name: 'MyApp',

  components: {
  },

  data: () => ({
    //
  }),
};
</script>
