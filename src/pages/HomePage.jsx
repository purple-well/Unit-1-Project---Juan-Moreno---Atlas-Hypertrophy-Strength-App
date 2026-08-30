import { Link } from "react-router-dom";
import atlasWordmark from "../assets/atlas-logo-wordmark.svg";
import appFunctionality from "../assets/app-functionality.avif";
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

            <section className="app-preview">
            <h2 className="introduction">Atlas Hypertrophy & Strength: Your Smart Training Guide</h2>



           
            </section>

            <section className="app-anywhere" >
            <div className="showcase-images">

            <img
                className="showcase-main-image"
                src={appFunctionality}
                alt="athlete image"
            />
            </div>

            </section>

            <section className="how-it-works" >



            </section>

            <section className="calendar-feature">



            </section>

            <section className="call-to-action">



            </section>



        </main>
    );
}

export default HomePage;