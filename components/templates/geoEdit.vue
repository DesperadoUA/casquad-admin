<template>
  <div>
    <v-container>
      <v-row>
        <v-col class="offset-1 col-10 font-podkova-bold blue-grey darken-4">
          <v-expansion-panels inset>
            <v-expansion-panel>
              <v-expansion-panel-header >GEO</v-expansion-panel-header>
              <v-expansion-panel-content class="pt-4">
                <v-row>
                    <v-col cols="1">
                      <img src="/img/GB.webp" width="32" height="28" />
                      <v-sheet>
                        <v-switch
                          color="deep-orange darken-2"
                          v-model="geo_GB"
                          inset
                          @change="change('geo_GB')"
                        ></v-switch>
                      </v-sheet>
                    </v-col>
                    <v-col cols="1">
                      <img src="/img/AU.webp" width="32" height="28" />
                      <v-sheet>
                        <v-switch
                          color="deep-orange darken-2"
                          v-model="geo_AU"
                          inset
                          @change="change('geo_AU')"
                        ></v-switch>
                      </v-sheet>
                    </v-col>
                    <v-col cols="1">
                      <img src="/img/CA.webp" width="32" height="28" />
                      <v-sheet>
                        <v-switch
                          color="deep-orange darken-2"
                          v-model="geo_CA"
                          inset
                          @change="change('geo_CA')"
                        ></v-switch>
                      </v-sheet>
                    </v-col>
                    <v-col cols="1">
                      <img src="/img/NL.webp" width="32" height="28" />
                      <v-sheet>
                        <v-switch
                          color="deep-orange darken-2"
                          v-model="geo_NL"
                          inset
                          @change="change('geo_NL')"
                        ></v-switch>
                      </v-sheet>
                    </v-col>
                    <v-col cols="1">
                      <img src="/img/DE.webp" width="32" height="28" />
                      <v-sheet>
                        <v-switch
                          color="deep-orange darken-2"
                          v-model="geo_DE"
                          inset
                          @change="change('geo_DE')"
                        ></v-switch>
                      </v-sheet>
                    </v-col>
                    <!--
                    <v-col cols="1">
                      <img src="/img/BD.webp" width="32" height="28" />
                      <v-sheet>
                        <v-switch
                          color="deep-orange darken-2"
                          v-model="geo_BD"
                          inset
                          @change="change('geo_BD')"
                        ></v-switch>
                      </v-sheet>
                    </v-col>
                    <v-col cols="1">
                      <img src="/img/GR.webp" width="32" height="28" />
                      <v-sheet>
                        <v-switch
                          color="deep-orange darken-2"
                          v-model="geo_GR"
                          inset
                          @change="change('geo_GR')"
                        ></v-switch>
                      </v-sheet>
                    </v-col>
                    <v-col cols="1">
                      <img src="/img/IN.webp" width="32" height="28" />
                      <v-sheet>
                        <v-switch
                          color="deep-orange darken-2"
                          v-model="geo_IN"
                          inset
                          @change="change('geo_IN')"
                        ></v-switch>
                      </v-sheet>
                    </v-col>
                    <v-col cols="1">
                      <img src="/img/ID.webp" width="32" height="28" />
                      <v-sheet>
                        <v-switch
                          color="deep-orange darken-2"
                          v-model="geo_ID"
                          inset
                          @change="change('geo_ID')"
                        ></v-switch>
                      </v-sheet>
                    </v-col>
                    <v-col cols="1">
                      <img src="/img/ZA.webp" width="32" height="28" />
                      <v-sheet>
                        <v-switch
                          color="deep-orange darken-2"
                          v-model="geo_ZA"
                          inset
                          @change="change('geo_ZA')"
                        ></v-switch>
                      </v-sheet>
                    </v-col>
                    <v-col cols="1">
                      <img src="/img/PH.webp" width="32" height="28" />
                      <v-sheet>
                        <v-switch
                          color="deep-orange darken-2"
                          v-model="geo_PH"
                          inset
                          @change="change('geo_PH')"
                        ></v-switch>
                      </v-sheet>
                    </v-col>
                    <v-col cols="1">
                      <img src="/img/SE.webp" width="32" height="28" />
                      <v-sheet>
                        <v-switch
                          color="deep-orange darken-2"
                          v-model="geo_SE"
                          inset
                          @change="change('geo_SE')"
                        ></v-switch>
                      </v-sheet>
                    </v-col>
                    -->
                </v-row>
              </v-expansion-panel-content>
            </v-expansion-panel>
          </v-expansion-panels>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>
<script>
import global from '~/mixins/global'
export default {
  name: 'geoEdit',
  props: ['data', 'action'],
  mixins: [global],
  data () {
    return {
      geo_GB: false,
      geo_BD: false,
      geo_AU: false,
      geo_GR: false,
      geo_IN: false,
      geo_ID: false,
      geo_CA: false,
      geo_NL: false,
      geo_DE: false,
      geo_ZA: false,
      geo_PH: false,
      geo_SE: false
    }
  },
  mounted() {
    this.geo_GB = !!this.data.geo_GB
    this.geo_BD = !!this.data.geo_BD
    this.geo_AU = !!this.data.geo_AU
    this.geo_GR = !!this.data.geo_GR
    this.geo_IN = !!this.data.geo_IN
    this.geo_ID = !!this.data.geo_ID
    this.geo_CA = !!this.data.geo_CA
    this.geo_NL = !!this.data.geo_NL
    this.geo_DE = !!this.data.geo_DE
    this.geo_ZA = !!this.data.geo_ZA
    this.geo_PH = !!this.data.geo_PH
    this.geo_SE = !!this.data.geo_SE
  },
  methods: {
    change(key){
      const currenData = {
        key: key,
        value: this[key]
      }
      this.$store.dispatch(this.action, currenData)
    }
  },
}
</script>
