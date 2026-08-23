function generateWorkout(userInformation) {
    const trainingPlan = [];

    let exerciseCount;

    if (userInformation.workoutTime === "30 minutes") {
        exerciseCount = 4;
    } else if (userInformation.workoutTime === "45 minutes") {
        exerciseCount = 5;
    } else {
        exerciseCount = 6;
    }

    let sets;
    let reps;

    if (userInformation.goal === "strength") {
        sets = 4;
        reps = 5;
    } else {
        sets = 3;
        reps = 10;
    }

    for (let i = 0; i < 14; i++) {
        const day = {
            day: i + 1
        };

        if ((i + 1) % 4 === 0) {
            day.rest = true;
        } else {
            day.exercises = [];
        }

        trainingPlan.push(day);
    }

    return trainingPlan;
}

export default generateWorkout;