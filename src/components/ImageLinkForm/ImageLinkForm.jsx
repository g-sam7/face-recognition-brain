const ImageLinkForm = () => {
  return (
    <div className="flex flex-col items-center">
      <div className="space-y-2 border-none rounded-lg shadow-2xl w-1/2 p-4">
        <p className="flex flex-col items-center text-slate-200 py-4">
          <span>This magic brain will detect faces in your pictures.</span>
          <span>Give it a try!</span>
        </p>
        <div className="flex flex-col items-center space-y-4">
          <input type="text" />
          <button
            type="submit"
            className="bg-slate-300 hover:bg-slate-400 border rounded-md p-2"
          >
            Detect
          </button>
        </div>
      </div>
    </div>
  )
}

export default ImageLinkForm;
