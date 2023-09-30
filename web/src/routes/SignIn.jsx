import { useNavigate } from 'react-router-dom';

export default function signIn() {
  const navigate = useNavigate();

  const handleSignIn = async () => {
    
    const password = document.getElementById("password").value;
    const username = document.getElementById("username").value;


    const response = await fetch(`http://localhost:3000/admin/allCustomers`).then((res) => res.json())
    .then(data=>{
      console.log(data)
      if (data.map(obj =>obj.username).includes(username)){
        navigate('/home', {
            state: {
              username: username,
              password: password,
            },
          });
      }else{
        alert("Invalid username or password")
      }
      
    }).catch((error) => console.error("Error fetching user data: ", error));


  // Navigate to the '/home' route with the data as state

};

  return (
    <div className="max-w-2xl px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto flex-col justify-center m-24 bg-gray-50">
      <form>
        <div className="pt-0 p-4 sm:pt-0 sm:p-7">
          <h1 className="text-2xl font-semibold" style={{ color: '#6e96a5' }}>
            Sign In
          </h1>

          <div>
            <label
              id="af-submit-project-url"
              className="inline-block text-sm font-medium text-gray-800 mt-2.5 dark:text-gray-200"
              style={{ color: '#820101' }} 
            >
              Username
            </label>
            <input
              id="username"
              type="text"
              className="py-2 px-3 pr-11 block w-full border-gray-200 shadow-sm text-sm rounded-lg focus:border-blue-500 focus:ring-blue-500 dark:bg-gray-100 dark:border-gray-300 dark:text-gray-400" // Set background and border colors to light gray
              placeholder="Username"
            />
            <label
              id="af-submit-project-url"
              className="inline-block text-sm font-medium text-gray-800 mt-3 dark:text-gray-200"
              style={{ color: '#820101' }} 
            >
              Password
            </label>
            <input
              id="password"
              type="password"
              className="py-2 px-3 pr-11 block w-full border-gray-200 shadow-sm text-sm rounded-lg focus:border-blue-500 focus:ring-blue-500 dark:bg-gray-100 dark:border-gray-300 dark:text-gray-400" // Set background and border colors to light gray
              placeholder="Password"
            />
          </div>
          <div className="flex justify-center mt-8">
            <button
              type="button"
              onClick={() => {
                handleSignIn();
              }}
              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
            >
              Submit
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
