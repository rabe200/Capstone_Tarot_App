export default function History({ cards }) {
  const getElementsfromLocalStorage = () => {
    let history = [];
    if (localStorage.getItem("history")) {
      history = JSON.parse(localStorage.getItem("history"));
    }
    return history;
  };

  return history.map((card) => {
    return (
      <section key={card.short_name}>
        <h1>{card.name}</h1>
        <span>{card.meaning_rev}</span>
        <span>{card.meaning_up}</span>
        <p>{card.rev}</p>
        <p>{card.desc}</p>
      </section>
    );
  });
}
