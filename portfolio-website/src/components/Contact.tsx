import { useState, type ChangeEvent, type FormEvent } from "react";
import { Send } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";

type Status = "idle" | "sending" | "success" | "error" | "unconfigured";

// The access key is tied to mengistubirhan721@gmail.com when you create it at web3forms.com.
const ACCESS_KEY = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY;

export default function Contact() {
  const { t } = useLanguage();
  const [fields, setFields] = useState({ name: "", email: "", message: "", website: "" });
  const [status, setStatus] = useState<Status>("idle");

  const onChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setFields((f) => ({ ...f, [e.target.name]: e.target.value }));

  const onSubmit = async (e: FormEvent) => {
    e.preventDefault();

    // Hidden field that real visitors never fill in: silently drop bot submissions.
    if (fields.website) {
      setStatus("success");
      return;
    }
    if (!ACCESS_KEY) {
      setStatus("unconfigured");
      return;
    }

    setStatus("sending");
    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          access_key: ACCESS_KEY,
          subject: `New portfolio message from ${fields.name.trim()}`,
          from_name: "Portfolio website",
          name: fields.name.trim(),
          email: fields.email.trim(),
          message: fields.message.trim(),
        }),
      });
      const data: { success?: boolean } = await res.json();
      if (!res.ok || !data.success) throw new Error("Web3Forms rejected the message");
      setFields({ name: "", email: "", message: "", website: "" });
      setStatus("success");
    } catch {
      setStatus("error");
    }
  };

  const feedback: Partial<Record<Status, string>> = {
    success: t("contact.success"),
    error: t("contact.error"),
    unconfigured: t("contact.unconfigured"),
  };

  return (
    <section id="contact" className="section-padding">
      <div className="mx-auto max-w-2xl">
        <p className="section-subtitle">{t("contact.subtitle")}</p>
        <h2 className="section-title">{t("contact.title")}</h2>
        <p className="mt-4 text-neutral-600 dark:text-neutral-300">{t("contact.intro")}</p>

        <form onSubmit={onSubmit} className="mt-10 space-y-4">
          <input
            name="name"
            value={fields.name}
            onChange={onChange}
            required
            maxLength={100}
            placeholder={t("contact.name")}
            aria-label={t("contact.name")}
            className="input-field"
          />
          <input
            name="email"
            type="email"
            value={fields.email}
            onChange={onChange}
            required
            maxLength={200}
            placeholder={t("contact.email")}
            aria-label={t("contact.email")}
            className="input-field"
          />
          <textarea
            name="message"
            value={fields.message}
            onChange={onChange}
            required
            rows={5}
            maxLength={2000}
            placeholder={t("contact.message")}
            aria-label={t("contact.message")}
            className="input-field resize-y"
          />
          <input
            name="website"
            value={fields.website}
            onChange={onChange}
            tabIndex={-1}
            autoComplete="off"
            aria-hidden="true"
            className="hidden"
          />
          <button type="submit" disabled={status === "sending"} className="btn-primary disabled:opacity-60">
            <Send className="h-4 w-4" />
            {status === "sending" ? t("contact.sending") : t("contact.send")}
          </button>
          {feedback[status] && (
            <p role="status" className={status === "success" ? "text-sm text-accent-600" : "text-sm text-red-600"}>
              {feedback[status]}
            </p>
          )}
        </form>
      </div>
    </section>
  );
}
