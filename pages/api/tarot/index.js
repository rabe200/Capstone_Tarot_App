import { getAllCards } from "../../../lib/data";

export const returnValue = getAllCards();

export default function Handler(request, response) {
  response.status(200).json(returnValue);
}
