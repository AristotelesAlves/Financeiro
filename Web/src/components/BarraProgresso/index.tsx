interface props{
    width: number
}

export function BarraProgresso({width} : props){
    return (
        <div className="relative pt-1">
            <div className="flex mb-2 items-center justify-between ">
              <div className="w-full">
                <div className="shadow w-full bg-orange-200 mt-2 rounded-md">
                  <div
                    className="bg-orange-600 text-xs leading-none py-1 text-center rounded-md text-white"
                    style={{ width: `${width}%` }}
                  >
                    {`${width}%`}
                  </div>
                </div>
              </div>
            </div>
        </div>
    )
}