import React from 'react';
import info from './info.png';

const List = ({ list, tag }) => (
    <section className="List">
        <h1>Top {list.length} Global Crop <span>{tag}</span></h1>
        {list.map(el => (
            <article key={el.rank}>
                <span>{el.rank}</span>
                <h2>{el.name}</h2>
                <img src={info} alt="Info" />
            </article>
        ))}
    </section>
);

export default List;
