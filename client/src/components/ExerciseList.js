import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const ExerciseList = () => {
  const [exercises, setExercises] = useState();

  useEffect(() => {
    axios
      .get('/exercises/')
      .then((response) => {
        console.log(response.data)
        if (response.data.length > 0) {
          setExercises(response.data);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const deleteExercise = (id) => {
    axios
      .delete('/exercises/'+id)
      .then((response) => {
          console.log(response.data);
        setExercises(exercises.filter((el) => el._id !== id));
      });
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
            <th className="hidden-less-than-mb">Date</th>
            <th className="hidden-less-than-mb">Actions</th>
          </tr>
        </thead>
        <tbody>
          {exercises ? (
            exercises.map((exercise) => (
              <tr>
                <td>{exercise.username}</td>
                <td>{exercise.description}</td>
                <td>{exercise.duration}</td>
                <td className="hidden-less-than-mb">{exercise.date.substring(0, 10)}</td>
                <td className="hidden-less-than-mb">
                  <Link to={"/edit/" + exercise._id}>Edit</Link> |{" "}
                  <a
                    href="#"
                    onClick={() => {
                      deleteExercise(exercise._id);
                    }}>
                    Delete
                  </a>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td>Let's enjoy exercise!</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default ExerciseList;
