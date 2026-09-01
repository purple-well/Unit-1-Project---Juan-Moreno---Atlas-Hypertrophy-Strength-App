import "./ExerciseItem.css";

function ExerciseItem({ exercise }) {
    return (
        <li className="exercise-item">
            <h3>{exercise.name}</h3>

            <p className="exercise-prescription">
                {exercise.sets} sets x {exercise.reps} reps
            </p>

            <div className="exercise-sets">
                <label>
                    <input type="checkbox" />
                    Set 1
                </label>

                {exercise.sets >= 2 && (
                    <label>
                        <input type="checkbox" />
                        Set 2
                    </label>
                )}

                {exercise.sets >= 3 && (
                    <label>
                        <input type="checkbox" />
                        Set 3
                    </label>
                )}

                {exercise.sets >= 4 && (
                    <label>
                        <input type="checkbox" />
                        Set 4
                    </label>
                )}
            </div>
        </li>
    );
}

export default ExerciseItem;