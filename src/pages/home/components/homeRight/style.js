import styled from 'styled-components';

export const HomeRightStyle = styled.div`
    margin-top: 30px;
    width: 100%;
    display: grid;
    grid-template-columns: repeat(4, calc((100% - 90px) / 4));
    gap: 30px;
 .card-panel {
    width: 100%;
    background-color: #FFFFFF;
    box-shadow: 0 13px 15px rgba(31,45,64,0.1);
    border-radius: 13px;
    overflow: hidden; 
    border: 1px solid pink;
    display: flex;
    justify-content: center;
    align-items: center;
 }
 .banner-img{
     width: 100%;
     height: 291px;
 }
 .card-container .box{
    padding: 8px 15px;
 }
 .card-container .title {
    color: #475669;
    font-size: 16px;
    margin-top: 6px;
    display: block;
}
`