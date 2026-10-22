import { useEffect, useState } from "react";

export function useFinePointer() {
  const [fine, setFine] = useState(false);

  useEffect(() => {
    const media = window.matchMedia("(pointer: fine)");
    const update = () => setFine(media.matches);
    update();
    media.addEventListener("change", update);
    return () => media.removeEventListener("change", update);
  }, []);

  return fine;
}
