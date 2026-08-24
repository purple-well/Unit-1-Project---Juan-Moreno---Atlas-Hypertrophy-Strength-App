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
                                        {exercise.sets} sets x {exercise.reps} reps
                                    </p>

                                    <div>
                                        <label>
                                            <input type="checkbox" />
                                            Set 1
                                        </label>
                                    </div>

                                    {exercise.sets >= 2 && (
                                        <div>
                                            <label>
                                                <input type="checkbox" />
                                                Set 2
                                            </label>
                                        </div>
                                    )}

                                    {exercise.sets >= 3 && (
                                        <div>
                                            <label>
                                                <input type="checkbox" />
                                                Set 3
                                            </label>
                                        </div>
                                    )}

                                    {exercise.sets >= 4 && (
                                        <div>
                                            <label>
                                                <input type="checkbox" />
                                                Set 4
                                            </label>
                                        </div>
                                    )}
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