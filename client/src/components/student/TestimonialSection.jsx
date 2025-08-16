import { assets, dummyTestimonial } from "../../assets/assets"

const TestimonialSection = () => {
  return (
    <div className="pb-14 px-8 md:px-0">
      <h2 className="text-3xl font-medium text-gray-800">Testimonials</h2>
      <p className="text-sm md:text-base text-gray-500 mt-3">Here from our learners as they share their journeys of transformation,
        success, and how our <br/> platform has made a difference in their lives
      </p>
      <div className="grid grid-cols-auto gap-8 mt-14">
        {dummyTestimonial.map((Testimonial, index)=>(
          <div key={index} className="text-sm text-left overflow-hidden shadow-black/5 shadow-[0px_4px_15px_0px] rounded-lg bg-white border border-gray-500/30 pb-6">
            <div className="flex items-center gap-4 px-5 py-4 bg-gray-500/10">
              <img className="h-12 w-12 rounded-full" src={Testimonial.image} alt={Testimonial.name} />
              <div>
                <h1 className="text-lg font-medium text-gray-800">{Testimonial.name}</h1>
                <p className="text-gray-800/80">{Testimonial.role}</p>
              </div>
            </div>
            <div className="p-5 pb-7">
              <div className="flex gap-0.5">
                {
                  [...Array(5)].map((_, i)=> (
                    <img key={i} src={i<Math.floor(Testimonial.rating) ? assets.star : assets.star_blank} alt="star" className="h-5" />
                  ))
                }
              </div>
              <p className="text-gray-500 mt-5">{Testimonial.feedback}</p>
            </div>
            <a href="#" className="text-blue-500 underline px-5">Read more</a>
          </div>
        ))}
      </div>
    </div>
  )
}

export default TestimonialSection
