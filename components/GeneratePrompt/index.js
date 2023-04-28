export default function GeneratePrompt(userData, allReadings, currentNote) {
  let prompt;
  console.log(currentNote);
  const card = userData.name;
  const averageCardMood = userData.averageMood;
  const timesDrawn = userData.clicks;
  const moodClickedToday = userData.mood;
  const meaning_up = userData.meaning_up;
  const meaning_rev = userData.meaning_rev;
  const day = userData.day;
  const hour = userData.hour;
  const visits = userData.arrayIndex;
  const description = userData.description;
  const greeting =
    hour < 4
      ? "hey vamp"
      : hour < 12
      ? "Good morning"
      : hour < 16
      ? "Hello"
      : hour < 23
      ? "Good Evening"
      : hour <= 24
      ? "good, spooky midnight"
      : null;
  const moodToday = moodClickedToday === 1 ? "good" : "bad";
  const averageMood =
    averageCardMood < 0.1
      ? "extremely bad"
      : averageCardMood < 0.2
      ? "very bad"
      : averageCardMood < 0.3
      ? "bad"
      : averageCardMood < 0.4
      ? "nearly okay"
      : averageCardMood < 0.5
      ? okay
      : averageCardMood < 0.6
      ? "more than okay"
      : averageCardMood < 0.7
      ? "quite good"
      : averageCardMood < 0.8
      ? "really good"
      : averageCardMood < 0.9
      ? "very good"
      : averageCardMood < 1
      ? "extremley good"
      : averageCardMood === 1
      ? "not enough data"
      : averageCardMood === 0
      ? "not enough data"
      : null;

  const dayNames = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  const lastReadings = allReadings;

  const dayName = dayNames[day];
  prompt = `
    We have met ${visits} times. If we have less than 3 times, consider me testing your skills. If we have met more than 3 times, consider me trusting in your skills. If we have met 30 times or above, act like we are best friends. I am your customer for many years. You are a tarot reader of high talent. Give me an extra-ordinar tarot reading based on the following stats: 
  
    "${greeting}, I have drawn "${card}", this is my ${visits}-th time getting your advice.
      I have drawn this Card ${timesDrawn} times already. I am in ${moodToday} today. If I am in bad mood, try to cheer me up.
      If I am in good mood, you can deliver a more sinister reading! The average mood for the card drawn today is
      ${averageMood}. "
      ### Here is some data reflecting the possible meanings for the card drawn: meaning up: "${meaning_up}", meaning reversed: "${meaning_rev}". And here is a visual description of that card: "${description}". 
      ### the user also left a note. it could be very random. if it is too random, then just ignore it. but if the user
      is describing his or her emotions take into consideration to enter it in your answer ###
      ### consider to compare the current situation with the last readings you had with this user. the data for the last readings is here: ### 
${lastReadings} ###
      If ${dayName} Friday or Saturday wish me a nice weekend at the end of your answer. `;
  return prompt;
}
