// File: PelangganPropTypes.js

import PropTypes from 'prop-types';

const PelangganPropTypes = PropTypes.arrayOf(
    PropTypes.shape({
        id: PropTypes.number.isRequired,
        Nama: PropTypes.string.isRequired,
        Alamat: PropTypes.string.isRequired,
        NomorTelepon: PropTypes.number.isRequired,
        Date: PropTypes.string.isRequired,
    })
);

export default PelangganPropTypes;
