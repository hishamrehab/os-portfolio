import { useLayoutEffect, useRef } from "react";
import useWindowStore from "../store/window";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { Draggable } from "gsap/all";

gsap.registerPlugin(Draggable);

const WindowWrapper = (Component, windowKey) => {
  const Wrapped = (props) => {
    const { windows, focusWindow } = useWindowStore();
    const { isOpen, zIndex } = windows[windowKey];
    const ref = useRef(null);


    useGSAP(() => {
      const el = ref.current;
      if (!el || !isOpen) return;

      el.style.display = "block";

      gsap.fromTo(el, { scale: 0.8, opacity: 0, y: 40 }, {
        scale: 1, opacity: 1, y: 0, duration: 0.5, ease: "power3.out"
      })
    }, [isOpen]);

    useGSAP(() => {
      const el = ref.current;
      if (!el || !isOpen) return;

      const [instance] = Draggable.create(el, {
        onPress: () => focusWindow(windowKey),
        trigger: el
      });
      return () => instance.kill();
    }, [isOpen, focusWindow, windowKey]);

    useLayoutEffect(() => {
      const el = ref.current;
      if (!el) return;
      el.style.display = isOpen ? "block" : "none";
    }, [isOpen]);


    return <section id={windowKey} ref={ref} style={{
      zIndex,
      cursor: "grab"
    }} className="absolute">
      <Component {...props} />
    </section>
  };


  Wrapped.displayName =
    `WindowWrapper(${Component.displayName || Component.name || "Component"})`;

  return Wrapped;

}

export default WindowWrapper
