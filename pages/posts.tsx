import Title from "../components/title";
import Style from "./posts.module.css";
import Link from "next/link";
export default () => {
  return (
    <>
      <Title title={"Posts"} />
      <div className={Style.postsContainer}>
        {[1, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1].map((item) => {
          return (
            <div className={Style.postItem}>
              <div className={Style.postTitle}>
                <Link href={`/detail`}>继承</Link>
              </div>
              <div className={Style.postReleaseTime}>2022-07-03</div>
            </div>
          );
        })}
      </div>
    </>
  );
};
