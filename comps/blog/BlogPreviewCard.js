import Link from "next/link";
import Image from "next/image";
import { nanoid } from "nanoid";
import styles from "../../styles/BlogPreviewCard.module.css";

const BlogPreviewCard = () => {
  return (
    <article className={styles.container}>
      <div className={styles.imagContainer}>
        <Image
          src='/images/demo.jpeg'
          width={16}
          height={9}
          layout='responsive'
          objectFit='cover'
          alt=''
        />
      </div>
      <div className={styles.info}>
        <h2>Blog Title Here</h2>
        <div className={styles.metaInfo}>
          <p>Date</p>
          <p>Views</p>
          <p>Time to Read</p>
        </div>
        <div className={styles.excerpt}>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate,
            tenetur?
          </p>
        </div>
        <div className={styles.btn}>
          <Link href='/blog'>
            <a>
              <button>Read more</button>
            </a>
          </Link>
        </div>
      </div>
    </article>
  );
};
export default BlogPreviewCard;
