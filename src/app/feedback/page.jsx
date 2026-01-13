import { getHotelData } from '@/actions/server/getData';
import ContentFeedback from '@/componets/Feedback/ContentFeedBack';
import React from 'react';

const Feedbackpage = async () => {
   

    
    return (
        <div className=" pt-20">
            <ContentFeedback/>
        </div>
    );
};

export default Feedbackpage;