import React from 'react'
import Header from '../component/Header'
import AddRestaurant from '../component/AddRestaurant'
import RestaurantList from '../component/RestaurantList'

const Home = () => {
  return (
    <div><Header></Header>
    <AddRestaurant></AddRestaurant>
    <RestaurantList></RestaurantList>
    </div>
  )
}

export default Home