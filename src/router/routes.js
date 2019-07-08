import Msite from '../pages/Msite/Msite.vue'
import Search from '../pages/Search/Search.vue'
import Order from '../pages/Order/Order.vue'
import Profile from '../pages/Profile/Profile.vue'
import Login from '../pages/Login/Login.vue'

export default[
  {
    path:'/msite',
    component:Msite,
    meta:{
        isshowFoot:true
    }
  },
  {
    path:'/search',
    component:Search,
    meta:{
      isshowFoot:true
  }
  },
  {
    path:'/order',
    component:Order,
    meta:{
      isshowFoot:true
  }
  },
  {
    path:'/profile',
    component:Profile,
    meta:{
      isshowFoot:true
  }
  },
  {
    path:'/login',
    component:Login
  },
  {
    path:'/',
    redirect:'/msite'
  }

]
