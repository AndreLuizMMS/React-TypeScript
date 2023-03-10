import { Heading } from './Heading';
import { Section } from './Section';
import { Counter } from './Counter';
import ItemList from './ItemList';

const items = ['ðð»ââï¸ Gym', 'â Coffe', ' ð¥ï¸ <code/>'];

function React_TS() {
  return (
    <div className="React_TS">
      <Heading title=" AndrÃ© Luiz "   />
      <Section>Section children</Section>
      <Counter />
      <ItemList
        items={items}
        render={(item: string) => <span className="bold">{item}</span>}
      />
    </div>
  );
}

export default React_TS;
