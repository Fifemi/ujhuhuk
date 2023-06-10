import React, {Component} from 'react'
import  UserInfo  from './Component/UserInfo';

class App extends Component {
  state = {
    Persons: [
        {FirstName: "Taye"},
        {LastName: "Idowu"},
        {EmailAddress: "tayeidowu@gmail.com"},
       {PhoneNumber: "07024365347"},
    ],

    Persons: [
        {FirstName: "Boma"},
        {LastName: "Edidi"},
        {EmailAddress: "bomaedidi@gmail.com"},
       { PhoneNumber: "09035725467"},
    ],
    
    Persons: [
        {FirstName: "Ariyo"},
        {LastName: "Wale"},
        {EmailAddress: "waleariyo@gmail.com"},
       { PhoneNumber: "08075633896"},
    ], 

    Persons: [
        {FirstName: "Ariyo"},
        {LastName: "Wale"},
        {EmailAddress: "waleariyo@gmail.com"},
       { PhoneNumber: "08075633896"},
    ], 

    Persons: [
        {FirstName: "Boma"},
        {LastName: "Edidi"},
        {EmailAddress: "bomaedidi@gmail.com"},
       { PhoneNumber: "09035725467"},
    ],

};
    render () {
        return this.state.Persons.map ((item, id) =>{
            console.log(item);
            return (
                <div className='hero-section'>
                    <UserInfo  />
                    key = {id}
                    FirstName = {item.FirstName}
                    othername = {item.LastName}
                    EmailAddress = {item.EmailAddress}
                    telephone = {item.PhoneNumber}
                  
                </div>
            )
        });
    };
};

export default App