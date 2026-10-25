"use client";
import { cn } from "@/lib/utils";
import { IconLayoutNavbarCollapse } from "@tabler/icons-react";
import {
  AnimatePresence,
  MotionValue,
  motion,
  useMotionValue,
  useSpring,
  useTransform,
} from "motion/react";
import { useRef, useState } from "react";

export const FloatingDock = ({
  items,
  desktopClassName,
  mobileClassName,
  tooltipPosition = "bottom",
  mobileMenuPosition = "bottom",
}: {
  items: { title: string; icon: React.ReactNode; href: string }[];
  desktopClassName?: string;
  mobileClassName?: string;
  tooltipPosition?: "top" | "bottom";
  mobileMenuPosition?: "top" | "bottom";
}) => {
  return (
    <>
      <FloatingDockDesktop
        items={items}
        className={desktopClassName}
        tooltipPosition={tooltipPosition}
      />
      <FloatingDockMobile
        items={items}
        className={mobileClassName}
        mobileMenuPosition={mobileMenuPosition}
      />
    </>
  );
};

const FloatingDockMobile = ({
  items,
  className,
  mobileMenuPosition = "bottom",
}: {
  items: { title: string; icon: React.ReactNode; href: string }[];
  className?: string;
  mobileMenuPosition?: "top" | "bottom";
}) => {
  const [open, setOpen] = useState(false);
  return (
    <div className={cn("relative block md:hidden", className)}>
      <AnimatePresence>
        {open && (
          <motion.div
            layoutId="nav"
            className={cn(
              "absolute inset-x-0 flex flex-col gap-2 items-center",
              mobileMenuPosition === "bottom" ? "top-full mt-2" : "bottom-full mb-2"
            )}
          >
            {items.map((item, idx) => {
              const isExternal = item.href.startsWith("http");
              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: mobileMenuPosition === "bottom" ? -10 : 10 }}
                  animate={{
                    opacity: 1,
                    y: 0,
                  }}
                  exit={{
                    opacity: 0,
                    y: mobileMenuPosition === "bottom" ? -10 : 10,
                    transition: {
                      delay: idx * 0.05,
                    },
                  }}
                  transition={{ delay: (items.length - 1 - idx) * 0.05 }}
                >
                  <a
                    href={item.href}
                    target={isExternal ? "_blank" : undefined}
                    rel={isExternal ? "noopener noreferrer" : undefined}
                    onClick={() => setOpen(false)}
                    key={item.title}
                    className="flex h-10 w-10 items-center justify-center rounded-full bg-white/80 backdrop-blur-md border border-[#D5D2CB] text-[#151514] shadow-sm dark:bg-neutral-900/80 dark:border-neutral-800 dark:text-white"
                  >
                    <div className="h-4 w-4">{item.icon}</div>
                  </a>
                </motion.div>
              );
            })}
          </motion.div>
        )}
      </AnimatePresence>
      <button
        type="button"
        aria-label="Toggle navigation menu"
        onClick={() => setOpen(!open)}
        className="flex h-10 w-10 items-center justify-center rounded-full bg-white/80 backdrop-blur-md border border-[#D5D2CB] shadow-sm text-[#151514] dark:bg-neutral-800/80 dark:border-neutral-700 dark:text-neutral-300"
      >
        <IconLayoutNavbarCollapse className="h-5 w-5 text-[#151514] dark:text-neutral-300" />
      </button>
    </div>
  );
};

const FloatingDockDesktop = ({
  items,
  className,
  tooltipPosition = "bottom",
}: {
  items: { title: string; icon: React.ReactNode; href: string }[];
  className?: string;
  tooltipPosition?: "top" | "bottom";
}) => {
  const mouseX = useMotionValue(Infinity);
  return (
    <motion.div
      onMouseMove={(e) => mouseX.set(e.pageX)}
      onMouseLeave={() => mouseX.set(Infinity)}
      className={cn(
        "mx-auto hidden h-16 items-end gap-3 rounded-2xl bg-white/70 backdrop-blur-xl border border-[#D5D2CB]/80 px-4 pb-3 md:flex shadow-[0_8px_32px_rgba(0,0,0,0.06)] dark:bg-neutral-900/70 dark:border-white/10",
        className,
      )}
    >
      {items.map((item) => (
        <IconContainer
          mouseX={mouseX}
          key={item.title}
          tooltipPosition={tooltipPosition}
          {...item}
        />
      ))}
    </motion.div>
  );
};

function IconContainer({
  mouseX,
  title,
  icon,
  href,
  tooltipPosition = "bottom",
}: {
  mouseX: MotionValue;
  title: string;
  icon: React.ReactNode;
  href: string;
  tooltipPosition?: "top" | "bottom";
}) {
  const ref = useRef<HTMLDivElement>(null);

  const distance = useTransform(mouseX, (val) => {
    const bounds = ref.current?.getBoundingClientRect() ?? { x: 0, width: 0 };
    return val - bounds.x - bounds.width / 2;
  });

  const widthTransform = useTransform(distance, [-150, 0, 150], [40, 80, 40]);
  const heightTransform = useTransform(distance, [-150, 0, 150], [40, 80, 40]);

  const widthTransformIcon = useTransform(distance, [-150, 0, 150], [20, 40, 20]);
  const heightTransformIcon = useTransform(
    distance,
    [-150, 0, 150],
    [20, 40, 20],
  );

  const width = useSpring(widthTransform, {
    mass: 0.1,
    stiffness: 150,
    damping: 12,
  });
  const height = useSpring(heightTransform, {
    mass: 0.1,
    stiffness: 150,
    damping: 12,
  });

  const widthIcon = useSpring(widthTransformIcon, {
    mass: 0.1,
    stiffness: 150,
    damping: 12,
  });
  const heightIcon = useSpring(heightTransformIcon, {
    mass: 0.1,
    stiffness: 150,
    damping: 12,
  });

  const [hovered, setHovered] = useState(false);
  const isExternal = href.startsWith("http");

  return (
    <a
      href={href}
      target={isExternal ? "_blank" : undefined}
      rel={isExternal ? "noopener noreferrer" : undefined}
      aria-label={title}
    >
      <motion.div
        ref={ref}
        style={{ width, height }}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        className="relative flex aspect-square items-center justify-center rounded-full bg-[#EAE8E3]/80 border border-[#D5D2CB]/60 dark:bg-neutral-800/80 dark:border-neutral-700/60 transition-colors"
      >
        <AnimatePresence>
          {hovered && (
            <motion.div
              initial={{
                opacity: 0,
                y: tooltipPosition === "bottom" ? -8 : 8,
                x: "-50%",
              }}
              animate={{ opacity: 1, y: 0, x: "-50%" }}
              exit={{
                opacity: 0,
                y: tooltipPosition === "bottom" ? -4 : 4,
                x: "-50%",
              }}
              className={cn(
                "absolute left-1/2 w-fit rounded-md border border-[#D5D2CB] bg-white/95 backdrop-blur-md px-2.5 py-1 text-xs whitespace-pre font-medium text-[#151514] shadow-sm dark:border-neutral-800 dark:bg-neutral-900/95 dark:text-white pointer-events-none z-50",
                tooltipPosition === "bottom" ? "top-full mt-2.5" : "-top-8"
              )}
            >
              {title}
            </motion.div>
          )}
        </AnimatePresence>
        <motion.div
          style={{ width: widthIcon, height: heightIcon }}
          className="flex items-center justify-center text-[#151514] dark:text-neutral-200"
        >
          {icon}
        </motion.div>
      </motion.div>
    </a>
  );
}

export default FloatingDock;
