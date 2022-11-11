import Tilt from 'react-parallax-tilt';
import brain_logo from './brain_logo.png';

const Logo = () => {
  return (
    <div className="w-24 h-auto m-8">
      <Tilt
        trackOnWindow={false}
      >
        <div className="bg-gradient-to-r from-fuchsia-500 to-amber-600">
          <img src={brain_logo} alt="brain_logo" />
        </div>
      </Tilt>
    </div>
  )
}

export default Logo;
