import React from 'react'
import './testimonials.css'
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import AVTR1 from '../../assets/avatar1.jpg'
import AVTR2 from '../../assets/avatar2.jpg'
import AVTR3 from '../../assets/avatar3.jpg'
import AVTR4 from '../../assets/avatar4.jpg'

const data = [
  {
    avatar: AVTR1,
    name: 'Woman',
    review: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Animi, magni! Error nam soluta iure dolorem, ducimus distinctio reiciendis deserunt, suscipit laudantium et sunt quasi impedit accusamus architecto officia porro aspernatur.'
  },
  {
    avatar: AVTR2,
    name: 'MINA',
    review: 'asdmi, ur.'
  },
  {
    avatar: AVTR3,
    name: 'HOT CHICK',
    review: 'Lorem ipsum dolor soluta iure dolonctio reiciendis deserunt, suscipit laudantium et sunt quasi impedit accusamus architecto officia porro aspernatur.'
  },
  {
    avatar: AVTR4,
    name: 'HOT CHICK',
    review: 'Lorem ipsum dolor sit, ameorem ipsum dolor sit, ameoremLorem ipsum dolor sit, ameorem ipsum dolor sit, ameorem Lorem ipsum dolor sit, ameorem ipsum dolor sit, ameorem Lorem ipsum dolor sit, ameorem ipsum dolor sit, ameorem Lorem ipsum dolor sit, ameorem ipsum dolor sit, ameorem Lorem ipsum dolor sit, ameorem ipsum dolor sit, ameorem Lorem ipsum dolor sit, ameorem ipsum dolor sit, ameorem Lorem ipsum dolor sit, ameorem ipsum dolor sit, ameorem Lorem ipsum dolor sit, ameorem ipsum dolor sit, ameorem  ipsum dolor sit, ameorem ipsum dolor sit, ameorem ipsum dolor sit, ameorem ipsum dolor sit, ameorem ipsum dolor sit, ameorem ipsum dolor sit, ameorem ipsum dolor sit, ameorem ipsum dolor sit, ameorem ipsum dolor sit, ameorem ipsum dolor sit, amet consece dolorem, duciLorem ipsum dolor sit, amet consece dolorem, duciLorem ipsum dolor sit, amet consece dolorem, duciLorem ipsum dolor sit, amet consece dolorem, duciLorem ipsum dolor sit, amet consece dolorem, ducimus distinctio reiciendis deserunt, suscipit laudantium et sunt quasi impedit accusamus architecto officia porro aspernatur.'
  }
]

const Testimonials = () => {
  return (
    <section id='testimonials'>
      <h5>Review from clients</h5>
      <h2>Testimonials</h2>
      <Swiper spaceBetween={40} slidesPerView={1} pagination={{ clickable: true}} modules={[Pagination]} className="mySwiper container testimonials__container">
        {
          data.map(({ avatar, name, review }) => {
            return (
              <SwiperSlide className="testimonial">
                <div className="client__avatar">
                  <img src={avatar} />
                </div>
                <h5>{name}</h5>
                <small className="client__review">{review}</small>
              </SwiperSlide>
            )
          })
        }
      </Swiper>
    </section>
  )
}

export default Testimonials