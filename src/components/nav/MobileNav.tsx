import { useState } from "react";
import { motion } from "framer-motion";
import ActionButton from "../buttons/ActionButton";
import Toggle from "./Toggle";
import MobileNavActions from "./MobileNavActions";
import Logo from "../logo/Logo";
import MobileNavItems from "./MobileNavItems";

const slideVariants = {
  open: { width: "100vw", opacity: 1, x: 0 },
  closed: { width: 0, opacity: 0, x: "-100%" },
};

type Props = {
  isOpen: boolean;
};

const MobileNav = ({ isOpen }: Props) => {
  return (
    <motion.nav
      initial={false}
      animate={isOpen ? "open" : "closed"}
      variants={slideVariants}
      className="fixed z-40 flex h-screen flex-col justify-between bg-white p-5 md:hidden"
    >
      <Logo />
      <MobileNavItems />
      <MobileNavActions />
    </motion.nav>
  );
};

export default MobileNav;
