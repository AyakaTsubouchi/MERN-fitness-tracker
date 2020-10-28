import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const ExerciseList = () => {
  const [exercises, setExercises] = useState();

  useEffect(() => {
    // axios
    //   .get(`${process.env.REACT_APP_BACKEND_URL}/exercises/`)
    //   // .get(`/exercises/`)
    //   .then((response) => {
    //     if (response.data.length > 0) {
    //       setExercises(response.data);
    //     }
    //   })
    //   .catch((error) => {
    //     console.log(error);
    //   });
    
    // fetch(`${process.env.REACT_APP_BACKEND_URL}/exercises/`)
    fetch(`https://fitness-tracker-aya.herokuapp.com/exercises/`)
    .then(res => res.json())
    .then(res => {
      console.log("exercises",res)
      if (res.length > 0) {
              setExercises(res.data);
            }
    })
    .catch((error) => {
          console.log(error);
        });
  }, []);

  const deleteExercise = (id) => {
    axios.delete(`${process.env.REACT_APP_BACKEND_URL}/exercises/${id}`).then((response) => {
    // axios.delete(`/exercises/${id}`).then((response) => {
      console.log(response.data);
    });

    setExercises(exercises.filter((el) => el._id !== id));
  };

  return (
    <div>
      <h3>Logged Exercises</h3>
      <table className="table">
        <thead className="thead-light">
          <tr>
            <th>Username</th>
            <th>Description</th>
            <th>Duration</th>
            <th>Date</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {exercises ? (
            exercises.map((exercise) => (
              <tr>
                <td>{exercise.username}</td>
                <td>{exercise.description}</td>
                <td>{exercise.duration}</td>
                <td>{exercise.date.substring(0, 10)}</td>
                <td>
                  <Link to={"/edit/" + exercise._id}>edit</Link> |{" "}
                  <a
                    href="#"
                    onClick={() => {
                      deleteExercise(exercise._id);
                    }}>
                    delete
                  </a>
                </td>
              </tr>
            ))
          ) : (
            <div>Let's enjoy exercise!</div>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default ExerciseList;
