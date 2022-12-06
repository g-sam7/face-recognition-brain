const Navigation = ({ onRouteChange, isSignedIn}) => {
  if (isSignedIn) {
    return (
      <nav className="flex justify-end p-4 font-bold">
      <button
        type="button"
        onClick={() => onRouteChange('signout')}
        className="text-stone-100 underline"
      >
        <p className="text-1xl">Sign Out</p>
      </button>
    </nav>
    )
  } else {
    return (
      <nav className="flex justify-end p-4 space-x-4 font-bold">
        <button
          type="button"
          onClick={() => onRouteChange('signin')}
          className="text-stone-100 underline"
        >
          <p className="text-1xl">Sign In</p>
        </button>
        <button
          type="button"
          onClick={() => onRouteChange('register')}
          className="text-stone-100 underline"
        >
          <p className="text-1xl">Register</p>
        </button>
      </nav>
    )
  }
}

export default Navigation;
