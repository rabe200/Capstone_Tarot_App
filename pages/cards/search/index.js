import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { getCardById } from "../../../lib/data";

export default function Details({ searchQuery, setSearchQuery }) {
  const router = useRouter();
  const id = router ? router.query?.id : null;
  const card = getCardById(id);
  return searchQuery && console.log(searchQuery);
}
