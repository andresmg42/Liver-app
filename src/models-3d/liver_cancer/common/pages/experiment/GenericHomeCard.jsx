import { NavLink } from "react-router"

const GenericHomeCard = (props) => {
  return (
    <div className="bg-white/15 w-full md:max-w-[400px] md:min-h-[400px] max-w-[300px] min-h-[300px] p-4 text-white rounded-lg flex flex-col items-center justify-between">
              <div className="w-full h-[300px]">
                {/* <ModelCard model={<LiverCancerFinal scale={5} home={true}/>} /> */}
                {props.model}
              </div>
              <h1 className="font-bold text-xl md:text-2xl text-center mt-4">
                {/* Cancer Liver */}
                {props.title}
              </h1>
              <NavLink className="mt-4 mb-4" to={props.path}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="40"
                  height="40"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="lucide lucide-circle-chevron-right-icon lucide-circle-chevron-right"
                >
                  <circle cx="12" cy="12" r="10" />
                  <path d="m10 8 4 4-4 4" />
                </svg>
              </NavLink>
            </div>
  )
}

export default GenericHomeCard