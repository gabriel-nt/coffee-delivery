import { useCartContext } from '../../../../contexts/CartContext';
import { Card } from '../Card';
import { Confirmation } from '../Confirmation';
import { SummaryContainer, SummaryContent } from './styles';

export function Summary() {
  const {
    cart: { products },
  } = useCartContext();

  return (
    <SummaryContainer>
      <h2>Cafés selecionados</h2>

      <SummaryContent>
        {products.map((coffee) => (
          <Card key={coffee.id} coffee={coffee} />
        ))}

        <Confirmation />
      </SummaryContent>
    </SummaryContainer>
  );
}
