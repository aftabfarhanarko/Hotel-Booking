import { getHotelData } from '@/actions/server/getData';
import NewOffer from '@/componets/offer/NewOffer';
import React from 'react';

const Offerspage = async () => {
     const  data  = await getHotelData();
    console.log( "This is Da",data);
    return (
        <div>
            <NewOffer data={data}/>
        </div>
    );
};

export default Offerspage;