import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import "./home.css"
import { toast } from 'react-toastify';

function Home() {
  const [data, setData] = useState([]);
  const [selectedRow, setSelectedRow] = useState(null);
  const [editModalOpen, setEditModalOpen] = useState(false);
  const [deleteModalOpen, setDeleteModalOpen] = useState(false);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get('https://assets.alippo.com/catalog/static/data.json');
      console.log(response.data);
      setData(response.data);
    } catch (error) {
      console.error(error);
    }
  };
  const setToLocalStorage = (name, age, city, pinCode, index) => {
    localStorage.setItem("id",index);
    localStorage.setItem("age",age);
    localStorage.setItem("name",name);
    localStorage.setItem("city",city);
    localStorage.setItem("pinCode",pinCode);
  };

  const onDelete = (index) => {
    console.log(index)
    
    if (window.confirm('Are you sure that you want to delete this Business Details?')) {
        axios.delete(`https://assets.alippo.com/catalog/static/data.json/delete/${index}`);
        fetchData();

      console.log(`Deleting Business Details with ID: ${index}`);
      
    }
  };

  return (
    <div style={{ marginTop: '100px',marginBottom:"30px" }}>
      <table className="styled-table">
        <thead>
          <tr>
            <th style={{ textAlign: 'center' }}>Sr. No.</th>
            <th style={{ textAlign: 'center' }}>Name</th>
            <th style={{ textAlign: 'center' }}>Age</th>
            <th style={{ textAlign: 'center' }}>City</th>
            <th style={{ textAlign: 'center' }}>PinCode</th>
            <th style={{ textAlign: 'center' }}>Action</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={index}>
              <th scope="row">{index + 1}</th>
              <td>{item.name}</td>
              <td>{item.age}</td>
              <td>{item.city}</td>
              <td>{item.pinCode}</td>
              
              <td>
                <Link to= "update">
                  <button className="btn btn-edit" onClick={()=>setToLocalStorage(
                    item.name,item.age,item.city,item.pinCode,index
                  )}>Edit</button></Link>
               
                <button className="btn btn-delete" onClick={() => onDelete(index)}>
                  Delete
                </button>
                
                  <button className="btn btn-view">View</button>
                
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      
    </div>
  );
}

export default Home;
