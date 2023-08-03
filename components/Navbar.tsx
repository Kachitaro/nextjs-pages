import styles from "@/styles/Navbar.module.css";

export default function Navbar() {
  return (
    <section className={`${styles.main}`}>
      <div>Logo</div>
      <div>Navigation</div>
      <div>Login Logout</div>
    </section>
  );
}
