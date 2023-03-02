import { Heading } from './Heading';
import { Section } from './Section';
import { Counter } from './Counter';
import ItemList from './ItemList';

const items = ['🏋🏻‍♂️ Gym', '☕ Coffe', ' 🖥️ <code/>'];

function React_TS() {
  return (
    <div className="React_TS">
      <Heading title=" André Luiz "   />
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
