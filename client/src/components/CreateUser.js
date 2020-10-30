import React,{useState} from 'react';
import axios from "axios";

const CreateUser = () => {
    const [username,setUsername] = useState()
    
    return (
        <div>
        <h3>Sign Up</h3>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            const user = {
              username
            };
            axios
              .post('/users/add', user)
              .then((res) => console.log(res.data));
            window.location = "/";
          }}>
        
          <div className="form-group">
            <label>Username: </label>
            <input
              type="text"
              required
              className="form-control"
              value={username}
              onChange={(e) => {
                setUsername(e.target.value);
              }}
            />
          </div>
          <div className="form-group">
            <input
              type="submit"
              value="Submit"
              className="btn btn-info"
            />
          </div>
        </form>
      </div>
    );
};

export default CreateUser;