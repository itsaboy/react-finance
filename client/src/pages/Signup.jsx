import { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { UserPlusIcon } from "@heroicons/react/20/solid";
import { FinanceContext } from "../context/FinanceContext";
import { useSignup } from "../hooks/useSignup";
import FailureMsg from "../components/FailureMsg";

export default function Signup() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { setActivePage, setSECForm, setOptionStrategy } = useContext(FinanceContext);

  const { signup, signupError, setSignupError, signupLoading } = useSignup();

  useEffect(() => {
    setActivePage("signup");
    setOptionStrategy("None");
    setSECForm("None");
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    await signup(username, email, password);
  };

  return (
    <>
      <div className="flex min-h-full flex-1 flex-col justify-center py-12 sm:px-6 lg:px-8 bg-transparent">
        <div className="sm:mx-auto sm:w-full sm:max-w-md">
          <h2 className="mt-6 text-center text-2xl font-bold leading-9 tracking-tight text-gray-800">
            Create an account
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-[480px]">
          <div className="bg-gray-600 w-full px-6 py-12 shadow-lg sm:rounded-2xl sm:px-12 shadow-gray-950/60 bg-clip-padding backdrop-filter backdrop-blur-xl bg-opacity-80">
            <form className="space-y-6 flex flex-col" onSubmit={handleSubmit}>
              <div>
                <label
                  htmlFor="username"
                  className="block text-sm font-medium leading-6 text-gray-100"
                >
                  Username
                </label>
                <div className="mt-2">
                  <input
                    id="username"
                    name="username"
                    type="text"
                    autoComplete="username"
                    required
                    className="block w-full rounded-md border-0 py-1.5 pl-3 text-gray-950 shadow-sm ring-1 ring-inset ring-gray-900 placeholder:text-gray-900 focus:ring-2 focus:ring-inset focus:ring-gray-800 sm:text-sm sm:leading-6"
                    onChange={(e) => setUsername(e.target.value)}
                    value={username}
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium leading-6 text-slate-200"
                >
                  Email address
                </label>
                <div className="mt-2">
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    required
                    className="block w-full rounded-md border-0 py-1.5 pl-3 text-gray-950 shadow-sm ring-1 ring-inset ring-gray-900 placeholder:text-gray-900 focus:ring-2 focus:ring-inset focus:ring-gray-800 sm:text-sm sm:leading-6"
                    onChange={(e) => setEmail(e.target.value)}
                    value={email}
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="password"
                  className="block text-sm font-medium leading-6 text-slate-200"
                >
                  Password
                </label>
                <div className="mt-2">
                  <input
                    id="password"
                    name="password"
                    type="password"
                    autoComplete="current-password"
                    required
                    className="block w-full rounded-md border-0 py-1.5 pl-3 text-gray-950 shadow-sm ring-1 ring-inset ring-gray-900 placeholder:text-gray-900 focus:ring-2 focus:ring-inset focus:ring-gray-800 sm:text-sm sm:leading-6"
                    onChange={(e) => setPassword(e.target.value)}
                    value={password}
                  />
                </div>
              </div>

              {signupError ? (
                <FailureMsg text={signupError} clear={setSignupError} />
              ) : (
                <br />
              )}

              <div className="flex items-center justify-center">
                <button
                  type="submit"
                  className="inline-flex items-center gap-x-2 rounded-lg bg-green-700 px-3.5 py-2.5 text-sm font-semibold text-gray-200 shadow-md shadow-gray-800/60 hover:bg-green-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-800 hover:cursor-pointer"
                  disabled={signupLoading}
                >
                  Sign up{" "}
                  <UserPlusIcon className="-mr-0.5 h-5 w-5" aria-hidden="true" />
                </button>
              </div>
            </form>
          </div>

          <p className="mt-10 text-center text-md text-gray-600">
            Already a member?{" "}
            <Link
              to="/login"
              className="font-semibold leading-6 text-green-600 hover:text-green-800"
            >
              Log in!
            </Link>
          </p>
        </div>
      </div>
    </>
  );
}
