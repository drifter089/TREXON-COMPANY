import { permanentRedirect } from "next/navigation";

/**
 * Retire the former digital-agency portfolio without leaving visitors on
 * outdated software, website, or marketing content.
 */
export default function WorkPage() {
  permanentRedirect("/industries");
}
