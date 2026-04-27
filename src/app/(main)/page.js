import { redirect } from "next/navigation";

const default_category_id = '01'

export default async function Home() {
  redirect(`/categories/${default_category_id}`)
}
