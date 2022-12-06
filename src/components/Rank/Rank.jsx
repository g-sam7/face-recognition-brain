const Rank = () => {
  const name = 'Sam';
  const rank = '#2';
  return (
    <div className="flex flex-col justify-center items-center py-4 text-slate-100 font-bold">
      <div className="text-2xl">
        {`${name} your current rank is...`}
      </div>
      <div className="text-2xl">
        {rank}
      </div>
    </div>
  )
}

export default Rank;