"""Generate the one-page resume and the social share image. Not part of the site bundle."""

from pathlib import Path

from PIL import Image, ImageDraw, ImageFont
from reportlab.lib.colors import Color, white
from reportlab.lib.pagesizes import A4
from reportlab.lib.units import inch
from reportlab.pdfbase import pdfmetrics
from reportlab.pdfbase.ttfonts import TTFont
from reportlab.pdfgen import canvas

ROOT = Path(__file__).resolve().parents[1]
PUBLIC = ROOT / "public"
FONTS = Path(r"C:\Windows\Fonts")

pdfmetrics.registerFont(TTFont("Georgia", str(FONTS / "georgia.ttf")))
pdfmetrics.registerFont(TTFont("Georgia-Italic", str(FONTS / "georgiai.ttf")))
pdfmetrics.registerFont(TTFont("Calibri", str(FONTS / "calibri.ttf")))
pdfmetrics.registerFont(TTFont("Calibri-Bold", str(FONTS / "calibrib.ttf")))

INK = Color(0.07, 0.07, 0.08)
MUTED = Color(0.28, 0.26, 0.24)
VIOLET = Color(0.35, 0.28, 0.62)
RULE = Color(0.78, 0.75, 0.70)


def draw_resume(path: Path) -> None:
    width, height = A4
    c = canvas.Canvas(str(path), pagesize=A4)
    c.setTitle("Aparna Ojha — Resume")
    c.setAuthor("Aparna Ojha")
    left = 0.58 * inch
    right = width - 0.58 * inch
    y = height - 0.48 * inch

    def text(value, x, y_pos, font, size, color=INK):
        c.setFillColor(color)
        c.setFont(font, size)
        c.drawString(x, y_pos, value)

    def wrap(value, font, size, max_width):
        words = value.split()
        lines, current = [], ""
        for word in words:
            trial = word if not current else f"{current} {word}"
            if c.stringWidth(trial, font, size) <= max_width:
                current = trial
            else:
                if current:
                    lines.append(current)
                current = word
        if current:
            lines.append(current)
        return lines

    def heading(label):
        nonlocal y
        y -= 13
        text(label.upper(), left, y, "Calibri-Bold", 8.5, VIOLET)
        y -= 4
        c.setStrokeColor(RULE)
        c.setLineWidth(0.4)
        c.line(left, y, right, y)
        y -= 11

    def bullet(value, size=8.6, leading=11):
        nonlocal y
        lines = wrap(value, "Calibri", size, right - left - 12)
        for index, line in enumerate(lines):
            prefix = "•  " if index == 0 else "   "
            text(prefix + line, left, y, "Calibri", size)
            y -= leading

    text("Aparna Ojha", left, y - 4, "Georgia", 22)
    y -= 18
    text("Software Engineer  ·  Full-stack  ·  AI systems", left, y, "Georgia-Italic", 9, MUTED)
    y -= 12
    contact = "Noida, India   |   +91 8797047316   |   ojhaaparna0@gmail.com"
    text(contact, left, y, "Calibri", 8.2)
    y -= 10
    links = "linkedin.com/in/iamaparnaojha   ·   github.com/iamaparnaojha   ·   leetcode.com/u/iamaparnaojha   ·   aparna-ojha.vercel.app"
    text(links, left, y, "Calibri", 8)

    heading("Summary")
    summary = (
        "Software engineer with a B.Tech in Information Technology and hands-on work in full-stack products, "
        "RAG systems, and LLM evaluation. 700+ DSA problems solved, a 500+ day LeetCode streak, AIR 844 in TCS CodeVita, and GATE 2026 qualified."
    )
    for line in wrap(summary, "Calibri", 8.7, right - left):
        text(line, left, y, "Calibri", 8.7)
        y -= 11

    heading("Education")
    text("JSS Academy of Technical Education, Noida", left, y, "Calibri-Bold", 9)
    text("2023 — 2027", right - c.stringWidth("2023 — 2027", "Calibri", 8.5), y, "Calibri", 8.5, MUTED)
    y -= 11
    text("B.Tech, Information Technology  ·  CGPA 8.9/10", left, y, "Calibri", 8.6)
    y -= 11
    text("3rd rank, Information Technology  ·  1st rank, 6th semester (9.48 SGPA)  ·  GATE 2026 qualified", left, y, "Calibri", 8.4, MUTED)

    heading("Experience")
    roles = [
        (
            "AI Systems Evaluation Intern",
            "Caudal AI",
            "Aug 2026 — Present",
            [
                "Created AI-agent benchmark tasks across Sentinel Ultra, Terminus 3, and Terminal-Bench 2.1/4.0, including prompt design, task construction, and difficulty calibration.",
                "Audited evaluation runs, diagnosed Oracle, NOP, agent, and judge failures, and refined task specifications so results stayed reliable and reproducible.",
            ],
        ),
        (
            "Full Stack Developer Intern",
            "SiteGuru",
            "Jul 2026 — Aug 2026",
            [
                "Built full-stack modules with Next.js, Node.js, and SQL, including 15+ REST APIs, authentication, and role-based access for 3 user roles.",
                "Shipped Socket.IO messaging for 100+ concurrent users, OTP authentication, dashboards, SSR, and 20+ responsive pages in an Agile workflow.",
            ],
        ),
        (
            "Generative AI and Cloud Computing Intern",
            "IBM SkillsBuild / BharatCares",
            "Jun 2026 — Jul 2026",
            [
                "Completed industry-aligned training in generative AI, LLMs, prompt engineering, cloud computing, and model evaluation, and applied that work in guided evaluation projects.",
            ],
        ),
        (
            "Student Placement Coordinator",
            "JSS Academy of Technical Education",
            "Feb 2026 — Present",
            [
                "Coordinate campus placement drives with recruiters and students, and support the placement team through hiring events.",
            ],
        ),
        (
            "Freelance Full Stack Developer",
            "Self-employed",
            "Oct 2025 — Mar 2026",
            [
                "Designed and deployed MERN and Next.js products, including portfolios, event platforms, and RAG applications with LLM APIs and vector databases.",
            ],
        ),
    ]
    for title, company, dates, points in roles:
        text(title, left, y, "Calibri-Bold", 9)
        date_w = c.stringWidth(dates, "Calibri", 8.2)
        text(dates, right - date_w, y, "Calibri", 8.2, MUTED)
        y -= 10.5
        text(company, left, y, "Georgia-Italic", 8.4, VIOLET)
        y -= 11
        for point in points:
            bullet(point, 8.35, 10.4)
        y -= 2

    heading("Projects")
    project_blocks = [
        (
            "CampusQuery — AI-powered multilingual campus assistant",
            "MERN, GPT-4, LangChain, Pinecone, Azure Blob Storage, RBAC",
            "Multichannel RAG assistant (web, WhatsApp, Telegram) with voice support, an admin dashboard, document ingestion, human review, and reported support for 500+ users.",
        ),
        (
            "CodeCompassAI — AI developer onboarding platform",
            "Next.js 14, React 18, Hono.js, Gemini, MongoDB, ElevenLabs, Docker",
            "Turns a GitHub repository into a difficulty-ranked onboarding roadmap, with AI voice mentorship, caching, and Docker Compose deployment.",
        ),
        (
            "NextHire — placement and interview preparation",
            "Python, FastAPI, MongoDB, Gemini, Docker, AWS EC2",
            "Resume analysis and ATS scoring, cover letters streamed with server-sent events, and an AI interview simulator, deployed with Docker and HTTPS on AWS EC2.",
        ),
    ]
    for title, stack, body in project_blocks:
        text(title, left, y, "Calibri-Bold", 8.8)
        y -= 10.4
        text(stack, left, y, "Calibri", 7.8, MUTED)
        y -= 10.4
        bullet(body, 8.3, 10.3)
        y -= 1.5

    heading("Skills")
    skill_lines = [
        "Languages: C, C++, Python, Java, JavaScript, TypeScript",
        "Frontend: React.js, Next.js, Vue.js, Nuxt.js, HTML5, CSS3, Tailwind CSS, Bootstrap, Vuetify",
        "Backend: Node.js, Express.js, Hono.js, Django, FastAPI, REST APIs, JWT, RBAC, Socket.IO",
        "Data & AI: MongoDB, MySQL, SQL, Pinecone, RAG, LangChain, GPT-4, Gemini, prompt engineering, LLM evaluation",
        "Cloud & CS: Docker, Azure Blob Storage, AWS EC2, Git, Vercel, CI/CD, DSA, OOP, DBMS, OS, networks, system design",
    ]
    for line in skill_lines:
        text(line, left, y, "Calibri", 8)
        y -= 10.2

    heading("Achievements")
    achievements = [
        "AIR 844, TCS CodeVita. 700+ DSA problems solved. 500+ day LeetCode streak. Winner, GeeksforGeeks 21 Days Challenge.",
        "Semi-finalist, Smart India Hackathon 2025. Winner, Convergex Hackathon (JSS University). Runner-up, CodeShowdown, BVCOE Delhi. Finalist, AM Hacks, IGDTUW.",
    ]
    for item in achievements:
        bullet(item, 8.3, 10.4)

    heading("Certifications")
    text("Generative AI & Cloud Computing — AICTE · IBM SkillsBuild", left, y, "Calibri", 8.3)
    y -= 10.4
    text("Crash Course on Python — Google", left, y, "Calibri", 8.3)

    print("bottom y", round(y, 1))
    if y < 0.42 * inch:
        raise SystemExit(f"Resume overflow, bottom y={y}")
    c.showPage()
    c.save()


def optimize_photo() -> None:
    source = PUBLIC / "photo.jpg"
    image = Image.open(source).convert("RGB")
    image.thumbnail((1200, 1600), Image.Resampling.LANCZOS)
    image.save(source, "JPEG", quality=82, optimize=True)
    print("photo", image.size, source.stat().st_size)


def build_og() -> None:
    image = Image.new("RGB", (1200, 630), "#08080a")
    draw = ImageDraw.Draw(image)
    for x in range(0, 1200, 48):
        draw.line([(x, 0), (x, 630)], fill="#16161c", width=1)
    for y in range(0, 630, 48):
        draw.line([(0, y), (1200, y)], fill="#16161c", width=1)
    draw.rectangle([(0, 0), (8, 630)], fill="#8d74f5")
    display = ImageFont.truetype(str(FONTS / "georgia.ttf"), 92)
    italic = ImageFont.truetype(str(FONTS / "georgiai.ttf"), 36)
    body = ImageFont.truetype(str(FONTS / "calibri.ttf"), 28)
    draw.text((72, 168), "Aparna Ojha", font=display, fill="#f4f0e8")
    draw.text((74, 290), "Software engineer", font=italic, fill="#e4c99a")
    draw.text((74, 360), "Full-stack products  ·  AI systems", font=body, fill="#b7b1a8")
    draw.text((74, 520), "aparna-ojha.vercel.app", font=body, fill="#c9b8ff")
    image.save(PUBLIC / "og.png", "PNG", optimize=True)
    print("og", image.size)


def hero_size() -> None:
    with Image.open(PUBLIC / "hero.png") as shot:
        print("hero", shot.size)


if __name__ == "__main__":
    out = PUBLIC / "aparna_ojha_resume.pdf"
    draw_resume(out)
    optimize_photo()
    build_og()
    hero_size()
    from pypdf import PdfReader

    reader = PdfReader(str(out))
    print("pages", len(reader.pages))
    print(reader.pages[0].extract_text())
