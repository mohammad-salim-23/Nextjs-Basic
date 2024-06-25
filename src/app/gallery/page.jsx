import Image from 'next/image';
import React from 'react';

const page = () => {
    return (
        <div className='min-h-screen px-12 py-12'>
            <h6 className="text-3xl mb-12">Gallery Page</h6>
            <div>
                {
                    [1,2,3,4,5]?.map((img)=>(
                        <Image key={img} src={`/images/${img}.jpg`} 
                        alt=""
                        height="1060" width="1920"></Image>
                    ))
                }
            </div>
            
        </div>
    );
};

export default page;