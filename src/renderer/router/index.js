import Vue from 'vue'
import Router from 'vue-router'

const originalPush = Router.prototype.push
Router.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: require('@/components/Home/Home').default,
      children:[
        {
          path: '/findMusic',
          name: 'findMusic',
          component: require('@/components/routerPage/findMusic').default
        },
        {
          path: '/musicVedio',
          name: 'musicVedio',
          component: require('@/components/routerPage/musicVedio').default
        },
        {
          path: '/friendsCircle',
          name: 'friendsCircle',
          component: require('@/components/routerPage/friendsCircle').default
        },
        {
          path: '/personalFM',
          name: 'personalFM',
          component: require('@/components/routerPage/personalFM').default
        },
        {
          path: '/localMusic',
          name: 'localMusic',
          component: require('@/components/routerPage/localMusic').default
        },
        {
          path: '/download',
          name: 'download',
          component: require('@/components/routerPage/download').default
        },
        {
          path: '/myCloudMusic',
          name: 'myCloudMusic',
          component: require('@/components/routerPage/myCloudMusic').default
        },
        {
          path: '/radioStation',
          name: 'radioStation',
          component: require('@/components/routerPage/radioStation').default
        },
        {
          path: '/myCollect',
          name: 'myCollect',
          component: require('@/components/routerPage/myCollect').default
        },
        {
          path: '/playlist',
          name: 'playlist',
          component: require('@/components/routerPage/playlist').default
        },
        
    ]
    },
    
    {
      path: '*',
      redirect: '/'
    }
  ]
})
