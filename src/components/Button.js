import React from 'react'

import React from 'react';
import './Products.js';

export default function Button(){
    const loadMore = (itemsPerPage) => {
        {items.map((item) => {
            if (itemCount < itemsPerPage){
                itemCount++;
                const itemsPerPage =5;
                let itemCount =0;
            }

            return(
                <div className='Products'>
                    <button onClick ={loadMore}>Next</button>
                </div>
            )
        })}
    }
}
