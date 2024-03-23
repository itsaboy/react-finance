import { UserMinusIcon, FaceFrownIcon } from "@heroicons/react/20/solid";
import { useAuthContext } from "../../hooks/useAuthContext";
import { useLogout } from "../../hooks/useLogout";
import user2 from "../../assets/User2.svg";

export default function MyAccount() {
  const { user } = useAuthContext();

  const { logout } = useLogout();

  return (
    <div className="divide-y divide-gray-800">
      <div className="pb-6 grid">
        <div className="h-24 bg-gradient-to-r from-green-600 to-green-400/40 sm:h-20 lg:h-28" />
        <div className="-mt-12 px-4 sm:-mt-8 flex flex-col items-center sm:px-6 lg:-mt-16 max-w-3xl mx-auto">
          <div>
            <div className="-m-1 flex">
              <div className="inline-flex overflow-hidden rounded-lg border-4 border-gray-800 bg-gray-600/80 shadow-md shadow-gray-800/60">
                <img
                  className="h-24 w-24 p-2 flex-shrink-0 sm:h-40 sm:w-40 lg:h-48 lg:w-48"
                  src={user2}
                  alt="user logo"
                />
              </div>
            </div>
          </div>
          <div className="mt-6">
            <div>
              <div className="flex items-center">
                <h3 className="text-xl font-bold text-gray-900 sm:text-2xl">
                  {user ? user.username : null}
                </h3>
                <span className="ml-2.5 inline-block h-2 w-2 flex-shrink-0 rounded-full bg-green-600 animate-ping">
                  <span className="sr-only">Online</span>
                </span>
              </div>
              <p className="text-sm text-gray-500">{user ? user.email : null}</p>
            </div>
            <div className="mt-5 flex flex-col">
              <button
                type="button"
                className="inline-flex items-center justify-center gap-x-2 rounded-md bg-green-700 px-3.5 py-2.5 text-sm font-semibold text-gray-200 shadow-md shadow-gray-800/60 hover:bg-green-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-800"
                onClick={() => logout()}
              >
                Logout <UserMinusIcon className="-mr-0.5 h-5 w-5" />
              </button>
              {/* <button
                type="button"
                className="inline-flex items-center justify-center gap-x-2 rounded-md bg-red-700 px-3.5 py-2.5 text-sm font-semibold text-gray-200 shadow-md shadow-gray-800/60 hover:bg-red-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-800"
              >
                Deactivate <FaceFrownIcon className="-mr-0.5 h-5 w-5" />
              </button> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
