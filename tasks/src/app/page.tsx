import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <p></p>
        <div>
          <a
            href="https://github.com/JuanJmf01"
            target="_blank"
            rel="noopener noreferrer"
          >
            By{" "}
            <Image
              src="/JuanJmf.png"
              alt="Vercel Logo"
              className={styles.vercelLogo}
              width={170}
              height={50}
              priority
            />
          </a>
        </div>
      </div>

      <div className={styles.center}>
        <Image
          className={styles.logo}
          src="/taskMasterLogo.png"
          alt="TaskMaster Logo"
          width={300}
          height={65}
          priority
        />
      </div>

      <div className={styles.grid}>
        <Link href="/login">
          <div className={styles.card}>
            <h2>
              Sign in <span>-&gt;</span>
            </h2>
            <p>
              Log in to create and manage your tasks, form work teams and much
              more.
            </p>
          </div>
        </Link>
      </div>
    </main>
  );
}
