import { Link } from "react-router-dom";
import atlasWordmark from "../assets/atlas-logo-wordmark.svg";
import "./HomePage.css";

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
        </main>
    );
}

export default HomePage;