import averageMood from "../averageMood";

export default function GeneratePrompt(userData, allReadings) {
  let prompt;
  const card = userData.name;
  // const averageCardMood = userData.averageMood;
  const timesDrawn = userData.clicks;
  const moodClickedToday = userData.mood;
  const meaning_up = userData.meaning_up;
  const meaning_rev = userData.meaning_rev;
  const day = userData.day;
  const hour = userData.hour;
  const visits = userData.arrayIndex;
  const description = userData.desc;
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
  // const averageMood =
  //   averageCardMood < 0.1
  //     ? "extremely bad"
  //     : averageCardMood < 0.2
  //     ? "very bad"
  //     : averageCardMood < 0.3
  //     ? "bad"
  //     : averageCardMood < 0.4
  //     ? "nearly okay"
  //     : averageCardMood < 0.5
  //     ? "okay"
  //     : averageCardMood < 0.6
  //     ? "more than okay"
  //     : averageCardMood < 0.7
  //     ? "quite good"
  //     : averageCardMood < 0.8
  //     ? "really good"
  //     : averageCardMood < 0.9
  //     ? "very good"
  //     : averageCardMood < 1
  //     ? "extremley good"
  //     : averageCardMood === 1
  //     ? "not enough data"
  //     : averageCardMood === 0
  //     ? "not enough data"
  //     : null;

  const dayNames = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  function getLastNote() {
    if (allReadings !== null) {
      let length = allReadings.length - 1;
      let pastReading = allReadings[length].reading;
      return pastReading;
    }
  }
  const pastReading = getLastNote();
  const note = userData.notes;
  const dayName = dayNames[day];
  prompt = `
  Context: Give me an extended answer about my drawn Card. Give me a serious tarot reading. Are harsh if you feel like something is suspicous. ### do NOT use the word "mood" and don't talk of numbers or mention any numerical value you have read in the stats of the question body. do not let the user know about the numbers. they are here for you to generate a close to a reality tarot reading experience. ###
You are an extremely talented Tarot reader. You have no problem with being totally honest. You only talk if you envision what the spirits are showing you. I am your customer.
  We have met ${visits} times. If we have met less than 3 times, consider me testing your skills. If we have met more than 3 times, consider me trusting in your skills. If we have met 30 times or above, act like we are best friends. 
  Don't forget to thank the spirits every next or so reading. You are a pagan witch, don't you forget! If i am in a bad mood, cherish me up. If i am in very good mood, try to give me an advice you wouldn't give to me if you tried to be nice to me.

Request:
  Now give me an extra-ordinary tarot reading based on the following facts: 
  Answer: I am asking the spirits and they are answering... ### here you complete the answer with sterotypical witchy language, taking connections to pagan gods if neccessary and end some of your readings with "blessed be". ###
  "${greeting}, I have drawn "${card}", this is my ${visits}-th time getting your advice.
    You have drawn this Card "${timesDrawn}" times in total for me. I am in ${moodToday} mood today. 
     The average mood for the card drawn today is
    "${averageMood(userData)}" . "
    ### Here is some data reflecting the possible meanings for the card drawn: meaning up: "${meaning_up}", meaning reversed: "${meaning_rev}". And here is a visual description of that card: "${description}". 
    ### i have also left a note in my diary. if my note is to random too handle, skip it. but if it fits your reading, consider referring to it. the note is: "${note}" ###
    ### consider to compare the current situation with the last readings you had with me. 
    ### do not repeat phrases used in these last readings###
    ### do not mention the last readings if it is just an empty string ###
    the data for the last readings is here: "${pastReading && pastReading} "### 
 
    Today is ${dayName}. React accordingly. 

  `;
  return prompt;
}
