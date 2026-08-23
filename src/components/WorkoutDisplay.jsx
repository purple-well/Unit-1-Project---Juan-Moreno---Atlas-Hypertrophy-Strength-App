function WorkoutDisplay({ trainingPlan }) {
    return (
        <div>
            {trainingPlan.map((day) => (
                <div key={day.day}>
                    <h2>Day {day.day}</h2>

                    {day.rest ? (
                        <p>Rest Day</p>
                    ) : (
                        <div>
                            {day.exercises.map((exercise) => (
                                <div key={exercise.name}>
                                    <h3>{exercise.name}</h3>
                                    <p>
                                        {exercise.sets} sets × {exercise.reps} reps
                                    </p>
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            ))}
        </div>
    );
}

export default WorkoutDisplay;