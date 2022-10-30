import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import './LeftSideNav.css';
const LeftSideNav = () => {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        fetch('https://quick-learn-server-2.vercel.app/course-categories')
            .then(res => res.json())
            .then(data => setCategories(data));
    }, [])

    return (
        <div className='with-all'>
            <h4>All Category: {categories.length}</h4>
            <div className='without-all'>
                {
                    categories.map(category => <p key={category.id}>
                        <NavLink to={`/category/${category.id}`}><span className='name'>{category.name}</span> </NavLink>
                    </p>)
                }
            </div>
        </div>
    );
};

export default LeftSideNav;