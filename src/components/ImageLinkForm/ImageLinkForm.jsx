const ImageLinkForm = () => {
  return (
    <div className="flex flex-col items-center">
      <div className="space-y-2 border-none rounded-lg shadow-2xl w-1/2 p-4">
        <p className="flex flex-col items-center text-slate-100 py-4">
          <span>This magic brain will detect faces in your pictures.</span>
          <span>Enter a URL below and give it a try!</span>
        </p>
        <div className="flex flex-col items-center space-y-4">
          <input type="text" />
          <button
            type="submit"
            className="text-slate-100 bg-fuchsia-400 hover:bg-fuchsia-500 border border-fuchsia-200 rounded-md p-2 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300"
          >
            Detect
          </button>
        </div>
      </div>
    </div>
  )
}

export default ImageLinkForm;