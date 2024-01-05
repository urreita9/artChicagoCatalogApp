import {CardMainComponentProps} from '../../interfaces/interfaces.card';
import CardDescription from '../CardDescription';
import CardIconButton from '../CardIconButton';
import CardImage from '../CardImage';
import CardTitle from '../CardTitle';
import {Card} from './Card';

const CardMainComponent: CardMainComponentProps = Object.assign(Card, {
  Title: CardTitle,
  Description: CardDescription,
  Image: CardImage,
  IconButton: CardIconButton,
});

export default CardMainComponent;
