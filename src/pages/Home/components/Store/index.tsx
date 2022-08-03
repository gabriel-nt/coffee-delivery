import { coffees } from '../../../../data/coffees';
import { Card } from '../Card';
import { StoreContainer, Grid } from './styles';

export function Store() {
  return (
    <StoreContainer>
      <h2>Nossos cafés</h2>

      <Grid>
        {coffees.map((coffee) => (
          <Card key={coffee.id} coffee={coffee} />
        ))}
      </Grid>
    </StoreContainer>
  );
}
