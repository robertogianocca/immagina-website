// HOME IMPRESA

import NavigationBar from "@/components/NavigationBar/NavigationBar";
import Wrapper from "@/components/Wrapper/Wrapper";
import HomePage from "@/components/HomePage/HomePage";

export default function Azienda() {
  return (
    <>
      <NavigationBar
        menuColor="text-blue-700 hover:border-b-2 hover:border-blue-700"
        bgColor="bg-slate-300 lg:shadow-xl lg:shadow-slate-200"
      />
      <Wrapper>
        <section id="home" className="h-space sm:h-full md:min-h-space overflow-hidden">
          <HomePage />
        </section>
      </Wrapper>
    </>
    // <div className="p-24 bg-red-200">
    //   <Link href="/impresa" scroll={false} className="bg-blue-500 p-10 fixed right-10">
    //     <button>SWITCH</button>
    //   </Link>
    //   <h1>CULTURA PAGE</h1>
    //   <div className="h-96 w-96">
    //     <PortfolioCategoryCard
    //       title="Title"
    //       description="Description"
    //       shortDescription="Short description"
    //       cover=""
    //       transformedCategoriesFromPath=""
    //       addClass=""
    //     />
    //   </div>
    //   <div className="bg-green-500 h-screen"></div>
    // </div>
  );
}
