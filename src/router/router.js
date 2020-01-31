import Index from '../components/Index'
import Navbar from '../components/Navbar'
import AddSmoothie from '../components/AddSmoothie'
import EditSmoothie from '../components/EditSmoothie'


export const routes = [

    {path: '/', component: Index, name: 'Index'},
    // {path: '/index', component: Index, name: 'Index'},
    {path: '/navbar', component: Navbar, name: 'Navbar'},
    {path: '/add_smoothies', component: AddSmoothie, name: 'AddSmoothie'},
    {path: '/edit-smoothie/:smoothie_slug', component: EditSmoothie, name: 'EditSmoothie'},

];


