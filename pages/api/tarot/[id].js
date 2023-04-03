import { getCardById } from "../../../lib/data";

export default function handler(request, response) {
  const { id } = request.query;
  const idCard = getCardById(id);
  console.log(idCard);
  response.status(200).json(idCard);
}
