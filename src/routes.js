import React from 'react';
import Loadable from 'react-loadable'

import DefaultLayout from './containers/DefaultLayout';
import DharmaLayout from './containers/DharmaLayout';


function Loading() {
  return <div>Loading...</div>;
}
////








const CreateEntityType = Loadable({
  loader: () => import('./views/Dharma/EntityType/CreateEntityType'),
  loading: Loading,
});


const ManageEntityType = Loadable({
  loader: () => import('./views/Dharma/EntityType/ManageEntityType'),
  loading: Loading,
});

const CreateEntity = Loadable({
  loader: () => import('./views/Dharma/Entity/CreateEntity'),
  loading: Loading,
});

const ManageEntity = Loadable({
  loader: () => import('./views/Dharma/Entity/ManageEntity'),
  loading: Loading,
});

const FindEntity = Loadable({
  loader: () => import('./views/Dharma/Entity/FindEntity'),
  loading: Loading,
});

const CreateMenuType = Loadable({
  loader: () => import('./views/Dharma/Menu/MenuType/CreateMenuType'),
  loading: Loading,
});
const ManageMenuType = Loadable({
  loader: () => import('./views/Dharma/Menu/MenuType/ManageMenuType'),
  loading: Loading,
});
const CreateMenuElement = Loadable({
  loader: () => import('./views/Dharma/Menu/MenuElements/CreateMenuElement'),
  loading: Loading,
});
const ManageMenuElement = Loadable({
  loader: () => import('./views/Dharma/Menu/MenuElements/ManageMenuElement'),
  loading: Loading ,
});
const CreatePeople = Loadable({
  loader: () => import('./views/Dharma/People/People/CreatePeople'),
  loading:Loading,
});
const Login=Loadable({
  loader: () =>import('./views/Pages/Login/Login.js'),
  loading: Loading,
});
const ManagePeople=Loadable({
  loader: () =>import('./views/Dharma/People/People/ManagePeople'),
  loading: Loading,
});
const CreateMenuData=Loadable({
  loader:  () =>import('./views/Dharma/Menu/MenuData/CreateMenuData'),
  loading: Loading,
});
const ManageMenuData=Loadable({
  loader:  () =>import('./views/Dharma/Menu/MenuData/ManageMenuData'),
  loading: Loading,
});
const CreateEvent=Loadable({
  loader: () =>import('./views/Dharma/Event/Events/CreateEvent'),
  loading: Loading,
});
const ManageEvent=Loadable({
  loader: () =>import('./views/Dharma/Event/Events/ManageEvent'),
  loading: Loading,
});



// https://github.com/ReactTraining/react-router/tree/master/packages/react-router-config
const routes = [
  { path: '/base', exact:true,name: 'Home', component: DefaultLayout },

  { path: '/base/CreateEntityType', name: 'CreateEntityType', component: CreateEntityType },
  {path:  '/base/ManageEntityType', name: 'ManageEntityType', component:ManageEntityType},
  {path: '/base/CreateEntity', name:'CreateEntity',component: CreateEntity },
  {path: '/base/ManageEntity', name:'ManageEntity', component:ManageEntity },
  {path: '/base/FindEntity' , name:'FindEntity' , component:FindEntity},
  {path: '/base/CreateMenuType', name:'CreateMenuType', component:CreateMenuType },
  {path: '/base/ManageMenuType', name:'ManageMenuType', component:ManageMenuType },
  {path: '/base/CreateMenuElement', name:'CreateMenuElement', component:CreateMenuElement },
  {path: '/base/ManageMenuElement', name:'ManageMenuElement', component:ManageMenuElement },
  {path:'/base/CreatePeople' , name:'CreatePeople', component:CreatePeople},
  {path:'/base/ManagePeople', name:'ManagePeople', component:ManagePeople},
  {path:'/base/CreateMenuData', name:'CreateMenuData', component:CreateMenuData},
  {path: '/base/ManageMenuData', name:'ManageMenuData', component:ManageMenuData},
  {path:'/base/CreateEvent', name:'Create Event', component:CreateEvent},
  {path:'/base/ManageEvent', name:'Manage Event', component:ManageEvent},

];

export default routes;
