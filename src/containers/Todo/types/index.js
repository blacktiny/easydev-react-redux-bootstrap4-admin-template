import {
  shape, number, string, bool,
} from 'prop-types';

const todoCard = shape({
  id: number.isRequired,
  title: string.isRequired,
  description: string.isRequired,
  priority: string.isRequired,
  completed: bool.isRequired,
});

export default todoCard;
