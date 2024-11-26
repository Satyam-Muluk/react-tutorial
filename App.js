import React from "react";
import ReactDOM from "react-dom/client";


/**
 * Header
 * -Logo
 * -nav items
 * Body
 * -search component
 * -Restro container
 *   - Restaurant card
 *      -img
 *      -Name of restaurant
 *      -rating, cusisine,delivery time
 *     
 * 
 * Footer
 * -copyright
 * -links
 * -address
 */


const Header = ()=>{
    return (
       <div className="header">
           <div className="logo-container">
               <img className="logo" src="https://www.logodesign.net/logo/smoking-burger-with-lettuce-3624ld.png?nwm=1&nws=1&industry=fast-food&sf=&txt_keyword=All"></img>
           </div>
           <div className="nav-items">
               <ul>
                  <li>Home</li>
                  <li>About Us</li>
                  <li>Contact Us</li>
                  <li>Cart</li>
               </ul>
           </div>
       </div>
    )
}
const styleCard ={
   backgroundColor:"#f0f0f0f0"
}
// style tag takes js object for inline css



// restaurant card with normal variables
// const RestaurantCard = (props)=>{
//     // destructuring props
//     const {resName,cuisine} = props
//     return(
//        <div className="res-card" style={styleCard}>
//            <img className="res-logo" src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,h_600/FOOD_CATALOG/IMAGES/CMS/2024/4/14/2a8317be-9d3d-47fd-8c07-04fea898da31_0ebf25ce-452e-4eb1-9f87-f2f01e70512f.jpg" alt="res-logo"></img>
//            <h3>{resName}</h3>
//            <h4>{cuisine}</h4>
//            <h4>4.3 stars</h4>
//            <h4>38 minute </h4>


//        </div>
//     )
// }


const resList = [
    {
        "data":{
        "name":"SP Biryani",
        "id":"1",
        "cuisine":"Biryani, North Indian, Asian",
        "rating":"4.0",
        "time":"38 ",
        "image":"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,h_600/FOOD_CATALOG/IMAGES/CMS/2024/4/14/2a8317be-9d3d-47fd-8c07-04fea898da31_0ebf25ce-452e-4eb1-9f87-f2f01e70512f.jpg"
        
    }
    },
    {
        "data":{
        "name":"Reddy Biryani",
        "id":"2",
        "cuisine":"Biryani, North Indian, Asian",
        "rating":"4.0",
        "time":"38 ",
        "image":"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,h_600/wfolx1rhqeuchx4d6nkv"
    }
    },
    {
        "data":{
        "name":"Burger King",
        "id":"3",
        "cuisine":"Burgers",
        "rating":"4.0",
        "time":"38 ",
        "image":"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/FOOD_CATALOG/IMAGES/CMS/2024/4/19/03972ff7-ca47-4b34-a777-bec55c47869e_8944b667-7b9c-418b-88f3-df885ddadd6b.jpg"
    }
    },
    {
        "data":{
        "name":"SP Biryani",
        "id":"4",
        "cuisine":"Biryani, North Indian, Asian",
        "rating":"4.0",
        "time":"38 ",
        "image":"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,h_600/FOOD_CATALOG/IMAGES/CMS/2024/4/14/2a8317be-9d3d-47fd-8c07-04fea898da31_0ebf25ce-452e-4eb1-9f87-f2f01e70512f.jpg"
    }
    }
]

const resObj = {
    "data":{
        "name":"SP Biryani",
        "cuisine":"Biryani, North Indian, Asian",
        "rating":"4.0",
        "time":"38 ",
        "image":"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,h_600/FOOD_CATALOG/IMAGES/CMS/2024/4/14/2a8317be-9d3d-47fd-8c07-04fea898da31_0ebf25ce-452e-4eb1-9f87-f2f01e70512f.jpg"
    }
}

// restaurant card with api example data
const RestaurantCard = (props)=>{
    // destructuring props
    const {resData} = props

    const{name,cuisine,rating,time} = resData?.data
    return(
       <div className="res-card" style={styleCard}>
           <img className="res-logo" src={resData.data.image} alt="res-logo"></img>
           {/* <h3>{resData.data.name}</h3>
           <h4>{resData.data.cuisine}</h4>
           <h4>{resData.data.rating} stars</h4>
           <h4>{resData.data.time} minutes </h4> */}


           {/* with optional chaining */}
           <h3>{name}</h3>
           <h4>{cuisine}</h4>
           <h4>{rating} stars</h4>
           <h4>{time} minutes </h4>


       </div>
    )
}

const Body = ()=>{
  return(
    <div className="body">
       <div className="search">
           Search
       </div>
       {/* with normal variable calling */}
       {/* <div className="res-container">
           <RestaurantCard 
           resName="SP Biryani"
            cuisine="Biryani, North Indian, Asian"/>
           <RestaurantCard resName="Reddy's Biryani" cuisine="Biryani,Italian"/>
           
       </div> */}

      {/* with real data calling */}
       <div className="res-container">
           {/* <RestaurantCard resData={resObj}/> */}
           {/* here resData name should be same */}
           {/* <RestaurantCard resData={resList[0]}/>
           <RestaurantCard resData={resList[1]}/>
           <RestaurantCard resData={resList[2]}/>
           <RestaurantCard resData={resList[3]}/>
           <RestaurantCard resData={resList[0]}/>
           <RestaurantCard resData={resList[1]}/>
           <RestaurantCard resData={resList[3]}/>
           <RestaurantCard resData={resList[2]}/>
           <RestaurantCard resData={resList[0]}/>
           <RestaurantCard resData={resList[1]}/>
           <RestaurantCard resData={resList[2]}/>
           <RestaurantCard resData={resList[3]}/> */}

           {/* using loops */}
           {
              resList.map(restaurant => <RestaurantCard key={restaurant.data.id} resData={restaurant}/>)
            
           }
           {
              resList.map(restaurant => <RestaurantCard key={restaurant.data.id} resData={restaurant}/>)
           }
           {
             resList.map(restaurant => <RestaurantCard key={restaurant.data.id} resData={restaurant}/>)

            //  when there are components at same level, they should be uniquely represented
            // if no id given and suppose a new hotel is added, then the react will render all the components as it does not know which is the new one. hence id is good to have
            // so in short key is required to prevent re rendering of all the components, instead it should render only the new one
           }
        
           
       </div>
    </div>
  )
}

const AppLayout = ()=>{
   return (
     <div className="App">
        <Header></Header>
        <Body/>
     </div>
   )
}


const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout/>);


