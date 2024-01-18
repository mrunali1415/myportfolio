import React from "react";
import "./testimonials.css";
import { Swiper, SwiperSlide } from "swiper/react";
//import SwiperCore from 'swiper/core';
//import 'swiper/css/pagination';
//import 'swiper/css';
//import 'swiper/swiper.min.css';
//import 'swiper/components/pagination/pagination.min.css';
import Profilepic1 from "../../img/profile1.jpg";
import Profilepic2 from "../../img/profile2.jpg";
import Profilepic3 from "../../img/profile3.jpg";
import Profilepic4 from "../../img/profile4.jpg";

//import { Pagination } from 'swiper'; // Adjust the import statement
//SwiperCore.use([Pagination]); // Initialize Swiper pagination module

function Testimonials() {
  // array of clients
  const clients = [
    {
      img: Profilepic1,
      review:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Non veritatis, voluptatem dolore ea rerum saepe possimus quisquam sunt velit libero hic itaque? Accusantium est voluptate eius id sapiente eaque at.",
    },
    {
      img: Profilepic2,
      review:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Non veritatis, voluptatem dolore ea rerum saepe possimus quisquam sunt velit libero hic itaque? Accusantium est voluptate eius id sapiente eaque at.",
    },
    {
      img: Profilepic3,
      review:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Non veritatis, voluptatem dolore ea rerum saepe possimus quisquam sunt velit libero hic itaque? Accusantium est voluptate eius id sapiente eaque at.",
    },
    {
      img: Profilepic4,
      review:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Non veritatis, voluptatem dolore ea rerum saepe possimus quisquam sunt velit libero hic itaque? Accusantium est voluptate eius id sapiente eaque at.",
    },
    // Add other client objects here
  ];

  return (
    <div className="t-wrapper" id="Testimonials">
      <div className="t-heading">
        <span>Clients always get</span>
        <span>Exceptional Work</span>
        <span>From Me...</span>
        <div
          className="blur t-blur1"
          style={{ background: "var(--purple)" }}
        ></div>
        <div className="blur t-blur2" style={{ background: "skyblue" }}></div>
      </div>
      {/* slider */}
      <Swiper
        // modules={[pagination]}
        spaceBetween={30}
        slidesPerView={1}
        pagination={{
          el: ".swiper-pagination",
          clickable: true,
        }}
      >
        {clients.map((client, index) => {
          return (
            <SwiperSlide key={index}>
              <div className="testimonial">
                <img src={client.img} alt="" />
                <span>{client.review}</span>
              </div>
            </SwiperSlide>
          );
        })}
        ;
      </Swiper>
    </div>
  );
}

export default Testimonials;
