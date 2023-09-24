const SignInPage = () => {
  return (
    <div id="form_1" className="format ">
      <p className="title"> Sign in </p>
      <p className="slogan"> Your account for everything in </p>
      <div className="elements">
        <lable for="Email" className="BoxName">
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
        <lable for="Pass_word" className="BoxName">
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
        <button className="submit_button">Sign in </button>
      </div>
      <div className="sign_up">
        Sign Up Here <a href="sign_up.html">Sign up</a>
      </div>
    </div>
  );
};

export default SignInPage;
