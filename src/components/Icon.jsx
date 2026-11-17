import { MapTrifold, Package, Buildings, Scissors, Check, ArrowUpRight, ArrowLeft, ArrowRight, List, X, EnvelopeSimple } from "@phosphor-icons/react";

const icons = { map: MapTrifold, box: Package, building: Buildings, scissors: Scissors, check: Check, arrow: ArrowUpRight, left: ArrowLeft, right: ArrowRight, menu: List, close: X, email: EnvelopeSimple };

export default function Icon({ name, className = "h-5 w-5" }) {
  const Component = icons[name];
  return Component ? <Component className={className} weight="regular" aria-hidden="true" /> : null;
}
