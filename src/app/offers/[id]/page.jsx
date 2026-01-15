import { singleData } from "@/actions/server/getData";
import OfferDetailsClient from "@/componets/offer/OfferDetailsClient";

const OfferDetailsPage = async ({ params }) => {
  const { id } = await params;
  const item = await singleData(id);

  return <OfferDetailsClient item={item} />;
};

export default OfferDetailsPage;
