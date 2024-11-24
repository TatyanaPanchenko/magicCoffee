import React from "react";
import { useForm, Controller } from "react-hook-form";
import { useNavigate, NavLink } from "react-router-dom";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import style from "./regPage.module.scss";

export default function RegPage({ setAuth }) {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const auth = getAuth();
  const onSubmit = (data) => {
    createUserWithEmailAndPassword(auth, data.mail, data.password)
      .then(() => {
        setAuth(true);
        reset();

        // updateRegData(data);
        // setRegdata({ data: data, status: true });
      })
      .catch((error) => {
        console.error(error);
      });
    reset();
  };

  return (
    <div className={style["reg-inner"]}>
      <NavLink to="/">
        <div className={style["reg-back"]}></div>
      </NavLink>
      <div className={style["reg-title"]}>Sign up</div>
      <div className={style["reg-subtitle"]}>Create an account here</div>
      <form onSubmit={handleSubmit(onSubmit)} className={style["reg-form"]}>
        <div className={style["input-str"]}>
          <span
            className={`${style["input-icon"]} ${style["user-icon"]}`}
          ></span>
          <input
            placeholder="Name"
            {...register("name", {
              required: "Must be filled in",
              maxLength: 30,
              pattern: {
                value: /^[A-Za-z]+$/i,
                message: "Invalid characters",
              },
            })}
          />
          {errors.name && (
            <p className={style.errorField}>{errors.name?.message}</p>
          )}
        </div>
        <div className={style["input-str"]}>
          <span
            className={`${style["input-icon"]} ${style["mobile-icon"]}`}
          ></span>
          <input
            placeholder="Mobile Number"
            type="tel"
            {...register("mobile", {
              required: "Must be filled in",
              pattern: {
                value: /^[0-9]+$/,
                message: "Invalid characters",
              },
            })}
          />
          {errors.mobile && (
            <p className={style.errorField}>{errors.mobile?.message}</p>
          )}
        </div>
        <div className={style["input-str"]}>
          <span
            className={`${style["input-icon"]} ${style["email-icon"]}`}
          ></span>
          <input
            placeholder="Email address"
            type="email"
            {...register("mail", {
              required: "Must be filled in",
              pattern: {
                value: /^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/,
                message: "Invalid characters",
              },
            })}
          />
          {errors.mail && (
            <p className={style.errorField}>{errors.mail?.message}</p>
          )}
        </div>
        <div className={style["input-str"]}>
          <span
            className={`${style["input-icon"]} ${style["password-icon"]}`}
          ></span>
          <input
            placeholder="Password"
            type="password"
            {...register("password", {
              required: "Must be filled in",
              minLength: {
                value: 6,
                message: "The field must contain at least 6 characters",
              },
            })}
          />
          {errors.password && (
            <p className={style.errorField}>{errors.password?.message}</p>
          )}
        </div>
        <div className={style["reg-agree"]}>
          By signing up you agree with our Terms of Use
        </div>
        <input type="submit" value="" />
      </form>
      <div className={style["reg-link"]}>
        Already a member?
        <NavLink to="/auth"> Sign in</NavLink>
      </div>
    </div>
  );
}
