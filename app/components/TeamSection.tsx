import Image from "next/image";
import styles from "./TeamSection.module.css";
import { TEAM } from "@/app/data/team";

export default function TeamSection() {
  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        <span className={styles.eyebrow}>The Team</span>
        <h2 className={styles.title}>Small team, big ambition</h2>

        <div className={`${styles.grid} team-grid`}>
          {TEAM.map((member, i) => (
            <div key={i} className={styles.card}>
              {/* Avatar */}
              <div className={styles.avatar}>
                {member.image ? (
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className={styles.avatarImage}
                    style={{
                      objectPosition: member.imagePosition || 'center',
                      transform: [
                        member.imageScale ? `scale(${member.imageScale})` : '',
                        member.imageTranslateY ? `translateY(${member.imageTranslateY}%)` : '',
                      ].filter(Boolean).join(' ') || undefined,
                    }}
                  />
                ) : (
                  <span className={styles.avatarText}>
                    {member.placeholder}
                  </span>
                )}
                {member.name === "Open Role" && (
                  <div className={styles.badge}>Hiring</div>
                )}
              </div>

              <div className={styles.info}>
                <h3 className={styles.name}>{member.name}</h3>
                <p className={styles.role}>{member.role}</p>
                <p className={styles.bio}>{member.bio}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}