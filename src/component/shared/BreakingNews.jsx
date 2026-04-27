import React from 'react';
import Marquee from 'react-fast-marquee';

const news = [
    {
      "id": 1,
      "title": "Massive Storm Approaches East Coast",
      "timestamp": "2026-04-25T08:30:00Z",
      "category": "Weather"
    },
    {
      "id": 2,
      "title": "Tech Giant Announces Revolutionary AI Chip",
      "timestamp": "2026-04-25T09:15:00Z",
      "category": "Technology"
    },
    {
      "id": 3,
      "title": "Global Markets Surge After Trade Agreement",
      "timestamp": "2026-04-25T10:00:00Z",
      "category": "Business"
    },
    {
      "id": 4,
      "title": "Historic Peace Treaty Signed in Middle East",
      "timestamp": "2026-04-25T11:45:00Z",
      "category": "World"
    },
    {
      "id": 5,
      "title": "Breakthrough in Cancer Research Announced",
      "timestamp": "2026-04-25T12:20:00Z",
      "category": "Health"
    }
  ]

const BreakingNews = () => {
    return (
        <div className='flex justify-center items-center gap-2 bg-gray-300 p-2 container mx-auto'>
            <button className='btn bg-pink-600'>Latest</button>
            <Marquee pauseOnHover={true} speed={100} >
                {
                    news.map(ele => {
                        return <div key={ele.id} className="">
                            <span className='font-bold mx-5'>{ele.category}:</span>
                            <span>{ele.title}</span>
                        </div>
                    })
                }
            </Marquee>
        </div>
    );
};

export default BreakingNews;