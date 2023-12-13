export function CardResumo(){
    return (
        <div className="w-full h-fit flex min-w-[200px] gap-5">
          <div className="bg-blackCustum01 w-full h-fit rounded-lg p-4 flex items-center gap-2 drop-shadow-md">
              <div className="bg-orange-600 h-12 w-12 rounded-lg">

              </div>
              <div>
                <p className="text-whitecustom text-sm font-semibold">
                  Saldo bancario
                </p>
                <h2 className="text-white font-semibold text-xl">
                  R$ 1.147,21
                </h2>
              </div>
          </div>
        </div>
    )
}