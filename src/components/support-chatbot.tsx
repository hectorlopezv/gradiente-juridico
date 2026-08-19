"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { MessageCircle, Send, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import {
  getBotReply,
  getWelcomeReply,
  getWhatsAppUrl,
  OPEN_CHAT_EVENT,
  type ChatReply,
  type QuickAction,
} from "@/lib/chatbot";

interface Message {
  id: number;
  role: "bot" | "user";
  content: string;
  suggestions?: QuickAction[];
  whatsappUrl?: string;
  whatsappLabel?: string;
}

let messageId = 0;
function nextId() {
  messageId += 1;
  return messageId;
}

function toBotMessage(reply: ChatReply): Message {
  return {
    id: nextId(),
    role: "bot",
    content: reply.content,
    suggestions: reply.suggestions,
    whatsappUrl: reply.whatsappMessage
      ? getWhatsAppUrl(reply.whatsappMessage)
      : undefined,
    whatsappLabel: reply.whatsappLabel,
  };
}

export function SupportChatbot() {
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState("");
  const [typing, setTyping] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const scrollRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    function onOpen() {
      setOpen(true);
    }
    window.addEventListener(OPEN_CHAT_EVENT, onOpen);
    return () => window.removeEventListener(OPEN_CHAT_EVENT, onOpen);
  }, []);

  useEffect(() => {
    if (open && messages.length === 0) {
      setMessages([toBotMessage(getWelcomeReply())]);
    }
  }, [open, messages.length]);

  useEffect(() => {
    if (open) {
      const isDesktop = window.matchMedia("(min-width: 768px)").matches;
      if (isDesktop) inputRef.current?.focus();
    }
  }, [open]);

  useEffect(() => {
    scrollRef.current?.scrollTo({
      top: scrollRef.current.scrollHeight,
      behavior: "smooth",
    });
  }, [messages, typing]);

  function sendMessage(text: string) {
    const trimmed = text.trim();
    if (!trimmed || typing) return;

    setMessages((prev) => [
      ...prev,
      { id: nextId(), role: "user", content: trimmed },
    ]);
    setInput("");
    setTyping(true);

    window.setTimeout(() => {
      setMessages((prev) => [...prev, toBotMessage(getBotReply(trimmed))]);
      setTyping(false);
    }, 420);
  }

  const lastBot = [...messages].reverse().find((message) => message.role === "bot");

  return (
    <div
      className={cn(
        "fixed right-3 z-50 flex flex-col items-end gap-3",
        "bottom-[calc(1rem+var(--cookie-h,0px))] md:right-6",
        "md:bottom-[calc(1.5rem+var(--cookie-h,0px))]"
      )}
    >
      {open ? (
      <div
          className={cn(
            "flex flex-col overflow-hidden border border-black/10 bg-white shadow-2xl",
            "w-[min(100vw-1.5rem,26rem)] max-h-[min(34rem,calc(100dvh-6rem-var(--cookie-h,0px)))]",
            "max-md:fixed max-md:inset-x-0 max-md:bottom-0 max-md:w-full max-md:max-h-[min(88dvh,calc(100dvh-var(--cookie-h,0px)))]",
            "max-md:rounded-t-2xl md:rounded-sm"
          )}
          role="dialog"
          aria-label="Asistente de Gradiente Jurídico"
        >
          <header className="flex items-center justify-between bg-[#075E54] px-4 py-3 text-white">
            <div className="min-w-0">
              <p className="truncate text-sm font-semibold tracking-wide">
                Gradiente Jurídico
              </p>
              <p className="text-[11px] text-white/80">
                Asistente · Te conectamos por WhatsApp
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
            className="flex min-h-0 flex-1 flex-col gap-1.5 overflow-y-auto bg-[#ECE5DD] px-3 py-4"
          >
            {messages.map((message) => (
              <div
                key={message.id}
                className={cn(
                  "max-w-[82%] whitespace-pre-wrap px-3 py-2 text-sm leading-relaxed text-[#111B21] shadow-[0_1px_0.5px_rgba(0,0,0,0.13)]",
                  message.role === "user"
                    ? "ml-auto rounded-[1.15rem] rounded-br-[4px] bg-[#D9FDD3]"
                    : "mr-auto rounded-[1.15rem] rounded-bl-[4px] bg-white"
                )}
              >
                {message.content}
              </div>
            ))}
            {typing && (
              <div className="mr-auto rounded-[1.15rem] rounded-bl-[4px] bg-white px-3 py-2 text-sm text-[#667781] shadow-[0_1px_0.5px_rgba(0,0,0,0.13)]">
                Escribiendo…
              </div>
            )}
          </div>

          {!typing && lastBot && (
            <div className="space-y-2.5 border-t border-black/5 px-4 py-3">
              {lastBot.whatsappUrl ? (
                <Link
                  href={lastBot.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#25D366] px-4 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-[#1ebe57]"
                >
                  <svg
                    viewBox="0 0 24 24"
                    className="size-4 fill-current"
                    aria-hidden="true"
                  >
                    <path d="M17.47 14.38c-.27-.14-1.6-.79-1.85-.88-.25-.09-.43-.14-.61.14-.18.27-.7.88-.86 1.06-.16.18-.32.2-.59.07-.27-.14-1.15-.42-2.2-1.35-.81-.72-1.36-1.61-1.52-1.88-.16-.27-.02-.42.12-.55.12-.12.27-.32.41-.48.14-.16.18-.27.27-.45.09-.18.05-.34-.02-.48-.07-.14-.61-1.47-.84-2.01-.22-.53-.45-.46-.61-.46h-.52c-.18 0-.48.07-.73.34-.25.27-.96.94-.96 2.29s.99 2.66 1.13 2.84c.14.18 1.95 2.98 4.73 4.18.66.28 1.18.45 1.58.58.66.21 1.27.18 1.75.11.53-.08 1.6-.65 1.83-1.28.22-.63.22-1.17.16-1.28-.07-.11-.25-.18-.52-.32z" />
                    <path d="M12.04 2C6.5 2 2.02 6.48 2.02 12c0 1.77.46 3.45 1.28 4.91L2 22l5.25-1.38A9.96 9.96 0 0 0 12.04 22C17.56 22 22 17.52 22 12S17.56 2 12.04 2zm0 18.18c-1.64 0-3.22-.44-4.58-1.26l-.33-.2-3.11.82.83-3.04-.21-.31A8.16 8.16 0 0 1 3.86 12c0-4.5 3.67-8.16 8.18-8.16 4.5 0 8.17 3.66 8.17 8.16 0 4.51-3.67 8.18-8.17 8.18z" />
                  </svg>
                  {lastBot.whatsappLabel ?? "Continuar por WhatsApp"}
                </Link>
              ) : null}
              {lastBot.suggestions && lastBot.suggestions.length > 0 ? (
                <div className="flex flex-wrap gap-2">
                  {lastBot.suggestions
                    .filter(
                      (action) =>
                        !/whatsapp/i.test(action.label) &&
                        !/whatsapp/i.test(action.payload)
                    )
                    .map((action) => (
                      <button
                        key={action.payload + action.label}
                        type="button"
                        onClick={() => sendMessage(action.payload)}
                        className="rounded-full border border-black/12 bg-white px-3 py-1.5 text-xs font-medium text-foreground transition-colors hover:border-primary hover:text-primary"
                      >
                        {action.label}
                      </button>
                    ))}
                </div>
              ) : null}
            </div>
          )}

          <form
            onSubmit={(event) => {
              event.preventDefault();
              sendMessage(input);
            }}
            className="flex items-center gap-2 border-t border-black/10 px-3 py-3 pb-[max(0.75rem,env(safe-area-inset-bottom))]"
          >
            <input
              ref={inputRef}
              type="text"
              value={input}
              onChange={(event) => setInput(event.target.value)}
              placeholder="Escribe tu consulta…"
              className="min-w-0 flex-1 border border-black/15 bg-white px-3 py-2 text-sm outline-none focus-visible:border-primary"
              aria-label="Mensaje"
            />
            <Button
              type="submit"
              size="icon"
              disabled={typing || !input.trim()}
              className="shrink-0 rounded-none bg-primary hover:bg-primary/90"
              aria-label="Enviar"
            >
              <Send className="size-4" />
            </Button>
          </form>
        </div>
      ) : null}

      <button
        type="button"
        id="chatbot-toggle"
        className={cn(
          "flex size-14 items-center justify-center rounded-full border border-white/15 bg-black text-white shadow-[0_8px_24px_rgba(0,0,0,0.28)] transition-colors hover:border-primary hover:bg-primary",
          open && "max-md:hidden"
        )}
        onClick={() => setOpen((prev) => !prev)}
        aria-label={open ? "Cerrar asistente" : "Abrir asistente"}
        aria-expanded={open}
      >
        {open ? <X className="size-6" /> : <MessageCircle className="size-6" />}
      </button>
    </div>
  );
}
