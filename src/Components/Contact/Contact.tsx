import {
  WhatsAppOutlined,
  GithubOutlined,
  InstagramOutlined,
  YoutubeOutlined,
} from "@ant-design/icons";
import styled from "styled-components";

const ContactStyle = styled.div`
height: 25px;
width: 100vw;
background: #063640;
display: flex;
justify-content: space-evenly;
}
`;

const Hiperlink = styled.a`
text-decoration: none;
cursor: pointer;
color: #F0E7E2;
margin: 5px;
`;

function Contact() {
  return (
    <ContactStyle>
      <Hiperlink
        href="https://wa.me/5521996486265?text=Olá! Vim pelo site."
        target="_blank"
        rel="noreferrer"
      >
        <WhatsAppOutlined /> Fale pelo whatsapp
      </Hiperlink>

      <div>
        <Hiperlink
          href="https://github.com/palomacalado"
          target="_blank"
          rel="noreferrer"
        >
          <GithubOutlined />
        </Hiperlink>
        <Hiperlink
          href="https://www.instagram.com/palomacallado/"
          target="_blank"
          rel="noreferrer"
        >
          <InstagramOutlined />
        </Hiperlink>
        <Hiperlink
          href="https://www.youtube.com/channel/UCUXwr2MEgjIoA5qAA9YqbNg"
          target="_blank"
          rel="noreferrer"
        >
          <YoutubeOutlined />
        </Hiperlink>
      </div>
    </ContactStyle>
  );
}

export default Contact;
