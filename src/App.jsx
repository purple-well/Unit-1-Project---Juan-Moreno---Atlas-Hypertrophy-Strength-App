import UserInformationForm from "./components/UserInformationForm";
import WorkoutDisplay from "./components/WorkoutDisplay";
import { useState } from "react";

function App() {
  const [userInformation, setUserInformation] = useState({

experience: "",
goal: "",
age: "",
weight: "",
workoutTime: ""

  });
  return (

    <>
      <UserInformationForm 
        userInformation={userInformation}
        setUserInformation={setUserInformation}
      />

      <WorkoutDisplay />

      
    </>

  );
}

export default App;