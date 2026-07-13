"use client";

import {
  UNSTABLE_Toast as Toast,
  UNSTABLE_ToastContent as ToastContent,
  UNSTABLE_ToastRegion as ToastRegionRoot,
} from "react-aria-components";
import { appToastQueue } from "@/lib/toastQueue";

export default function ToastRegion() {
  return (
    <ToastRegionRoot queue={appToastQueue}>
      {({ toast }) => (
        <Toast
          toast={toast}
          className={`contact__toast contact__toast--${toast.content.variant}`}
        >
          <ToastContent>{toast.content.message}</ToastContent>
        </Toast>
      )}
    </ToastRegionRoot>
  );
}
