import { useState } from "react";

function useModal() {
  const [isShowingModal, setIsShowingModal] = useState(false);

  function toggle() {
    setIsShowingModal(!isShowingModal);
  }

  return {
    isShowingModal,
    toggle,
  };
}

export { useModal };
