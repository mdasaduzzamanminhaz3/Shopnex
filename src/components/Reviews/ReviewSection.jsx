import React from 'react';
import StarRating from './StarRating';
import ReviewForm from './ReviewForm';

const ReviewSection = () => {
    const onSubmit = (data) => {
        console.log(data);
    }
    return (
        <div>
            <ReviewForm onSubmit={onSubmit}/>
        </div>
    );
};

export default ReviewSection;