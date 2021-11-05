import React from 'react';
import news1 from '../../../images/latestnews/lnews1.png'
import news2 from '../../../images/latestnews/lnews2.png'

const LatestNews = () => {
    return (
        <div className="container mb-5">
            <h1 className="text-center py-5 theme-color">Latest News</h1>

            <div class="row row-cols-1 row-cols-md-2 g-4">
                <div class="col">
                    <div class="card">
                    <img src={news1} class="card-img-top" alt="..."/>
                    <div class="card-body">
                        <h5 class="card-title">The Latest Rules of Delivery</h5>
                        <p class="card-text">This includes offering clear delivery service options on the website and acknowledgement of the order after purchase on screen and via email. Customers rely on updates and this highlights to them that a company cares about them receiving their delivery</p>
                    </div>
                    </div>
                </div>
                <div class="col">
                    <div class="card">
                    <img src={news2} class="card-img-top" alt="..."/>
                    <div class="card-body">
                        <h5 class="card-title">How we ensure perfect delevery</h5>
                        <p class="card-text">This includes offering clear delivery service options on the website and acknowledgement of the order after purchase on screen and via email. Customers rely on updates and this highlights to them that a company cares about them receiving their delivery</p>
                    </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default LatestNews;