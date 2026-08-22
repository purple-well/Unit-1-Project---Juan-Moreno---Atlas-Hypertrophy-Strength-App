const UserInformationForm = ({ userInformation, setUserInformation }) => {

    const handleChange = (event) => {
        setUserInformation({
            ...userInformation,
            [event.target.name]: event.target.value
        });
    };

    return (
        <form>
            <label htmlFor="experience">Training Experience</label>
            <select

                id="experience"
                name="experience"
                value={userInformation.experience}
                onChange={handleChange}
            >
                <option value="">Select Training Experience</option>
                <option value="beginner">Beginner</option>
                <option value="intermediate">Intermediate</option>
                <option value="advanced">Advanced</option>
            </select>

            <label htmlFor="goal">Training Goal</label>
            <select
                id="goal"
                name="goal"
                value={userInformation.goal}
                onChange={handleChange}
            >

                <option value="">Select Goal</option>
                <option value="hypertrophy">Muscle Growth</option>
                <option value="strength">Strength</option>
            </select>

            <label htmlFor="age">Age</label>
            <input
                type="number"
                id="age"
                name="age"
                min="18"
                max="100"
                placeholder="Enter Age"
                value={userInformation.age}
                onChange={handleChange}
            />

            <label htmlFor="weight">Weight in lbs</label>
            <input
                type="number"
                id="weight"
                name="weight"
                min="50"
                max="500"
                placeholder="Enter Weight"
                value={userInformation.weight}
                onChange={handleChange}
            />

            <label htmlFor="workoutTime">
                How Much Time Can You Set Aside to Train?
            </label>
            <select
                id="workoutTime"
                name="workoutTime"
                value={userInformation.workoutTime}
                onChange={handleChange}
            >
                <option value="">Select Workout Time</option>
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