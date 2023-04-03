import useSWR from "swr";

export default function HomePage({ fetcher }) {
  const { data, error, isLoading } = useSWR("/api/tarot", fetcher);

  if (isLoading) {
    console.log("isLoading");
    return null;
  }

  if (error) {
    console.error("API ERROR");
    return <span>API ERROR, trying to refetch ...</span>;
  }
  if (data) {
    console.log("data received", data);
  }
  return data.map((card) => {
    return (
      <section key={card.short_name}>
        <h2>{card.name}</h2>
        <span>{card.meaning_rev}</span>
        <span>{card.meaning_up}</span>
        <p>{card.rev}</p>
        <p>{card.desc}</p>
      </section>
    );
  });
}
