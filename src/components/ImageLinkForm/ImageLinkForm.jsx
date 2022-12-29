const ImageLinkForm = ({ onInputChange, onButtonSubmit }) => {
  return (
    <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
      <div className="bg-slate-100 py-8 px-4 shadow sm:rounded-lg sm:px-10">
        <div className="flex flex-col items-center">
          <div className="space-y-2">
            <p className="flex flex-col items-center text-gray-700 py-4 font-bold">
              <span>Paste an image URL into this magic brain and it will detect the faces within...</span>
            </p>
            <div className="flex flex-col items-center space-y-4">
              <input
                id="detect"
                name="detect"
                type="text"
                required
                className="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-fuchsia-500 focus:outline-none focus:ring-fuchsia-500 sm:text-sm"
                onChange={(e) => onInputChange(e)}
              />
              <button
                type="submit"
                onClick={onButtonSubmit}
                className="flex w-full justify-center rounded-md border border-transparent bg-fuchsia-400 py-2 px-4 text-sm font-bold text-slate-100 shadow-sm hover:bg-fuchsia-500 focus:outline-none focus:ring-2 focus:ring-fuchsia-500 focus:ring-offset-2"
              >
                Detect
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ImageLinkForm;
