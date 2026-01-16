import { getHotelData } from '@/actions/server/getData';
import ContentFeedback from '@/componets/Feedback/ContentFeedBack';
import React from 'react';

const Feedbackpage = async () => {
   

    
    return (
        <div className="min-h-screen bg-slate-50 pt-32 pb-16">
            <ContentFeedback/>
        </div>
    );
};

export default Feedbackpage;
