"use client";

import { useEffect, useRef } from "react";
import { createPortal } from "react-dom";

type Props = {
  children: React.ReactNode;
  show?: boolean;
  onClose?: () => void;
  selector?: string;
};
const ClientPortal = ({ children, selector, show }: Props) => {
  const ref = useRef<Element | null>(null);
  useEffect(() => {
    ref.current = selector ? document.getElementById(selector) : document.body;
  }, [selector]);
  return ref.current ? createPortal(children, ref.current) : null;
};
export default ClientPortal;
