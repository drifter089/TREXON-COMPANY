import { permanentRedirect } from "next/navigation";

/**
 * Legacy agency case-study links should lead to relevant resin applications,
 * rather than continue to expose the former digital-studio positioning.
 */
export default function WorkProjectPage() {
  permanentRedirect("/industries");
}
