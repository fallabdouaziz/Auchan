<template>
  <q-page padding>
    <div class="q-pa-md">
      <div class="row flex justify-center">
        <h5 style="color: red">Offres</h5>
      </div>
      <div v-for="offre in offres" :key="offre">
        <div class="column justify-center" style="border: 3px solid red">
          <div class="col-auto" style="background-color: lightgray">
            <div class="row items-center">
              <div class="col">
                <q-card style="width:80px; height: 80px;">
                  <q-card-section>
                    <img src="src/assets/sad.svg" alt="image">
                  </q-card-section>
                </q-card>
              </div>
              <div class="col">
                <p>{{offre.nom}}</p>
                <p>{{offre.prenom}}</p>
                <p>{{offre.niveauScolaire}}</p>
              </div>
              <div class="col">
                <q-btn label="Accepter" type="submit" color="primary"/>
              </div>
            </div>
          </div>
          <div class="col-auto">
            <div class="row">
              <div class="col">
                <p v-if="offre.certifie">Certifié</p>
                <p>Note: {{offre.note}}</p>
                <p>Date de disponibilités:</p>
                <p>{{offre.disponibilite}}</p>
              </div>
              <div class="col" style="background-color: lightcoral; padding: 5px">
                <p>{{offre.description}}</p>
              </div>
            </div>
          </div>
        </div>
        <br/>
      </div>
    </div>
  </q-page>
</template>

<script>
export default {
  // name: 'PageName',
  data () {
    return {
      offres: [
        { nom: 'Messiant', prenom: 'Valentin', niveauScolaire: 'Bac+3 informatique', certifie: true, note: '5/5', disponibilite: 'Vendredi 26, 16h-18h', description: 'Je suis disponible pour travailler les mathématiques' },
        { nom: 'Vandaele', prenom: 'Maxime', niveauScolaire: 'Bac+3 Fonderie', certifie: true, note: '4/5', disponibilite: 'Jeudi 25, 14h-18h', description: 'Je suis disponible pour travailler la physique' }
      ]
    }
  }
}
</script>
