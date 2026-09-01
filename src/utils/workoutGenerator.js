import workoutTemplates from "../data/exercises.js";

//Retrieves the push, pull and legs exercise lists from workoutTemplates.
const pushWorkout = workoutTemplates[0].exercises;
const pullWorkout = workoutTemplates[1].exercises;
const legWorkout = workoutTemplates[2].exercises;

function generateWorkout(userInformation) {
    const trainingPlan = [];

    let sets;
    let reps;

    //Determines reps and sets based on the user's training goal and experience level.
    if (userInformation.goal === "strength") {
        reps = 5;
    } else {
        reps = 10;
    }

    if (userInformation.experience === "beginner") {
        sets = 2;
    } else if (userInformation.experience === "intermediate") {
        sets = 3;
    } else {
        sets = 4;
    }

    let exerciseCount;

    //Number of exercises will be determined by how much time the user selects.
    if (userInformation.workoutTime === "30 minutes") {
        exerciseCount = 4;
    } else if (userInformation.workoutTime === "45 minutes") {
        exerciseCount = 5;
    } else {
        exerciseCount = 6;
    }

    let workoutIndex = 0;

    //Creates a 14 day plan that cycles through push, pull and leg days.
    for (let i = 0; i < 14; i++) {
        const day = {
            day: i + 1 //Starts the day count at 1 and not 0.
        };

        if ((i + 1) % 4 === 0) {
            day.rest = true;
        } else {
            let selectedWorkout;

            if (workoutIndex % 3 === 0) {
                selectedWorkout = pushWorkout;
            } else if (workoutIndex % 3 === 1) {
                selectedWorkout = pullWorkout;
            } else {
                selectedWorkout = legWorkout;
            }

            //Converts the selected exercise names into objects containing a defined number of reps and sets.
            day.exercises = selectedWorkout
                .slice(0, exerciseCount)
                .map((exerciseName) => ({
                    name: exerciseName,
                    sets: sets,
                    reps: reps
                }));

            workoutIndex++;
        }

        trainingPlan.push(day);
    }

    return trainingPlan;
}

export default generateWorkout;