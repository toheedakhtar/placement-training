import React from 'react'

const ProfileCard = (props) => {
    const {name, age, location} = props;
  return (
    <div>
      <h1>Name : {name}</h1>
      <h2>Age : {age}</h2>
      <p>Location : {location}</p>
    </div>
    )
}
export default ProfileCard
