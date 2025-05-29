import React from 'react';
import styled from 'styled-components';
import textImage from '../assets/images/text-small.png';
import textImageSide from '../assets/images/text-side-small.png';
import mainImage from '../assets/images/philosophy-image-small.jpg';
import mainImageLarge from '../assets/images/philosophy-image-large.jpg';
import tcbImage from '../assets/images/tcb-text-logo-small.png';
import tcbImageLarge from '../assets/images/tcb-text-logo-large.png';

const Philosophy = () => {
  return (
    <Container>
      <picture className="image-text-container item1">
        <source
          srcSet={textImageSide}
          alt="philosophy-text-image-vertical"
          width={98}
          height={586}
          media="(min-width: 768px)"
          loading="lazy"
        />
        <img src={textImage} alt="philosophy-text-image" width={300} height={50} loading="lazy" />
      </picture>
      <div className="text-container item2">
        <p>
          「美容医療」という言葉を耳にして、モデルや芸能人が受ける「特別なもの」というイメージを抱いていませんか？
          <br></br>
          「キレイになりたい」という願いは、誰もが抱く自然なもの。
          <br></br>
          ですから、美容医療の力を使って美しさに磨きをかけることは、決して特別なことではないのです。
          <br></br>
          東京中央美容外科（TCB）は、医師が患者様の「キレイになりたい」という願いに真摯に寄り添い、懇切丁寧なカウンセリングはもちろんのこと、一人ひとりに合った最適な治療法をご提案いたします。
          <br></br>
          理想の自分になりたい、コンプレックスを解消したい、過去の美しさを取り戻したいと思った方は、ぜひTCBにご相談ください。
        </p>
      </div>

      <picture className="image-container item3">
        <source
          srcSet={mainImageLarge}
          alt="philosophy-text-image-large"
          width={600}
          height={800}
          loading="lazy"
          media="(min-width: 1440px)"
        />
        <source
          srcSet={mainImage}
          alt="philosophy-text-image-medium"
          width={300}
          height={600}
          loading="lazy"
          media="(min-width: 768px)"
        />
        <img
          src={mainImage}
          alt="philosophy-text-image-small"
          width={450}
          height={600}
          loading="lazy"
        />
      </picture>
      <picture className="tcb-image-text-container item4">
        <source
          srcSet={tcbImageLarge}
          alt="tcb-image-text-large"
          width={915}
          height={311}
          loading="lazy"
          media="(min-width: 1440px)"
        />
        <img src={tcbImage} alt="tcb-image-text" width={300} height={102} loading="lazy" />
      </picture>
    </Container>
  );
};

export default Philosophy;

const Container = styled.section`
  background-color: var(--color-gray);
  color: var(--color-white);
  display: grid;
  text-align: center;
  line-height: 0;
  position: relative;
  overflow-x: clip;

  .image-text-container.item1 {
    padding: 27px 26px;
    margin: 0 auto;

    @media (min-width: 768px) {
      img {
        max-width: 70px;
      }
    }

    @media (min-width: 1440px) {
      img {
        max-width: 100%;
      }
    }
  }

  .text-container.item2 {
    padding: 0 20px 80px;
    text-align: left;
    line-height: 2.5;
    font-size: 14px;

    @media (min-width: 768px) {
      padding: 0 40px;
    }

    @media (min-width: 1440px) {
      line-height: 50px;
      max-width: 770px;
      font-size: 18px;
      position: absolute;
      right: 15%;
      top: 50%;
      transform: translate(0, -50%);
    }
  }

  .image-container.item3 {
    @media (min-width: 1440px) {
    }
  }

  .tcb-image-text-container.item4 {
    position: absolute;
    background-color: transparent;
    bottom: -40px;

    @media (min-width: 1440px) {
      bottom: -25%;
      left: -4%;
    }
  }

  @media (min-width: 768px) {
    grid-template-columns: 1fr auto;

    .item1 {
      grid-column: 2/3;
      position: absolute;
      top: 50%;
      left: 0;
      transform: translate(-50%, -50%);
    }
    .item2 {
      grid-column: 1/2;
      margin: auto;
      padding: 0 20px;
    }
    .item3 {
      grid-column: 2/3;
    }
    .item4 {
    }
  }

  @media (min-width: 1440px) {
    .item1 {
    }
    .item2 {
    }
    .item3 {
      justify-self: end;
    }
    .item4 {
    }
  }
`;
