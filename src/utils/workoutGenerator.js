function generateWorkout(userInformation) {
    const trainingPlan = [];

    for (let i = 0; i < 14; i++) {
        const day = {
            day: i + 1
        };

        trainingPlan.push(day);

    }

    return trainingPlan;

}

export default generateWorkout;