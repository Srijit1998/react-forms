import { useFormik } from "formik";
import * as Yup from "yup";
import "../../styles/ProfileForm.css";
import {
  CONFIRM_PASSWORD_REQUIRED,
  DATE_OF_BIRTH_REQUIRED,
  EMAIL_REQUIRED,
  FIRST_NAME_REQUIRED,
  INVALID_CONFIRM_PASSWORD,
  INVALID_EMAIL,
  INVALID_PASSWORD,
  INVALID_PHONE_NO,
  LAST_NAME_REQUIRED,
  PASSWORD_REQUIRED,
  PHONE_NO_REQUIRED,
  TERMS_AND_CONDITIONS_REQUIRED,
  phoneNoRegex,
  pwdRegex,
} from "../../constants/constants";
import { useState } from "react";
import { AiFillEye, AiOutlineEyeInvisible } from "react-icons/ai";

const ProfileForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  //const [filterPassWordMsg, setFilterPasswordMsg] = useState(null);

  const passwordMessages = INVALID_PASSWORD?.split(", ");
  const passwordErrorMessages = passwordMessages?.map((message, index) => {
    return (
      <span className="error-msg" key={index}>
        ∘ {message}
      </span>
    );
  });

  const validationSchema = Yup.object({
    firstName: Yup.string().trim().required(FIRST_NAME_REQUIRED),
    lastName: Yup.string().trim().required(LAST_NAME_REQUIRED),
    email: Yup.string().trim().required(EMAIL_REQUIRED).email(INVALID_EMAIL),
    password: Yup.string()
      .required(PASSWORD_REQUIRED)
      .matches(pwdRegex, INVALID_PASSWORD),
    confirmPassword: Yup.string()
      .required(CONFIRM_PASSWORD_REQUIRED)
      .oneOf([Yup.ref("password"), null], INVALID_CONFIRM_PASSWORD),
    phoneNo: Yup.string()
      .length(10, INVALID_PHONE_NO)
      .matches(phoneNoRegex, INVALID_PHONE_NO)
      .required(PHONE_NO_REQUIRED),
    dateOfBirth: Yup.string().required(DATE_OF_BIRTH_REQUIRED),
    termsAndConditions: Yup.bool().oneOf([true], TERMS_AND_CONDITIONS_REQUIRED),
  });

  const UserDetails = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      confirmPassword: "",
      phoneNo: "",
      dateOfBirth: "",
      termsAndConditions: false,
    },
    onSubmit: (values) => {
      console.log(values);
      alert(
        "Welcome " +
          UserDetails.values.firstName +
          " " +
          UserDetails.values.lastName +
          " " +
          "😊"
      );
    },
    validationSchema,
  });

  console.log(UserDetails.errors);

  const onShowPasswordButtonHandler = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };

  const onShowConfirmPasswordButtonHandler = () => {
    setShowConfirmPassword(
      (prevShowConfirmPassword) => !prevShowConfirmPassword
    );
  };

  console.log(passwordErrorMessages);

  // useEffect(() => {
  //   setFilterPasswordMsg(passwordMessages);
  // }, [passwordMessages]);

  return (
    <form className="form-container" onSubmit={UserDetails.handleSubmit}>
      <div className="field-container">
        <div className="form-control">
          <label
            htmlFor="firstName"
            className={`form-control-label ${
              UserDetails.touched.firstName &&
              UserDetails.errors.firstName &&
              "label-error"
            }`}
          >
            First Name
          </label>
          <input
            type="text"
            name="firstName"
            id="firstName"
            placeholder="Enter your first name"
            className={
              UserDetails.touched.firstName &&
              UserDetails.errors.firstName &&
              "input-error"
            }
            {...UserDetails.getFieldProps("firstName")}
          />
          {UserDetails.touched.firstName && UserDetails.errors.firstName ? (
            <span className="error-msg">{UserDetails.errors.firstName}</span>
          ) : null}
        </div>
        <div className="form-control">
          <label
            htmlFor="lastName"
            className={`form-control-label ${
              UserDetails.touched.lastName &&
              UserDetails.errors.lastName &&
              "label-error"
            }`}
          >
            Last Name
          </label>
          <input
            type="text"
            name="lastName"
            id="lastName"
            placeholder="Enter your last name"
            className={
              UserDetails.touched.lastName &&
              UserDetails.errors.lastName &&
              "input-error"
            }
            {...UserDetails.getFieldProps("lastName")}
          />
          {UserDetails.touched.lastName && UserDetails.errors.lastName ? (
            <span className="error-msg">{UserDetails.errors.lastName}</span>
          ) : null}
        </div>
        <div className="form-control">
          <label
            htmlFor="email"
            className={`form-control-label ${
              UserDetails.touched.email &&
              UserDetails.errors.email &&
              "label-error"
            }`}
          >
            Email
          </label>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Enter your email"
            className={
              UserDetails.touched.email &&
              UserDetails.errors.email &&
              "input-error"
            }
            {...UserDetails.getFieldProps("email")}
          />
          {UserDetails.touched.email && UserDetails.errors.email ? (
            <span className="error-msg">{UserDetails.errors.email}</span>
          ) : null}
        </div>
        <div className="form-control password">
          <label
            htmlFor="password"
            className={`form-control-label ${
              UserDetails.touched.password &&
              UserDetails.errors.password &&
              "label-error"
            }`}
          >
            Password
          </label>
          <input
            type={!showPassword ? "password" : "text"}
            name="password"
            id="password"
            placeholder="Enter your password"
            className={
              UserDetails.touched.password &&
              UserDetails.errors.password &&
              "input-error"
            }
            value={UserDetails.values.password}
            onBlur={UserDetails.handleBlur}
            onChange={UserDetails.handleChange}
          />
          {!showPassword && (
            <AiFillEye
              className="show-icon"
              onClick={onShowPasswordButtonHandler}
            />
          )}
          {showPassword && (
            <AiOutlineEyeInvisible
              className="show-icon"
              onClick={onShowPasswordButtonHandler}
            />
          )}
          {UserDetails.touched.password &&
            UserDetails.errors.password &&
            UserDetails.values.password === "" && (
              <span className="error-msg">{UserDetails.errors.password}</span>
            )}
          {UserDetails.touched.password &&
            UserDetails.errors.password &&
            UserDetails.values.password !== "" &&
            passwordErrorMessages}
        </div>
        <div className="form-control password">
          <label
            htmlFor="confirmPassword"
            className={`form-control-label ${
              UserDetails.touched.confirmPassword &&
              UserDetails.errors.confirmPassword &&
              "label-error"
            }`}
          >
            Confirm Password
          </label>
          <input
            type={!showConfirmPassword ? "password" : "text"}
            name="confirmPassword"
            id="confirmPassword"
            placeholder="Enter your password"
            className={
              UserDetails.touched.confirmPassword &&
              UserDetails.errors.confirmPassword &&
              "input-error"
            }
            {...UserDetails.getFieldProps("confirmPassword")}
          />
          {!showConfirmPassword && (
            <AiFillEye
              className="show-icon"
              onClick={onShowConfirmPasswordButtonHandler}
            />
          )}
          {showConfirmPassword && (
            <AiOutlineEyeInvisible
              className="show-icon"
              onClick={onShowConfirmPasswordButtonHandler}
            />
          )}
          {UserDetails.touched.confirmPassword &&
          UserDetails.errors.confirmPassword ? (
            <span className="error-msg">
              {UserDetails.errors.confirmPassword}
            </span>
          ) : null}
        </div>
        <div className="form-control">
          <label
            htmlFor="phoneNo"
            className={`form-control-label ${
              UserDetails.touched.phoneNo &&
              UserDetails.errors.phoneNo &&
              "label-error"
            }`}
          >
            Mobile No.
          </label>
          <input
            type="tel"
            name="phoneNo"
            id="phoneNo"
            placeholder="Enter your mobile no."
            className={
              UserDetails.touched.phoneNo &&
              UserDetails.errors.phoneNo &&
              "input-error"
            }
            value={UserDetails.values.phoneNo}
            onChange={UserDetails.handleChange}
            onBlur={UserDetails.handleBlur}
            onInput={() => Number(UserDetails.values.phoneNo)}
          />
          {UserDetails.touched.phoneNo && UserDetails.errors.phoneNo ? (
            <span className="error-msg">{UserDetails.errors.phoneNo}</span>
          ) : null}
        </div>
        <div className="form-control">
          <label
            htmlFor="dateOfBirth"
            className={`form-control-label ${
              UserDetails.touched.dateOfBirth &&
              UserDetails.errors.dateOfBirth &&
              "label-error"
            }`}
          >
            Date of Birth
          </label>
          <input
            type="date"
            name="dateOfBirth"
            id="dateOfBirth"
            className={
              UserDetails.touched.dateOfBirth &&
              UserDetails.errors.dateOfBirth &&
              "input-error"
            }
            {...UserDetails.getFieldProps("dateOfBirth")}
          />
          {UserDetails.touched.dateOfBirth && UserDetails.errors.dateOfBirth ? (
            <span className="error-msg">{UserDetails.errors.dateOfBirth}</span>
          ) : null}
        </div>
      </div>
      <div className="form-control">
        <div className="terms-and-conditions">
          <input
            type="checkbox"
            name="termsAndConditions"
            id="termsAndConditions"
            {...UserDetails.getFieldProps("termsAndConditions")}
          />
          <label htmlFor="termsAndConditions" className="form-control-label">
            I agree to the <a className="tc-link">Terms & Conditions</a>
          </label>
        </div>

        {UserDetails.touched.termsAndConditions &&
        UserDetails.errors.termsAndConditions ? (
          <span className="error-msg">
            {UserDetails.errors.termsAndConditions}
          </span>
        ) : null}
      </div>
      <div className="submit">
        <button type="submit" className="submit-btn">
          Register
        </button>
      </div>
    </form>
  );
};

export default ProfileForm;
