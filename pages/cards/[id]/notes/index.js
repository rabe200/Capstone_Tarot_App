import { useRouter } from "next/router";
import useStore from "../../../../src/store/store";
import AppContainer from "../../../../components/Styled/StyledAppContainer";
import StyledCardContainer from "../../../../components/Styled/StyledCardContainer";
import GridLayout3Columns from "../../../../components/Styled/GridLayoutWithSideNavigation";
import StyledList from "../../../../components/Styled/StyledList";
import TopMenuBar from "../../../../components/Styled/StyledTopMenuBar";
import StyledNavbar from "../../../../components/Styled/StyledNavbar";

export default function CardNotes() {
  const getDrawnCardById = useStore((state) => state.getDrawnCardById);

  const router = useRouter();
  const id = router ? router.query.id : null;

  const card = getDrawnCardById(id);

  {
    return (
      <AppContainer>
        <StyledCardContainer>
          <GridLayout3Columns query1={"null"} query2={"null"} navigation={true}>
            <StyledList>
              <u>{card ? card.map((prop) => prop.name) : "loading"}</u>
              <ul>
                {card.length > 0 ? (
                  card.map((prop) => <li key={prop.date}>{prop.notes}</li>)
                ) : (
                  <li>no data</li>
                )}
              </ul>
            </StyledList>
          </GridLayout3Columns>
        </StyledCardContainer>
        <TopMenuBar back={`/cards/${id}/detail`} />
        <StyledNavbar />
      </AppContainer>
    );
  }
}
