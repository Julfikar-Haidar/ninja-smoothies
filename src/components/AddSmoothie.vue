<!--Siyam-->
<!--<template>-->
<!--    <h2>Add Smoothie</h2>-->
<!--</template>-->

<!--<script>-->
<!--    export default {-->
<!--        name: "AddSmoothie",-->

<!--        data() {-->
<!--            return {-->

<!--            }-->

<!--        },//data-->
<!--    }-->
<!--</script>-->

<!--<style scoped>-->

<!--</style>-->
<!--Siyam-->


<!--Mostaq vai-->
<template>
    <div class="edit-smoothie container">
        <h2 class="center-align indigo-text">Add New smoothie Recipe</h2>
        <form @submit.prevent="AddSmoothie">
            <div class="field title">
                <label for="title">Smoothie title</label>
                <input type="text" name="title" v-model="title">
            </div>
            <div v-for="(ing,index) in ingredients" :key="index" class="field add-ingredient">
                <label for="ingredient">Add an ingredient</label>
                <input type="text" name="ingredient" v-model="ingredients[index]">
                <i class="material-icons delete" @click="deleteIng(ing)">delete</i>
            </div>
            <div class="field add-ingredient">
                <label for="field add-ingredient">Add an ingredient</label>
                <input type="text" name="add-ingredient" @keydown.tab="AddMoreIngredient" v-model="another">
            </div>
            <div class="field center-align">
                <p v-if="feedback" class="red-text"> {{feedback}}</p>
                <button class="btn pink">Add Smoothie</button>
            </div>
        </form>
    </div>
</template>

<script>
       import db from '@/firebase/init'
    import  slugify from 'slugify'

    export default {
        name: 'AddSmoothie',
        data(){
            return {
                title: null,
                slug: null,
                another: '',
                ingredients: [],
                feedback: null
            }
        },
        methods: {
            AddSmoothie(){
                // console.log(this.title, this.another, this.ingredients, this.feedback)
                if(this.title){
                    this.feedback = null;

                    // create a slug
                    this.slug = slugify(this.title, {
                        replacement: '-',
                        remove: /[$*_+~.()'"!\-:@]/g,
                        lower: true
                    });// slugify

                    db.collection('smoothies').add({
                        title: this.title,
                        ingredients: this.ingredients,
                        slug: this.slug
                    }).then(() => {this.$router.push({name: 'Index'})}).catch(err => {
                        console.log(err)
                    })// catch
                }// if
                else {
                    this.feedback = 'You must enter a value to add an ingredient'

                }// else
            },// AddSmoothie

            AddMoreIngredient(){
                if(this.another){
                    // console.log('CHECK: ', this.ingredients[0]);
                    this.ingredients.push(this.another);
                    this.another = null
                    this.feedback = null
                }// if
                else {
                    this.feedback = 'You must enter a value to add an ingredient'
                }// else
            },// AddMoreIngredient

            deleteIng(ing){
                this.ingredients = this.ingredients.filter(ingredient => {
                    return ingredient !== ing
                })// filter

            },// deleteIng
        }

    }
</script>

<style>
    .edit-smoothie {
        margin-top: 60px;
        padding: 20px;
        max-width: 500px;
    }

    .edit-smoothie h2 {
        font-size: 2em;
        margin: 20px auto;
    }

    .edit-smoothie .field {
        margin: 20px auto;
        position: relative;
    }
    .edit-smoothie .delete{
        position: absolute;
        right: 0;
        bottom: 16px;
        color: #aaa;
        font-size: 1.4em;
        cursor: pointer;

    }
</style>

