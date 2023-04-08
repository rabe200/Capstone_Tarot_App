export default function CardList({ cards }) {
  return cards.map((card) => {
    return (
      <section key={card.name}>
        <h1>{card.name}</h1>
        <span>{card.meaning_rev}</span>
        <span>{card.meaning_up}</span>
        <p>{card.rev}</p>
        <p>{card.desc}</p>
      </section>
    );
  });
}
