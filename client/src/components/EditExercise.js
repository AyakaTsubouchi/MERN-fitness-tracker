import React, { useState, useEffect } from "react";
import axios from "axios";

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const EditExercise = ({ match }) => {
  const [username, setUsername] = useState();
  const [description, setDescription] = useState();
  const [duration, setDuration] = useState(0);
  const [date, setDate] = useState(new Date());
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/exercises/" + match.params.id)
      .then((response) => {
        setUsername(response.data.username);
        setDescription(response.data.description);
        setDuration(response.data.duration);
        setDate(new Date(response.data.date));
      })
      .catch(function (error) {
        console.log(error);
      });

    axios
      .get("http://localhost:5000/users/")
      .then((response) => {
        if (response.data.length > 0) {
          setUsers(response.data.map((user) => user.username));
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div>
      <h3>Edit Exercise Log</h3>
      {}
      <form
        onSubmit={(e) => {
          e.preventDefault();
          const exercise = {
            username,
            description,
            duration,
            date,
          };
          axios
            .post("http://localhost:5000/exercises/add", exercise)
            .then((res) => console.log(res.data));
          window.location = "/";
        }}>
        <div className="form-group">
          <label>Username: </label>
          <select
            required
            className="form-control"
            value={username}
            onChange={(e) => setUsername(e.target.value)}>
            {users.map(function (user) {
              return (
                <option key={user} value={user}>
                  {user}
                </option>
              );
            })}
          </select>
        </div>
        <div className="form-group">
          <label>Description: </label>
          <input
            type="text"
            required
            className="form-control"
            value={description}
            onChange={(e) => {
              setDescription(e.target.value);
            }}
          />
        </div>
        <div className="form-group">
          <label>Duration (in minutes): </label>
          <input
            type="text"
            className="form-control"
            value={duration}
            onChange={(e) => setDuration(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label>Date: </label>
          <div>
            <DatePicker
              selected={date}
              onChange={(date) => {
                setDate(date);
              }}
            />
          </div>
        </div>

        <div className="form-group">
          <input type="submit" value="Update" className="btn btn-primary" />
        </div>
      </form>
    </div>
  );
};

export default EditExercise;
