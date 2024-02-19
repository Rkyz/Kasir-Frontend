

// eslint-disable-next-line react/prop-types
const Backoffline = ({closeToggle,offlineStatus}) => {
  return (
    <>
   {closeToggle && !offlineStatus && (
             <div className="w-full h-full bg-black bg-opacity-30 sm:hidden fixed z-[30]"/>
        )}
    </>
  )
}

export default Backoffline