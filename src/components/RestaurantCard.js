const styleCard ={
    backgroundColor:"#f0f0f0f0"
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

export default RestaurantCard