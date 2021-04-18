import React, { useEffect, useState } from 'react';
import Review from '../../Review/Review';
const Reviews = () => {
    const [reviews, setReviews] = useState([])
    useEffect( () => {
        fetch('https://calm-reaches-86971.herokuapp.com/reviews')
        .then(res => res.json())
        .then(data => setReviews(data))
    }, [])
    console.log('reviews',reviews)

    return (
        <section className="container mt-5" id="review">
             <h3 className="text-center text-danger mb-5 head3">Our Customers</h3>
                <div className="row container-fluid">
                    {
                     reviews.map(review => <Review review={review}></Review>)
                    }
                    
                </div>
        </section>
    );
};

export default Reviews;