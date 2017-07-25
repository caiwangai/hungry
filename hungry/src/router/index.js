import Vue from 'vue'
import Router from 'vue-router'
import goods from 'components/goods/goods'
import seller from 'components/seller/seller.vue'
import ratings from 'components/ratings/ratings.vue'
Vue.use(Router)
export default new Router({
    base: '/ratings',
    routes: [
        // {
        //   path: '/',
        //   name: 'Hello',
        //   component: Hello
        // },

        {
            path: "/goods",
            component: goods
        }, {
            path: "/seller",
            component: seller,
            alias: '*'
        },
        {
            path: "/ratings",
            component: ratings
        }
        // },
        // next("/ratings")
    ]
})