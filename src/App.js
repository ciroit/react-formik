import React from "react";
import './index.css';
// TODO: import useFormik from formik library
import {useFormik, validateYupSchema} from 'formik'

function App() {
  // TODO: add a const called formik assigned to useFormik()
  const formik = useFormik({
    initialValues : {
      email : "",
      password : ""
    },
    onSubmit : values => {
      alert("Login Successful")
    },
    validate : values => {
      
      let errors = {};

      if(!values.email){
        errors.email = 'Field required'
      }
      else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
        errors.email = 'Username should be an email';
      }

      if(!values.password){
        errors.password = 'Field required'
      }

      return errors
    }
  });


  return (
    <div>
      
        <form onSubmit={formik.handleSubmit}>
          <div> Email : </div>
          <input type='text' id = 'emailField' name='email'  onChange={formik.handleChange} value={formik.values.email} />
          <div id = 'emailError' className = 'error' >
            {formik.errors.email ? formik.errors.email  : null}
          </div>

          <div> Password : </div>
          <input type='text' id = 'pswField' name="password" onChange={formik.handleChange} value={formik.values.password}  />
          <div id = 'pswError' className = 'error' >
          {formik.errors.password ?  formik.errors.password  : null}
          </div>
          <button type='submit' id='submitBtn' >Submit</button>

        </form>  
     
    </div>
  );
}

export default App;
