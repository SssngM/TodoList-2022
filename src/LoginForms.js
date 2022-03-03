import React, { useState, useEffect } from "react"; 
// import "./LoginForms.css"; 


const LoginForms = (props) => {
    const INITIAL_STATE = { user: "", password:""}
    const [formData, setFormData] = useState(INITIAL_STATE);

    // const [formData, setFormData] = useState('');



    const handleSubmit = (evt) => {
        console.log(formData)
        evt.preventDefault();
        setFormData(INITIAL_STATE)

        props.setIsLoggedIn(true);
        props.setUser(formData.user);
        // setFormData('');
    };
    
    const handleChange = evt => {
        console.log(evt.target.value)
        const {name, value} = evt.target;
        setFormData(fData => ({...fData, [name]: value }))
    }


        // setFormData(evt.target.value)
    // }

    return (
       <form  onSubmit={handleSubmit}>
        <div className ='displays2'>

            <h1> Log in </h1>
            
            <div className='input'>
                <input
                    id="user"
                    // type="text"
                    name="user"
                    placeholder="user"
                    value={formData.user}
                    onChange={handleChange}
                />
            </div>
            <div className='input'>
                <input
                    id="password"
                    // type="password"
                    name="password"
                    placeholder="password"
                    value={formData.password}
                    onChange={handleChange}
                />
            </div>
        <button type="submit" className='buttons' > Loggin </button>
      </div>
    </form>
    )

}


export default LoginForms;