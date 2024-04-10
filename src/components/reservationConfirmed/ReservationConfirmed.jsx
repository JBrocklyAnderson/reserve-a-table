import React from 'react';

const ReservationConfirmed = () => {
    return (
        <section>
            {/* SVG: green circle with a white checkmark to denote success */}
            <h2>SUCCESS!</h2>
            <p>Congratulations (name), you have successfully reserved a (dinging area) (type of seating) at the Little Lemon restaurant for (#) of guests at (time) on (date). (Message based on special occasion type)!</p>
        </section>
    );
}

export default ReservationConfirmed;