import { ReactNode } from 'react';
import TCard from '../../models/TCard';
import './card.css';

interface ICard {
  item: TCard;
  children?: ReactNode;
}

const Card = ({ item, children }: ICard) => {
  const { img, alt, title, text, link } = item;

  return (
    <div className="card">
      {/* NOTE: Вариант без chidren: */}
      {/* {img && <img className="card__img" src={img} alt={alt}/>} */}

      {/* NOTE: Вариант с chidren: */}
      {/* {children} */}

      {/* NOTE: Универсальный вариант: */}
      {children || (img && <img className="card__img" src={img} alt={alt} />)}

      <div className="card__body">
        <h3 className="card__title">{title}</h3>
        <p className="card__text">{text}</p>
        <a href="#" className="card__btn">{link}</a>
      </div>
    </div>
  );
};

export default Card;
