export type PubType = "Paper" | "Article" | "Talk" | "Poster" | "Video" | "Demo" | "Award" | "Other";
export type Status = "Under Review" | "Published" | "Accepted" | "In Press";

export type Publication = {
  title: string;
  outlet?: string;         // conference, journal, site, venue
  date?: string;           // e.g. "Aug 2025"
  type: PubType;
  authors?: string[];        // optional string for now
  status?: Status;  // publication status
  // Media
  href?: string;           // canonical link (paper page, YouTube, arXiv, etc.)
  code?: string;
  pdf?: string;            // if you want a direct pdf link (public/…)
  thumb?: string;          // poster/thumbnail image (public/… or remote)
  previewVideo?: string;   // short mp4/webm (public/… or remote) for hover
  previewGif?: string;     // optional fallback gif if you prefer
};

export const PUBLICATIONS: Publication[] = [
  // {
  //   title: "BLIP: An Underwater Robot for Facilitating Acoustic Interactions with Dolphins",
  //   outlet: "Tangible, Embedded and Embodied Interaction (TEI) Conference",
  //   date: "2026",
  //   type: "Paper",
  //   authors: ["Riley Mehrman", "Ojas Mediratta", "Charles D. Ramey", "Thad Starner"],
  //   status: "Under Review",
  //   // href: "https://example.com/project", 
  //   thumb: "media/blip-auv/blippub_thumb.png",
  //   previewVideo: "media/blip-auv/blippub_preview.mp4",
  // },
  // {
  //   title: "1% Club Contestant",
  //   outlet: "Amazon Prime Video TV Series",
  //   date: "2026",
  //   type: "Other",
  //   href: "https://example.com/link", // external link
  //   thumb: "thumbnail.png",
  //   previewVideo: "preview.mp4",
  // },
  {
    title: "Best Overall Winners! HackGT 12 Hackathon Competition",
    outlet: "HackGT 12",
    date: "2026",
    type: "Award",
    authors: ["Ojas Mediratta", "Dawson Pent", "James Li", "David Serrao"],
    href: "https://devpost.com/software/dose-ebmo9z", // external link
    thumb: "media/hackGT12/dose_pub_thumb.jpeg",
  },
];