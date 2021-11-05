import React, { useState } from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { faUser, faPhoneAlt, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons'



function Order(){

    const [orders, setOrders] = useState([
        {
            order_number: "BM-16ae54",
            name: "John Doe",
            phone: "07 01 02 03 04",
            address: "02 route Internet - web 5000",
            wilaya: "16 - Alger",
            barcode_content: null,
            status: "saved"
        }
    ]);

    return(
        <>
            <div className="border p-3 radius-lg">
                <div className="mb-1">
                    <FontAwesomeIcon className="me-3" icon={faUser}/>John Doe
                </div>
                <div className="mb-1">
                    <FontAwesomeIcon className="me-3" icon={faPhoneAlt}/>07 01 02 03 04
                </div>
                <div className="mb-1">
                    <FontAwesomeIcon className="me-3" icon={faMapMarkerAlt}/>02 route Internet - web 5000
                </div>
            </div>
        </>
    )
}

export default Order