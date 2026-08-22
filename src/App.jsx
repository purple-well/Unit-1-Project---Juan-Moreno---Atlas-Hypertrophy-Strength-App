import UserInformationForm from "./components/UserInformationForm";
import WorkoutDisplay from "./components/WorkoutDisplay";
import generateWorkout from "./utils/workoutGenerator.js";
import { useState } from "react";

function App() {

  const [userInformation, setUserInformation] = useState({

    experience: "",
    goal: "",
    age: "",
    weight: "",
    workoutTime: ""

  });

  const [trainingPlan, setTrainingPlan] = useState([]);

  const handleSubmit = (event) => {
    event.preventDefault();

    const plan = generateWorkout(userInformation);

    setTrainingPlan(plan);

  };

  return (

    <>
      <UserInformationForm

        userInformation={userInformation}
        setUserInformation={setUserInformation}
        handleSubmit={handleSubmit}

      />

      <WorkoutDisplay 
      
      trainingPlan={trainingPlan}
      
      />

    </>

  );
}

export default App;