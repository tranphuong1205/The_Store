import { useState } from 'react';
const API = 'https://jsonplaceholder.typicode.com/users';

const SignInPage = () => {
    const [email, setEmail] = useState('');
    const [id, setID] = useState('');

    const handleSubmit = (users) => {
        let check = false;
        fetch(API)
            .then((response) => response.json())
            .then((array) => {
                let users = array;
                for (let i = 0; i < users.length; i++) {
                    console.log(checkUser(users[i]));
                    if (checkUser(users[i]) === 1) {
                        check = true;
                        setEmail(' ');
                        setID('');
                        break;
                    }
                }
            });
        if (check) console.log('successfull');
        else {
            console.log('fault');
            setEmail('');
            setID('');
        }
    };
    const checkUser = (user) => {
        // eslint-disable-next-line eqeqeq
        if (user.email === email && user.id === id) {
            return 1;
        }
        return 0;
    };
    return (
        <div id="form_1" className="format ">
            <p className="title"> Sign in </p>
            <p className="slogan">
                {' '}
                Your account for everything in{' '}
            </p>
            <div className="elements">
                <label for="Email" className="BoxName">
                    Email
                </label>
                <input
                    id="Email"
                    className="box"
                    type="text"
                    placeholder="VD : abc@gmail.com"
                    value={email}
                    onChange={(e) =>
                        setEmail(e.target.values)
                    }
                ></input>
                <br />
                <span className="message"></span>
            </div>
            <div className="elements">
                <label for="Pass_word" className="BoxName">
                    ID
                </label>
                <input
                    id="Pass_word"
                    className="box"
                    type="text"
                    placeholder="VD : 0123456789"
                    value={id}
                    onChange={(e) => setID(e.target.value)}
                ></input>
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
