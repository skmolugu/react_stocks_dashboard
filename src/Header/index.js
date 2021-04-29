import React from 'react';
import {Link} from 'react-router-dom';
export default function Header() {
    return (
        <div class="d-flex flex-column flex-md-row align-items-center p-3 px-md-4 mb-3 bg-white border-bottom shadow-sm">
            <h5 class="my-0 mr-md-auto font-weight-normal">Portfolio Dashboard</h5>
            <nav class="my-2 my-md-0 mr-md-3">
                <Link class="p-2 text-dark" to="/create-portfolio">Create Portfolio</Link>
                <Link class="p-2 text-dark" to="/view-portfolio">View Portfolios</Link>
                <Link class="p-2 text-dark" to="/add-share">Add Share</Link>
                <a class="p-2 text-dark" href="#">Pricing</a>
            </nav>
        </div>
    )
}