import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  signupAndUploadUserInfoToDb,
  validateIfUserPresentInDBAndSendUserDetails,
} from "../firebase/Database/Users";

const Auth = () => {
  const navigate = useNavigate();

  const [isAlreadyCustomer, setIsAlreadyCustomer] = useState(false);
  const [authForm, setAuthForm] = useState({
    email: "",
    password: "",
  });

  const toggleFormSignSignup = () => {
    setIsAlreadyCustomer((current) => !current);
  };

  const handleSignIn = async (event) => {
    event.preventDefault();
    validateIfUserPresentInDBAndSendUserDetails(authForm).then((result) => {
      if (result) {
        //login({ ...result, loginStatus: true, products: [] });
        navigate("/");
      } else {
        //login({ loginStatus: false });
      }
    });
  };

  const handleSignUp = async (event) => {
    event.preventDefault();
    // Call the function like this:
    (async () => {
      const result = await signupAndUploadUserInfoToDb(authForm);
      console.log(result);
      if (result !== null) {
        setIsAlreadyCustomer(true);
        setAuthForm({
          email: "",
          password: "",
        });
        console.log("User signup successful");
      } else {
        console.log("User signup failed");
      }
    })();
  };

  return (
    <div className="flex min-h-screen w-full items-center justify-center text-gray-600 bg-gray-50">
      <div className="relative">
        <div className="hidden sm:block h-56 w-56 text-red-300 absolute a-z-10 -left-20 -top-20">
          <svg
            id="patternId"
            width="100%"
            height="100%"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <pattern
                id="a"
                patternUnits="userSpaceOnUse"
                width="40"
                height="40"
                patternTransform="scale(0.6) rotate(0)"
              >
                <rect x="0" y="0" width="100%" height="100%" fill="none" />
                <path
                  d="M11 6a5 5 0 01-5 5 5 5 0 01-5-5 5 5 0 015-5 5 5 0 015 5"
                  strokeWidth="1"
                  stroke="none"
                  fill="currentColor"
                />
              </pattern>
            </defs>
            <rect
              width="800%"
              height="800%"
              transform="translate(0,0)"
              fill="url(#a)"
            />
          </svg>
        </div>
        <div className="hidden sm:block h-28 w-28 text-red-300 absolute a-z-10 -right-20 -bottom-20">
          <svg
            id="patternId"
            width="100%"
            height="100%"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <pattern
                id="b"
                patternUnits="userSpaceOnUse"
                width="40"
                height="40"
                patternTransform="scale(0.5) rotate(0)"
              >
                <rect x="0" y="0" width="100%" height="100%" fill="none" />
                <path
                  d="M11 6a5 5 0 01-5 5 5 5 0 01-5-5 5 5 0 015-5 5 5 0 015 5"
                  strokeWidth="1"
                  stroke="none"
                  fill="currentColor"
                />
              </pattern>
            </defs>
            <rect
              width="800%"
              height="800%"
              transform="translate(0,0)"
              fill="url(#b)"
            />
          </svg>
        </div>
        {/* <!-- Register --> */}
        <div className="relative flex flex-col sm:w-[30rem] rounded-lg border-gray-400 bg-white shadow-lg px-4">
          <div className="flex-auto p-6">
            {/* <!-- Logo --> */}
            <div className="mb-10 flex flex-shrink-0 flex-grow-0 items-center justify-center overflow-hidden">
              <Link
                href="/"
                className="flex cursor-pointer items-center gap-2 text-red-500 no-underline hover:text-red-500"
              >
                <span className="flex-shrink-0 text-3xl font-black lowercase tracking-tight opacity-100">
                  Eyesome
                </span>
              </Link>
            </div>
            {/* <!-- /Logo --> */}
            <h4 className="mb-2 font-medium text-gray-700 xl:text-xl">
              Welcome to the shopping web!
            </h4>
            <p className="mb-6 text-gray-500">
              Please {isAlreadyCustomer ? "sign-in" : "sign-up"} to create your
              account
            </p>

            <form id="" className="mb-4">
              <div className="mb-4">
                <label
                  htmlFor="email"
                  className="mb-2 inline-block text-xs font-medium uppercase text-gray-700"
                >
                  Email
                </label>
                <input
                  type="text"
                  className="block w-full cursor-text appearance-none rounded-md border border-gray-400 bg--100 py-2 px-3 text-sm outline-none focus:border-red-500 focus:bg-white focus:text-gray-600 focus:shadow"
                  id="email"
                  name="email-username"
                  placeholder="Enter your email"
                  autoFocus=""
                  onChange={(event) =>
                    setAuthForm({ ...authForm, email: event.target.value })
                  }
                />
              </div>
              <div className="mb-4">
                <div className="flex justify-between">
                  <label
                    className="mb-2 inline-block text-xs font-medium uppercase text-gray-700"
                    htmlFor="password"
                  >
                    Password
                  </label>
                </div>
                <div className="relative flex w-full flex-wrap items-stretch">
                  <input
                    type="password"
                    id="password"
                    className="relative block flex-auto cursor-text appearance-none rounded-md border border-gray-400 bg--100 py-2 px-3 text-sm outline-none focus:border-red-500 focus:bg-white focus:text-gray-600 focus:shadow"
                    name="password"
                    placeholder="············"
                    onChange={(event) =>
                      setAuthForm({
                        ...authForm,
                        password: event.target.value,
                      })
                    }
                  />
                </div>
              </div>
              <div className="mb-4">
                <button
                  className="grid w-full cursor-pointer select-none rounded-md border border-red-500 bg-red-500 py-2 px-5 text-center align-middle text-sm text-white shadow hover:border-red-600 hover:bg-red-600 hover:text-white focus:border-red-600 focus:bg-red-600 focus:text-white focus:shadow-none"
                  onClick={
                    isAlreadyCustomer
                      ? (e) => handleSignIn(e)
                      : (e) => handleSignUp(e)
                  }
                >
                  {isAlreadyCustomer ? "Sign in" : "Sign up"}
                </button>
              </div>
            </form>

            <p className="mb-4 text-center">
              Already on eyesome? &nbsp;
              <a
                href="#"
                className="cursor-pointer text-red-500 no-underline hover:text-red-500"
                onClick={toggleFormSignSignup}
              >
                {isAlreadyCustomer ? "Sign up Here" : "Sign in Here"}
              </a>
            </p>
          </div>
        </div>
        {/* <!-- /Register --> */}
      </div>
    </div>
  );
};

export default Auth;
