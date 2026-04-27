import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { CiBookmarkPlus, CiShare2 } from 'react-icons/ci';
import { FaMarkdown } from 'react-icons/fa';
import { IoMdEye } from 'react-icons/io';
import { IoStar } from 'react-icons/io5';

const NewsCard = ({news}) => {
    return (
        <div>
            <div className="card bg-base-100 shadow-sm">
            <div className=" flex  justify-between items-center gap-3 bg-slate-300 p-1">
                <div className="flex gap-2">
                    <Image src={news.author?.img}  alt={news.author?.name} width={40} height={40} className='rounded-full' />
                    <div className="">
                        <h2 className='font-semibold'>{news.author?.name}</h2>
                        <h2 className='text-xs opacity-70'>{news.author?.published_date}</h2>
                    </div>
                </div>
                <div className="flex gap-2">
                    <CiShare2 />
                    <CiBookmarkPlus />
                </div>
            </div>
            <div className="card-body">
                <h2 className="card-title">{news.title}</h2>
                <figure>
                <Image src={news.image_url} alt={news.title} width={300} height={300} className='w-full' ></Image>
            </figure>
                <p className='line-clamp-3' >{news.details}</p>

                <Link href={`/news/${news._id}`} ><button className='btn'>Read More</button></Link>

                <hr className='opacity-20 my-1'></hr>
                <div className="flex justify-between">
                    <div className="flex justify-center items-center gap-1">
                        <IoStar className='text-yellow-500'></IoStar>
                        <IoStar className='text-yellow-500'></IoStar>
                        <IoStar className='text-yellow-500'></IoStar>
                        <p>{news.rating.number}</p>
                        <p className='badge bg-cyan-300'>{news.rating.badge}</p>
                    </div>
                    <div className="flex items-center gap-1">
                        <IoMdEye />
                        <p>{news.total_view}</p>
                    </div>
                </div>

            </div>
            
            </div>
        </div>
    );
};

export default NewsCard;