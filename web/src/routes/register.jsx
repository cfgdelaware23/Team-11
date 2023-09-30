export default function register() {

    const onSubmit = () => {
        const firstName = document.getElementById("first").value;
        console.log(firstName)
        const lastName = document.getElementById("last").value;
        const username = document.getElementById("username").value;
        const passw = document.getElementById("password").value;
        const data = {firstName, lastName, username, password};
        var customer = {
        first_name: firstName,
        last_name: lastName,
        password: passw,
        username: username,
        financialDetails: []
        };
        console.log(customer)
      };

    return (
<div class="max-w-4xl px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
  <form>


      <div class="pt-0 p-4 sm:pt-0 sm:p-7">
        <h1 class="text-2xl font-semibold text-gray-800 dark:text-gray-200">
            Registration
        </h1>

        <div>
        <div class="sm:col-span-3">
          <label for="full-name" class="inline-block text-sm font-medium text-gray-800 mt-2.5 dark:text-gray-200">
            Full name
          </label>

        </div>


        <div class="sm:col-span-9">
          <div class="sm:flex">
            <input id="first" type="text" class="py-2 px-3 pr-11 block w-full border-gray-200 shadow-sm -mt-px -ml-px first:rounded-t-lg last:rounded-b-lg sm:first:rounded-l-lg sm:mt-0 sm:first:ml-0 sm:first:rounded-tr-none sm:last:rounded-bl-none sm:last:rounded-r-lg text-sm relative focus:z-10 focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400" placeholder=""/>
            <input id="last" type="text" class="py-2 px-3 pr-11 block w-full border-gray-200 shadow-sm -mt-px -ml-px first:rounded-t-lg last:rounded-b-lg sm:first:rounded-l-lg sm:mt-0 sm:first:ml-0 sm:first:rounded-tr-none sm:last:rounded-bl-none sm:last:rounded-r-lg text-sm relative focus:z-10 focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400" placeholder=""/>
          </div>
        </div>

          <label for="af-submit-project-url" class="inline-block text-sm font-medium text-gray-800 mt-2.5 dark:text-gray-200">
              Username
            </label>
            <input id="username" type="text" class="py-2 px-3 pr-11 block w-full border-gray-200 shadow-sm text-sm rounded-lg focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400" placeholder="Username"/>
            <label for="af-submit-project-url" class="inline-block text-sm font-medium text-gray-800 mt-2.5 dark:text-gray-200">
  Password
</label>
<input id="password" type="password" class="py-2 px-3 pr-11 block w-full border-gray-200 shadow-sm text-sm rounded-lg focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400" placeholder="Password"/>

        </div>
        <div class="flex justify-center mt-8">
        <button type="button" onClick={onSubmit} class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Submit</button>
    </div>
    </div>

  </form>
</div>



    );
    }

  