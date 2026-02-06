import type { Metadata } from "next";
import { Suspense } from "react";

import AdminUsersSearchPage from "./page";

export const metadata: Metadata = {
  title: "Users Search | GOAT-chan",
  openGraph: {
    title: "Users Search | GOAT-chan",
  },
};

export default function Page() {
  return (
    <Suspense>
      <AdminUsersSearchPage />
    </Suspense>
  );
}
