import React from 'react'
import PropTypes from "prop-types";

function Profile({fullName, profession, bio,handleName}) {
  return (
    <div>
        <h1 style={{color: "red"}}>My name i s {fullName}</h1>
        <h2 style={{lineHeight : 10}}>I am a {profession}</h2>
        <p style={{color: "blue"}}>{bio}</p>
        {handleName(fullName)}
    </div>
  )
}

Profile.defaultProps = {
     fullName : "Samir MOUNIR",
     profession : "Web Developer",
     bio : "Stay Tuned..."
 }
Profile.propTypes = {
    fullName : PropTypes.string,
    profession : PropTypes.string,
    bio : PropTypes.string
}
export default Profile