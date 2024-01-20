
import Head from "next/head";
import { useRouter } from "next/router";
import Footer from "./Footer";
import Navbar from "./NavBar";


/*Container Block will take children coponent & incoming props
  By making use of useRouter by nextjs be will route(switch) 
  between are components from here
*/
export default function ContainerBlock({children, propDetails}) {
    const router = useRouter();

    const siteData = {
        title: "Krishank Tripathi - Developer, Tech enthusiast",
        description: "I've been in web development for 4 years. Get in touch with me to know more.",
        image: "/avatar.jpg",
        type: "website",
        ...propDetails
    };

    return (
      <div>
        <Head>
          <title>{siteData.title}</title>
          <meta name="robots" content="follow, index" />
          <meta content={siteData.description} name="description" />
          <meta
            property="og:url"
            content={`https://yourwebsite.com${router.asPath}`}
          />
          <link
            rel="canonical"
            href={`https://yourwebsite.com${router.asPath}`}
          />
          <meta property="og:type" content={siteData.type} />
          <meta property="og:site_name" content="Krishank Tripathi" />
          <meta property="og:description" content={siteData.description} />
          <meta property="og:title" content={siteData.title} />
          <meta property="og:image" content={siteData.image} />
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:site" content="@krishankTripathi" />
          <meta name="twitter:title" content={siteData.title} />
          <meta name="twitter:description" content={siteData.description} />
          <meta name="twitter:image" content={siteData.image} />
          {siteData.date && (
            <meta property="article:published_time" content={siteData.date} />
          )}
        </Head>
        <main className="dark:bg-gray-800 w-full">
          <Navbar />
          <div className="max-w-6xl  mx-auto px-4 py-10 md:py-20">{children}</div>
          <Footer />
        </main>
      </div>
    );
}
