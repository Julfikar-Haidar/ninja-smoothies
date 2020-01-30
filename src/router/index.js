import Vue from 'vue'
import Router from 'vue-router'
import Index from './componetns/Index'
import AddSmoothie from './componetns/AddSmoothie'

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/',
            name:'Index',
            component:Index
        },
        {
            path: '/add-smoothie',
            name:'AddSmoothie',
            component:AddSmoothie
        }
    ]
})