import { faker } from '@faker-js/faker';
import './Filters.css';

export default function Filters() {
  return (
    <div className='filters-container'>
      <span>{faker.name.firstName()}</span>
      <span>{faker.name.firstName()}</span>
      <span>{faker.name.firstName()}</span>
      <span>{faker.name.firstName()}</span>
      <span>{faker.name.firstName()}</span>
    </div>
  );
}
