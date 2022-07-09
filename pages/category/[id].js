import { useRouter } from "next/router";

function Category() {
  const router = useRouter();
  const pid = router.query;

  return <div>{pid.id}</div>;
}

export default Category;
