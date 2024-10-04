import React from 'react'
import DataTable from './DataTable'
import ModalComponent from './ModalComponent';
import { useState } from 'react';

const AdminProduct = () => {
  
  const [open, setOpen] = useState(false);

  return (
    <div>
      <div className='flex justify-end m-5'>
        <div><button className='my-6 p-2 py-1 border-2 border-black' onClick={()=>{setOpen(true)}}>Add Products</button></div>
      </div>
      <DataTable />
      <ModalComponent open={open} setOpen={setOpen}/>
    </div>
  )
}

export default AdminProduct
