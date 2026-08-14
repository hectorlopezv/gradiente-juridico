"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { MessageCircle, Send, X } from "lucide-react";
import { Button, buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import {
  getBotReply,
  getWelcomeMessage,
  getWhatsAppUrl,
  quickQuestions,
} from "@/lib/chatbot";
import { contact } from "@/lib/data";

interface Message {
  id: number;
  role: "bot" | "user";
  content: string;
  whatsappUrl?: string;
}

let messageId = 0;

function nextId() {
  messageId += 1;
  return messageId;
}

function renderContent(content: string) {
  return content.split("\n").map((line, index) => {
    const parts = line.split(/\*\*(.*?)\*\*/g);
    return (
      <span key={index}>
        {index > 0 && <br />}
        {parts.map((part, i) =>
          i % 2 === 1 ? (
            <strong key={i}>{part}</strong>
          ) : (
            <span key={i}>{part}</span>
          )
        )}
      </span>
    );
  });
}

export function SupportChatbot() {
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState<Message[]>([]);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (open && messages.length === 0) {
      setMessages([
        {
          id: nextId(),
          role: "bot",
          content: getWelcomeMessage(),
        },
      ]);
    }
  }, [open, messages.length]);

  useEffect(() => {
    scrollRef.current?.scrollTo({
      top: scrollRef.current.scrollHeight,
      behavior: "smooth",
    });
  }, [messages]);

  function sendMessage(text: string) {
    const trimmed = text.trim();
    if (!trimmed) return;

    const userMessage: Message = {
      id: nextId(),
      role: "user",
      content: trimmed,
    };

    const reply = getBotReply(trimmed);
    const botMessage: Message = {
      id: nextId(),
      role: "bot",
      content: reply.content,
      whatsappUrl: reply.redirectWhatsApp
        ? getWhatsAppUrl(reply.whatsappMessage)
        : undefined,
    };

    setMessages((prev) => [...prev, userMessage, botMessage]);
    setInput("");
  }

  function handleSubmit(event: React.FormEvent) {
    event.preventDefault();
    sendMessage(input);
  }

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">
      {open && (
        <div
          className={cn(
            "flex w-[min(100vw-2rem,22rem)] flex-col overflow-hidden rounded-2xl border border-border/60",
            "bg-background shadow-2xl shadow-brand-navy/10"
          )}
          role="dialog"
          aria-label="Asistente de soporte"
        >
          <header className="flex items-center justify-between bg-brand-navy px-4 py-3 text-white">
            <div>
              <p className="text-sm font-medium">Asistente Gradiente</p>
              <p className="text-xs text-white/70">
                Propiedad intelectual · FAQ
              </p>
            </div>
            <Button
              variant="ghost"
              size="icon-sm"
              className="text-white hover:bg-white/10 hover:text-white"
              onClick={() => setOpen(false)}
              aria-label="Cerrar chat"
            >
              <X className="size-4" />
            </Button>
          </header>

          <div
            ref={scrollRef}
            className="flex max-h-72 flex-col gap-3 overflow-y-auto px-4 py-4"
          >
            {messages.map((message) => (
              <div
                key={message.id}
                className={cn(
                  "max-w-[90%] rounded-2xl px-3 py-2 text-sm leading-relaxed",
                  message.role === "user"
                    ? "ml-auto bg-brand-navy text-white"
                    : "mr-auto bg-muted text-foreground"
                )}
              >
                {renderContent(message.content)}
                {message.whatsappUrl && (
                  <Link
                    href={message.whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={cn(
                      buttonVariants({ size: "sm" }),
                      "mt-3 inline-flex bg-[#25D366] text-white hover:bg-[#20bd5a]"
                    )}
                  >
                    Continuar por WhatsApp
                  </Link>
                )}
              </div>
            ))}
          </div>

          {messages.length <= 1 && (
            <div className="flex flex-wrap gap-2 px-4 pb-3">
              {quickQuestions.map((question) => (
                <button
                  key={question}
                  type="button"
                  onClick={() => sendMessage(question)}
                  className="rounded-full border border-border/60 px-3 py-1 text-xs text-muted-foreground transition-colors hover:border-brand-navy/30 hover:text-brand-navy"
                >
                  {question}
                </button>
              ))}
            </div>
          )}

          <form
            onSubmit={handleSubmit}
            className="flex items-center gap-2 border-t border-border/60 px-3 py-3"
          >
            <input
              type="text"
              value={input}
              onChange={(event) => setInput(event.target.value)}
              placeholder="Escribe tu pregunta..."
              className="min-w-0 flex-1 rounded-lg border border-border/60 bg-background px-3 py-2 text-sm outline-none focus-visible:border-brand-navy/40 focus-visible:ring-2 focus-visible:ring-brand-navy/20"
              aria-label="Mensaje"
            />
            <Button
              type="submit"
              size="icon"
              className="shrink-0 bg-brand-navy hover:bg-brand-navy/90"
              aria-label="Enviar mensaje"
            >
              <Send className="size-4" />
            </Button>
          </form>

          <p className="border-t border-border/40 px-4 py-2 text-center text-[10px] text-muted-foreground">
            Atención humana: {contact.person} · WhatsApp {contact.phoneIntl}
          </p>
        </div>
      )}

      <Button
        size="icon-lg"
        className="size-14 rounded-full bg-brand-navy shadow-lg shadow-brand-navy/25 hover:bg-brand-navy/90"
        onClick={() => setOpen((prev) => !prev)}
        aria-label={open ? "Cerrar asistente" : "Abrir asistente"}
        aria-expanded={open}
      >
        {open ? <X className="size-6" /> : <MessageCircle className="size-6" />}
      </Button>
    </div>
  );
}
