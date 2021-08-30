import styled from 'styled-components';

export const TagsStyle = styled.div`
    width: 200px;
    padding: 0 20px;
    .icon-name{
        margin-left: 10px;
        color: #738192;
        font-size: 16px;
    }
    .tags-syle{
        margin: 30px 0;
    }
    .item-style{
        padding: 10px;
        border-radius: 20px;
        background: linear-gradient(to bottom, #9796f0, #fbc7d4);
        display: flex;
        justify-content: center;
        box-shadow: #9796f0;
    }
    .icon-name-active{
        margin-left: 10px;
        font-size: 16px;
        color: #FFFFFF;
    }
    .fixed{
        position: fixed;
        overflow-y: auto;
        top: 50px;
    }
`