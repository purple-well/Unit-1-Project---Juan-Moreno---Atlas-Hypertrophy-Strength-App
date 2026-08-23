function WorkoutDisplay({ trainingPlan }) {
    return (
        <div>
            {trainingPlan.map((day) => (
                <div key={day.day}>
                    <h2>Day {day.day}</h2>

                    {day.rest ? (
                        <p>Rest Day</p>
                    ) : (
                        <p>Workout Day</p>
                    )}
                </div>
            ))}
        </div>
    );
}

export default WorkoutDisplay;