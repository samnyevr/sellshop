import React from "react";

export default function Onboarding() {
    const handleSubmit = (event) => {
        event.preventDefault();
    }

    return (
    <div>
        <section>
            <h1>Log In</h1>
            <form onSubmit={handleSubmit}>
                <input type="email" placeholder="Email" />
                <input type="password" placeholder="Password" />
                <p>Forgot Passowrd?</p>
                <button>Submit</button>
            </form>
        </section>
        <section>
            <h1>Sign Up</h1>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder="name" />
                <input type="email" placeholder="Email" />
                <input type="password" placeholder="Password" />
                <input type="password" placeholder="Confirm Password" />
                <p>Already has account?</p>
                <button>Submit</button>
            </form>
        </section>
    </div>
    );
};