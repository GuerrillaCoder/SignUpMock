import React from "react";

export default function TextInput(props) {
  return (
    <div>
      <label
        for="email"
        class="block text-sm font-medium leading-5 text-gray-700"
      >
        Email address
      </label>
      <div class="mt-1 rounded-md shadow-sm">
        <input
          id="email"
          type="email"
          required
          class="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5"
        />
        <p className={" validation text-sm mb-4 text-red-600"}>
          Please enter a valid domain to continue
        </p>
      </div>
    </div>
  );
}
