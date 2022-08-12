import Layout from "@/components/ui/Layout";
import HomePage from "@/pages/Home/HomePage";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Vymo</title>
      </Head>
      <Layout>
        <HomePage />
      </Layout>
    </>
  );
}
