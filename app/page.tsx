import Image from "next/image";

function YouTubeIcon({ size = 18 }: { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17"/><path d="m10 15 5-3-5-3z"/></svg>
  );
}

function CameraIcon({ size = 18 }: { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z"/><circle cx="12" cy="13" r="3"/></svg>
  );
}

function LinkedInIcon({ size = 18 }: { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
  );
}

function PlayIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="6 3 20 12 6 21 6 3"/></svg>
  );
}

function MailIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
  );
}

export default function Home() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: "#F5F0E8" }}>
      <div className="mx-auto w-full max-w-[480px]">
        {/* Hero Section */}
        <section
          className="flex flex-col items-center px-8 pt-[60px] pb-10 gap-4"
          style={{
            background:
              "linear-gradient(to bottom, #2D3B2D, #3E4D35, #5C6B4A)",
          }}
        >
          <div
            className="w-[110px] h-[110px] rounded-full overflow-hidden"
            style={{ border: "3px solid #B5C4A8" }}
          >
            <Image
              src="/avatar.png"
              alt="Ying Ying Tan"
              width={110}
              height={110}
              className="w-full h-full object-cover"
              priority
            />
          </div>

          <h1
            className="font-serif text-[28px] text-center"
            style={{ color: "#FFFFFF" }}
          >
            Ying Ying Tan
          </h1>

          <p
            className="text-[10px] font-normal uppercase tracking-[3px] text-center"
            style={{ color: "#C8D4BC" }}
          >
            Ying Thinks
          </p>

          <div
            className="flex items-center gap-6"
            style={{ color: "#C8D4BC" }}
          >
            <a
              href="https://www.youtube.com/@yingthinks"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="YouTube"
            >
              <YouTubeIcon />
            </a>
            <a
              href="https://www.instagram.com/yingyingt_"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
            >
              <CameraIcon />
            </a>
            <a
              href="https://www.linkedin.com/in/tan-yingying/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <LinkedInIcon />
            </a>
          </div>
        </section>

        {/* Body Section */}
        <div className="flex flex-col items-center px-7 py-8 gap-6">
          <p
            className="text-[13px] font-light leading-relaxed text-center"
            style={{ color: "#4A5A42" }}
          >
            Mother of two. Lived in 6 countries. Currently inside a startup
            society. Thoughts on money, family &amp; living freely.
          </p>

          {/* Social Link Buttons */}
          <div className="flex flex-col w-full gap-2.5">
            <a
              href="https://www.youtube.com/@yingthinks"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2.5 w-full py-3.5 px-5 rounded-[6px] text-white text-sm font-medium transition-colors"
              style={{ backgroundColor: "#4A5A3A" }}
            >
              <PlayIcon />
              Watch on YouTube
            </a>
            <a
              href="https://www.instagram.com/yingyingt_"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2.5 w-full py-3.5 px-5 rounded-[6px] text-white text-sm font-medium transition-colors"
              style={{ backgroundColor: "#4A5A3A" }}
            >
              <CameraIcon size={16} />
              Instagram
            </a>
            <a
              href="https://www.linkedin.com/in/tan-yingying/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2.5 w-full py-3.5 px-5 rounded-[6px] text-white text-sm font-medium transition-colors"
              style={{ backgroundColor: "#4A5A3A" }}
            >
              <LinkedInIcon size={16} />
              LinkedIn
            </a>
          </div>

          {/* Divider */}
          <div
            className="w-full h-px"
            style={{ backgroundColor: "#D4DCC8" }}
          />

          <p
            className="text-[11px] font-semibold uppercase tracking-[2px] text-center"
            style={{ color: "#4A5A3A" }}
          >
            What I&apos;m Working On
          </p>

          {/* Latest Video Card */}
          <div
            className="w-full rounded-lg p-5 flex flex-col gap-2"
            style={{
              backgroundColor: "#EDE8DF",
              border: "1px solid #D4DCC8",
            }}
          >
            <p
              className="text-[11px] font-semibold uppercase tracking-[2px]"
              style={{ color: "#4A5A3A" }}
            >
              Latest Video
            </p>
            <h3 className="font-serif text-lg" style={{ color: "#2D3B2D" }}>
              Ying Thinks
            </h3>
            <p
              className="text-[13px] font-light leading-relaxed"
              style={{ color: "#4A5A42" }}
            >
              Thoughts on money, family &amp; living freely.
            </p>
            <a
              href="https://www.youtube.com/@yingthinks"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[13px] font-medium"
              style={{ color: "#4A5A3A" }}
            >
              Watch on YouTube →
            </a>
          </div>

          {/* edventures.co Card */}
          <div
            className="w-full rounded-lg p-5 flex flex-col gap-2"
            style={{
              backgroundColor: "#EDE8DF",
              border: "1px solid #D4DCC8",
            }}
          >
            <p
              className="text-[11px] font-semibold uppercase tracking-[2px]"
              style={{ color: "#4A5A3A" }}
            >
              edventures.co
            </p>
            <p
              className="text-[13px] font-light leading-relaxed"
              style={{ color: "#4A5A42" }}
            >
              Adventures &amp; learning experiences for families.
            </p>
            <a
              href="https://edventures.co"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[13px] font-medium"
              style={{ color: "#4A5A3A" }}
            >
              Visit edventures.co →
            </a>
          </div>

          {/* Life in a Startup Society Card */}
          <div
            className="w-full rounded-lg p-5 flex flex-col gap-2.5"
            style={{
              backgroundColor: "#EDE8DF",
              border: "1px solid #D4DCC8",
            }}
          >
            <p
              className="text-[11px] font-semibold uppercase tracking-[2px]"
              style={{ color: "#4A5A3A" }}
            >
              Life in a Startup Society
            </p>
            <p
              className="text-[13px] font-light leading-relaxed"
              style={{ color: "#4A5A42" }}
            >
              Want to level up? That&apos;s what I&apos;m doing at Network
              School.
            </p>
            <a
              href="https://ns.com/tanyingying/apply"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[13px] font-medium"
              style={{ color: "#4A5A3A" }}
            >
              Curious? Learn more →
            </a>
          </div>

          {/* Divider */}
          <div
            className="w-full h-px"
            style={{ backgroundColor: "#D4DCC8" }}
          />

          <p
            className="text-[11px] font-semibold uppercase tracking-[2px] text-center"
            style={{ color: "#4A5A3A" }}
          >
            Say Hello
          </p>

          <a
            href="mailto:tan-yingying@hotmail.com"
            className="flex items-center justify-center gap-2.5 w-full py-3.5 px-5 rounded-[6px] text-white text-sm font-medium transition-colors"
            style={{ backgroundColor: "#4A5A3A" }}
          >
            <MailIcon />
            Send me an email
          </a>

          <p
            className="text-xs font-light text-center leading-relaxed"
            style={{ color: "#8A9080" }}
          >
            I also work in brand partnerships and cultural strategy.
          </p>

          <footer className="pt-6">
            <p
              className="text-[11px] font-light text-center"
              style={{ color: "#8A9080" }}
            >
              © 2026 Ying Ying Tan
            </p>
          </footer>
        </div>
      </div>
    </div>
  );
}
