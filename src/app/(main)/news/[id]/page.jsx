import RightSideBar from '@/component/HomePage/News/RightSideBar';
import { getNewsDetailsById } from '@/lib/data';
import Image from 'next/image';
import Link from 'next/link';
import { CiBookmarkPlus, CiShare2 } from 'react-icons/ci';
import { FaArrowLeftLong } from 'react-icons/fa6';
import { IoMdEye } from 'react-icons/io';
import { IoStar } from 'react-icons/io5';

export const generateMetadata = async ({params}) => {
    const {id} = await params
    console.log(id);
    const news = await getNewsDetailsById(id)
    console.log(news);
    return {
        title: news.title ,
        description: news.details,
    }
    
}




const page = async({params}) => {
    const {id} = await params
    // console.log(id);
    const news = await getNewsDetailsById(id)
    // console.log(news);
    return (
        <div className='container grid grid-cols-8 gap-5 mt-8 mx-auto'>
           <div className="col-span-6 card bg-base-100 shadow-sm">
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
                         <hr className='opacity-20 my-2'></hr>
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
                            <hr className='opacity-20 mt-2'></hr>
                       </div>
                       <div className="card-body">
                           <h2 className="card-title">{news.title}</h2>
                           <figure>
                           <Image src={news.image_url} alt={news.title} width={300} height={300} className='w-full' ></Image>
                       </figure>
                           <p className='' >{news.details}</p>
           
                           <Link href={`/categories/${news.category_id}`} ><button className='btn'><FaArrowLeftLong /> All news in this category</button></Link>
           
                           
           
                       </div>
                       
                       </div>
            <div className="col-span-2">
                <RightSideBar></RightSideBar>
            </div>
        </div>
    );
};

export default page;