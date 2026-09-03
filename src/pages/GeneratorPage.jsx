import UserInformationForm from "../components/UserInformationForm";
import WorkoutDisplay from "../components/WorkoutDisplay";
import generateWorkout from "../utils/workoutGenerator.js";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function GeneratorPage() {
    //Initializes user information from localStorage if saved data already exists.
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

    //Saves updated user information to localStorage whenever the state changes. 
    useEffect(() => {
        localStorage.setItem(
            "userInformation",
            JSON.stringify(userInformation)
        );
    }, [userInformation]);

    //Generates a new training plan from the submitted user information.
    const handleSubmit = (event) => {
        event.preventDefault();

        const plan = generateWorkout(userInformation);

        setTrainingPlan(plan);

    };

    //Resets the form, generated plan and saved user information. 
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
            <header className="generator-page">
                <Link className="home-link" to="/">
                    <h1 className="generator-title">Atlas Hypertrophy & Strength</h1>
                </Link>
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

export default GeneratorPage;