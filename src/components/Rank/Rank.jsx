const Rank = ({
  name,
  entries,
}) => {
  return (
    <div className="flex flex-col justify-center items-center py-4 text-slate-100 font-bold">
      <div className="text-2xl">
        {`${name} your current rank is...`}
      </div>
      <div className="text-2xl">
        {entries}
      </div>
    </div>
  )
}

export default Rank;