import UserInformationForm from "./components/UserInformationForm";
import WorkoutDisplay from "./components/WorkoutDisplay";
import generateWorkout from "./utils/workoutGenerator.js";
import { useEffect, useState } from "react";

function App() {
  const [userInformation, setUserInformation] = useState(() => {
    const savedInformation = localStorage.getItem("userInformation");

    if (savedInformation) {
      return JSON.parse(savedInformation);
    }

    return {

      experience: "",
      goal: "",
      age: "",
      weight: "",
      workoutTime: ""

    };
  });

  const [trainingPlan, setTrainingPlan] = useState([]);

  useEffect(() => {
    localStorage.setItem(
      "userInformation",
      JSON.stringify(userInformation)
    );
  }, [userInformation]);

  const handleSubmit = (event) => {
    event.preventDefault();

    const plan = generateWorkout(userInformation);

    setTrainingPlan(plan);

  };

  const handleClearInformation = () => {
    const emptyUserInformation = {
      experience: "",
      goal: "",
      age: "",
      weight: "",
      workoutTime: ""
    };

    setUserInformation(emptyUserInformation);
    setTrainingPlan([]);
    localStorage.removeItem("userInformation");
  };

  return (
    <>
      <header>
        <h1>Atlas Hypertrophy & Strength</h1>
      </header>

      <main>
        <UserInformationForm

          userInformation={userInformation}
          setUserInformation={setUserInformation}
          handleSubmit={handleSubmit}
          handleClearInformation={handleClearInformation}

        />

        <WorkoutDisplay

          trainingPlan={trainingPlan}

        />
      </main>
    </>

  );
}

export default App;