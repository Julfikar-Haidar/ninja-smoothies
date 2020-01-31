<!--Siyam-->
<template>
    <div class="index container">
        <div class="card" v-for="smoothie in smoothies" :key="smoothie.id">
            <div class="card-content">
                <i class="material-icons delete" @click="deleteSmoothie(smoothie.id)">delete</i>
                <h2 class="indigo-text">{{smoothie.title}}</h2>
                <ul class="ingredients">
                    <li v-for="(ing,index) in  smoothie.ingredients" :key="index">
                        <span class="chip"> {{ing}}</span>
                    </li>
                </ul>
            </div>
            <span class="btn-floating btn-large halfway-fab pink">
                <router-link :to="{ name: 'EditSmoothie',params: {smoothie_slug:smoothie.slug}}">
                    <i class="material-icons edit">edit</i>
                </router-link>
            </span>
        </div>
    </div>
</template>


<script>
    import db from '@/firebase/init'

    export default {
        name: 'Index',

        data() {
            return {
                smoothies: [],
                // smoothie_config: {
                //     firebase_bd_name: 'smoothies'
                // },
            }
        },// data

        methods: {

            /*delete objects from smoothies*/
            deleteSmoothie(id) {
                db.collection('smoothies').doc(id).delete().then(() => {
                    this.smoothies = this.smoothies.filter(smoothie => {
                        return smoothie.id !== id
                    })// filter
                })// delete
            }, // deleteSmoothie

            /*push firebase data to the smoothies array*/
            fetchData() {
                db.collection('smoothies').get().then(snapshot => {
                    snapshot.forEach(doc => {
                        let smoothie = doc.data();
                        smoothie.id = doc.id;
                        this.smoothies.push(smoothie)
                    }) //forEach
                })// then
            },// fetchData

        },// method

        created() {
            this.fetchData()

        },// created
    }
</script>


<style>
    .index {
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        grid-gap: 30px;
        margin-top: 60px;
    }

    .index h2 {
        font-size: 1.8em;
        text-align: center;
        margin-top: 0;
    }

    .index .ingredients li {
        display: inline-block;
    }

    .index .delete {
        position: absolute;
        top: 4px;
        right: 4px;
        cursor: pointer;
        color: #aaa;
        font-size: 1.4em;
    }

</style>
<!--Siyam-->


<!--Mostaq vai (not working)-->
<!--<template>-->
<!--  <div class="index container">-->
<!--      <div class="card" v-for="(smoothie, number) in smoothies" :key="smoothie.id">-->
<!--        <div class="card-content">-->
<!--          <i class="material-icons delete" @click="deleteSmoothie(smoothie.id)">delete</i>-->
<!--          <h2 class="indigo-text">{{number+1}}) {{smoothie.title}}</h2>-->
<!--          <ul class="ingredients">-->
<!--            <li v-for="(ingredient, index) in smoothie.ingredients" :key="index">-->
<!--              <span class="chip">{{ ingredient }}</span>-->
<!--            </li>-->
<!--          </ul>-->
<!--        </div>-->
<!--      </div>-->
<!--  </div>-->
<!--</template>-->

<!--<script>-->
<!--import db from '../../firebase/init'-->

<!--export default {-->
<!--  name: 'Index',-->
<!--  data(){-->
<!--    return {-->
<!--      smoothies:[],-->
<!--      smoothies_collection: 'smoothies'-->
<!--    }-->
<!--  },-->
<!--  methods: {-->
<!--    deleteSmoothie(id){-->
<!--      //delte data from firestore-->
<!--      db.collection(this.smoothies_collection).doc(id).delete()-->
<!--      .then(() => {-->
<!--        this.smoothies = []-->
<!--        this.fetch_data()-->
<!--        this.delete_confirm()-->
<!--      })-->
<!--    },-->
<!--    //end delte function-->
<!--    delete_confirm(id){-->
<!--      const found = this.smoothies.some(elm => elm.id === id)-->
<!--      if(!found){ alert('Data Deleted Successfully..!!!')}-->
<!--      else{ alert('Oppss..!!! Data Not Deleted Successfully...!!!')}-->
<!--    },-->
<!--    fetch_data(){-->
<!--        db.collection(this.smoothies_collection).get()-->
<!--        .then(snapshot => {-->
<!--          snapshot.forEach(doc => {-->
<!--            let smoothie = doc.data();-->
<!--            smoothie.id = doc.id;-->
<!--            this.smoothies.push(smoothie)-->
<!--          })-->
<!--        })-->
<!--    }-->
<!--    // fetch data function end-->
<!--  },-->
<!--  created(){-->
<!--    this.fetch_data() // get data from firestore-->

<!--  },-->

<!--}-->
<!--</script>-->

<!--&lt;!&ndash; Add "scoped" attribute to limit CSS to this component only &ndash;&gt;-->
<!--<style scoped>-->
<!--.index {-->
<!--  display: grid;-->
<!--  grid-template-columns: 1fr 1fr 1fr;-->
<!--  grid-gap: 30px;-->
<!--  margin-top: 60px;-->
<!--}-->
<!--.index h2 {-->
<!--  font-size: 1.8em;-->
<!--  text-align: center;-->
<!--  margin-top: 0;-->
<!--}-->
<!--.index .ingredients {-->
<!--  margin: 30px auto;-->
<!--  /* padding: 10px; */-->
<!--}-->
<!--.index .ingredients li {-->
<!--  display: inline-block;-->
<!--}-->
<!--.delete {-->
<!--  position: absolute;-->
<!--  top: 4px;-->
<!--  right: 4px;-->
<!--  cursor: pointer;-->
<!--  color: #aaa;-->
<!--  font-size: 1.4em;-->
<!--}-->
<!--</style>-->
