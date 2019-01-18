import quan from '../components/quan'
import mine from '../components/mine'
import home from '../components/home'
const Foo = {template:'<div>foo3333333333</div>'}
const Bar = {template:'<div>bar</div>'}


const routes = [

  {   path:'/foo',component:Foo },
  {   path:'/bar',component:Bar },
  { path: '/home', component: home },
  {   path:'/quan',component:quan},
  {   path:'/mine',component:mine}
]


export default {
  routes
}
