import React from "react";
import Section from "@/components/Section";
import Container from "@/components/Container";
import { Mail, Phone } from "lucide-react";
import { PROFILE } from "@/data/links";
import { useLang } from "@/context/LangContext";

export default function Contact() {
  const { lang } = useLang();
  const profile = PROFILE;

  return (
    <Section id="contact" className="pb-16 md:pb-28">
      <Container>
        <h2
          className={`text-2xl font-semibold tracking-tight max-w-2xl ${
            lang === "ar" ? "text-right" : "text-left"
          }`}
        >
          {" "}
          {profile.contact[lang].title}
        </h2>
        <p
          className={`mt-2 text-subtext max-w-2xl ${
            lang === "ar" ? "text-right" : "text-left"
          }`}
        >
          {profile.contact[lang].description}
        </p>

        <div className="mt-8 space-y-4 text-sm text-subtext">
          <a
            href={`mailto:${PROFILE.email}`}
            className="flex items-center gap-2 underline-offset-4 text-accent-cyan hover:text-accent-purple hover:underline transition-colors"
          >
            <Mail className="size-4" /> {PROFILE.email}
          </a>
          <div className="flex items-center gap-2">
            <Phone className="size-4" />
            <a href={`tel:${PROFILE.phone}`} className="hover:underline">
              {PROFILE.phone}
            </a>
          </div>
        </div>
      </Container>
    </Section>
  );
}
