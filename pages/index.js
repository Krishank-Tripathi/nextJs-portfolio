import AnimatedText from "@components/AnimatedText";
import ContainerBlock from "../components/ContainerBlock";
import Hero from "@components/Hero";

/*
To create pages to be lodaded in one container that we are going to
create here in index page, so pages that we need to load are
1. Homepage
2. About
3. Experience
4. Projects
5. Contact

all this will be under pages, aprt from this we will have components
.dir for storing our custom component & public, styles for icons & css respectively
*/
export default function Home() {
  return (
    <ContainerBlock title="Krishank Tripathi - Developer, Tech Enthusiast">
      <Hero/>
    </ContainerBlock>
  );
}
