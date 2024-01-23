
export default function Banner(props) {
  return (
    <>
        <div className='gradientBg rounded-xl rounded-br-[80px] md:p-9 px-4 py-9'>  
             <div className='flex flex-col md:flex-row-reverse justify-between items-center gap-10'>
              {/* banner image */}
                <div>
                    <img src={props.banner} alt="" className='lg:h-[386px]' />
                </div>
                {/* banner contents */}
                <div className="md:w-3/6">
                    <h2 className='md:text-7xl font-bold text-white mb-6 leading-relaxed'>{props.heading}</h2>
                     <p className='text-[#EBEBEB] text-xl mb-8'>{props.subheading} </p>
                    <div className='space-x-5 space-y-5'>
                          <button className='btnPrimary'>{props.btn1}</button>
                          <button className='btnPrimary'> {props.btn2}</button>
                    </div>
                </div>
            </div>
         </div>
    </>
  )
}
