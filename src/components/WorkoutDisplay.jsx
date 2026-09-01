import ExerciseItem from "./ExerciseItem";
import "./WorkoutDisplay.css";

function WorkoutDisplay({ trainingPlan }) {
    if (trainingPlan.length === 0) {
        return null;
    }

    return (
        <section className="workout-display">
            <div className="workout-display-container">
                <h2 className="workout-display-title">
                    Your Training Plan
                </h2>

                <p className="workout-display-subtitle">
                    Take a look at your personalized 14-day training program:
                </p>

                <div className="training-days">
                    {trainingPlan.map((day) => (
                        <article className="training-day" key={day.day}>
                            <h2 className="day-title">
                                Day {day.day}
                            </h2>

                            {day.rest ? (
                                <div className="rest-day">
                                    <p>Rest Day</p>
                                    <span>
                                        Recover and prepare for your next workout.
                                    </span>
                                </div>
                            ) : (
                                <ul className="exercise-list">
                                    {day.exercises.map((exercise) => (
                                        <ExerciseItem
                                            key={exercise.name}
                                            exercise={exercise}
                                        />
                                    ))}
                                </ul>
                            )}
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default WorkoutDisplay;