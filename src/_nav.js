export default {
  items: [
    {
      name: 'Entity',
      url: '/base',
      icon: 'icon-puzzle',
      children: [
        {
            name:'Create Entity',
            icon:'icon-puzzle',
            url:'/base/CreateEntity',
        },
        {
            name:'Manage Entity',
            icon:'icon-puzzle',
            url:'/base/ManageEntity',
        },
        {
            name:'Find Entity by Id',
            icon:'icon-puzzle',
            url:'/base/FindEntity'
        },
        


      {
        name:'Entity Type',
        icon:'icon-puzzle',
        children:[ 
        {
          name: 'Create Entity Type',
          url: '/base/CreateEntityType',
          icon: 'icon-puzzle',
        },
        {
          name: 'Manage Entity Type',
          url: '/base/ManageEntityType',
          icon: 'icon-puzzle',
        }
      ]
    }
    ],
   },
   {
        name:'Menu',
        icon:'icon-puzzle',
        url: '/base',
        children:[
        {
            name:'Menu Type',
            icon:'icon-puzzle',
            children:[
            {
                name:'Create Menu Type',
                icon:'icon-puzzle',
                url:'/base/CreateMenuType'
            },
            {
                name:'Manage Menu Type',
                icon:'icon-puzzle',
                url:'/base/ManageMenuType'
            },
            ]
        },
        {
            name:'Menu Elements',
            icon:'icon-puzzle',
            url: '/base',
            children:[
            {
                name:'Create Elements',
                icon:'icon-puzzle',
                url:'/base/CreateMenuElement'
            },
            {
                name:'Manage Elements',
                icon:'icon-puzzle',
                url:'/base/ManageMenuElement'
            },
            ]
        },
        {
            name:'Menu Data',
            icon:'icon-puzzle',
            url: '/base',
            children:[
            {
                name:'Create Menu Data',
                icon:'icon-puzzle',
                url:'/base/CreateMenuData'
            },
            {
                name:'Manage Menu Data',
                icon:'icon-puzzle',
                url:'/base/ManageMenuData'
            },
            ]
        }
        ]
    },
    {
        name:'People',
        icon:'icon-puzzle',
        url: '/base',
        children:[
         {
            name:'Create People',
            icon:'icon-puzzle',
            url:'/base/CreatePeople'
        },
        {
            name:'Manage People',
            icon:'icon-puzzle',
            url:'/base/ManagePeople'
        },

        ],


    },


  ]
};
