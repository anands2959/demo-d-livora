import Link from 'next/link';
import styles from './not-found.module.css';

export default function NotFound() {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.errorCode}>404</h1>
        <h2 className={styles.title}>Oops! Page Not Found</h2>
        <p className={styles.message}>
          The furniture piece you are looking for has been moved to another room.
        </p>
        
        <div className={styles.demoNotice}>
          <p>This is only a <strong>demo</strong>. If you want this type of website, please mail to:</p>
          <a href="mailto:anands2959@gmail.com" className={styles.email}>anands2959@gmail.com</a>
        </div>

        <Link href="/" className={styles.btn}>
          Back to Home
        </Link>
      </div>

      {/* Decorative background element */}
      <div className={styles.bgCircle}></div>
    </div>
  );
}
