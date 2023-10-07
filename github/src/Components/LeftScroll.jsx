import { BiSolidDownArrow } from 'react-icons/bi'
import { GoRepo } from 'react-icons/go'
const LeftScrol = () => {
  const LeftData = [
    {
      image: 'https://avatars.githubusercontent.com/u/107991675?v=4',
      name: 'santoshy1101/questionable-milk-2896',
    },
    {
      image: 'https://avatars.githubusercontent.com/u/107991675?v=4',
      name: 'santoshy1101/skilltank',
    },
    {
      image: 'https://avatars.githubusercontent.com/u/107991675?v=4',
      name: 'santoshy1101/daily-dsa',
    },
    {
      image: 'https://avatars.githubusercontent.com/u/98386705?s=16&v=4',
      name: 'VivekJawale/Orbitz-clone',
    },
    {
      image: 'https://avatars.githubusercontent.com/u/107991675?v=4',
      name: 'santoshy1101/HTML-CSS-PRACTICE',
    },
  ]
  return (
    <div className="">
      <div className="absolute  left-0 w-[100%] max-h-[100vh] overflow-y-auto bg-[#0D1117] rounded-lg shadow-lg">
        <div className="p-5 text-white">
          <div className="flex items-center gap-2">
            <img
              className="w-8 rounded-[50%]"
              src="https://avatars.githubusercontent.com/u/107991675?v=4"
              alt=""
            />

            <p>santoshy1101</p>
            <div>
              <BiSolidDownArrow />
            </div>
          </div>
          {/* 2nd */}
          <div className="flex justify-between mt-3">
            <p>Top Repositories</p>
            <button className="flex items-center gap-2 bg-[#238636] py-1 px-2 rounded-md">
              <GoRepo />
              <p>New</p>
            </button>
          </div>
          {/* input */}
          <input
            type="text"
            placeholder="Find a repository..."
            className="w-[100%] bg-[#010409] text-slate-500 py-1 px-3 border border-slate-500 rounded-md mt-3"
          />

          <ul className="mt-3">
            <li className="flex items-center gap-2 mb-2">
              <img
                className="w-4 h-4"
                src="https://avatars.githubusercontent.com/u/61222534?s=16&v=4"
                alt=""
              />
              <p className="text-sm">masai-course/santosh_fw20_1101</p>
            </li>
            {LeftData.map(({ image, name }, ind) => {
              return (
                <li className="flex items-center gap-2 mb-2" key={ind}>
                  <img
                    className="w-5 h-5 rounded-[50%]"
                    src={image}
                    alt={name}
                  />
                  <p className="text-sm">{name}</p>
                </li>
              )
            })}

            <li className="my-4 text-xs text-slate-500">show more</li>
          </ul>
          {/* 4th */}
          <p className="mb-2">Recent activity</p>
          <div className="p-3 border-2 border-dashed rounded-md border-slate-500 text-slate-500 ">
            <p className="text-xs">
              When you take actions across GitHub, we’ll provide links to that
              activity here.
            </p>
          </div>
          {/* 5th */}
          <p className="mt-2">Your teams</p>
          <input
            type="text"
            placeholder="Find a teams..."
            className="w-[100%] bg-[#010409] text-slate-500 py-1 px-3 border border-slate-500 rounded-md mt-2"
          />
          {/* 6th */}
          <ul>
            <li className="flex items-center gap-2 mt-3">
              <img
                className="w-5 h-5 rounded-[50%]"
                src="https://avatars.githubusercontent.com/t/6256690?s=16&v=4"
                alt=""
              />
              <p className="text-sm">masai-course/cohort-38</p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default LeftScrol
