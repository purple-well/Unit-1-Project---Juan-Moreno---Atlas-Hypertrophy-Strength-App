import { Link } from "react-router-dom";
import atlasWordmark from "../assets/atlas-logo-wordmark.svg";
import appFunctionality from "../assets/app-functionality.avif";
import "./HomePage.css";
import howItWorks1 from "../assets/app-example1.png";
import howItWorks2 from "../assets/app-example2.png";
import howItWorks3 from "../assets/app-example3.png";
import calendarIntegration from "../assets/calendar-integration.avif";
import before1 from "../assets/before-after1.png";
import before2 from "../assets/before-after2.png";
import before3 from "../assets/before3.jpg";
import before4 from "../assets/before4.jpg";
import powerlifting from "../assets/powerlifting.jpg";

function HomePage() {
    return (
        <main className="home-page">
            <div className="hero-background">
                <header className="site-header">
                    <img
                        src={atlasWordmark}
                        alt="Atlas Hypertrophy & Strength Logo"
                        className="atlas-wordmark"
                    />
                </header>

                <section className="hero">
                    <h1>Build More Muscle. Get Jacked.</h1>

                    <p>
                        Generate a personalized training program based on your
                        goals, experience, and available workout time.
                    </p>

                    <Link className="generator-link" to="/generate">
                        Generate a Workout
                    </Link>
                </section>
            </div>

            <section className="app-anywhere" >
                <h2 className="introduction">Atlas Hypertrophy & Strength: Your Smart Training Guide</h2>
                <div className="showcase-images">

                    <img
                        className="showcase-main-image"
                        src={appFunctionality}
                        alt="athlete image"
                    />
                </div>

            </section>

            <section className="how-it-works" >
                <h2>How It Works</h2>

                <div className="how-it-works-grid">

                    <div className="how-it-works-card">
                        <img
                            src={howItWorks3}
                            alt="Design your program"
                        />

                        <h3>1. Design Your Program</h3>

                        <p>
                            Choose from over 45 pre-selected templates OR build your own custom mesocycle.
                        </p>
                    </div>

                    <div className="how-it-works-card">
                        <img
                            src={howItWorks2}
                            alt="Feedback system"
                        />

                        <h3>2. Start Training</h3>

                        <p>
                            Our app adjusts to your pump, soreness, and workload feedback to create the perfect training plan week-by-week.
                        </p>
                    </div>

                    <div className="how-it-works-card">
                        <img
                            src={howItWorks1}
                            alt="Workout customization"
                        />

                        <h3>3. Adapt and Grow</h3>

                        <p>
                            Fully customizable workouts so you can change things on the fly if needed in the gym.
                        </p>
                    </div>

                </div>

            </section>

            <section className="calendar-feature">

                <div className="calendar-showcase">

                    <img
                        className="calendar-integration"
                        src={calendarIntegration}
                        alt="Calendar feature"
                    />
                </div>


            </section>

            <section className="call-to-action">

                <h2>Tens of Thousands of People Have Achieved Thier Muscle Growth Goals With The Atlas Hypertrophy & Strength App</h2>

                <div className="transformations">

                    <div className="transformation">
                        <div className="transformation-photo">
                            <img src={before1} alt="Before training" />
                            <p>Before</p>
                        </div>

                        <div className="transformation-photo">
                            <img src={before2} alt="After training" />
                            <p>After</p>
                        </div>
                    </div>

                    <div className="transformation">
                        <div className="transformation-photo">
                            <img src={before4} alt="Before training" />
                            <p>Before</p>
                        </div>

                        <div className="transformation-photo">
                            <img src={before3} alt="After training" />
                            <p>After</p>
                        </div>
                    </div>

                </div>

            </section>

            <section
                className="final-call"
                style={{ backgroundImage: `url(${powerlifting})` }}
            >
                <h2>What Are You Waiting For?</h2>

                <p>Start building a workout designed around your goals.</p>

                <Link className="generator-link" to="/generate">
                    Generate a Workout
                </Link>
            </section>


            <footer className="site-footer">
                <p className="copyright">
                    © 2026 Atlas Hypertrophy & Strength
                </p>
            </footer>

        </main>
    );
}

export default HomePage;