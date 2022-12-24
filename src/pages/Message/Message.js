import { chat_new_line, more_2_line, search_2_line } from "../../svg/message";

const Message = () => {
  return (
    <div className="my-5 mx-10">
      <div className="w-full h-[calc(100vh-120px)] bg-white rounded-2xl overflow-hidden flex">
        <div className="w-[320px] flex-none h-full">
          <div className="py-3 px-4 flex justify-between items-center">
            <span className="rounded-full w-10 h-10 bg-slate-500"></span>
            <div className="flex items-center">
              <span className="cursor-pointer">{chat_new_line}</span>
              <span className="ml-3 cursor-pointer">{more_2_line}</span>
            </div>
          </div>
          <div className="pt-3 px-4 pb-6 border-b border-Neutral/03">
            <label className="relative">
              <input
                className="w-full rounded-lg border border-Neutral/03 h-10 outline-none pl-3 pr-11 font-nunito_sans"
                placeholder="Search"
                type="text"
              />
              <span className="absolute -top-0.5 right-3">{search_2_line}</span>
            </label>
          </div>
          <div className="h-[calc(100vh-261px)] flex flex-col overflow-y-auto">
            <div className="py-3 px-6 text-2xl leading-8 font-nunito">
              Messages
            </div>
            {[true, false, false].map((item) => {
              return (
                <div className="group pt-0.5 pb-[1px] bg-gradient-to-r hover:from-[#feb842] via-white to-white">
                  <div className={`flex px-6 py-3 cursor-pointer bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 group-hover:from-[#FCF9EF] items-center ${item ? "bg-Neutral/02" : ""}`}>
                  <span className="w-12 h-12 flex-none rounded-full bg-slate-500 mr-2"></span>
                  <span className="flex-grow">
                    <div className="flex justify-between items-center text-Neutral/05">
                      <span className="font-nunito text-base font-semibold">
                        Lara Mueller
                      </span>
                      <span className="font-nunito_sans text-xs">17:33</span>
                    </div>
                    <div className="font-nunito text-Neutral/04 text-sm">
                      Makes to a illustrated on all and...
                    </div>
                  </span>
                </div>
                </div>
                
              );
            })}
          </div>
        </div>
        <div className="flex-grow h-full bg-slate-600"></div>
      </div>
    </div>
  );
};

export default Message;
