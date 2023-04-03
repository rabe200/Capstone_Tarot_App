import { getCardById } from "../../../lib/data";

export default function handler(request, response) {
  const { slug } = request.query;
  const idCard = getCardById(slug);
  console.log(idCard);
  response.status(200).json(idCard);
}
