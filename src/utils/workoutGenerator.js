function generateWorkout(userInformation) {
    const trainingPlan = [];

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