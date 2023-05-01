export default function averageMood(card) {
  const averageCardMood = card.averageMood;
  const clicks = card.clicks;

  let avgMood;
  if (clicks > 3) {
    avgMood =
      averageCardMood < 0.1
        ? "very low"
        : averageCardMood < 0.2
        ? "low"
        : averageCardMood < 0.3
        ? "quite low"
        : averageCardMood < 0.4
        ? "nearly normal"
        : averageCardMood < 0.5
        ? "normal"
        : averageCardMood < 0.6
        ? "alright"
        : averageCardMood < 0.7
        ? "quite fine"
        : averageCardMood < 0.8
        ? "high"
        : averageCardMood < 0.9
        ? "very high"
        : averageCardMood < 1
        ? "flying high"
        : averageCardMood === 1
        ? "not enough data"
        : averageCardMood === 0
        ? "not enough data"
        : null;
  } else {
    avgMood = "not enough data";
  }

  return avgMood;
}
