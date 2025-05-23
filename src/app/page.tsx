//@refresh
import HomeMain from "@/components/home/HomeMain";
import Wrapper from "@/layout/DefaultWrapper";
import { Metadata } from "next";
import OnlineCourse from "./online-course/page";

export const metadata: Metadata = {
  title: "Home - Education & Online Courses React NextJs Template",
};

const Home = () => {
  return (
    <>
        {/* <Wrapper> */}
          <main className="main-area">
            {/* <HomeMain /> */}
            <OnlineCourse />
          </main>
        {/* </Wrapper> */}
    </>
  );
}

export default Home