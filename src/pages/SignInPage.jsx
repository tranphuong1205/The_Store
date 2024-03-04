import { useState } from 'react';
let users;
const API = 'https://jsonplaceholder.typicode.com/users';

fetch(API)
    .then((response) => response.json())
    .then((array) => {
        users = array;
    });

const SignInPage = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const handleSubmit = (users) => {
        for (let i = 0; i < users.length; i++) {
            if (checkUser(users[i])) {
                console.log(' sign in successful! ');
                setEmail(' ');
                setPassword('');
            } else {
                console.log(
                    'email or password is incorrect!!!',
                );
                setEmail(' ');
                setPassword('');
            }
        }
    };
    const checkUser = (user) => {
        // eslint-disable-next-line eqeqeq
        if (user.email === email) {
            if (user.id === password) {
                return true;
            }
            return false;
        } else return false;
    };
    return (
        <div id="form_1" className="format ">
            <p className="title"> Sign in </p>
            <p className="slogan">
                {' '}
                Your account for everything in{' '}
            </p>
            <div className="elements">
                <lable
                    for="Email"
                    className="BoxName"
                    value={email}
                    onChange={(e) =>
                        setEmail(e.target.values)
                    }
                >
                    Email
                </lable>
                <input
                    id="Email"
                    className="box"
                    type="text"
                    placeholder="VD : abc@gmail.com"
                />
                <br />
                <span className="message"></span>
            </div>
            <div className="elements">
                <lable
                    for="Pass_word"
                    className="BoxName"
                    value={password}
                    onChange={(e) =>
                        setPassword(e.target.value)
                    }
                >
                    Password
                </lable>
                <input
                    id="Pass_word"
                    className="box"
                    type="text"
                    placeholder="VD : 0123456789"
                />
                <br />
                <span className="message"></span>
            </div>
            <div className="submit">
                <button
                    className="submit_button"
                    onClick={handleSubmit}
                >
                    Sign in{' '}
                </button>
            </div>
            <div className="sign_up">
                Sign Up Here{' '}
                <a href="sign_up.html">Sign up</a>
            </div>
        </div>
    );
};

export default SignInPage;
