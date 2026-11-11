import { NextRequest, NextResponse } from "next/server";
import { config } from "@/data/config";
import { EXPERIENCE, SKILLS } from "@/data/constants";
import { SKILL_CAPABILITIES } from "@/data/skill-capabilities";

// Construct resume & profile knowledge base
const skillsSummary = Object.values(SKILLS)
  .map((s) => `- ${s.label}: ${s.shortDescription}`)
  .join("\n");

const capabilitiesSummary = Object.entries(SKILL_CAPABILITIES)
  .map(([key, cap]) => `* ${cap.title} (${cap.category}):\n  ${cap.capabilities.map((c) => `- ${c}`).join("\n  ")}`)
  .join("\n");

const experienceSummary = EXPERIENCE.map((e) => {
  const period = e.periods.map((p) => `${p.start} - ${p.end}`).join(", ");
  return `* Vị trí: ${e.title} tại ${e.company} (${period})\n  Mô tả:\n  ${e.description.map((d) => `- ${d}`).join("\n  ")}`;
}).join("\n\n");

const SYSTEM_INSTRUCTION = `Bạn là trợ lý AI ảo đại diện cho ${config.author} trên website Portfolio cá nhân.
Nhiệm vụ của bạn:
1. Trả lời các câu hỏi của nhà tuyển dụng hoặc khách truy cập về Phạm Trung Nghĩa (kinh nghiệm, kỹ năng, dự án, thông tin liên hệ).
2. Phong cách trả lời: Lịch sự, chuyên nghiệp, tự tin, ngắn gọn, thân thiện và trung thực theo đúng dữ liệu được cung cấp dưới đây.
3. Nếu người dùng hỏi thông tin không có trong hồ sơ (hoặc câu hỏi ngoài lề cuộc sống riêng tư), hãy từ tốn giải thích và hướng dẫn họ liên hệ trực tiếp qua Email hoặc Zalo của Nghĩa.
4. Ưu tiên trả lời bằng ngôn ngữ người dùng hỏi (chủ yếu là Tiếng Việt hoặc Tiếng Anh).

--- THÔNG TIN VỀ PHẠM TRUNG NGHĨA ---
- Họ và tên: ${config.author}
- Chuyên môn: ${config.title}
- Giới thiệu: ${config.description.long}
- Email: ${config.email}
- Zalo: ${config.social.zalo}
- LinkedIn: ${config.social.linkedin}
- GitHub: ${config.social.github}
- Link CV/Resume: ${config.resume}

--- KINH NGHIỆM LÀM VIỆC ---
${experienceSummary}

--- KỸ NĂNG CÔNG NGHỆ ---
${skillsSummary}

--- NĂNG LỰC CHI TIẾT ---
${capabilitiesSummary}
`;

export async function POST(req: NextRequest) {
  try {
    const apiKey = process.env.GEMINI_API_KEY;
    if (!apiKey) {
      return NextResponse.json(
        { error: "Tự nhiên thấy hơi mệt ngang, cho tui 'ngủ trưa' tầm 5 phút nha. Bạn uống miếng nước rồi quay lại thử lại với tui sau nghen! ☕" },
        { status: 500 }
      );
    }

    const { messages } = await req.json();
    if (!messages || !Array.isArray(messages)) {
      return NextResponse.json(
        { error: "Danh sách messages không hợp lệ." },
        { status: 400 }
      );
    }

    // Convert messages to Gemini format: role 'user' or 'model'
    const contents = messages.map((m: { role: string; content: string }) => ({
      role: m.role === "assistant" ? "model" : "user",
      parts: [{ text: m.content }],
    }));

    // Calling Gemini 3.5 Flash Lite REST endpoint
    const url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-3.5-flash-lite:generateContent?key=${apiKey}`;

    const response = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        system_instruction: {
          parts: [{ text: SYSTEM_INSTRUCTION }],
        },
        contents,
        generationConfig: {
          temperature: 0.7,
          maxOutputTokens: 2048,
        },
      }),
    });

    if (!response.ok) {
      const errText = await response.text();
      console.error("Gemini API error:", errText);
      return NextResponse.json(
        { error: "Tự nhiên thấy hơi mệt ngang, cho tui 'ngủ trưa' tầm 5 phút nha. Bạn uống miếng nước rồi quay lại thử lại với tui sau nghen! ☕" },
        { status: response.status }
      );
    }

    const data = await response.json();
    const reply =
      data.candidates?.[0]?.content?.parts?.[0]?.text ||
      "Tự nhiên thấy hơi mệt ngang, cho tui 'ngủ trưa' tầm 5 phút nha. Bạn uống miếng nước rồi quay lại thử lại với tui sau nghen! ☕";

    return NextResponse.json({ reply });
  } catch (error: any) {
    console.error("Chat API internal error:", error?.message || error);
    return NextResponse.json(
      { error: "Tự nhiên thấy hơi mệt ngang, cho tui 'ngủ trưa' tầm 5 phút nha. Bạn uống miếng nước rồi quay lại thử lại với tui sau nghen! ☕" },
      { status: 500 }
    );
  }
}

