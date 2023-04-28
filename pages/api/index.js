import { Configuration, OpenAIApi } from "openai";

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

export default async function handler(request, response) {
  if (!configuration.apiKey) {
    response.status(500).json({
      error: {
        message: "OpenAI API key not configured",
      },
    });
    return;
  }

  const question = request.body.question || "";
  if (question.trim().length === 0) {
    response.status(400).json({
      error: {
        message: `${console.log("no data to prompt")}`,
      },
    });
    return;
  }

  try {
    const completion = await openai.createCompletion({
      model: "text-davinci-003",
      prompt: generatePrompt(question),
      temperature: 1.2,
      max_tokens: 400,
    });
    response.status(200).json({ result: completion.data.choices[0].text });
  } catch (error) {
    if (error.response) {
      console.error(error.response.status, error.response.data);
      response.status(error.response.status).json(error.response.data);
    } else {
      console.error(`Error with OpenAI API request: ${error.message}`);
      response.status(500).json({
        error: {
          message: `${console.log(
            "something went wrong. try later or contact the developer: gh@rabe200"
          )}`,
        },
      });
    }
  }
}

function generatePrompt(question) {
  return `
  Give me an extended answer about my drawn Card. Give me a serious tarot reading. Are harsh if you feel like something is suspicous. ### do NOT use the word "mood" and don't talk of numbers or mention any numerical value you have read in the stats of the question body. do not let the user know about the numbers. they are here for you to generate a close to a reality tarot reading experience. ###

  Question: ${question}

  Answer: I am asking the spirits and they are answering... ### here you complete the answer with sterotypical witchy language ### `;
}
