import './FaceRecognition.css'

const FaceRecognition = ({ imageURL, box }) => {
  return (
    <div className="flex justify-center m-4">
      <div className="absolute w-52 h-auto">
        <img id="inputImage" src={imageURL} alt=""/>
        <div
          className="bounding-box"
          style={{top: box.topRow, right: box.rightCol, bottom: box.bottomRow, left: box.leftCol}}
        />
      </div>
    </div>
  )
}

export default FaceRecognition;
