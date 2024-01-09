import React from "react";
import "./Header.css";
import ray from "../assets/w1.jpg";
import './responsive.css'
import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaGooglePlus,
} from "react-icons/fa";
const Hero = () => {
  return (
    <section className="blog-sec">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="blog-box2">
              <div className="blo-img">
                <img
                  className="img-responsive"
                  src="https://wallpapercave.com/wp/wp6728458.jpg"
                  alt=""
                />
              </div>
              <div className="blog-dtl-txt">
              <div className="event-sechudle">
              {/* Desktop view */}
              <div className="date bg-sky-blue d-none d-md-block">
                <h4>
                  Born <span>2 May</span> <span>1921</span>
                </h4>
              </div>
              <div className="date bg-sky-blue ray-life d-none d-md-block">
                <h4>
                  Died <span>23 April</span> <span>1992</span>
                </h4>
              </div>
              <h3 className="ray-heading d-none d-md-block">
                Genius of Ray. Satyajit Ray —{" "}
                <span>the creative genius</span>
              </h3>

              {/* Mobile view */}
              <div className="ray-heading d-block d-md-none">
                <h3 className="mob-heading">
                  Genius of Ray. Satyajit Ray —{" "}
                  <span>the creative genius</span>
                </h3>
                <div className="life-span d-md-none" style={{marginLeft:'6%'}}>
                <div className="date bg-sky-blue d-block ">
                <h4>
                  Born <span>2 May</span> <span>1921</span>
                </h4>
              </div>
                <div className="date bg-sky-blue">
                  <h4>
                    Died <span>23 April</span> <span>1992</span>
                  </h4>
                </div>
                </div>
              </div>
            </div>
                <p>
                  In addition to being recognised as one of the all-time great
                  film directors, Satyajit Ray was arguably one of the most
                  versatile creative geniuses of Bengal, if not India, in modern
                  times. He received many coveted awards like the Bharat Ratna,
                  Honorary Oscar (for lifetime achievement), Legion d’ Honor
                  (the highest civilian award in France) and the Kurosawa Award
                  (for lifetime achievement as a film director), apart from
                  numerous others at international film festivals. Kurosawa, one
                  of the greatest film makers, made the remark that a person who
                  has not watched a Ray movie is like one not knowing the sun
                  and the moon. Like Rabindranath Tagore, Ray was much more
                  appreciated abroad than in India (excepting Bengal), the main
                  reason being that all (except one or two in Hindi and English)
                  of his films were in Bengali. This restricted its commercial
                  showing in other parts of India, except in select film society
                  circles. Within India, he basically remained a ‘Director’s
                  director’, inspiring several generations of Indian ‘art’ or
                  ‘parallel’ film-makers like Shyam Benegal and Adoor
                  Gopalakrishnan. However, film buffs of the West, used to
                  watching foreign films with English sub-titles, did watch and
                  greatly appreciate many (though not all) of his films <br />{" "}
                  <br />
                  <strong>Apu Trilogy</strong> <br /> <br />
                  In ‘non-Bengal India’ he remained known as the maker of Pather
                  Panchali , like Tagore’s fame mostly rested as the composer of
                  the national anthem and the first Indian winner of the Nobel
                  Prize. Born in an illustrious literary family in Bengal,
                  Satyajit was educated in Presidency College (Kolkata) and then
                  in Tagore’s Santiniketan (in arts) but had no formal training
                  in film-making. He learnt the technical aspects of film-making
                  by watching films and reading articles by distinguished
                  film-makers and critics from all over the world, while working
                  in an ad agency in Kolkata. Though Ray is internationally best
                  known for his Apu Trilogy ( three films on the life
                  experiences of Apu, depicting the joys and the agony of a
                  village boy stepping into the outer world), he consciously
                  made films of many different genres throughout his life. He
                  never stopped experimenting. His films covered a wide spectrum
                  with themes like village life, urban life, corporate life, the
                  Naxalite years, famine, musical fantasy, detective stories,
                  conflicts within a family, life of a taxi driver, the
                  insecurities of a matinee idol, superstitions in religion and
                  society, the Swadeshi movement in freedom struggle, princely
                  life in colonial India, pitfalls of modern civilisation,
                  satire, adventures, documentary films and entertaining films
                  for children. He also tried various technical experiments in
                  all aspects of film-making like lighting, colour, music,
                  editing, use of camera angles and tricks, even advertising
                  with imaginative cinema posters. Apart from being a film
                  director, Ray performed many different roles in film-making.
                  He wrote all his screen-plays with detailed sketches of shot
                  sequences — a veritable lesson for budding film-makers. He
                  composed music in all his films fusing Indian (both North
                  Indian and South Indian) classical, western classical and folk
                  music from many parts of India, culminating in some
                  distinctive Ray signature tunes; in a few early films he used
                  renowned classical musicians like Ravi Shankar, Ali Akbar and
                  Vilayat Khan as music directors. Several of Ray’s films were
                  based on his own stories. He wrote the lyrics with rhymes (in
                  Bengali) in a few highly popular musical films with two
                  loveable characters in Gupi (a singer) and Bagha (a drummer).
                  He ‘acted’ behind the camera (particularly to instruct new
                  actors, whom he used often in his films), besides lending a
                  hand with editing, art direction and camera management, along
                  with a dedicated team which he built up and who remained with
                  him all along. <br /> <br />
                  <strong>Successful writer, too</strong> <br /> <br />
                  Ray was a multi-faceted creative person. He was a highly
                  successful writer of short stories, detective stories and
                  science fictions in Bengali, his target audience being
                  non-adult young. Many of his writings have been translated in
                  English and became fairly popular even outside Bengal. He was
                  also an accomplished artist (particularly adept in sketching),
                  photographer, calligrapher, an editor of children’s magazine
                  and a film critic. Incidentally, one of his short stories was
                  used (without acknowledgement) as the basic material by
                  Stephen Spielberg in making the highly successful Hollywood
                  blockbuster film ET . Ray’s creative uniqueness can perhaps be
                  best summarised by a short poem which the great poet
                  Rabindranath Tagore wrote in the autograph book of young
                  Satyajit whom he met in Santiniketan. The poem, translated in
                  English, is: ‘Too long I’ve wandered from place to place/Seen
                  mountains and seas at vast expense/Why haven’t I stepped two
                  yards from my house,/Opened my eyes and gazed very close/At a
                  drop of dew on a stalk of rice?’ Ray captured this beauty,
                  which is just two steps away from our homes but which we fail
                  to appreciate on our own, and then made us see it through his
                  films and other creative endeavours.
                </p>
                <div className="blog-footr-prt">
                  <ul className="blog-social">
                    <li>Share this on:</li>
                    <li>
                      <a href="#">
                        <FaFacebook size="2em" style={{ color: "#245ec2" }} />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <FaTwitter size="2em" style={{ color: "#1da1f2" }} />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <FaInstagram size="2em" style={{ color: "#c32aa3" }} />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <FaGooglePlus size="2em" style={{ color: "#dd4b39" }} />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
