const FaceRecognition = ({ imageURL }) => {
  return (
    <div className="flex justify-center m-4">
      <div className="absolute w-52 h-auto">
        <img src={imageURL} alt=""/>
      </div>
    </div>
  )
}

export default FaceRecognition;
