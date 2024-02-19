import { useState } from 'react';
import { deleteProduk, editProduk } from '../../../services/produk.service';
import Swal from 'sweetalert2';
import PropTypes from 'prop-types'; // Import PropTypes

const Table = ({ produkData }) => {
    const [editingId, setEditingId] = useState(null);
    const [editData, setEditData] = useState({
        NamaProduk: '',
        Harga: '',
        Stok: ''
    });

    const handleEdit = (id) => {
        setEditingId(id);
        const produk = produkData.find(produk => produk.id === id);
        setEditData({
            NamaProduk: produk.NamaProduk,
            Harga: produk.Harga,
            Stok: produk.Stok
        });
    };

    const handleEditChange = (e) => {
        const { name, value } = e.target;
        setEditData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleEditSubmit = async () => {
        try {
    
            const updatedData = {
                NamaProduk: editData.NamaProduk,
                Harga: editData.Harga,
                Stok: editData.Stok
            };
            const response = await editProduk(editingId, updatedData);
            console.log('Produk berhasil diperbarui:', response);
            setEditingId(null);
            setEditData({
                NamaProduk: '',
                Harga: '',
                Stok: ''
            });
            window.location.reload();
        } catch (error) {
            console.error('Gagal memperbarui produk:', error);
        }
    };
    

    const handleDelete = async (id) => {
        try {
            const result = await Swal.fire({
                title: 'Are you sure?',
                text: 'You will not be able to recover this data!',
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#d33',
                cancelButtonColor: '#3085d6',
                confirmButtonText: 'Yes, delete it!'
            });
            if (result.isConfirmed) {
                const response = await deleteProduk(id);
                console.log('Produk berhasil dihapus:', response);
                Swal.fire('Deleted!', 'Your data has been deleted.', 'success').then(() => {
                    window.location.reload();
                });
            }
        } catch (error) {
            console.error('Gagal menghapus produk:', error);
        }
    };


    console.log(produkData)
    return (
        <table className="divide-y divide-gray-200">
            <thead>
                <tr>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Nama Produk
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Harga
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Stok
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Create At
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Actions
                    </th>
                </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
                {produkData && produkData.length > 0 ? (
                    produkData.map((produk, index) => (
                        <tr key={index}>
                            <td className="px-6 py-4 whitespace-nowrap">
                                <div className="flex items-center">
                                    <div className="flex-shrink-0 h-10 w-10">
                                        <img className="h-10 w-10 rounded-full" src="https://i.pravatar.cc/150?img=1" alt="" />
                                    </div>
                                    <div className="ml-4">
                                        <div className="text-sm font-medium text-gray-900">
                                                {produk.NamaProduk}
                                        </div>
                                        {/* <div className="text-sm text-gray-500">
                                            rioalamsyah@smkwikrama.sch.id
                                        </div> */}
                                    </div>
                                </div>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap">
                                {editingId === produk.id ? (
                                    <input
                                        type="text"
                                        name="Harga"
                                        value={editData.Harga}
                                        onChange={handleEditChange}
                                        className="border-b border-gray-400 focus:outline-none focus:border-indigo-500"
                                    />
                                ) : (
                                    <div className="text-sm text-gray-900">{produk.Harga}</div>
                                )}
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap">
                                {editingId === produk.id ? (
                                    <input
                                        type="number"
                                        name="Stok"
                                        value={editData.Stok}
                                        onChange={handleEditChange}
                                        className="border-b border-gray-400 focus:outline-none focus:border-indigo-500"
                                    />
                                ) : (
                                    <div className="text-sm text-gray-900">{produk.Stok}</div>
                                )}
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                {produk.created_at}
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                                {editingId === produk.id ? (
                                    <button onClick={handleEditSubmit} className="text-indigo-600 hover:text-indigo-900">Submit</button>
                                ) : (
                                    <>
                                        <button onClick={() => handleEdit(produk.id)} className="text-indigo-600 hover:text-indigo-900">Edit</button>
                                        <button onClick={() => handleDelete(produk.id)} className="ml-2 text-red-600 hover:text-red-900">Delete</button>
                                    </>
                                )}
                            </td>
                        </tr>
                    ))
                ) : (
                    <tr>
                        <td colSpan="5" className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 text-center">No data</td>
                    </tr>
                )}
            </tbody>
        </table>
    );
};

Table.propTypes = {
    produkData: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number.isRequired,
        NamaProduk: PropTypes.string.isRequired,
        Harga: PropTypes.number.isRequired,
        Stok: PropTypes.number.isRequired,
    })).isRequired,
};

export default Table;
