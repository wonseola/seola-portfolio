import React from "react";
import Section from "../components/Section";
import Container from "../components/Container";
import { PROFILE } from "../data/links";
import { useLang } from "../context/LangContext";
import { FaGithub, FaInstagram } from "react-icons/fa";

export default function Contact() {
  const { lang } = useLang();

  return (
    <Section id="contact" className="pb-20 md:pb-32">
      <Container>
        <div className="flex flex-col items-center text-center gap-6">
          <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
            {PROFILE.contact[lang].title}
          </h2>

          <div className="flex flex-col sm:flex-row gap-3">
            <a
              href={`mailto:${PROFILE.email}`}
              className="rounded-2xl border border-border px-5 py-2.5 text-sm text-subtext transition-all hover:border-accent-green hover:text-accent-green"
            >
              {PROFILE.email}
            </a>
            <a
              href={`tel:${PROFILE.phone}`}
              className="rounded-2xl border border-border px-5 py-2.5 text-sm text-subtext transition-all hover:border-accent-green hover:text-accent-green"
            >
              {PROFILE.phone}
            </a>
          </div>

          <div className="flex items-center gap-4 text-subtext">
            <a
              href={PROFILE.social.github}
              target="_blank"
              rel="noreferrer"
              className="hover:text-accent-green transition-colors"
            >
              <FaGithub className="size-5" />
            </a>
            <a
              href={PROFILE.social.instagram}
              target="_blank"
              rel="noreferrer"
              className="hover:text-accent-orange transition-colors"
            >
              <FaInstagram className="size-5" />
            </a>
          </div>
        </div>
      </Container>
    </Section>
  );
}
