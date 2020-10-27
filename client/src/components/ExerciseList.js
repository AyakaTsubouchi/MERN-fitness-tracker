import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const ExerciseList = () => {
  const [exercises, setExercises] = useState();

  useEffect(() => {
    axios
      .get("'https://fitness-tracker-aya.herokuapp.com/exercises/")
      .then((response) => {
        if (response.data.length > 0) {
          setExercises(response.data);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const deleteExercise = (id) => {
    axios.delete("'https://fitness-tracker-aya.herokuapp.com/exercises/" + id).then((response) => {
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