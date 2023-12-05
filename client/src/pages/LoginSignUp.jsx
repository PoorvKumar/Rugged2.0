import React, { useState } from 'react';
import styles from "../styles/LoginSignup.module.css";
import { TbMailFilled, TbPhoneFilled } from "react-icons/tb";
import { FaUser, FaLock, FaGoogle, FaGithub, FaHome } from "react-icons/fa";
import climbingMountain from "../assets/Climbing-amico.png";
import mountains from "../assets/mountains.png";
import { PiEyeDuotone, PiEyeSlashDuotone } from 'react-icons/pi';
import { useNavigate } from 'react-router-dom';

const LoginSignUp = () => {

  const navigate = useNavigate();

  const [isSignUpMode, setIsSignUpMode] = useState(false);
  const [showPass, setShowPass] = useState(true);

  const handleSignUpClick = () => {
    setIsSignUpMode(true);
  }

  const handleSignInClick = () => {
    setIsSignUpMode(false);
  }

  return (
    <div className={`${styles.loginContainer} ${isSignUpMode ? styles["sign-up-mode"] : ""} dark`}>
      <div className={styles.goBack}>
        <button onClick={() => navigate('/')} className={styles.homeButton}>
          <FaHome className={styles.homeIcon} />
          Go Home
        </button>
      </div>
      <div className={styles["forms-container"]}>
        <div className={styles["signin-signup"]}>
          <form action="#" className={`${styles["sign-in-form"]} ${styles.loginform}`}>
            <h2 className={styles.title}>Sign In</h2>
            <div className={`${styles["input-field"]} relative`}>
              <TbMailFilled className="mx-auto my-auto absolute top-1/2 right-3 -translate-y-1/2" />
              <input
                type="text"
                className="w-full"
                placeholder="Email"
                pattern="[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}"
                title="Enter a valid email address"
                required
              />

            </div>
            <div className={`${styles["input-field"]} relative`}>
              <button type='button' className='absolute top-1/2 right-3 -translate-y-1/2 text-gray' onClick={() => setShowPass(!showPass)}>
                {showPass ? <PiEyeDuotone /> : <PiEyeSlashDuotone />}
              </button>
              <input type={showPass ? "text" : "password"} className="w-full" placeholder='Password' />
            </div>
            <button className={`${styles.btn} hover:scale-105 duration-300`}>Sign In</button>

            <p className={`${styles["social-text"]} ${styles.loginp}`}>Signin with Social Platforms</p>
            <div className={styles["social-media"]}>
              <a href="#" className={styles["social-icon"]}>
                <FaGoogle className={`${styles["mx-auto"]} ${styles["my-auto"]}`} />
              </a>
              <a href="#" className={styles["social-icon"]}>
                <FaGithub className={`${styles["mx-auto"]} ${styles["my-auto"]}`} />
              </a>
            </div>
          </form>
          <form action="#" className={`${styles["sign-up-form"]} ${styles.loginForm}`}>
            <h2 className={styles.title}>Sign Up</h2>
            <div className={styles["input-field"]}>
              {/* <TbMailFilled className="mx-auto my-auto" /> */}
              <input
                type="text"
                className="w-full"
                placeholder="Email"
                pattern="[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}"
                title="Enter a valid email address"
                required
              />

            </div>
            {/* <div className={styles["input-field"]}>
              <TbPhoneFilled className="mx-auto my-auto" />
              <input type="text" className={styles.LoginInput} placeholder='Phone No.' />
            </div> */}

            <button className={`${styles.btn} hover:scale-105 duration-300`}>Sign Up</button>
            <p className={`${styles["social-text"]} ${styles.loginp}`}>Or SignUp with Social Platforms</p>
            <div className={styles["social-media"]}>
              <a href="#" className={styles["social-icon"]}>
                <FaGoogle className="mx-auto my-auto" />
              </a>
              <a href="#" className={styles["social-icon"]}>
                <FaGithub className="mx-auto my-auto" />
              </a>
            </div>
          </form>
        </div>
      </div>
      <div className={styles["panels-container"]}>
        <div className={`${styles["panel"]} ${styles["left-panel"]}`}>
          <div className={styles["content"]}>
            <h3 className={styles.loginh3}>New Here?</h3>
            <p className={styles.loginp}>
              Welcome to Rugged! We SELL camping🏕️, trekking🏔️ and hiking🏂 equipments but are not limited to them. We have a range of products and services to offer! Sign Up to avail these benefits
            </p>
            <button className={`${styles.btn} ${styles.transparent} hover:scale-105 duration-300`} onClick={handleSignUpClick}>SignUp</button>
          </div>
          <img src={climbingMountain} alt="login animation" className={styles.img} />
        </div>
        <div className={`${styles["panel"]} ${styles["right-panel"]}`}>
          <div className={styles["content"]}>
            <h3 className={styles.loginh3}>One of Us?</h3>
            <p className={styles.loginp}>
              Are you already a member of the Rugged family? Then click here and dive deep into the world of adventure and thrill
            </p>
            <button className={`${styles.btn} ${styles.transparent} hover:scale-105 duration-300`} onClick={handleSignInClick}>Login</button>
          </div>
          <img src={mountains} alt="login animation" className={styles.img} />
        </div>
      </div>
    </div>
  );
}

export default LoginSignUp;
