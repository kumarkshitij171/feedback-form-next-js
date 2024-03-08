import Safety from '@/components/Safety';
import Communication from '@/components/Communication';
import Opinion from '@/components/Opinion';
import Praise from '@/components/Praise';
import Review from '@/components/Review';
export default function Home() {
  return (
    <div>
        <h1 className="text-center mt-3 font-bold text-3xl mb-2">Leave a Review</h1>
      <Safety />
      <Communication />
      <Opinion />
      <Praise />
      <Review />
      <button
        className='bg-green-500 ml-5 px-3 py-1 mb-3 rounded-md text-lg'
        onClick={console.log('Thank you for your feedback!')}
      >Submit</button>
    </div>
  );
}
