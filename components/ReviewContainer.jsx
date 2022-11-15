import {useEffect, useRef, useState} from 'react'
import {TfiArrowCircleLeft, TfiArrowCircleRight} from "react-icons/tfi"
import ReviewCard from './ReviewCard'

const ReviewContainer = () => {

  const parentRef = useRef(null)
  const scrollRef = useRef(null)
  const [hideButtons, setHideButtons] = useState(false);

  const handleScroll = (direction) => {
    const { current } = scrollRef;

    const scrollAmount = window.innerWidth > 1800 ? 270 : 210;

    if (direction === 'left') {
      current.scrollLeft -= scrollAmount;
    } else {
      current.scrollLeft += scrollAmount;
    }
  };

  // check if scrollRef container is overfilling its parentRef container
  const isScrollable = () => {
    const { current } = scrollRef;
    const { current: parent } = parentRef;

    if (current?.scrollWidth >= parent?.offsetWidth) return setHideButtons(false);
    return setHideButtons(true);
  };

  // if window is resized
  useEffect(() => {
    isScrollable();
    window.addEventListener('resize', isScrollable);

    return () => {
      window.removeEventListener('resize', isScrollable);
    };
  });

  return (
      <div className={"flex flex-col p-8 px-16 bg-no-repeat bg-[url('https://cdn.shopify.com/s/files/1/0577/9675/5633/files/at_fashionstyle_h2-testi-bg.png?v=1656686396')] text-white w-full "}>
          <p className="text-2xl pt-10">What Customers Said About Us </p>
          <div className="flex pt-4 w-full justify-between pr-10">
            <p className="text-sm">We are very fortunate to have formed excellent partnerships with many of our clients.</p>
              <div className="flex gap-7 cursor-pointer text-4xl text-gray-200 "><TfiArrowCircleLeft onClick={() => handleScroll('left')}/><TfiArrowCircleRight onClick={() => handleScroll('right')}/>
              </div>
          </div>
      <div className="relative flex-1 max-w-full flex mt-3 scroll-smooth" ref={parentRef}>
        <div className="flex flex-row w-max overflow-x-scroll scroll-smooth no-scrollbar select-none gap-8 pl-4 flex-nowrap" ref={scrollRef} >
          {Array(6).fill(<ReviewCard />)}
        </div>
          </div>
      </div>
  )
}

export default ReviewContainer