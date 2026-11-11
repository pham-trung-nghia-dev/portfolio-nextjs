"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { X, Send, User, Loader2, Sparkles, Minimize2 } from "lucide-react";

interface ChatMessage {
  role: "user" | "assistant";
  content: string;
}

const QUICK_QUESTIONS = [
  "Nghĩa có kinh nghiệm gì?",
  "Kỹ năng backend chính là gì?",
  "Làm sao liên hệ với Nghĩa?",
];

export default function ChatBot() {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      role: "assistant",
      content:
        "Xin chào! Tui là trợ lý AI của Nghĩa. Bạn muốn tìm hiểu gì về kinh nghiệm, kỹ năng hay dự án của Nghĩa?",
    },
  ]);

  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    if (isOpen) {
      scrollToBottom();
      setTimeout(() => inputRef.current?.focus(), 150);
    }
  }, [isOpen, messages]);

  const handleSend = async (customText?: string) => {
    const textToSend = customText ?? input;
    if (!textToSend.trim() || isLoading) return;

    const userMessage: ChatMessage = { role: "user", content: textToSend.trim() };
    const updatedMessages = [...messages, userMessage];
    setMessages(updatedMessages);
    if (!customText) setInput("");
    setIsLoading(true);

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: updatedMessages }),
      });

      const data = await res.json();
      if (res.ok && data.reply) {
        setMessages((prev) => [...prev, { role: "assistant", content: data.reply }]);
      } else {
        setMessages((prev) => [
          ...prev,
          {
            role: "assistant",
            content:
              data.error ||
              "Tự nhiên thấy hơi mệt ngang, cho tui 'ngủ trưa' tầm 5 phút nha. Bạn uống miếng nước rồi quay lại thử lại với tui sau nghen! ☕",
          },
        ]);
      }
    } catch {
      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content:
            "Tự nhiên thấy hơi mệt ngang, cho tui 'ngủ trưa' tầm 5 phút nha. Bạn uống miếng nước rồi quay lại thử lại với tui sau nghen! ☕",
        },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <aside
      aria-label="AI Chatbot Assistant"
      className="fixed bottom-5 right-5 z-[9999] flex flex-col items-end"
    >
      {/* Chat Window */}
      {isOpen && (
        <div
          role="dialog"
          aria-label="Hộp thoại chat AI"
          data-lenis-prevent
          className="mb-3 w-[92vw] sm:w-[380px] h-[520px] max-h-[80vh] flex flex-col rounded-2xl bg-zinc-950/95 dark:bg-zinc-900/95 border border-zinc-800 text-zinc-100 shadow-2xl backdrop-blur-xl overflow-hidden animate-in fade-in slide-in-from-bottom-4 duration-200"
        >
          {/* Header */}
          <div className="flex items-center justify-between px-4 py-3 border-b border-zinc-800/80 bg-zinc-900/50">
            <div className="flex items-center gap-2.5">
              <div className="relative flex h-8 w-8 items-center justify-center rounded-full overflow-hidden shadow-sm">
                <Image
                  src="/assets/gemini-svg.svg"
                  alt="Chatbot Avatar"
                  width={32}
                  height={32}
                  className="w-full h-full object-contain"
                />
                <span className="absolute -bottom-0.5 -right-0.5 h-2 w-2 rounded-full bg-emerald-500 ring-2 ring-zinc-950" />
              </div>
              <div>
                <h2 className="text-sm font-semibold text-zinc-100 leading-none">
                  Nghĩa AI Assistant
                </h2>
                <p className="text-[11px] text-zinc-400 mt-1 flex items-center gap-1">
                  <Sparkles className="h-2.5 w-2.5 text-amber-400" /> by Phạm Trung Nghĩa
                </p>
              </div>
            </div>
            <div className="flex items-center gap-1">
              <button
                type="button"
                onClick={() => setIsOpen(false)}
                className="rounded-lg p-1 text-zinc-400 hover:text-zinc-200 hover:bg-zinc-800/60 transition"
                aria-label="Đóng chat"
              >
                <Minimize2 className="h-4 w-4" />
              </button>
              <button
                type="button"
                onClick={() => setIsOpen(false)}
                className="rounded-lg p-1 text-zinc-400 hover:text-zinc-200 hover:bg-zinc-800/60 transition"
                aria-label="Thoát chat"
              >
                <X className="h-4 w-4" />
              </button>
            </div>
          </div>

          {/* Messages list */}
          <div
            data-lenis-prevent
            className="flex-1 overflow-y-auto p-4 space-y-3 text-sm overscroll-contain scrollbar-thin scrollbar-thumb-zinc-700"
          >
            {messages.map((m, idx) => (
              <div
                key={idx}
                className={`flex gap-2.5 ${
                  m.role === "user" ? "justify-end" : "justify-start"
                }`}
              >
                {m.role === "assistant" && (
                  <div className="flex-shrink-0 h-7 w-7 rounded-full overflow-hidden flex items-center justify-center mt-0.5 shadow-sm">
                    <Image
                      src="/assets/gemini-svg.svg"
                      alt="Bot"
                      width={28}
                      height={28}
                      className="w-full h-full object-contain"
                    />
                  </div>
                )}
                <div
                  className={`max-w-[80%] rounded-2xl px-3.5 py-2 text-xs sm:text-sm whitespace-pre-wrap leading-relaxed shadow-sm ${
                    m.role === "user"
                      ? "bg-emerald-600 text-white rounded-tr-none"
                      : "bg-zinc-800/80 text-zinc-200 border border-zinc-700/50 rounded-tl-none"
                  }`}
                >
                  {m.content}
                </div>
                {m.role === "user" && (
                  <div className="flex-shrink-0 h-7 w-7 rounded-full bg-zinc-800 text-zinc-300 border border-zinc-700 flex items-center justify-center mt-0.5">
                    <User className="h-3.5 w-3.5" />
                  </div>
                )}
              </div>
            ))}

            {isLoading && (
              <div className="flex gap-2.5 justify-start">
                <div className="flex-shrink-0 h-7 w-7 rounded-full overflow-hidden flex items-center justify-center mt-0.5 shadow-sm">
                  <Image
                    src="/assets/gemini-svg.svg"
                    alt="Bot"
                    width={28}
                    height={28}
                    className="w-full h-full object-contain"
                  />
                </div>
                <div className="rounded-2xl rounded-tl-none px-3.5 py-2 bg-zinc-800/80 text-zinc-400 border border-zinc-700/50 flex items-center gap-1.5 text-xs">
                  <Loader2 className="h-3.5 w-3.5 animate-spin text-emerald-400" />
                  <span>Đang suy nghĩ...</span>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Quick Questions */}
          {messages.length <= 2 && (
            <div className="px-3 pb-2 flex gap-1.5 flex-wrap">
              {QUICK_QUESTIONS.map((q, idx) => (
                <button
                  type="button"
                  key={idx}
                  onClick={() => handleSend(q)}
                  className="text-[11px] px-2.5 py-1 rounded-full bg-zinc-800/60 hover:bg-zinc-700/60 text-zinc-300 border border-zinc-700/40 transition text-left"
                >
                  {q}
                </button>
              ))}
            </div>
          )}

          {/* Input Box */}
          <div className="p-3 border-t border-zinc-800/80 bg-zinc-900/30">
            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleSend();
              }}
              className="flex items-center gap-2"
            >
              <input
                ref={inputRef}
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="Hỏi về Nghĩa..."
                disabled={isLoading}
                className="flex-1 bg-zinc-800/70 border border-zinc-700/60 rounded-xl px-3.5 py-2 text-xs sm:text-sm text-zinc-100 placeholder-zinc-500 focus:outline-none focus:border-emerald-500/80 transition disabled:opacity-50"
              />
              <button
                type="submit"
                disabled={!input.trim() || isLoading}
                className="h-9 w-9 rounded-xl bg-emerald-500 hover:bg-emerald-600 disabled:bg-zinc-800 text-white disabled:text-zinc-600 flex items-center justify-center transition shadow-md"
                aria-label="Gửi tin nhắn"
              >
                <Send className="h-4 w-4" />
              </button>
            </form>
          </div>
        </div>
      )}

      {/* Floating Trigger Button */}
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="group relative flex h-14 w-14 p-2 items-center justify-center rounded-full bg-zinc-900/90 hover:bg-zinc-800 border border-zinc-700/60 shadow-xl hover:scale-105 transition active:scale-95 backdrop-blur-md"
        aria-label={isOpen ? "Đóng chatbot" : "Mở chatbot AI"}
      >
        {isOpen ? (
          <X className="h-6 w-6 text-zinc-300" />
        ) : (
          <>
            <Image
              src="/assets/gemini-svg.svg"
              alt="Chatbot AI"
              width={38}
              height={38}
              className="w-full h-full object-contain drop-shadow"
            />
            <span className="absolute -top-1 -right-1 flex h-4 w-4 items-center justify-center rounded-full bg-emerald-500 text-[10px] font-bold text-white shadow ring-2 ring-zinc-950 animate-pulse">
              AI
            </span>
          </>
        )}
      </button>
    </aside>
  );
}

