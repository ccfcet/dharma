export default {
  items: [
    {
      name: 'Entity',
      url: '/base',
      icon: 'icon-puzzle',
      children: [
        {
            name:'Create Entity',
           
            url:'/base/CreateEntity',
        },
        {
            name:'Manage Entity',
            
            url:'/base/ManageEntity',
        },
        {
            name:'Find Entity by Id',
            
            url:'/base/FindEntity'
        },
        


      {
        name:'Entity Type',
       
        children:[ 
        {
          name: 'Create Entity Type',
          url: '/base/CreateEntityType',
         
        },
        {
          name: 'Manage Entity Type',
          url: '/base/ManageEntityType',
          
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
            
            children:[
            {
                name:'Create Menu Type',
               
                url:'/base/CreateMenuType'
            },
            {
                name:'Manage Menu Type',
               
                url:'/base/ManageMenuType'
            },
            ]
        },
        {
            name:'Menu Elements',
            
            url: '/base',
            children:[
            {
                name:'Create Elements',
               
                url:'/base/CreateMenuElement'
            },
            {
                name:'Manage Elements',
                
                url:'/base/ManageMenuElement'
            },
            ]
        },
        {
            name:'Menu Data',
        
            url: '/base',
            children:[
            {
                name:'Create Menu Data',
               
                url:'/base/CreateMenuData'
            },
            {
                name:'Manage Menu Data',
                
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
           
            url:'/base/CreatePeople'
        },
        {
            name:'Manage People',
           
            url:'/base/ManagePeople'
        },

        ],


    },
    {
        name:'Event',
        icon:'icon-puzzle',
        children:[
        {
            name:'Events',
            url:'/base',
            children:[
            {
                name:'Create Event',
    
                url:'/base/CreateEvent',
            },
            {
                name:'Manage Event',
            
                url:'/base/ManageEvent',
            }
            ]
        },
        {
            name:'Event Info Slug',
            children:[
            {
                name:'Create Slug',
                url:'/base/CreateEventSlug',
            },
            {
                name:'Manage Slug',
                url:'/base/ManageEventSlug',
            }
            ]
        },
        ]
    }


  ]
};
