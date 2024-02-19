import { useState } from 'react';
import { deletePelanggan, editPelanggan } from '../../../services/pelanggan.service';
import Swal from 'sweetalert2';
import PelangganPropTypes from '../../../props/PelangganTypeData';


const Table = ({ pelangganData }) => {
    const [editingId, setEditingId] = useState(null);
    const [editData, setEditData] = useState({
        Alamat: '',
        NomorTelepon: ''
    });

    const handleEdit = (id) => {
        setEditingId(id);
        const pelanggan = pelangganData.find(pelanggan => pelanggan.id === id);
        setEditData({
            Alamat: pelanggan.Alamat,
            NomorTelepon: pelanggan.NomorTelepon
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
            if (!editData.NomorTelepon) {
                throw new Error('Nomor telepon harus diisi');
            }
    
            const updatedData = {
                Alamat: editData.Alamat,
                NomorTelepon: editData.NomorTelepon
            };
            const response = await editPelanggan(editingId, updatedData);
            console.log('Pelanggan berhasil diperbarui:', response);
            setEditingId(null);
            setEditData({
                Alamat: '',
                NomorTelepon: ''
            });
            window.location.reload();
        } catch (error) {
            console.error('Gagal memperbarui pelanggan:', error.message);
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
                const response = await deletePelanggan(id);
                console.log('Pelanggan berhasil dihapus:', response);
                Swal.fire('Deleted!', 'Your data has been deleted.', 'success').then(() => {
                    window.location.reload();
                });
            }
        } catch (error) {
            console.error('Gagal menghapus pelanggan:', error);
        }
    };

    return (
        <table className="divide-y divide-gray-200">
            <thead>
                <tr>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Customer
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Alamat
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Telepon
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
                {pelangganData && pelangganData.length > 0 ? (
                    pelangganData.map((pelanggan, index) => (
                        <tr key={index}>
                            <td className="px-6 py-4 whitespace-nowrap">
                                <div className="flex items-center">
                                    <div className="flex-shrink-0 h-10 w-10">
                                        <img className="h-10 w-10 rounded-full" src="https://i.pravatar.cc/150?img=1" alt="" />
                                    </div>
                                    <div className="ml-4">
                                        <div className="text-sm font-medium text-gray-900">
                                                {pelanggan.Nama}
                                        </div>
                                    </div>
                                </div>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap">
                                {editingId === pelanggan.id ? (
                                    <input
                                        type="text"
                                        name="Alamat"
                                        value={editData.Alamat}
                                        onChange={handleEditChange}
                                        className="border-b border-gray-400 focus:outline-none focus:border-indigo-500"
                                    />
                                ) : (
                                    <div className="text-sm text-gray-900">{pelanggan.Alamat}</div>
                                )}
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap">
                                {editingId === pelanggan.id ? (
                                    <input
                                        type="number"
                                        name="NomorTelepon"
                                        value={editData.NomorTelepon}
                                        onChange={handleEditChange}
                                        className="border-b border-gray-400 focus:outline-none focus:border-indigo-500"
                                    />
                                ) : (
                                    <div className="text-sm text-gray-900">{pelanggan.NomorTelepon}</div>
                                )}
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                {pelanggan.Date}
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                                {editingId === pelanggan.id ? (
                                    <button onClick={handleEditSubmit} className="text-indigo-600 hover:text-indigo-900">Submit</button>
                                ) : (
                                    <>
                                        <button onClick={() => handleEdit(pelanggan.id)} className="text-indigo-600 hover:text-indigo-900">Edit</button>
                                        <button onClick={() => handleDelete(pelanggan.id)} className="ml-2 text-red-600 hover:text-red-900">Delete</button>
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
    pelangganData: PelangganPropTypes
};



export default Table;
