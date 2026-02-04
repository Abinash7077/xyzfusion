import Image from "next/image";
import Header from "./component/header/header";
import Hero from "./component/header/hero";
import Features from "./component/features";
import Quality from "./component/quality";
import CTA from "./component/cta";
import Footer from "./component/footer";
import EnterpriseCapabilities from "./component/enterPriseCapabilities";
import ImplementationComparison from "./component/implementationCompairision";
import ScalesWithBusinessLight from "./component/scalewithbusinesslight";
import Pricing from "./component/pricing";
import Testimonials from "./component/testimonials";
import BusinessScale from "./component/businessScale";
export default function Home() {
  return (
 <>
 <Header/>
 <Hero/>
 <Features/>
 <Quality/>
<EnterpriseCapabilities/>
<ImplementationComparison/>
<ScalesWithBusinessLight/>
<Pricing/>
<Testimonials/>
<BusinessScale/>
 <CTA/>
 <Footer/>
 </>
  );
}
