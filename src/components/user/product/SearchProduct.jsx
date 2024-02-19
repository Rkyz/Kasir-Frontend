import PropTypes from 'prop-types';

const SearchCustomer = ({ offlineStatus }) => {

  return (
    <div className={`w-full bg-Gray md:relative flex h-full rounded-lg ${offlineStatus ? '' : 'z-[10]'}`}>
      <input 
        type="text" 
        placeholder='Search customers...' 
        className="bg-transparent outline-none w-full p-[10px] placeholder:capitalize placeholder:text-black"
      />
   
    </div>
  );
}

SearchCustomer.propTypes = {
  offlineStatus: PropTypes.bool 
};

export default SearchCustomer;
