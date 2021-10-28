import React, {useState} from "react";

export default function Onboarding() {
    const [onLogIn, setOnLogIn] = useState(true);
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [passwordC, setPasswordC] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();
        reset();
    }

    const handleClick = (event) => {
        (event.target.className === "Login") ? setOnLogIn(true) : setOnLogIn(false);
        if(event.target.className === "Login" || event.target.className === "Signup")
            reset();
    }

    const handleChange = (event) => {
        switch (event.target.name) {
            case "email":
                setEmail(event.target.value);
                break;
            case "name":
                setName(event.target.value);
                break
            case "password":
                setPassword(event.target.value);
                break;
            case "passwordC":
                setPasswordC(event.target.value);
                break;
            default:
                break;
        }
    }

    const reset = () => {
        setName("");
        setEmail("");
        setPassword("");
        setPasswordC("");
    }

    return (
    <div className="Pages">
        <section className="onBoarding">
            <section className="Title">
                <h1 className="Login" onClick={handleClick}>Log In</h1>
                <h1 className="Signup" onClick={handleClick}>Sign Up</h1>
            </section>
            {onLogIn ? (
                <form onSubmit={handleSubmit} className="Login">
                    <input name="email" value={email} type="email" placeholder="Email" onChange={handleChange}/>
                    <input name="password" value={password} type="password" placeholder="Password" onChange={handleChange}/>
                    <p>Forgot Passowrd?</p>
                    <button>Submit</button>
                </form>) : (
                    <form onSubmit={handleSubmit} className="Signup">
                    <input name="name" value={name} type="text" placeholder="name" onChange={handleChange}/>
                    <input name="email" value={email} type="email" placeholder="Email" onChange={handleChange}/>
                    <input name="password" value={password} type="password" placeholder="Password" onChange={handleChange}/>
                    <input name="passwordC" value={passwordC} type="password" placeholder="Confirm Password" onChange={handleChange}/>
                    <p>Already has account?</p>
                    <button>Submit</button>
                </form>
                )
            }
        </section>
    </div>
    );
};