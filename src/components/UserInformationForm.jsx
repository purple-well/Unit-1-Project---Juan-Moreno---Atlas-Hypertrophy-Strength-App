const UserInformationForm = () => {
    return (
        <form>
            <label htmlFor="experience">Training Experience</label>
            <select id="experience">
                <option value="beginner">Beginner</option>
                <option value="intermediate">Intermediate</option>
                <option value="advanced">Advanced</option>
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

            <button type="submit">
                Generate Workout
            </button>
        </form>
    );
};

export default UserInformationForm;