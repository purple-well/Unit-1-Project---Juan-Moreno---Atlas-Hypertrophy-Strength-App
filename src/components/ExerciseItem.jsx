function ExerciseItem({ exercise }) {
    return (
        <li>
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
        </li>
    );
}

export default ExerciseItem;