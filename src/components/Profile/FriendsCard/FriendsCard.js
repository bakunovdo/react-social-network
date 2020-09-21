import React from 'react';

const FriendsCard = () => (

    <div className="friends card">
        <div className="card__title">
            <h4>Friends</h4>
        </div>

        <div className="friends_items">
            <div className="item">
                <div className="person_image">
                    <img src="https://picsum.photos/50" alt=""/>
                </div>
                <p className="name">Full Name</p>
            </div>
            <div className="item">
                <div className="person_image">
                    <img src="https://picsum.photos/51" alt=""/>
                </div>
                <p className="name">Full Name</p>
            </div>
            <div className="item">
                <div className="person_image">
                    <img src="https://picsum.photos/52" alt=""/>
                </div>
                <p className="name">Full Name</p>
            </div>
            <div className="item">
                <div className="person_image">
                    <img src="https://picsum.photos/53" alt=""/>
                </div>
                <p className="name">Full Name</p>
            </div>
            <div className="item">
                <div className="person_image">
                    <img src="https://picsum.photos/54" alt=""/>
                </div>
                <p className="name">Full Name</p>
            </div>
            <div className="item">
                <div className="person_image">
                    <img src="https://picsum.photos/55" alt=""/>
                </div>
                <p className="name">Full Name</p>
            </div>
        </div>
    </div>
);

export default FriendsCard;