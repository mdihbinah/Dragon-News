import LeftSideBar from '@/component/HomePage/News/LeftSideBar';
import RightSideBar from '@/component/HomePage/News/RightSideBar';
import NewsCard from '@/component/HomePage/News/NewsCard';
import { getCategories, getNewsByCategoryId } from '@/lib/data';




const page = async({params}) => {
    const {id} = await params
    console.log(id, 'params');

    const categories = await getCategories()
  // console.log(categories)
  
  const news = await getNewsByCategoryId(id)
  console.log(news)
  
    return (
        <div className="container mx-auto grid grid-cols-4 gap-5 my-10">
      <div className="col-span-1 p-3 ">
       <LeftSideBar categories={categories} activeId={id}></LeftSideBar>
       </div>
       <div className=" p-2 bg-yellow-200 col-span-2">
        <h1 className='font-bold text-2xl'>News by category</h1>
        <div className="mt-5 space-y-5">
                { news.length > 0 ?
            news.map(ele => {
                return <NewsCard news={ele} key={ele._id} >
                </NewsCard>
            }) : <h1 className='font-bold text-4xl my-7 '>No news found.</h1>
            }
        </div>
       </div>
       <div className="font-bold text-xl col-span-1">
        <RightSideBar></RightSideBar>
       </div>
    </div>
    );
};

export default page;