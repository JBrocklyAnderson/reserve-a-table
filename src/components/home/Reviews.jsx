import Review from './Review';
import styles from './Reviews.module.css';

const reviewList = [
    {
        reviewer: 'Sara L.',
        rating: 5,
        comment: 'The caprese salad had the freshest mozzarella I’ve ever tasted. Simply refreshing!',
    },
    {
        reviewer: 'John D.',
        rating: 5,
        comment: 'Absolutely loved the seared salmon. It was cooked to perfection and the skin was delightfully crispy.',
    },
    {
        reviewer: 'Nina P.',
        rating: 5,
        comment: 'The Bruschetta is a blast of flavor. Loved the tomato-basil topping. Great starter!',
    },
    {
        reviewer: 'Maya E.',
        rating: 5,
        comment: 'The ambiance here is lovely. They always play beautiful music to accompany delicious dishes and responsive service.',
    },
    {
        reviewer: 'Mike C.',
        rating: 5,
        comment: 'Their pampanella molisana is a hidden gem. The spices were spot on and the meat was incredibly tender.',
    },
    {
        reviewer: 'Emma Q.',
        rating: 5,
        comment: 'The whole restaurant is beautiful. You can tell the architect knew exactly the caliber restaurant Little Lemon turned out to be.',
    },
    {
        reviewer: 'David T.',
        rating: 5,
        comment: 'Ended my meal with the Chocolate Tiramisu and it was exquisite. The perfect balance of cocoa and espresso.',
    }
];

const Reviews = () => {
    return (
        <section className={styles.layout}>
            <div>
                {reviewList.map(review => {
                    return <Review key={review.reviewer} data={review} />
                })}
            </div>
        </section>
    );
}

export default Reviews;