import { useRouter } from "@tanstack/react-router";
import { ArrowLeft } from "lucide-react";
import { motion } from "framer-motion";

const cls =
  "fixed top-3 left-3 md:top-4 md:left-4 z-[60] h-11 w-11 md:h-12 md:w-12 grid place-items-center rounded-full bg-white border border-[var(--border)] shadow-xl text-[var(--maroon)] hover:bg-[var(--maroon)] hover:text-[var(--cream)] transition-colors";

export function BackButton() {
  const router = useRouter();
  const anim = { whileTap: { scale: 0.82 }, whileHover: { scale: 1.06 }, transition: { type: "spring" as const, stiffness: 500, damping: 18 } };
  const onClick = () => {
    if (typeof window !== "undefined" && window.history.length > 1) {
      router.history.back();
    } else {
      router.navigate({ to: "/" });
    }
  };
  return (
    <motion.button {...anim} onClick={onClick} aria-label="Go back" type="button" className={cls}>
      <ArrowLeft size={20} />
    </motion.button>
  );
}
