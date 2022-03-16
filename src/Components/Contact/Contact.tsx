import {
  WhatsAppOutlined,
  GithubOutlined,
  InstagramOutlined,
  YoutubeOutlined,
} from "@ant-design/icons";
import styles from "./Contact.module.css";

function Contact() {
  return (
    <div className={styles.contact}>
      <a
        href="https://wa.me/5521996486265?text=Olá! Vim pelo site."
        target="_blank"
        rel="noreferrer"
      >
        <WhatsAppOutlined /> Fale pelo whatsapp
      </a>

      <div>
        <a
          href="https://github.com/palomacalado"
          target="_blank"
          rel="noreferrer"
        >
          <GithubOutlined />
        </a>
        <a
          href="https://www.instagram.com/palomacallado/"
          target="_blank"
          rel="noreferrer"
        >
          <InstagramOutlined />
        </a>
        <a
          href="https://www.youtube.com/channel/UCUXwr2MEgjIoA5qAA9YqbNg"
          target="_blank"
          rel="noreferrer"
        >
          <YoutubeOutlined />
        </a>
      </div>
    </div>
  );
}

export default Contact;
