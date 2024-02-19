import Icon from "../../../utils/Icon"


// eslint-disable-next-line react/prop-types
const Offline = ({offlineStatus}) => {
  return (
    <>
    {offlineStatus && (
         <div className="bg-black w-full h-screen flex-col pt-[64px] bg-opacity-50 backdrop-blur-sm fixed z-[45] text-neutral-100 flex items-center justify-center text-[30px] font-Roboto font-bold capitalize">
         <Icon name="RiWifiOffLine" className="text-[50px]"/>
         <div className="flex items-center gap-[10px]">
             <p>you are offline</p>
             <div className="loader"/>
         </div>
        </div>
        )}
    </>
  )
}

export default Offline