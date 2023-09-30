import { useNavigate } from 'react-router-dom';
export default function register() {
    const navigate = useNavigate();

    

    const handleRegister = () => {
        var customer = {
            first_name: document.getElementById("first").value,
            last_name: document.getElementById("last").value,
            password: document.getElementById("password").value,
            username: document.getElementById("username").value,
            financialDetails: [],
        }
      navigate('/eligibility', {
        state: customer,
      });
    };


    return (
    <div className="max-w-2xl px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto flex-col justify-center m-24 bg-gray-50">
  <form>

      <div className="pt-0 p-4 sm:pt-0 sm:p-7">
        <h1 className="text-2xl font-semibold">
            Registration
        </h1>

        <div>
        <div className="sm:col-span-3">
          <label id="full-name" className="inline-block text-sm font-medium text-red-800 mt-2.5">
            Full name
          </label>

        </div>


        <div className="sm:col-span-9">
          <div className="sm:flex">
            <input id="first" type="text" className="py-2 px-3 pr-11 block w-full border-gray-200 shadow-sm rounded focus:border-blue-500 focus:ring-blue-500" placeholder=""/>
            <input id="last" type="text" className="py-2 px-3 pr-11 block w-full border-gray-200 shadow-sm rounded focus:border-blue-500 focus:ring-blue-500" placeholder=""/>
          </div>
        </div>

          <label id="af-submit-project-url" className="inline-block text-sm font-medium text-red-800 mt-2.5">
              Username
            </label>
            <input id="username" type="text" className="py-2 px-3 pr-11 block w-full border-gray-200 shadow-sm text-sm rounded-lg focus:border-blue-500 focus:ring-blue-500" placeholder="Username"/>
            <label id="af-submit-project-url" className="inline-block text-sm font-medium text-red-800 mt-2.5">
  Password
</label>
<input id="password" type="password" className="py-2 px-3 pr-11 block w-full border-gray-200 shadow-sm text-sm rounded-lg focus:border-blue-500 focus:ring-blue-500" placeholder="Password"/>

        </div>
        <div className="flex justify-center mt-8">
        <button type="button" onClick={() => {handleRegister()}} className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Submit</button>
    </div>
    </div>

  </form>
</div>



    );
    }

  