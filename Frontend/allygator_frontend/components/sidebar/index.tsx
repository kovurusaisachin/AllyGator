import React from "react";
import { useRouter } from "next/router";
import Link from "next/link";
export default function Sidebar() {
  const router = useRouter();
  const handleLo = (e) => {
    e.preventDefault();
    router.push("/dashboard");
  };
  const handleLogo = (e) => {
    e.preventDefault();
    router.push("/");
  };
  return (
    <>
      {/* sidebar */}
      <section>
        <div className="flex flex-col w-64 min-h-screen h-full px-4 py-8 bg-gray-300 border-r dark:bg-gray-800 dark:border-gray-600">
          <div className="flex items-center px-4 -mx-2">
            <img
              onClick={handleLogo}
              className="object-cover mx-2 rounded-full h-9 w-9"
              src="https://i.pinimg.com/originals/79/ae/30/79ae3050000579337f79c78e8ad2e6eb.jpg"
              alt="avatar"
            />
            <button
              className="mx-2 text-lg font-semibold text-gray-800 dark:text-white"
              onClick={handleLo}
            >
              AllyGators
            </button>
          </div>
          <div className="flex flex-col justify-between flex-1 mt-6">
            <nav>
              <Link href="/dashboard">
                <a
                  className={
                    router.pathname == "/dashboard"
                      ? "flex items-center px-4 py-2 mt-5 text-gray-700 bg-gray-200 rounded-md dark:bg-gray-700 dark:text-gray-200"
                      : "flex items-center px-4 py-2 mt-5 text-gray-600 rounded-md dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700 dark:hover:text-gray-200 hover:text-gray-700"
                  }
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                  <span className="mx-4 font-medium">Dashboard</span>
                </a>
              </Link>
              <Link href="/dashboard/forum">
                <a
                  className={
                    router.pathname == "/dashboard/forum"
                      ? "flex items-center px-4 py-2 mt-5 text-gray-700 bg-gray-200 rounded-md dark:bg-gray-700 dark:text-gray-200"
                      : "flex items-center px-4 py-2 mt-5 text-gray-600 rounded-md dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700 dark:hover:text-gray-200 hover:text-gray-700"
                  }
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z"
                    />
                  </svg>

                  <span className="mx-4 font-medium">Forum</span>
                </a>
              </Link>
              <Link href="/dashboard/connection">
                <a
                  className={
                    router.pathname == "/dashboard/connection"
                      ? "flex items-center px-4 py-2 mt-5 text-gray-700 bg-gray-200 rounded-md dark:bg-gray-700 dark:text-gray-200"
                      : "flex items-center px-4 py-2 mt-5 text-gray-600 rounded-md dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700 dark:hover:text-gray-200 hover:text-gray-700"
                  }
                >
                  <svg
                    className="w-5 h-5"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M16 7C16 9.20914 14.2091 11 12 11C9.79086 11 8 9.20914 8 7C8 4.79086 9.79086 3 12 3C14.2091 3 16 4.79086 16 7Z"
                      stroke="currentColor"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M12 14C8.13401 14 5 17.134 5 21H19C19 17.134 15.866 14 12 14Z"
                      stroke="currentColor"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <span className="mx-4 font-medium">Connections</span>
                </a>
              </Link>
              <Link href="/dashboard/chat">
                <a
                  className={
                    router.pathname == "/dashboard/chat"
                      ? "flex items-center px-4 py-2 mt-5 text-gray-700 bg-gray-200 rounded-md dark:bg-gray-700 dark:text-gray-200"
                      : "flex items-center px-4 py-2 mt-5 text-gray-600 rounded-md dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700 dark:hover:text-gray-200 hover:text-gray-700"
                  }
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z"
                    />
                  </svg>
                  <span className="mx-4 font-medium">Chat</span>
                </a>
              </Link>
              <Link href="/dashboard/miscellaneous">
                <a
                  className={
                    router.pathname == "/dashboard/miscellaneous"
                      ? "flex items-center px-4 py-2 mt-5 text-gray-700 bg-gray-200 rounded-md dark:bg-gray-700 dark:text-gray-200"
                      : "flex items-center px-4 py-2 mt-5 text-gray-600 rounded-md dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700 dark:hover:text-gray-200 hover:text-gray-700"
                  }
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4"
                    />
                  </svg>
                  <span className="mx-4 font-medium">Miscellaneous</span>
                </a>
              </Link>
              <Link href="/dashboard/profile">
                <a
                  className={
                    router.pathname == "/dashboard/profile"
                      ? "flex items-center px-4 py-2 mt-5 text-gray-700 bg-gray-200 rounded-md dark:bg-gray-700 dark:text-gray-200"
                      : "flex items-center px-4 py-2 mt-5 text-gray-600 rounded-md dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700 dark:hover:text-gray-200 hover:text-gray-700"
                  }
                >
                  <svg
                    className="w-5 h-5"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M10.3246 4.31731C10.751 2.5609 13.249 2.5609 13.6754 4.31731C13.9508 5.45193 15.2507 5.99038 16.2478 5.38285C17.7913 4.44239 19.5576 6.2087 18.6172 7.75218C18.0096 8.74925 18.5481 10.0492 19.6827 10.3246C21.4391 10.751 21.4391 13.249 19.6827 13.6754C18.5481 13.9508 18.0096 15.2507 18.6172 16.2478C19.5576 17.7913 17.7913 19.5576 16.2478 18.6172C15.2507 18.0096 13.9508 18.5481 13.6754 19.6827C13.249 21.4391 10.751 21.4391 10.3246 19.6827C10.0492 18.5481 8.74926 18.0096 7.75219 18.6172C6.2087 19.5576 4.44239 17.7913 5.38285 16.2478C5.99038 15.2507 5.45193 13.9508 4.31731 13.6754C2.5609 13.249 2.5609 10.751 4.31731 10.3246C5.45193 10.0492 5.99037 8.74926 5.38285 7.75218C4.44239 6.2087 6.2087 4.44239 7.75219 5.38285C8.74926 5.99037 10.0492 5.45193 10.3246 4.31731Z"
                      stroke="currentColor"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M15 12C15 13.6569 13.6569 15 12 15C10.3431 15 9 13.6569 9 12C9 10.3431 10.3431 9 12 9C13.6569 9 15 10.3431 15 12Z"
                      stroke="currentColor"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <span className="mx-4 font-medium">Profile</span>
                </a>
              </Link>
            </nav>
          </div>
        </div>
      </section>
    </>
  );
}
