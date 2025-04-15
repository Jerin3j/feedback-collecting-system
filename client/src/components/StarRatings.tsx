import { Star } from 'lucide-react'

export const StarRatings = ({rating}: {rating: number}) => {
  return (
    <div className='flex'>
        {[1,2,3,4,5].map((star)=> (
            star <= rating ? (
                <Star key={star} className='fill-yellow-500'/>
            ) : (
                <Star key={star} className='fill-gray-50'/>
            )
        ))}
    </div>
  )
}
