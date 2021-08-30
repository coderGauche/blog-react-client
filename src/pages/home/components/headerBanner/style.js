import styled from "styled-components";

// import bg from "@/asstes/image/backiee-202851.jpg";

export const HeaderBanner = styled.div`
  /* height: 350px; */
  position: relative;
  transition: 0.5;
  overflow: hidden;
  width: 100%;
  border-radius: 12px;
  /* padding: 0 80px; */

  .Carousel{
  }
  
  .banner-slide {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: relative;
    z-index:1;
    padding: 65px;
    
  }

  .banner-img {
    box-shadow: 0 8px 15px rgba(0, 0, 0, 0.4),
      60px 0 20px -30px rgba(0, 0, 0, 0.5),
      -60px 0 20px -30px rgba(0, 0, 0, 0.5);
    border-radius: 12px;
  }

  .banner-slide__tags {
    text-shadow: 0 2px 3px #949290;
    opacity: 0.6;
    font-size: 16px;
    margin: 10px 0;
  }

  .banner-slide__tag {
    margin: 0 8px;
    padding: 3px 0;
    position: relative;
    color: #ffffff;
  }

  .banner-slide__title {
    text-shadow: 0 4px 5px rgba(31, 54, 61, 0.5);
    font-size: 28px;
    color: #ffffff;
    position: relative;
  }

  .bubble-cover {
    width: 100%;
    height: 100%;
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
  }
  .bubble-cover__bg {
    -webkit-filter: brightness(50%);
    filter: brightness(50%);
  }
  .bubble-cover__bg-img {
    background: url(${props => props.bgImage})no-repeat;
    background-size: 60% 100%;
    height: 350px;
    width: 100%;
    border-radius: 12px;
  }
  .banner-slide__read-more {
    width: 90px;
    height: 36px;
    padding: 0 7px;
    text-decoration: none;
    color: #ffffff;
    border: 1px solid #928B80;
    border-radius: 7px;
    -webkit-transition: .25s;
    transition: .25s;
    margin-top: 5px;
}
.ant-carousel{
    width: 100%;
}
`;
