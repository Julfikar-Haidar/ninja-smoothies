<!--Siyam-->
<!--<template>-->
<!--    <div class="navbar">-->
<!--        <nav class="nav-extended indigo darken-2">-->
<!--            <div class="nav-content">-->
<!--                <router-link to="#">-->
<!--                    <span class="nav-title">Ninja Smoothies</span>-->
<!--                </router-link>-->
<!--                <router-link :to="{name: AddSmoothie}">-->
<!--                    <a href="" class="btn-floating btn halfway-fab pink">-->
<!--                        <i class="material-icons add-icon">add</i>-->
<!--                    </a>-->
<!--                </router-link>-->
<!--            </div>-->
<!--        </nav>-->
<!--    </div>-->
<!--</template>-->

<!--<script>-->
<!--    export default {-->
<!--        name: "Navbar",-->
<!--        data() {-->
<!--            return {}-->
<!--        }-->
<!--    }-->
<!--</script>-->

<!--<style >-->
<!--    .navbar nav{-->
<!--        padding:0 10px ;-->
<!--    }-->

<!--    i.material-icons {-->
<!--        line-height: 44px !important;-->
<!--    }-->

<!--</style>-->
<!--Siyam-->


<!--Mostaq vai-->
<template>
    <div class="navbar">
        <nav class="nav-extended indigo darken-2">
            <div class="nav-content">
                <router-link :to="{ name: 'Index' }">
                    <span class="nav-title">Ninja Smoothies</span>
                </router-link>
                <a href="" class="btn-floating btn-large halfway-fab pink">
                    <router-link :to="{ name: 'AddSmoothie' }">
                        <i class="material-icons">add</i>
                    </router-link>
                </a>
            </div>
        </nav>
    </div>
</template>

<script>

export default {
    name: 'Navbar',
    data(){
        return {

        }
    }
}
</script>

<style>
.navbar nav{
   padding: 0 20px;
}
</style>

