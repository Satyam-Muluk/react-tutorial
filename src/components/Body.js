import RestaurantCard from "./RestaurantCard";
import resList from "../../utils/mockData";
// import resList from "../../utils/mockData";


import  {useState} from "react"





const Body = () => {

  
     // local state variable = powerful var
     const [listofRest,setListOfRestaurant] = useState(resList);


    // let listofRest = [
    //     {
    //         "data":{
    //         "name":"SP Biryani",
    //         "id":"1",
    //         "cuisine":"Biryani, North Indian, Asian",
    //         "rating":"3.0",
    //         "time":"38 ",
    //         "image":"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,h_600/FOOD_CATALOG/IMAGES/CMS/2024/4/14/2a8317be-9d3d-47fd-8c07-04fea898da31_0ebf25ce-452e-4eb1-9f87-f2f01e70512f.jpg"
            
    //     }
    //     },
    //     {
    //         "data":{
    //         "name":"Reddy Biryani",
    //         "id":"2",
    //         "cuisine":"Biryani, North Indian, Asian",
    //         "rating":"4.0",
    //         "time":"38 ",
    //         "image":"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,h_600/wfolx1rhqeuchx4d6nkv"
    //     }
    //     },
    //     {
    //         "data":{
    //         "name":"Burger King",
    //         "id":"3",
    //         "cuisine":"Burgers",
    //         "rating":"3.5",
    //         "time":"38 ",
    //         "image":"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/FOOD_CATALOG/IMAGES/CMS/2024/4/19/03972ff7-ca47-4b34-a777-bec55c47869e_8944b667-7b9c-418b-88f3-df885ddadd6b.jpg"
    //     }
    //     },
    //     {
    //         "data":{
    //         "name":"SP Biryani",
    //         "id":"4",
    //         "cuisine":"Biryani, North Indian, Asian",
    //         "rating":"4.0",
    //         "time":"38 ",
    //         "image":"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,h_600/FOOD_CATALOG/IMAGES/CMS/2024/4/14/2a8317be-9d3d-47fd-8c07-04fea898da31_0ebf25ce-452e-4eb1-9f87-f2f01e70512f.jpg"
    //     }
    //     }
    // ]
 
    
    
  

  return (
    <div className="body">
      <div className="filter">
        <button className="filter-btn" 
          onClick={() => {

            
            const filteredRest = listofRest.filter(
              (res) => res.data.rating > 3
            );
            setListOfRestaurant(filteredRest)
            console.log(listofRest); // Log the filtered list
          }}
        >Top rated restaurants !</button>
        </div>
      

      {/* with real data calling */}
      <div className="res-container">
       

        {/* using loops */}
        {listofRest.map((restaurant) => (
          <RestaurantCard key={restaurant.data.id} resData={restaurant} />
        ))}
        {/* {resList.map((restaurant) => (
          <RestaurantCard key={restaurant.data.id} resData={restaurant} />
        ))}
        {
          resList.map((restaurant) => (
            <RestaurantCard key={restaurant.data.id} resData={restaurant} />
          )) */}

          {/* //  when there are components at same level, they should be uniquely represented
          // if no id given and suppose a new hotel is added, then the react will render all the components as it does not know which is the new one. hence id is good to have
          // so in short key is required to prevent re rendering of all the components, instead it should render only the new one */}
        {/* } */}
      </div>
    </div>
  );
};

export default Body;
