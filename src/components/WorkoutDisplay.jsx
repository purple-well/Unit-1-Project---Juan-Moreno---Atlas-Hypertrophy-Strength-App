import ExerciseItem from "./ExerciseItem";

function WorkoutDisplay({ trainingPlan }) {
    return (
        <div>
            {trainingPlan.map((day) => (
                <div key={day.day}>
                    <h2>Day {day.day}</h2>

                    {day.rest ? (
                        <p>Rest Day</p>
                    ) : (
                        <ul>
                            {day.exercises.map((exercise) => (
                                <ExerciseItem
                                    key={exercise.name}
                                    exercise={exercise}
                                />
                            ))}
                        </ul>
                    )}
                </div>
            ))}
        </div>
    );
}

export default WorkoutDisplay;