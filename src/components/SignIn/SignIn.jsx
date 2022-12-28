import { useState } from "react";
import Logo from "../Logo/Logo";

const SignIn = ({
  loadUser,
  onRouteChange,
}) => {
  const [signInEmail, setSignInEmail] = useState('');
  const [signInPassword, setSignInPassword] = useState('');
  const onEmailChange = (event) => {
    setSignInEmail({
      email: event.target.value,
    })
  }
  const onPasswordChange = (event) => {
    setSignInPassword({
      password: event.target.value,
    })
  }
  const onSubmitSignIn = () => {
    fetch('http://localhost:3000/signin', {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({
        email: signInEmail,
        password: signInPassword
      })
      .then(response => response.json())
      .then(user => {
        if (user.id) {
          loadUser(user);
          onRouteChange('home');
        }
      })
    })
  }
  return (
    <div>
      <div className="flex min-h-full flex-col justify-center py-12 sm:px-6 lg:px-8">
        <div className="flex justify-center">
          <Logo />
        </div>
        <div className="sm:mx-auto sm:w-full sm:max-w-md">
          <h2 className="mt-2 text-center text-3xl font-bold tracking-tight text-slate-100">Sign in to your account</h2>
        </div>

        <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
          <div className="bg-slate-100 py-8 px-4 shadow sm:rounded-lg sm:px-10">
            <form className="space-y-6" action="#" method="POST">
              <div>
                <label htmlFor="email" className="block text-sm font-bold text-gray-700">
                  Email address
                </label>
                <div className="mt-1">
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    required
                    onChange={onEmailChange}
                    className="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-fuchsia-500 focus:outline-none focus:ring-fuchsia-500 sm:text-sm"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="password" className="block text-sm font-bold text-gray-700">
                  Password
                </label>
                <div className="mt-1">
                  <input
                    id="password"
                    name="password"
                    type="password"
                    autoComplete="current-password"
                    required
                    onChange={onPasswordChange}
                    className="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-fuchsia-500 focus:outline-none focus:ring-fuchsia-500 sm:text-sm"
                  />
                </div>
              </div>

              <div>
                <button
                  type="submit"
                  onClick={onSubmitSignIn}
                  className="flex w-full justify-center rounded-md border border-transparent bg-fuchsia-400 py-2 px-4 text-sm font-bold text-slate-100 shadow-sm hover:bg-fuchsia-500 focus:outline-none focus:ring-2 focus:ring-fuchsia-500 focus:ring-offset-2"
                >
                  Sign in
                </button>
              </div>

              <div className="flex items-center justify-center">
                <div className="text-sm">
                  <span>Don't have an account? </span>
                  <button
                    type="button"
                    onClick={() => onRouteChange('register')}
                    className="text-fuchsia-600 hover:text-fuchsia-500">
                    Register
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SignIn;
