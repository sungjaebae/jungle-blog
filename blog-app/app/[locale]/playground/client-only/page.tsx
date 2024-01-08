"use client";

import React from "react";
import { Layout, Header, InfoBox, PostList } from "@/components-playground";

function ClientOnly() {
  return (
    <Layout>
      <Header />
      <InfoBox>This data is loaded on client and not prefetched</InfoBox>
      <PostList />
    </Layout>
  );
}

export default ClientOnly;
