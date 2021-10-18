import { useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
const NotFound = () => {
  const router = useRouter();

  useEffect(() => {
    setTimeout(() => {
      router.push("/");
    }, 2000);
  }, []);
  return (
    <div className="not-found">
      <h1>Ooops </h1>
      <p>The page can not be found</p>
      <p>
        Go back to
        <Link href="/">
          <a> Homepage</a>
        </Link>
      </p>
    </div>
  );
};

export default NotFound;
