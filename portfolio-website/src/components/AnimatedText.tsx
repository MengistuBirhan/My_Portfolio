import { motion, useReducedMotion } from "framer-motion";

interface Props {
  text: string;
  className?: string;
}

/**
 * Reveals the text with a soft left-to-right wipe and a blur fade, then keeps a
 * gentle light sweep moving across it. A growing underline finishes the entrance.
 * Changing `text` (for example when the language switches) replays the entrance.
 */
export default function AnimatedText({ text, className }: Props) {
  const reduce = useReducedMotion();

  if (reduce) {
    return <span className={`shimmer-text ${className ?? ""}`}>{text}</span>;
  }

  return (
    <span key={text} className={`relative inline-block pb-2 ${className ?? ""}`}>
      <motion.span
        className="shimmer-text inline-block"
        initial={{ clipPath: "inset(0 100% 0 0)", opacity: 0, filter: "blur(8px)" }}
        animate={{ clipPath: "inset(0 0% 0 0)", opacity: 1, filter: "blur(0px)" }}
        transition={{ duration: 1.1, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
      >
        {text}
      </motion.span>
      <motion.span
        aria-hidden="true"
        className="absolute bottom-0 left-0 h-[3px] w-full origin-left rounded-full bg-gradient-to-r from-primary-600 to-primary-400"
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 0.8, delay: 1.2, ease: "easeOut" }}
      />
    </span>
  );
}
