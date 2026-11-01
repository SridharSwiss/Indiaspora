import CityGallery from "@/components/city/CityGallery";
import CityTop10 from "@/components/city/CityTop10";
export default function T() {
  return (<div style={{ maxWidth: 1120, margin: "0 auto", padding: "0 24px 80px" }}><CityGallery slug="basel" name="Basel" /><CityTop10 slug="basel" name="Basel" /></div>);
}
