import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import './AddEdit.css';
import { toast } from 'react-toastify';


function AddEdit() {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [city, setCity] = useState('');
  const [pinCode, setPinCode] = useState('');
  const[id,setId]=useState(0)

  
  const navigate = useNavigate();

  useEffect(() => {
    setName(localStorage.getItem('name') || '');
    setAge(localStorage.getItem('age') || '');
    setCity(localStorage.getItem('city') || '');
    setPinCode(localStorage.getItem('pinCode') || '');
    setId(localStorage.getItem('index') || '');
  }, []);
  console.log(name,age,id,pinCode,city)

  const handleChange = (e) => {
    const { name, value } = e.target;
    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'age':
        setAge(value);
        break;
      case 'city':
        setCity(value);
        break;
      case 'pinCode':
        setPinCode(value);
        break;
      default:
        break;
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    toast.success('Data updated successfully');
    setTimeout(() => navigate('/'), 1000);

    // Perform actions based on your requirements
    // For example, you can save the form data to the database or take any other action
    // If 'id' is available, it means you are in edit mode, otherwise, it's a new entry

    // Uncomment and modify the code below based on your database structure and requirements
    /*
    if (!name || !age || !city || !pinCode) {
      // Handle validation or show an error message
    } else {
      const newData = { name, age, city, pinCode };

      if (id) {
        // Update existing data in the database
        // dbRef.child(`biz-contacts/${id}`).set(newData, (err) => {
        //   if (err) {
        //     console.error(err);
        //   } else {
        //     console.log('Business-Details Updated Successfully');
        //   }
        // });
      } else {
        // Add new data to the database
        // dbRef.child('biz-contacts').push(newData, (err) => {
        //   if (err) {
        //     console.error(err);
        //   } else {
        //     console.log('New Business-Details Added Successfully');
        //   }
        // });
      }

      // Optionally, you can clear the form or navigate to another page after submission
      // setName('');
      // setAge('');
      // setCity('');
      // setPinCode('');

      // setTimeout(() => navigate('/'), 2000);
    }
    */
  };

  return (
    <div style={{ marginTop: '100px' }}>
      <form
        style={{
          margin: 'auto',
          padding: '15px',
          maxWidth: '400px',
          alignContent: 'center',
        }}
        onSubmit={handleSubmit}
      >
        <div className="form-group">
          <label htmlFor="bizName"> Name:</label>
          <input type="text" id="bizName" name="name" value={name || ""} onChange={handleChange} />
        </div>

        <div className="form-group">
          <label htmlFor="address">Age:</label>
          <input type="text" id="address" name="age" value={age || ""} onChange={handleChange} />
        </div>

        <div className="form-group">
          <label htmlFor="email">City:</label>
          <input type="text" id="email" name="city" value={city || ""} onChange={handleChange} />
        </div>

        <div className="form-group">
          <label htmlFor="website">Pin Code:</label>
          <input type="text" id="website" name="pinCode" value={pinCode || ""} onChange={handleChange} />
        </div>

        <input type="submit" value={id ? 'Update' : 'Save'} />
      </form>
    </div>
  );
}

export default AddEdit;
