"use client";

import NavbarComponent from "../../../components/NavbarComponent";
import FooterComponent from "../../../components/FooterComponent";
import { Collapse } from "antd";
import ScrollCarousel from "scroll-carousel-react";
import CardTeamWeb from "../../../components/CardTeanWeb";
import CardTeamMobile from "../../../components/CardTeamMobile";

const items = [
  {
    key: "1",
    label: "Apa itu Smart Recycling?",
    children: (
      <p>{`Inovasi terdepan yang memberikan solusi berkelanjutan untuk keberlanjutan digital. Dengan memanfaatkan prinsip daur ulang, kami memberikan pengalaman online yang ramah lingkungan tanpa mengorbankan kualitas dan fungsionalitas.`}</p>
    ),
  },
  {
    key: "2",
    label: "Bagaimana cara menukarkan points?",
    children: <p>{`Anda dapat menukarkan pada halaman Services > Exchange Points.`}</p>,
  },
  {
    key: "3",
    label: "Apakah bisa membeli points menggunakan uang?",
    children: <p>{`Anda hanya bisa mendapatkan points dengan cara membuang sampah menggunakan fasilitas kami.`}</p>,
  },
  {
    key: "4",
    label: "Apakah bisa membeli points menggunakan uang?",
    children: <p>{`Anda hanya bisa mendapatkan points dengan cara membuang sampah menggunakan fasilitas kami.`}</p>,
  },
  {
    key: "5",
    label: "Apakah bisa membeli points menggunakan uang?",
    children: <p>{`Anda hanya bisa mendapatkan points dengan cara membuang sampah menggunakan fasilitas kami.`}</p>,
  },
];

export default function AboutPage() {
  return (
    <>
      <NavbarComponent />
      <div className="container mx-auto mt-10 pt-20">
        <p className="font-extrabold text-6xl text-center text-primary">About Us</p>
        <p className="font-normal text-center mt-5 text-textColor text-xl mx-10">
          At Smart Recycling, we are passionate about promoting a sustainable future and making recycling an effortless part of your daily routine. Our mission is simple yet impactful: to inspire, educate, and empower individuals and
          businesses to embrace recycling practices that benefit both our environment and our communities.
        </p>
      </div>

      <ScrollCarousel autoplay autoplaySpeed={1} speed={7} className="container mx-auto pt-5">
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11].map((item) => (
          <div key={item} className="bg-green-300/20 border-2 border-green-300/70 rounded">
            {/* {item} */}
            <img src="/illustration.png" alt="Carousel" />
          </div>
        ))}
      </ScrollCarousel>

      <div className="container mx-auto px-5 my-5">
        <p className="font-bold text-4xl text-center text-textColor pb-5">Frequently Asked Questions</p>
        <Collapse accordion items={items} className="font-normal text-textColor text-lg" />
      </div>

      <div className="container mx-auto flex justify-center mt-10">
        <p className="font-bold text-4xl text-center text-textColor">Our Website Team</p>
      </div>
      <CardTeamWeb />

      <div className="container mx-auto flex justify-center mt-10">
        <p className="font-bold text-4xl text-center text-textColor">Our Mobile Team</p>
      </div>
      <CardTeamMobile />

      <FooterComponent />
    </>
  );
}