import React from 'react'
import UserInfo from "./Component/UserInfo"

export const UserInfo = (FirstName, LastName, EmailAddress, PhoneNumber) => {
  return (
    <div>
      <h2>I am {FirstName} {LastName}, my Email Address is {EmailAddress} and my telephone number is {PhoneNumber}</h2>
    </div>
  );
}

