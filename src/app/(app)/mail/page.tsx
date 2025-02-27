// src/app/mail/u/[userId]/page.tsx
"use client";

import InboxList from "@/components/page/mail/inbox/mail";
import InboxNavbar from "@/components/page/mail/common/inbox-navbar";
import useHash from "@/hooks/use-hash";
import { Typography } from "@mui/material";
import EmailSidebar from "@/components/page/mail/common/email-sidebar/mail-sidebar";

export default function MailPage() {
  const hash = useHash();

  return (
    <div className="w-full pb-2">
      <Typography
        sx={{
          mb: 1,
          fontSize: 32,
          lineHeight: "43.5px",
          textAlign: "start",
          fontWeight: 500,
        }}
      >
        Inbox
      </Typography>
      <EmailSidebar>
        <InboxNavbar />
        {hash === "#inbox" && <InboxList title="inbox" />}
        {hash === "#starred" && <InboxList title="star" />}
        {hash === "#sent" && <InboxList title="sent" />}
        {hash === "#draft" && <InboxList title="draft" />}
        {hash === "#spam" && <InboxList title="spam" />}
        {hash === "#important" && <InboxList title="important" />}
        {hash === "#bin" && <InboxList title="bin" />}
      </EmailSidebar>
    </div>
  );
}
