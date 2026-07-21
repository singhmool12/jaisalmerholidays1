import { useRouter, Link } from "@tanstack/react-router";
import { ArrowLeft } from "lucide-react";
import { motion } from "framer-motion";

const cls =
  "fixed top-3 left-3 md:top-4 md:left-4 z-[60] h-11 w-11 md:h-12 md:w-12 grid place-items-center rounded-full bg-white border border-[var(--border)] shadow-xl text-[var(--maroon)] hover:bg-[var(--maroon)] hover:text-[var(--cream)] transition-colors";

export function BackButton() {
  const router = useRouter();
  const canBack = typeof window !== "undefined" && window.history.length > 1;
  const anim = { whileTap: { scale: 0.82 }, whileHover: { scale: 1.06 }, transition: { type: "spring" as const, stiffness: 500, damping: 18 } };
  if (canBack) {
    return (
      <motion.button {...anim} onClick={() => router.history.back()} aria-label="Go back" className={cls}>
        <ArrowLeft size={20} />
      </motion.button>
    );
  }
  return (
    <motion.div {...anim} className="inline-block">
      <Link to="/" aria-label="Home" className={cls}>
        <ArrowLeft size={20} />
      </Link>
    </motion.div>
  );
}
