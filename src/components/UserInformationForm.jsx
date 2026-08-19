const UserInformationForm = () => {
    return (
        <form>
            <label htmlFor="experience">Training Experience</label>
            <select id="experience">
                <option value="beginner">Beginner</option>
                <option value="intermediate">Intermediate</option>
                <option value="advanced">Advanced</option>
            </select>

            <label htmlFor="goal">Training Goal</label>
            <select id="goal">
                <option value="hypertrophy">Muscle Growth</option>
                <option value="strength">Strength</option>
            </select>

            <label htmlFor="age">Age</label>
            <input
                type="number"
                id="age"
                min="18"
                max="100"
            />

            <label htmlFor="weight">Weight</label>
            <input
                type="number"
                id="weight"
                min="50"
                max="500"
            />

            <label htmlFor="workoutTime">How Much Time Can You Set Aside to Train?</label>
            <select id="workoutTime">
                <option value="30 minutes">30 Minutes</option>
                <option value="45 minutes">45 Minutes</option>
                <option value="60 minutes">60 Minutes</option>

            </select>


            <button type="submit">
                Generate Workout
            </button>

        </form>
    );
};

export default UserInformationForm;